/* eslint-disable @next/next/no-img-element */
"use client";
import { title, subtitle } from "@/components/primitives";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export default function Faq() {
  return (
    <div className="h-screen justify-center  my-auto flex flex-col space-y-4 mt-16">
      <h2 className={title({ class: "mt-4 text-center" })}>
        Frequently Asked Questions
      </h2>
      <p className={subtitle({ class: "mt-2 text-center" })}>
        Here are some common questions from our community. If you have any more
        inquiries, suggestions, or feedback, we would love to hear from you!
        Feel free to reach out anytime:{" "}
        <a href="mailto:support@stabil.ai" className="gradient-text">
          support@stabil.ai
        </a>
      </p>

      <div className="mt-4 flex w-full items">
        <Accordion selectionMode="single">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Is the app free?"
          >
            Yes, our app is completely free to download and use! Enjoy all the
            features and benefits without any cost.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Is this app suitable for beginners?"
          >
            Absolutely! Our user-friendly interface and beginner-friendly
            workouts make it perfect for those new to fitness. Get started on
            your journey hassle-free!
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="What sets this app apart from other fitness apps on the market?"
          >
            We stand out with our commitment to providing a premium experience
            at no cost. Enjoy personalized plans, advanced features, and a
            supportive community—all for free!
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Can I track my progress and see how I'm improving over time?"
          >
            Of course! Our app includes comprehensive progress tracking
            features, allowing you to monitor your performance and see your
            improvements over time. Stay motivated with tangible results!
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title="Can I interact with other users or receive support from a community?"
          >
            Absolutely! Connect with other users, share experiences, and receive
            support from our vibrant community—all within our free app. It is
            fitness, friendship, and fun, all in one place!
          </AccordionItem>
        </Accordion>
      </div>
      <div className="justify-center items-center mt-4">
        <h2 className="text-4xl text-center hover:text-purple-500 transition-colors duration-200 hover:shadow-lg">
          Ready to get started?
        </h2>
        <div className="flex justify-center items-center mt-4 space-x-5 z-10">
          <a
            href="https://apps.apple.com/your-app-url"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              className="w-32 h-auto"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
            />
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
    </div>
  );
}
