// src/app/blogs/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BlogLayout from '@/app/components/bloglayout';

interface Post {
  title: string;
  date: string;
  tags: string[];
  description: string;
  author: string;
  content: string;
}

const getPostBySlug = (slug: string): Post => {
  const filePath = path.join(process.cwd(), 'src/app/blogs/posts', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  
  return {
    ...data,
    content,
  } as Post;
};

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const post = getPostBySlug(slug);
  
  return (
    <BlogLayout>
        <MDXRemote source={post.content}/>
    </BlogLayout>
  );
};

export default BlogPostPage;
