function BlogDetails() {
  const blogs = [
    { id: 1, title: 'React Fundamentals', author: 'John Doe' },
    { id: 2, title: 'State Management', author: 'Jane Smith' }
  ];

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h3>Blog Details</h3>
      {blogs.map(blog => (
        <div key={blog.id} style={{ margin: '10px 0' }}>
          <p><strong>{blog.title}</strong> by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
