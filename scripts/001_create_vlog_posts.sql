-- Create vlog_posts table
CREATE TABLE IF NOT EXISTS vlog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  url TEXT,
  youtube_video_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE vlog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read posts (public access)
CREATE POLICY "Allow public to view posts" 
  ON vlog_posts 
  FOR SELECT 
  USING (true);

-- For now, allow anyone to insert posts (you can restrict this later with auth)
CREATE POLICY "Allow anyone to create posts" 
  ON vlog_posts 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to update posts (you can restrict this later)
CREATE POLICY "Allow anyone to update posts" 
  ON vlog_posts 
  FOR UPDATE 
  USING (true);

-- Allow anyone to delete posts (you can restrict this later)
CREATE POLICY "Allow anyone to delete posts" 
  ON vlog_posts 
  FOR DELETE 
  USING (true);
