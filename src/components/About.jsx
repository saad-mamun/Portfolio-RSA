const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-100 ark:bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="public/ramdas.jpg"
                alt="About Me"
                className="w-full h-full rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -inset-4 border-2 border-accent rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600  mb-6">
              I'm a passionate web developer with{" "}
              <span className="font-bold">over 2 years of experience </span>
              creating modern web applications. I specialize in{" "}
              <span className="font-bold">
                JavaScript, TypeScript, Next.JS, React, Node.js, Express.js,
                MongoDB, MySql, Shadcn UI
              </span>{" "}
              and have a strong focus on responsive design and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  <span className="text-accent">Name:</span> Liton Ali
                </h4>
                <h4 className="font-medium text-gray-800 mb-2">
                  <span className="text-accent">Email:</span>{" "}
                  mdlitonali9118@gmail.com
                </h4>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  <span className="text-accent">From:</span> Rajshahi,
                  Bangladesh
                </h4>
                <h4 className="font-medium text-gray-800 ">
                  <span className="text-accent">Freelance:</span> Available
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-accent text-white px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-900 transition-all delay-150 duration-150">
                Download CV
              </button>
              <button className="border hover:border-gray-800 border-accent text-accent  px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-150 delay-150">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
