import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost, BlogPostMetadata, BlogCategory } from './types/blog';

const contentDirectory = path.join(process.cwd(), 'content/blog');

/**
 * Get all blog posts from all categories
 */
export function getAllPosts(): BlogPostMetadata[] {
  const categories: BlogCategory[] = ['articles', 'technical', 'news'];
  const allPosts: BlogPostMetadata[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, category);

    if (!fs.existsSync(categoryPath)) {
      return;
    }

    const files = fs.readdirSync(categoryPath);

    files.forEach((filename) => {
      if (filename.endsWith('.md')) {
        const slug = filename.replace('.md', '');
        const post = getPostBySlug(slug, category);

        if (post) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { content, ...metadata } = post;
          allPosts.push(metadata);
        }
      }
    });
  });

  // Sort posts by date (newest first)
  return allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get a specific blog post by slug
 */
export function getPostBySlug(slug: string, category?: BlogCategory): BlogPost | null {
  try {
    let filePath: string;
    let postCategory: BlogCategory;

    if (category) {
      filePath = path.join(contentDirectory, category, `${slug}.md`);
      postCategory = category;
    } else {
      // Search in all categories if category not specified
      const categories: BlogCategory[] = ['articles', 'technical', 'news'];
      let found = false;

      for (const cat of categories) {
        const testPath = path.join(contentDirectory, cat, `${slug}.md`);
        if (fs.existsSync(testPath)) {
          filePath = testPath;
          postCategory = cat;
          found = true;
          break;
        }
      }

      if (!found) {
        return null;
      }
    }

    const fileContents = fs.readFileSync(filePath!, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      date: data.date,
      author: data.author,
      category: postCategory!,
      image: data.image,
      readTime: data.readTime,
      featured: data.featured || false,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogCategory): BlogPostMetadata[] {
  const categoryPath = path.join(contentDirectory, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs.readdirSync(categoryPath);
  const posts: BlogPostMetadata[] = [];

  files.forEach((filename) => {
    if (filename.endsWith('.md')) {
      const slug = filename.replace('.md', '');
      const post = getPostBySlug(slug, category);

      if (post) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { content, ...metadata } = post;
        posts.push(metadata);
      }
    }
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.featured);
}

/**
 * Get related posts based on tags
 */
export function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): BlogPostMetadata[] {
  const allPosts = getAllPosts();

  // Filter out current post and calculate relevance score
  const postsWithScore = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const commonTags = post.tags?.filter((tag) => tags.includes(tag)) || [];
      return {
        post,
        score: commonTags.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Return top posts with matching tags
  return postsWithScore.slice(0, limit).map((item) => item.post);
}

/**
 * Get latest posts excluding current post
 */
export function getLatestPosts(currentSlug?: string, limit: number = 3): BlogPostMetadata[] {
  const allPosts = getAllPosts();

  if (currentSlug) {
    return allPosts.filter((post) => post.slug !== currentSlug).slice(0, limit);
  }

  return allPosts.slice(0, limit);
}

/**
 * Get all unique slugs for static generation
 */
export function getAllSlugs(): { slug: string; category: BlogCategory }[] {
  const categories: BlogCategory[] = ['articles', 'technical', 'news'];
  const slugs: { slug: string; category: BlogCategory }[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, category);

    if (!fs.existsSync(categoryPath)) {
      return;
    }

    const files = fs.readdirSync(categoryPath);

    files.forEach((filename) => {
      if (filename.endsWith('.md')) {
        slugs.push({
          slug: filename.replace('.md', ''),
          category,
        });
      }
    });
  });

  return slugs;
}
