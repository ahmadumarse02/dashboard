"use client";
import { Lock, Mail } from "lucide-react";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthStore from "@/store/authStore";

function Login() {
  const { login } = useAuthStore();
  const [value, setValue] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await login(value, router);
    setLoading(false);
    setValue({ email: "", password: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-700 shadow-lg px-8 py-6 border border-gray-300 flex flex-col gap-4 w-full max-w-md rounded-md"
      >
        <h1 className="text-2xl font-semibold text-center">Sign Up</h1>

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

        {/* Login Button */}
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
          <Link href="/signup" className="text-orange-500 hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;