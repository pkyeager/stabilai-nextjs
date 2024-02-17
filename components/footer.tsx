import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10 px-5 sm:px-8 clear-both mt-28">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-start text-center sm:text-left">
        <Link legacyBehavior href="/">
          <a className="text-2xl font-bold mb-8 self-center sm:self-start sm:text-left hover:text-purple-500">
            stabil.ai
          </a>
        </Link>

        <div className="w-full sm:w-auto mb-8">
          <h3 className="font-bold mb-2">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <Link legacyBehavior href="/legal-notice">
                <a className="hover:underline">Legal Notice</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/privacy">
                <a className="hover:underline">Privacy Policy</a>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wall of Love
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-8">
          <h3 className="font-bold mb-2">Social</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reddit
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-auto mb-8">
          <h3 className="font-bold mb-2">Download</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                App Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Google Play
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} stabil.ai. All rights reserved.</p>
      </div>
    </footer>
  );
}
