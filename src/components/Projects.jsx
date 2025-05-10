import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured online store with cart, checkout, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for organizing tasks with drag-and-drop functionality.",
    tags: ["React", "Firebase", "Tailwind"],
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website for creative professionals.",
    tags: ["React", "GSAP", "CSS"],
    image: "https://via.placeholder.com/600x400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white  rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-4 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.id}`}
                  className="text-accent font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-accent hover:text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition shadow-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
