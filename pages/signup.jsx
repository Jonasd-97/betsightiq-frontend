import React, { useState } from "react";
import { useRouter } from 'next/router';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const success = await registerUser(name, email, password);
    if (success) {
      alert("Signup successful! Redirecting to login...");
      router.push("/login");
    } else {
      setErrorMessage("Signup failed. Try again.");
    }
  };

  function registerUser(name, email, password) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isValid = email && password;
        resolve(isValid);
      }, 1000);
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Create Account</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full rounded-md"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded w-full hover:bg-green-600 transition">
          Signup
        </button>
        {errorMessage && <p className="text-red-500 mt-4 text-center">{errorMessage}</p>}
      </form>
    </div>
  );
}
