import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {




  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-accent">Me</span>
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  I'm a passionate web developer with over 5 years of experience
                  creating modern web applications. My journey in web
                  development started when I was in college, where I built my
                  first website for a local business.
                </p>
                <p>
                  Since then, I've worked with various startups and established
                  companies, helping them build robust and scalable web
                  applications. I specialize in JavaScript, React, Node.js, and
                  have a strong focus on responsive design and user experience.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading tech
                  blogs, or experimenting with new web technologies.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Education
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      Bachelor's in Computer Science
                    </h3>
                    <p className="text-gray-400 mb-2">
                      Stanford University • 2015-2019
                    </p>
                    <p className="text-gray-400">
                      Specialized in Web Technologies and Human-Computer
                      Interaction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-1">
                      Senior Web Developer
                    </h3>
                    <p className="text-gray-400 mb-2">
                      TechCorp Inc. • 2021-Present
                    </p>
                    <p className="text-gray-400">
                      Lead developer for the company's flagship SaaS product.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">
                      Web Developer
                    </h3>
                    <p className="text-gray-400 mb-2">
                      Digital Solutions • 2019-2021
                    </p>
                    <p className="text-gray-400">
                      Developed and maintained client websites and web
                      applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
