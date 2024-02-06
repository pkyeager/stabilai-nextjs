/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Features() {
  const phoneImgPath = "/phone1.png";

  return (
    <div className="flex-1">
      <section className="flex items-center justify-center h-screen max-md:flex-col">
        <div className="w-1/2 p-10 flex-row">
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Personalization.</h2>
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Precision.</h2>
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Efficient.</h2>
          <p className="text-xl">
            Leveraging your biometric data, we tailor workout plans to your
            objectives. Our smart algorithms fine-tune weights, reps, and
            intensity for optimal results. You take the lead, targeting specific
            areas and addressing weaknesses. Experience precision training with
            our intuitive AI system—every lift propels you toward your fitness
            goals.
          </p>
        </div>
        <img src={phoneImgPath} alt="Phone" className="w-1/4 h-auto hover:scale-105 transition-transform duration-200 hover:shadow-lg" />
      </section>

      <section className="flex items-center justify-center h-screen flex-row-reverse bg-zinc-900">
        <div className="w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Intelligent.</h2>
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Adaptive.</h2>
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Responsive.</h2>
          <p className="text-xl">
            Our system dynamically adjusts mid-session based on your daily
            athlete score and sets feedback. Experience precision training
            tailored to your progress, pushing you closer to your goals with
            every rep.
          </p>
        </div>
        <img src={phoneImgPath} alt="Phone" className="w-1/4 h-auto hover:scale-105 transition-transform duration-200 hover:shadow-lg" />
      </section>

      <section className="flex items-center justify-center h-screen">
        <div className="w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Social.</h2>
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Community.</h2>
          <h2 className="text-4xl font-bold mb-4 hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">Support.</h2>
          <p className="text-xl">
            Join our social platform to share achievements, cheer on friends,
            and engage with a passionate community. With upcoming ranking and
            league systems, prepare for friendly competition and collective
            growth.
          </p>
        </div>
        <img src={phoneImgPath} alt="Phone" className="w-1/4 h-auto hover:scale-105 transition-transform duration-200 hover:shadow-lg" />
      </section>
    </div>
  );
}