import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to simplify your functional components.",
    date: "May 15, 2023",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Tailwind CSS vs. Traditional CSS",
    excerpt:
      "Comparing the utility-first approach with traditional CSS methodologies.",
    date: "April 28, 2023",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Building a REST API with Node.js",
    excerpt:
      "A step-by-step guide to creating a robust REST API using Express.",
    date: "March 10, 2023",
    readTime: "12 min read",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Latest <span className="text-accent">Blog</span> Posts
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="p-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.date} · {post.readTime}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className=" hover:underline text-white"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block border border-accent text-accent dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
