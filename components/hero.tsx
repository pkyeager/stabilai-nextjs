/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  const heroImgPath = "/heroImg.jpg";
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-0 relative">
      <img
        src={heroImgPath}
        alt="Hero"
        className="absolute w-screen h-screen object-cover filter grayscale opacity-50"
      />
      <h1 className="text-6xl sm:text-9xl font-bold text-white z-10 hover:text-purple-500 transition-colors duration-200">
        Your Strength.
      </h1>
      <h1 className="text-6xl sm:text-9xl font-bold text-white z-10 hover:text-purple-500 transition-colors duration-200">
        Our Mission.
      </h1>
      <h2 className="mt-10 text-xl sm:text-3xl font-bold text-white z-10 hover:text-purple-500 transition-colors duration-200 w-full sm:w-1/2 mb-10 sm:mb-0">
        Your personal strength coach in your pocket. With AI-driven workouts and
        real-time feedback, unleash your strength potential like never before.
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-4 sm:space-x-5 z-10 space-y-5 sm:space-y-0">
        <a
          href="https://apps.apple.com/your-app-url"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform duration-200"
        >
          <img
            style={{ width: "200px", height: "" }}
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
            style={{ width: "230px", height: "100px" }}
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
          />
        </a>
      </div>
    </div>
  );
}
