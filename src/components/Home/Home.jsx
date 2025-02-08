import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-10 bg-gray-900 mx-10 rounded-2xl">
      <div className="w-full max-w-6xl mx-4 sm:mx-10 rounded-2xl bg-gray-800 overflow-hidden shadow-lg">
        <div className="relative flex flex-col sm:flex-row items-center justify-between p-8 sm:p-16">
          {/* Left Side: Text Content */}
          <div className="text-center sm:text-left sm:w-1/2 z-10">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Hi, I'm <span className="text-purple-500">Nikhil Kumar</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              A passionate <span className="text-purple-500 font-semibold">Full Stack Developer</span> with expertise in building modern, scalable, and user-friendly web applications.
            </p>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center sm:justify-end z-10">
            <img
              src="https://dotnettrickscloud.blob.core.windows.net/article/full%20stack/4620240228085855.webp"
              alt="Full Stack Developer"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
}