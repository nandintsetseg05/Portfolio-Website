-- Add is_hearted column to vlog_posts table
ALTER TABLE vlog_posts ADD COLUMN IF NOT EXISTS is_hearted BOOLEAN DEFAULT false;

-- Update RLS policies to allow public read and authenticated write
ALTER TABLE vlog_posts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read posts
DROP POLICY IF EXISTS "Allow public read access" ON vlog_posts;
CREATE POLICY "Allow public read access" ON vlog_posts FOR SELECT USING (true);

-- Allow anyone to insert posts (you can restrict this later if needed)
DROP POLICY IF EXISTS "Allow public insert access" ON vlog_posts;
CREATE POLICY "Allow public insert access" ON vlog_posts FOR INSERT WITH CHECK (true);

-- Allow anyone to update posts (for hearting)
DROP POLICY IF EXISTS "Allow public update access" ON vlog_posts;
CREATE POLICY "Allow public update access" ON vlog_posts FOR UPDATE USING (true);
