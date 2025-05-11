import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ticker AI",
    description:
      "A full-featured online store with cart, checkout, and admin dashboard.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: "src/assets/t.jpg",
    link: "https://tickerai26.netlify.app/",
  },
  {
    id: 2,
    title: "Electrical",
    description: "ELECTRICAL SERVICE PROVIDERS",
    tags: ["React", "Animate.CSS", "Tailwind"],
    image: "src/assets/EC.png",
    link: "https://electri4455.netlify.app/",
  },
  {
    id: 3,
    title: "Creative",
    description: "Gain skills required to succeed in an entry-level IT job",
    tags: ["JavaScript","Html", "CSS"],
    image: "src/assets/CRW.png",
    link: "https://it-support10.netlify.app/#",
  },
  {
    id: 4,
    title: "University",
    description:
      "To create a personalised pathway for continuous learning and transferrable skills development.",
    tags: ["Javascript", "getwaves", "CSS"],
    image: "src/assets/U.png",
    link: "https://creativemember.netlify.app/#",
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
                className="w-full h-[250px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
                <div>
                  <a 
                  target="_blank"
                  href={project.link}
                  className="border-b"
                  >Live Link</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-block bg-accent hover:text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition shadow-lg"
          >
            View All Projects
          </Link>
        </div> */}
        <div className="text-center mt-12">
          <h1 className="inline-block bg-accent hover:text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition shadow-lg">
            More Project Coming Soon.....
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Projects;
