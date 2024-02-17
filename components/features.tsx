/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function Features() {
  const phoneImgPath = "/phone1.png";

  return (
    <div className="flex flex-col h-full">
      <section className="flex flex-col sm:flex-row items-center justify-center h-full sm:h-auto py-10 sm:py-0">
        <div className="w-full sm:w-1/2 p-10 text-center sm:text-left">
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
        <img src={phoneImgPath} alt="Phone" className="w-full sm:w-1/4 h-auto hover:scale-105 transition-transform duration-200 hover:shadow-lg order-first sm:order-none p-4" />
      </section>

      <section className="flex flex-col sm:flex-row-reverse items-center justify-center h-full sm:h-auto py-10 sm:py-0 bg-zinc-900">
        <div className="w-full sm:w-1/2 p-10 text-center sm:text-left">
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
        <img src={phoneImgPath} alt="Phone" className="w-full sm:w-1/4 h-auto hover:scale-105 transition-transform duration-200 hover:shadow-lg order-last sm:order-none p-4" />
      </section>

      <section className="flex flex-col sm:flex-row items-center justify-center h-full sm:h-auto py-10 sm:py-0">
        <div className="w-full sm:w-1/2 p-10 text-center sm:text-left">
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
        <img src={phoneImgPath} alt="Phone" className="w-full sm:w-1/4 h-auto hover:scale-105 transition-transform duration-200 hover:shadow-lg order-first sm:order-none p-4" />
      </section>
    </div>
  );
}