import React from "react";
import LoginForm from "./LoginForm";

const LeftSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/3 bg-[#FFFFFF] h-screen p-8 flex flex-col justify-center items-center">
      <div className="mb-4">
        <img src="/logo.svg" alt="logo" className="w-92 h-92" />
      </div>

      <h1
        className="text-4xl font-semibold text-center mb-4 text-black"
        style={{ fontSize: "25px", lineHeight: "34.1px" }}
      >
        Log in
      </h1>
      <div className="flex justify-center space-x-5 mb-6">
        <a
          href="#"
          className="bg-[#F7F7F8] text-[#030229] flex text-sm items-center p-2 px-4 rounded"
        >
          <img src="/google.svg" alt="google" className="w-18 h-18 mr-2" />
          Google
        </a>
        <a
          href="#"
          className="bg-[#F7F7F8] text-[#030229] text-sm flex items-center p-2 px-4 rounded"
        >
          <img src="/fb.svg" alt="facebook" className="w-18 h-18 mr-2" />
          Facebook
        </a>
      </div>
      <hr className="bg-gray-300 my-6" />
      <LoginForm />

      <p className="text-center mt-4 text-sm text-black">
        Don't have an account yet? &nbsp;
        <a href="#" className="text-[#605BFF] text-sm">
          New Account
        </a>
      </p>
    </div>
  );
};

export default LeftSection;
