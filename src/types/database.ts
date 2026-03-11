export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          id: string;
          name: string;
          title: string;
          bio: string;
          email: string | null;
          phone: string | null;
          location: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['profile']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['profile']['Insert']>;
      };
      education: {
        Row: {
          id: string;
          institution: string;
          degree: string;
          field: string;
          start_date: string;
          end_date: string | null;
          description: string | null;
          grade: string | null;
          order_index: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['education']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['education']['Insert']>;
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string;
          duration: string | null;
          level: string | null;
          topics: string[] | null;
          thumbnail_url: string | null;
          order_index: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['courses']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['courses']['Insert']>;
      };
      skills: {
        Row: {
          id: string;
          name: string;
          category: string;
          proficiency: number;
          order_index: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['skills']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['skills']['Insert']>;
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string;
          technologies: string[] | null;
          image_url: string | null;
          project_url: string | null;
          github_url: string | null;
          order_index: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['projects']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['projects']['Insert']>;
      };
      social_links: {
        Row: {
          id: string;
          platform: string;
          url: string;
          icon: string;
          order_index: number;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['social_links']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['social_links']['Insert']>;
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profile']['Row'];
export type Education = Database['public']['Tables']['education']['Row'];
export type Course = Database['public']['Tables']['courses']['Row'];
export type Skill = Database['public']['Tables']['skills']['Row'];
export type Project = Database['public']['Tables']['projects']['Row'];
export type SocialLink = Database['public']['Tables']['social_links']['Row'];
