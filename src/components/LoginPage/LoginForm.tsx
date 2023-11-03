"use client";
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <div className="login-form">
      <label
        className="text-black text-base font-nunito text-md font-normal"
        htmlFor="username"
      >
        Email Address
      </label>
      <div className="relative mb-6">
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-80 h-12 border  bg-[#F7F7F8] border-none p-2 px-4 focus:border-blue-500 rounded"
        />
      </div>

      <label
        className="text-black text-base font-nunito text-md font-normal"
        htmlFor="password"
      >
        Password
      </label>
      <div className="relative mb-6">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-80 h-12 bg-[#F7F7F8] border border-none p-2 px-4 focus:border-blue-500 rounded"
        />
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-blue-500 focus:outline-none"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M19.071 4.929a12.956 12.956 0 0 1 2.828 2.828L21.586 9.9a2 2 0 0 1-2.828 2.828l-2.757-2.757a4 4 0 0 1-5.656-5.656L7.757 7.757a2 2 0 0 1-2.828-2.828L4.9 2.414a12.956 12.956 0 0 1 2.828-2.828L19.071 4.929z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M12 7v10m0-3h-2m2 0h2"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex justify-between items-center text-center mt-4">
        <div className="flex">
          <input type="checkbox" id="rememberMe" className="mr-2" />
          <label htmlFor="rememberMe" className="text-sm text-black">
            Remember Me
          </label>
        </div>
        <br />
        <a href="#" className="text-[#605BFF] font-normal text-sm">
          Reset Password?
        </a>
      </div>
      <button
        onClick={handleLogin}
        className="bg-[#605BFF] text-white py-2 px-4 rounded-full font-semibold rounded transition duration-300 mt-4 w-full"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
