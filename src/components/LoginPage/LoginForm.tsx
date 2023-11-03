"use client";
import React, { useState } from "react";
import PasswordField from "../PasswordField";
import TextInput from "../TextInput";
import RememberMe from "../RememberMe";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    alert("login initialized");
  };

  return (
    <div className="login-form w-full">
      <label
        className="text-black text-base font-nunito text-md font-normal"
        htmlFor="username"
      >
        Email Address
      </label>
      <TextInput
        id="username"
        type="text"
        placeholder="example@gmail.com"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-4"
      />

      <label
        className="text-black text-base font-nunito text-md font-normal"
        htmlFor="password"
      >
        Password
      </label>
      <PasswordField
        password={password}
        showPassword={showPassword}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
      />
      <div className="flex justify-between items-center text-center mt-4 mb-2">
        <RememberMe />
        <br />
        <a href="#" className="text-[#605BFF] font-normal text-sm">
          Reset Password?
        </a>
      </div>
      <button
        onClick={handleLogin}
        className="bg-[#605BFF] text-white py-3 px-4 font-normal text-base rounded-lg transition duration-300 my-4 w-full"
      >
        Log in
      </button>
    </div>
  );
};

export default LoginForm;
