// Nutrizaa Homepage - Final Version with Plain HTML Inputs and Buttons

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", goal: "", phone: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    alert("Form submitted! Our team will reach out on WhatsApp.");
    setFormData({ name: "", goal: "", phone: "" });
  };

  return (
    <div className="font-sans text-gray-800">
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 flex justify-between items-center px-6 py-3">
        <div className="text-xl font-bold text-green-700">Nutrizaa</div>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#meals" className="hover:text-green-600">Meals</a>
          <a href="#visuals" className="hover:text-green-600">What You Get</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
          <Link href="/calculate">
            <span className="hover:text-green-600">Nutrition Calculator</span>
          </Link>
        </nav>
        <a href="#order" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm">Order Now</a>
      </header>

      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-amber-50 to-white pt-28 pb-12 text-center">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-5xl font-bold text-green-800 mb-4">
          Healthy Meals. Hassle-Free.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg max-w-lg">
          Nutrizaa delivers macro-tracked meals to match your fitness goals — from weight loss to muscle gain.
        </motion.p>
        <img src="/images/hero-meal.jpg" alt="Hero Meal" className="w-80 my-6 rounded-xl shadow-md" />
        <Link href="/calculate">
          <span className="hover:text-green-600">Nutrition Calculator</span>
        </Link>
      </section>
    </div>
  );
}
