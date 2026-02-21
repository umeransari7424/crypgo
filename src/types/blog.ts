export type Blog = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  date: string;
  content?: string;
  metadata?: any; // matter's data can be anything, but we can refine it if we know the schema
};
