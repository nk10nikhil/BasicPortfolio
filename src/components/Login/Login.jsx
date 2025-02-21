import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="relative z-10">
      <div className="min-h-screen flex items-center justify-center bg-gray-900 mx-10 rounded-2xl">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-fit border border-gray-700">
          <div className="container bg-white rounded-[30px] shadow-lg relative overflow-hidden w-[768px] max-w-full min-h-[480px]" id="container">
            <div className="form-container sign-up absolute top-0 h-full transition-all duration-600 left-0 w-1/2 opacity-0 z-[1]">
              <form className="bg-white flex items-center justify-center flex-col px-10 h-full">
                <h1 className="text-2xl font-bold mb-4">Create Account</h1>
                <div className="social-icons my-5 flex gap-2">
                  <a href="#" className="icon border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10">
                    <i className=""></i></a>
                </div>
                <span className="text-xs">or use your email for registration</span>
                <input type="text" placeholder="Name" className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" />
                <input type="email" placeholder="Email" className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" />
                <input type="password" placeholder="Password" className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none" />
                <button className="bg-[#512da8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer">Sign Up</button>
              </form>
            </div>
            <div className="form-container sign-in absolute top-0 left-0 h-full w-1/2 z-[2] transition-all duration-600">
              <form onSubmit={handleSubmit} className="bg-white flex items-center justify-center flex-col px-10 h-full">
                <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                <div className="social-icons my-5 flex gap-2">
                  <a href="#" className="icon border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10"><i className="fa-brands fa-google-plus-g"></i></a>
                  <a href="#" className="icon border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="icon border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10"><i className="fa-brands fa-github"></i></a>
                  <a href="#" className="icon border border-gray-300 rounded-[20%] inline-flex justify-center items-center w-10 h-10"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span className="text-xs">or use your email password</span>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-100 border-none my-2 py-2.5 px-4 text-sm rounded-lg w-full outline-none"
                  required
                />
                <a href="#" className="text-gray-700 text-sm no-underline my-4">Forget Your Password?</a>
                <button type="submit" className="bg-[#512da8] text-white text-xs py-2.5 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer">Sign In</button>
              </form>
            </div>
            <div className="toggle-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-600 rounded-l-[150px] rounded-bl-[100px] z-[1000]">
              <div className="toggle bg-gradient-to-r from-[#5c6bc0] to-[#512da8] h-full text-white relative -left-full w-[200%] transform translate-x-0 transition-all duration-600">
                <div className="toggle-panel toggle-left absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 -translate-x-[200%] transition-all duration-600">
                  <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
                  <p className="text-sm leading-5 tracking-wide my-5">Enter your personal details to use all of site features</p>
                  <button className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 right-0 transition-all duration-600">
                  <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
                  <p className="text-sm leading-5 tracking-wide my-5">Register with your personal details to use all of site features</p>
                  <a href="/register">
                    <button className="bg-transparent border border-white text-white text-xs py-2.5 px-11 rounded-lg font-semibold tracking-wider uppercase mt-2.5 cursor-pointer" id="register">Sign Up</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
