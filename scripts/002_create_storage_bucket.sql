-- Create storage bucket for blog media (images and audio)
insert into storage.buckets (id, name, public)
values ('blog-media', 'blog-media', true)
on conflict (id) do nothing;

-- Set up storage policies for blog-media bucket
create policy "Public Access"
on storage.objects for select
using ( bucket_id = 'blog-media' );

create policy "Authenticated users can upload"
on storage.objects for insert
with check (
  bucket_id = 'blog-media' 
  and auth.role() = 'authenticated'
);

create policy "Users can update own uploads"
on storage.objects for update
using (
  bucket_id = 'blog-media' 
  and auth.role() = 'authenticated'
);

create policy "Users can delete own uploads"
on storage.objects for delete
using (
  bucket_id = 'blog-media' 
  and auth.role() = 'authenticated'
);
