// app/blogs/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  author: string;
}

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'src/app/blogs/posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(/\.mdx?$/, ''),
    } as Post;
  });
};

const BlogsPage = () => {
  const posts = getPosts();

  return (
    <div className="container mx-auto p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-[var(--text)]">Blogs</h1>
      {posts.map((post) => (
        <div key={post.slug} className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--text)]">{post.title}</h2>
          <p className="text-[var(--text-muted)]">{post.date}</p>
          <div className="flex space-x-2">
            {post.tags.map(tag => <span key={tag} className="bg-[var(--surface)] px-2 py-1 rounded text-[var(--text)]">{tag}</span>)}
          </div>
          <u><p className="text-[var(--text-muted)]">Author: {post.author}</p></u>
          <br />
          <p className="text-[var(--text)]">{post.description}</p>
          <Link className="text-[var(--accent)] hover:underline" href={`/blogs/${post.slug}`}>
            Read more
          </Link>
          <hr className="mt-4 border-gray-700" />
        </div>
      ))}
      <p className="text-[var(--text-muted)]">Data migration in progress...</p>
    </div>
  );
};

export default BlogsPage;
