"use client";

import React, { ChangeEvent, useState } from "react";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { FormError, SignUpSchema } from "@/types/signup";
import {signUpSchema}  from "@/types/signup";

export default function Home() {

  const [value, setValue] = useState<SignUpSchema>({ username: "", email: "", password: "" });
  const [error, setError] = useState<FormError>({})

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError((prev)=>({...prev, [name]:undefined}))
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    const result = signUpSchema.safeParse(value)
    if(!result.success) {
      setError(result.error.formErrors.fieldErrors)
    } else {
      setError({})
      console.log(value)
    }
  }

  return (
    <>
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
          />
          {error.username && (<span className="text-red-400 text-sm">{error.username[0]}</span>)}
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
          />
          {error.email && (<span className="text-red-400 text-sm">{error.email[0]}</span>)}
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
          />
          {error.password && (<span className="text-red-400 text-sm">{error.password[0]}</span>)}
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white hover:bg-orange-400 px-3 py-2 rounded-md font-semibold"
        >
          Sign Up
        </button>

        {/* Additional Styling Section */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
    </>
  );
}
