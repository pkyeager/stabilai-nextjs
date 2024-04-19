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
            your journey hassle-free! We plan to add exercises videos and more to help you get started, But we do
              recommend you to consult with a professional or watch tutorials on how to do the exercises.
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
           This is an app, from powerlifters for powerlifters. We aim make your training more efficient and effective.
           We focused on individualized training and real-time feedback and adjustments. We wanted to create an app that
           is easy to use. We do not want to overwhelm you with too many features or charge you too much. We want to make
           powerlifting more accessible to everyone.
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
          Yes you can! On your dashboard you can see your SBD total progress over time and some other stats.

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
           We plan to add a community feature in the future. For now you can add friends and see their progress. What do you think
           about a discord server? Let us know!
          </AccordionItem>
        </Accordion>
      </div>
      <div className="justify-center items-center mt-4 flex flex-col sm:flex-col space-y-4 sm:space-y-0 sm:space-x-5">
        <h2 className="text-4xl text-center hover:text-purple-500 transition-colors duration-200 hover:shadow-lg mt-4 mb-4">
          Ready to get started?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-4 sm:space-y-0 sm:space-x-5 z-10">
          <a
            href="https://apps.apple.com/app/stabil-ai/id6496847994"
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
            {/*<img*/}
            {/*  style={{ width: "230px" }}*/}
            {/*  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"*/}
            {/*  alt="Get it on Google Play"*/}
            {/*/>*/}
          </a>
        </div>
      </div>
    </div>
  );
}
