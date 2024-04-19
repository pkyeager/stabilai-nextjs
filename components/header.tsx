import React, { useState } from 'react';
import {Button} from "@nextui-org/react";

export default function Header() {
    const [isNavVisible, setNavVisible] = useState(false);

    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };

    const handleFeedbackButton = () => {
        window.location.href = "mailto:admin@stabil.ai?subject=Feedback to the App Stabil.ai&body=Enter your Feedback here, we are happy to hear from you!";
    };

    return (
        <header className="top-0 left-0 right-0 flex justify-between items-center p-10 bg-zinc-900">
            <h1 className="text-4xl font-extrabold text-white">
                <a href="/" className="hover:text-purple-600 transition-colors duration-200">stabil.ai</a>
            </h1>
            <div className="lg:hidden">
                <button onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                {isNavVisible && (
                    <div className={`absolute top-0 right-0 w-full h-full bg-zinc-900 flex flex-col p-6 transition-transform duration-500 ease-out-cubic z-50 ${isNavVisible ? '' : 'transform translate-x-full'}`}>
                        <button onClick={toggleNav} className="mb-4 self-end">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className="self-center">
                            <ul className="space-y-4">
                                <li><a href="#" className="text-4xl text-white">Learn More</a></li>
                                <li><a href="#" className="text-4xl text-white">App Store</a></li>
                                <li><p className="text-bold hover:font-bold" onClick={handleFeedbackButton}>Give us Feedback</p></li>
                            </ul>

                        </nav>
                    </div>
                )}
            </div>
            <div className="hidden lg:flex">
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li><a href="#" className="hover:text-purple-600 transition-colors duration-200">Learn More</a></li>
                        <li><a href="https://apps.apple.com/app/stabil-ai/id6496847994" className="hover:text-purple-600 transition-colors duration-200">App Store</a></li>
                        <Button
                            className="bg-purple-600 text-white my-auto"
                            onClick={handleFeedbackButton}>
                            <p>Give Feedback</p>
                        </Button>
                    </ul>
                </nav>
            </div>
        </header>
    );
}