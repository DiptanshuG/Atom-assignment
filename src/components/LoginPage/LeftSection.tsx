import React from "react";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import Button from "../Button";
import Footer from "../Footer";

const LeftSection: React.FC = () => {
  return (
    <div className="w-full md:w-1/3 bg-[#FFFFFF] h-screen p-0 md:p-10 flex flex-col justify-center items-center">
      <Logo />
      <h1 className="text-2xl text-center  my-4 text-black font-nunito font-semibold text-2xl  text-[#000000]">
        Log in
      </h1>

      <div className="w-4/5 mx-auto">
        <div className="flex justify-center space-x-6 mt-2 mb-6 w-full">
          <Button text="Google" iconSrc="/google.svg" />
          <Button text="Facebook" iconSrc="/fb.svg" />
        </div>
        <div className="text-center my-6 relative">
          <div className="absolute top-1/2 left-0 w-[43.333333%] border-b border-gray-300"></div>
          <span className="relative z-10 text-black">Or</span>
          <div className="absolute top-1/2 right-0 w-[43.333333%] border-b border-gray-300"></div>
        </div>
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
};

export default LeftSection;
