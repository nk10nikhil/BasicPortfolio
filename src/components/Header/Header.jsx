import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [GithubData, setGithubData] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/nk10nikhil")
      .then((response) => response.json())
      .then((data) => setGithubData(data));
  }, []);

  return (
    <header className="shadow sticky z-50 top-0 mx-10 mt-5 mb-4">
      <nav className="bg-gray-800 border-white px-4 lg:px-6 py-2.5 rounded-2xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img
              src={GithubData.avatar_url}
              className="mr-3 h-12 rounded-full border-2 border-purple-500"
              alt="Logo"
            />
            <span className="text-2xl font-bold text-white hover:text-purple-500 transition duration-300">
              {GithubData.name}
            </span>
          </Link>

          {/* Login/Register Buttons */}
          <div className="flex items-center lg:order-2">
            <NavLink
              to="/login"
              className="text-white bg-gray-700 hover:bg-purple-600 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Register
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
                { path: "/github", label: "Github" },
                { path: "/skills", label: "Skills" },
                { path: "/projects", label: "Projects" },
              ].map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-purple-500" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-500 lg:p-0 transition duration-300`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}