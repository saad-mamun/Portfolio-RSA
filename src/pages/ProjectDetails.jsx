import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProjectDetails = () => {


  // In a real app, you would fetch this data based on the id
  const project = {
    id: 1,
    title: "Project Information",
    description:
      "A full-featured online store with product listings, shopping cart, secure checkout, and admin dashboard for inventory management.",
    longDescription: [
      "This e-commerce platform was built with a modern tech stack to provide a seamless shopping experience. The frontend was developed with React and Redux for state management, while the backend uses Node.js with Express and MongoDB for data storage.",
      "Key features include user authentication, product search and filtering, cart functionality, payment processing with Stripe integration, and an admin dashboard for managing products, orders, and customers.",
      "The application is fully responsive and optimized for performance, with lazy loading of images and code splitting to ensure fast load times.",
    ],
    tags: ["React", "Redux", "JavaScript", "Tailwind CSS", "CSS", "HTML"],
    images: [
      "https://via.placeholder.com/800x500",
      "https://via.placeholder.com/800x500",
      "https://via.placeholder.com/800x500",
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
  };

  return (
    <div className="min-h-screen">
      <Navbar  />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-green-800  mb-4">
                {project.title}
              </h1>
              <p className="text-gray-600  text-lg">
                {project.description}
              </p>
            </div>

            <div className="mb-12">
              <div className="grid grid-cols-1 gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Project Details
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                {project.longDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent text-accent dark:text-white px-6 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
