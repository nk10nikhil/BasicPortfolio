import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";


const Skills = () => {
  // List of skills with icons and proficiency levels
  const skills = [
    { name: "HTML", icon: "🟧", proficiency: "90%" },
    { name: "CSS", icon: "🟦", proficiency: "85%" },
    { name: "JavaScript", icon: "🟨", proficiency: "80%" },
    { name: "React", icon: "⚛️", proficiency: "85%" },
    { name: "Node.js", icon: "🟢", proficiency: "75%" },
    { name: "Tailwind CSS", icon: "🎨", proficiency: "90%" },
    { name: "Python", icon: "🐍", proficiency: "70%" },
    { name: "Git", icon: "🔧", proficiency: "80%" },
  ];

// const skills = [
//     { name: "HTML", icon: <FaHtml5 className="text-2xl" />, proficiency: "90%" },
//     { name: "CSS", icon: <FaCss3 className="text-2xl" />, proficiency: "85%" },
//     { name: "JavaScript", icon: <FaJs className="text-2xl" />, proficiency: "80%" },
//     { name: "React", icon: <FaReact className="text-2xl" />, proficiency: "85%" },
//     { name: "Node.js", icon: <FaNodeJs className="text-2xl" />, proficiency: "75%" },
//     { name: "Python", icon: <FaPython className="text-2xl" />, proficiency: "70%" },
//   ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 mx-10 rounded-2xl">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: skill.proficiency }}
                ></div>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Proficiency: {skill.proficiency}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;