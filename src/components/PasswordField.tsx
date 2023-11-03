import React from "react";
import { FiEye } from "react-icons/fi";
import { AiFillEyeInvisible } from "react-icons/ai";
import TextInput from "./TextInput";

interface PasswordFieldProps {
  password: string;
  showPassword: boolean;
  setPassword: (password: string) => void;
  setShowPassword: (show: boolean) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  password,
  showPassword,
  setPassword,
  setShowPassword,
}) => {
  return (
    <div className="relative mb-6 flex items-center">
      <TextInput
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-600 hover:text-blue-500 focus:outline-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <AiFillEyeInvisible /> : <FiEye />}
      </button>
    </div>
  );
};

export default PasswordField;
