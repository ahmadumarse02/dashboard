"use client";
import { Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthStore from "@/store/authStore";

// Define the shape of the form values
interface FormValues {
  username: string;
  email: string;
  password: string;
}

function Signup() {
  const [value, setValue] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { signup } = useAuthStore();

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await signup(value, router);
    setLoading(false);
    setValue({ username: "", email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-700 shadow-lg px-8 py-6 border border-gray-300 flex flex-col gap-4 w-full max-w-md rounded-md"
      >
        <h1 className="text-2xl font-semibold text-center">Sign Up</h1>

        {/* Username Field */}
        <div className="relative">
          <User className="absolute top-3 left-3 text-gray-500" width={20} height={20} />
          <input
            type="text"
            name="username"
            value={value.username}
            placeholder="Enter your username"
            className="outline-none border border-gray-300 px-3 py-2 pl-10 rounded-md w-full focus:border-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <Mail className="absolute top-3 left-3 text-gray-500" width={20} height={20} />
          <input
            type="email"
            name="email"
            value={value.email}
            placeholder="Enter your email"
            className="outline-none border border-gray-300 px-3 py-2 pl-10 rounded-md w-full focus:border-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative">
          <Lock className="absolute top-3 left-3 text-gray-500" width={20} height={20} />
          <input
            type="password"
            name="password"
            value={value.password}
            placeholder="Enter your password"
            className="outline-none border border-gray-300 px-3 py-2 pl-10 rounded-md w-full focus:border-blue-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-400 px-3 py-2 rounded-md font-semibold"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>

        {/* Additional Styling Section */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;