import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog = () => {
//   const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//     localStorage.setItem("theme", darkMode ? "light" : "dark");
//   };

  const categories = [
    "all",
    "web development",
    "javascript",
    "react",
    "design",
  ];

  const posts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "react",
    },
    {
      id: 2,
      title: "Tailwind CSS vs. Traditional CSS",
      excerpt:
        "Comparing the utility-first approach with traditional CSS methodologies and when to use each.",
      date: "April 28, 2023",
      readTime: "8 min read",
      category: "web development",
    },
    {
      id: 3,
      title: "Building a REST API with Node.js",
      excerpt:
        "A step-by-step guide to creating a robust REST API using Express and MongoDB.",
      date: "March 10, 2023",
      readTime: "12 min read",
      category: "web development",
    },
    {
      id: 4,
      title: "Modern JavaScript Features You Should Know",
      excerpt:
        "Explore the latest JavaScript features that can make your code cleaner and more efficient.",
      date: "February 22, 2023",
      readTime: "6 min read",
      category: "javascript",
    },
    {
      id: 5,
      title: "UI/UX Design Principles for Developers",
      excerpt:
        "Essential design principles that every developer should understand to create better user experiences.",
      date: "January 18, 2023",
      readTime: "7 min read",
      category: "design",
    },
    {
      id: 6,
      title: "Optimizing React Performance",
      excerpt:
        "Techniques and best practices to improve the performance of your React applications.",
      date: "December 5, 2022",
      readTime: "9 min read",
      category: "react",
    },
  ];

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              My <span className="text-accent">Blog</span>
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full capitalize ${
                  activeCategory === category
                    ? "bg-accent text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="p-6">
                  <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-3 capitalize">
                    {post.category}
                  </span>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {post.date} · {post.readTime}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-accent font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
