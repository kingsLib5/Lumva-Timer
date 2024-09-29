import React, { useEffect, useState } from "react";
import lumvaLogo from "./assets/LUMVA.png"; // Import the uploaded logo image

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate the launchDate once
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 3); // 3 days from now

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    // Initial calculation of time left
    calculateTimeLeft();

    // Set up the interval to update the countdown every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // No dependencies needed here

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-white text-white font-sans">
      {/* Logo Section */}
      <div className="flex items-center mb-8 space-x-4">
        <img src={lumvaLogo} alt="LUMVA Logo" className="w-48 h-auto" />
      </div>
      {/* Countdown Section */}
      <h2 className="text-3xl font-bold mb-6">
        Launching in:
      </h2>
      <div className="flex space-x-8 text-6xl font-extrabold text-white">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-xl">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-xl">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-xl">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-xl">Seconds</span>
        </div>
      </div>
      <div className="mt-12 w-full max-w-md text-center">
        <p className="text-lg text-gray-300">
          Get ready for the future of tech solutions with Lumva. The future is almost here.
        </p>
      </div>
      <div className="mt-12 w-full flex justify-center items-center">
        <button className="bg-white hover:bg-gray-300 text-black px-6 py-3 rounded-lg text-lg font-semibold tracking-wide transition-all">
          Stay Tuned
        </button>
      </div>
    </div>
  );
};

export default Countdown;
