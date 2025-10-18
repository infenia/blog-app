export type BlogCategory = 'articles' | 'technical' | 'news';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: BlogCategory;
  image: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];
}

export interface BlogPostMetadata {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: BlogCategory;
  image: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];
}
