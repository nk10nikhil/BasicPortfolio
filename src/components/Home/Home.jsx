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
{/* 
        <>
          <section class="bg-white py-16 px-8 flex items-center gap-10 mt-10">
            <div class="skills__desc pr-20 w-1/2">
              <h3 class="text-2xl font-normal mb-2">Experienced Across Multiple Projects and Technologies</h3>
              <p class="text-gray-500 text-sm mb-8">Bringing creativity and technical proficiency to building responsive web applications and enhancing user experiences.</p>
              <div class="skills__actions flex gap-2">
                <button class="btn border-2 border-gray-800 bg-gray-800 text-white cursor-pointer rounded-lg transition-all duration-500 ease hover:text-gray-800 hover:bg-white hover:border-gray-300 py-1.5 px-5 text-sm font-medium">Work With Me</button>
                <button class="btn btn--secondary border-2 border-gray-300 bg-white text-gray-800 cursor-pointer rounded-lg transition-all duration-500 ease hover:text-white hover:bg-gray-800 hover:border-gray-800 py-1.5 px-5 text-sm font-medium">Send Email</button>
              </div>
            </div>
            <div class="skills__stats grid grid-cols-4 gap-4 w-1/2">
              <i class="ri-codepen-line text-6xl flex items-center justify-center py-5"></i>
              <div class="skill__info bg-gray-300 flex flex-col items-center justify-center p-5">
                <h5 class="text-center text-2xl font-semibold mb-2">40+</h5>
                <p class="text-center text-sm text-gray-500 font-medium">JavaScript Projects</p>
              </div>
              <i class="ri-reactjs-line text-6xl flex items-center justify-center py-5"></i>
              <div class="skill__info bg-gray-300 flex flex-col items-center justify-center p-5">
                <h5 class="text-center text-2xl font-semibold mb-2">12+</h5>
                <p class="text-center text-sm text-gray-500 font-medium">Remote Projects</p>
              </div>
              <div class="skill__info bg-gray-300 flex flex-col items-center justify-center p-5">
                <h5 class="text-center text-2xl font-semibold mb-2">50+</h5>
                <p class="text-center text-sm text-gray-500 font-medium">Codepen Projects</p>
              </div>
              <i class="ri-rocket-line text-6xl flex items-center justify-center py-5"></i>
              <div class="skill__info bg-gray-300 flex flex-col items-center justify-center p-5">
                <h5 class="text-center text-2xl font-semibold mb-2">20+</h5>
                <p class="text-center text-sm text-gray-500 font-medium">React Projects</p>
              </div>
              <i class="ri-remote-control-line text-6xl flex items-center justify-center py-5"></i>
            </div>
          </section>

        </> */}

      </div>
    </div>
  );
}