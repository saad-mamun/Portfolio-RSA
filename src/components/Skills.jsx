const skills = [
  { name: "HTML", level: 98 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 50 },
  { name: "Express", level: 45 },
  { name: "MongoDB", level: 50 },
  { name: "Next.JS", level: 50 },
  { name: "Git", level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-800  mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 ">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-accent h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800  mb-6">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: "Communication", icon: "💬" },
                { name: "Team Work", icon: "👥" },
                { name: "Problem Solving", icon: "🧩" },
                { name: "Creativity", icon: "🎨" },
                { name: "Time Management", icon: "⏱️" },
                { name: "Adaptability", icon: "🔄" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h4 className="font-medium text-gray-800 ">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
