import React from "react";

const Projects = () => {
  // List of projects with details
  const projects = [
    {
      title: "Bg-Changer",
      description: "An interactive application that allows users to change the background color dynamically using React.",
      demoLink: "/bgchanger",
    },
    {
      title: "Password Generator",
      description: "A robust password generator application built with React, providing secure and random passwords.",
      demoLink: "/passwordGenerator",
    },
    {
      title: "Currency Converter",
      description: "A currency converter application that allows users to convert between different currencies in current changes.",
      demoLink: "/currencyConverter",
    },
    {
      title: "Todo App",
      description: "A simple todo application that allows users to manage their tasks with add, update, and delete functionalities.",
      demoLink: "/todo",
    },
    {
      title: "Theme Switcher",
      description: "A theme switcher application that allows users to toggle between light and dark themes in the user interface.",
      demoLink: "/themeSwitcher",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 mx-10 rounded-2xl">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-6xl border border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              /> */}
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.demoLink}
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="flex-1 text-center bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Open
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;