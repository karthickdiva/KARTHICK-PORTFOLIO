/*
  # Portfolio Website Schema

  1. New Tables
    - profile: Personal information and bio
    - education: Educational background
    - courses: Courses offered or completed
    - skills: Technical and soft skills
    - projects: Portfolio projects
    - social_links: Social media and contact links

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio website is public)
*/

CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  bio text NOT NULL,
  email text,
  phone text,
  location text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS education (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  institution text NOT NULL,
  degree text NOT NULL,
  field text NOT NULL,
  start_date text NOT NULL,
  end_date text,
  description text,
  grade text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  duration text,
  level text,
  topics text[],
  thumbnail_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  proficiency integer DEFAULT 50,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  technologies text[],
  image_url text,
  project_url text,
  github_url text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  icon text NOT NULL,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE education ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view profile"
  ON profile FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view education"
  ON education FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view courses"
  ON courses FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view skills"
  ON skills FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view social links"
  ON social_links FOR SELECT
  TO anon
  USING (true);