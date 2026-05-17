-- Khaja Air Travels — Supabase schema
-- Tables: posts (CMS-managed blog), leads (contact form), subscribers (newsletter)
-- Enable Row Level Security and grant only the operations the site needs.

create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  excerpt     text not null,
  cover_url   text not null,
  cover_alt   text,
  category    text not null,
  author_name text not null,
  author_role text,
  content     text not null,
  tags        text[] default '{}',
  published   boolean default false,
  published_at timestamptz default now(),
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

create index if not exists posts_published_idx on public.posts (published, published_at desc);
create index if not exists posts_category_idx on public.posts (category);

create table if not exists public.leads (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  phone      text not null,
  service    text not null,
  message    text not null,
  source     text default 'website',
  status     text default 'new',
  created_at timestamptz default now()
);
create index if not exists leads_created_idx on public.leads (created_at desc);

create table if not exists public.subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text unique not null,
  consent    boolean default true,
  created_at timestamptz default now()
);

alter table public.posts        enable row level security;
alter table public.leads        enable row level security;
alter table public.subscribers  enable row level security;

create policy "Public read published posts"
  on public.posts for select
  using (published = true);

create policy "Anyone can subscribe"
  on public.subscribers for insert
  with check (true);

create policy "Anyone can submit a lead"
  on public.leads for insert
  with check (true);

-- Service role bypasses RLS automatically; this is what /api/contact uses.
