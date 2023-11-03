import React from "react";

const RememberMe: React.FC = () => {
  return (
    <div className="flex">
      <input type="checkbox" id="rememberMe" className="mr-2" />
      <label htmlFor="rememberMe" className="text-sm text-black">
        Remember Me
      </label>
    </div>
  );
};

export default RememberMe;
