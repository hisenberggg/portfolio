
const Blogs = () => {
  return (
    <div>
      <h1>Blogs Page</h1>
    </div>
  )
}

export default Blogs;



{/* <div className="container mx-auto px-4 py-8">
  <h1 className="text-3xl font-bold mb-8">Blogs</h1>
  {blogPosts.map((post) => (
    <div key={post.slug} className="mb-8">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-gray-200">{new Date(post.date).toLocaleDateString()}</p>
      <div className="flex flex-wrap mb-2">
        {post.tags.map((tag: string) => (
          <span key={tag} className="bg-gray-400 text-gray-700 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.9 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p>{post.description}</p>
      <p>By: {post.author}</p>
      <Link href={`/blogs/${post.slug}`} className="text-blue-500">
        Read more
      </Link>
      <hr className="my-4" />
    </div>
  ))}
</div> */}
