import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-accent">Liton Ali</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600  mb-6">
            Full-Stack Web Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-accent  px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white shadow-lg transition-all duration-150 delay-150"
            >
              Contact Me
            </Link>
            <Link
              to="/about"
              className="bg-accent  px-6 py-3 rounded-lg  hover:bg-gray-800 hover:text-white shadow-lg transition-all duration-150 delay-150 "
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-accent rounded-full opacity-10"></div>
            <div className="absolute inset-4 border-4 border-accent rounded-full opacity-30"></div>
            <div className="absolute inset-8 border-4 border-accent rounded-full opacity-20"></div>
            <img
              src="https://via.placeholder.com/400x400"
              alt="Developer"
              className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
