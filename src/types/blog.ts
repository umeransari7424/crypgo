export type Blog = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  date: string;
  content?: string;
  metadata?: Record<string, string | number | boolean | null>;
};
