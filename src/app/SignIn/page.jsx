"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Signin() {
  const [value, setValue] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/signin", {
        email: value.email,
        password: value.password,
      });

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      alert("please enter the correct email or password");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow-md rounded-md"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={value.email}
          onChange={handleChange}
          className="p-2 border w-full outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={value.password}
          onChange={handleChange}
          className="p-2 border w-full outline-none"
          required
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 w-full"
        >
          Sign In
        </button>
        <p className="mt-4 text-center text-gray-800">
          Don't have an account?
          <Link href="/signup" className="text-orange-500">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signin;
