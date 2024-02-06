import React from "react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-10 px-5 clear-both mt-28">
            <div className="flex flex-wrap justify-between">
                <h2 className="text-2xl font-bold mb-8">stabil.ai</h2>

                <div className="w-full sm:w-auto mb-8">
                    <h3 className="font-bold mb-2">Resources</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Terms of Service
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Privacy
                            </a>
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