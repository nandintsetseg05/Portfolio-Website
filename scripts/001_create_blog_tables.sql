-- Create blog_posts table for storing blog/vlog content
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  excerpt text,
  image_url text,
  audio_url text,
  author_id uuid references auth.users(id) on delete cascade not null,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.blog_posts enable row level security;

-- Policy: Anyone can view published posts
create policy "blog_posts_select_published"
  on public.blog_posts for select
  using (published = true or auth.uid() = author_id);

-- Policy: Only authenticated users can insert their own posts
create policy "blog_posts_insert_own"
  on public.blog_posts for insert
  with check (auth.uid() = author_id);

-- Policy: Only post authors can update their own posts
create policy "blog_posts_update_own"
  on public.blog_posts for update
  using (auth.uid() = author_id);

-- Policy: Only post authors can delete their own posts
create policy "blog_posts_delete_own"
  on public.blog_posts for delete
  using (auth.uid() = author_id);

-- Create index for faster queries
create index if not exists blog_posts_author_id_idx on public.blog_posts(author_id);
create index if not exists blog_posts_created_at_idx on public.blog_posts(created_at desc);
create index if not exists blog_posts_published_idx on public.blog_posts(published);

-- Create function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Create trigger to automatically update updated_at
drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row
  execute function public.handle_updated_at();
