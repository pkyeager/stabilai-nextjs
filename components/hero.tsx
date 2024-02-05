/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

export default function Hero() {
  const heroImgPath = "/heroImg.jpg"; // Adjust the path as needed

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-0 relative">
      <img src={heroImgPath} alt="Hero" className="absolute w-screen h-screen object-cover filter grayscale opacity-50" />
      <h1 className="text-6xl sm:text-9xl font-bold text-white z-10 hover:text-purple-500 transition-colors duration-200">
        Your Strength.
      </h1>
      <h1 className="text-6xl sm:text-9xl font-bold text-white z-10 hover:text-purple-500 transition-colors duration-200">
        Our Mission.
      </h1>
      <h2 className="mt-10 text-xl sm:text-3xl font-bold text-white z-10 hover:text-purple-500 transition-colors duration-200">
        Your personal strength coach in your pocket. With AI-driven workouts and
        real-time feedback, unleash your strength potential like never before.
      </h2>
      <div className="flex justify-center items-center mt-4 space-x-5 z-10">
        <a
          href="https://apps.apple.com/your-app-url"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200"
        >
          <img className="w-32 h-auto" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=your-app-id"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200"
        >
          <img
            className="w-32 h-auto"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Get it on Google Play"
          />
        </a>
      </div>
    </div>
  );
}