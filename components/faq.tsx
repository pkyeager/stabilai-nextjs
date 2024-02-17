/* eslint-disable @next/next/no-img-element */
"use client";
import { title, subtitle } from "@/components/primitives";
import { Accordion, AccordionItem } from "@nextui-org/react";
import React from "react";

export default function Faq() {
  return (
    <div className="h-auto justify-top my-auto flex flex-col space-y-4 mt-4 px-4 sm:px-8">
      <h2
        className={title({ class: "mt-4 text-center hover:text-purple-500" })}
      >
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

      <div className="mt-4 flex w-full">
        <Accordion selectionMode="multiple">
          <AccordionItem
            className=""
            key="1"
            aria-label="Accordion 1"
            title={<span className="font-bold">Is the app free?</span>}
          >
            Yes, our app is completely free to download and use! Enjoy all the
            features and benefits without any cost.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <span className="font-bold">
                Is this app suitable for beginners?
              </span>
            }
          >
            Absolutely! Our user-friendly interface and beginner-friendly
            workouts make it perfect for those new to fitness. Get started on
            your journey hassle-free!
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title={
              <span className="font-bold">
                What sets this app apart from other fitness apps on the market?
              </span>
            }
          >
            We stand out with our commitment to providing a premium experience
            at no cost. Enjoy personalized plans, advanced features, and a
            supportive community—all for free!
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title={
              <span className="font-bold">
                Can I track my progress and see how I am improving over time?
              </span>
            }
          >
            Of course! Our app includes comprehensive progress tracking
            features, allowing you to monitor your performance and see your
            improvements over time. Stay motivated with tangible results!
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            title={
              <span className="font-bold">
                Can I interact with other users or receive support from a
                community?
              </span>
            }
          >
            Absolutely! Connect with other users, share experiences, and receive
            support from our vibrant community—all within our free app. It is
            fitness, friendship, and fun, all in one place!
          </AccordionItem>
        </Accordion>
      </div>
      <div className="justify-center items-center mt-4 flex flex-col sm:flex-col space-y-4 sm:space-y-0 sm:space-x-5">
        <h2 className="text-4xl text-center hover:text-purple-500 transition-colors duration-200 hover:shadow-lg mt-4">
          Ready to get started?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-5 z-10">
          <a
            href="https://apps.apple.com/your-app-url"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-200"
          >
            <img
              style={{ width: "200px" }}
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
              style={{ width: "230px" }}
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
