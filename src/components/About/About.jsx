import React from "react";

export default function About() {
  return (
    <div className="py-10 bg-gray-900 mx-10 rounded-2xl">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          {/* Left Side: Image */}
          <div className="md:w-5/12 lg:w-5/12 flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="React Logo"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72"
            />
          </div>

          {/* Right Side: Content */}
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-100 font-bold md:text-4xl lg:text-5xl">
              About Me
            </h2>
            <p className="mt-6 text-gray-200">
              Hi, I'm <span className="text-purple-500 font-semibold">Nikhil Kumar</span>, a passionate developer specializing in building modern web applications using React. I love turning ideas into reality through clean, efficient, and scalable code.
            </p>
            <p className="mt-4 text-gray-200">
              I am currently learning and mastering <span className="text-purple-500 font-semibold">React</span> and <span className="text-purple-500 font-semibold">React Router</span> to create dynamic and interactive user interfaces. My journey involves understanding core concepts like components, hooks, state management, and routing to deliver seamless user experiences.
            </p>
            <p className="mt-4 text-gray-200">
              In addition to React, I am also exploring <span className="text-purple-500 font-semibold">Tailwind CSS</span>, a utility-first CSS framework that allows me to build custom designs quickly and efficiently. Tailwind helps me focus on functionality while maintaining a visually appealing design.
            </p>
            <p className="mt-4 text-gray-200">
              When I'm not coding, I enjoy contributing to open-source projects, learning new technologies, and sharing my knowledge with the developer community. My goal is to continuously grow as a developer and create impactful solutions.
            </p>

            {/* Skills Section */}
            <div className="mt-8">
              <h3 className="text-xl text-gray-100 font-bold mb-4">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm">
                  React
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm">
                  HTML & CSS
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Git & GitHub
                </span>
                <span className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm">
                  Responsive Design
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}