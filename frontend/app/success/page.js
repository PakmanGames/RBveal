"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Confetti from "../components/Confetti";
const VideoPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('bgreen.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Confetti />
      <main className="flex-grow flex items-center justify-center px-4 gap-8">
        <div className="w-2/3">
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ paddingBottom: "75%" }}
          >
            <iframe
              id="youtube-video-2"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/XbWK4m6JMn0?si=5NqSI0MfkXU7WPNw&autoplay=1&mute=1&rel=0&controls=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center gap-8">
          <img src="rbc.png" className="w-96" />
          <h1 className="text-4xl font-black bg-white text-green-500 p-8 shadow-2xl rounded-2xl">
            Phishing Test Passed!
          </h1>

          <p className="text-xl font-bold bg-white text-green-500 p-6 shadow-2xl rounded-2xl">
            Congratulations! You successfully identified and avoided the
            phishing attempt. Your vigilance helps protect your financial
            security. Watch this video to learn more about staying safe online.
          </p>

          <Link href="/">
            <Button className="w-full bg-white text-green-500 font-bold text-xl p-6 hover:bg-gray-100 transition-all duration-300">
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
