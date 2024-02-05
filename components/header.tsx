import React from 'react';

export default function Header() {
    return (
        <header className="top-0 left-0 right-0 flex justify-between items-center p-5 bg-gray-900">
            <h1 className="text-4xl font-extrabold text-white">
                <a href="/" className="hover:text-purple-600 transition-colors duration-200">stabil.ai</a>
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="/learn-more" className="hover:text-purple-600 transition-colors duration-200">Learn More</a></li>
                    <li><a href="/app-store" className="hover:text-purple-600 transition-colors duration-200">App Store</a></li>
                    <li><a href="/google-play" className="hover:text-purple-600 transition-colors duration-200">Google Play</a></li>
                </ul>
            </nav>
        </header>
    );
}