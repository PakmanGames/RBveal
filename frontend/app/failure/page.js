"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Rain from "../components/Rain";
const VideoPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('bgred.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Rain />
      <main className="flex-grow flex items-center justify-center px-4 gap-8">
        <div className="w-2/3">
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ paddingBottom: "75%" }}
          >
            <iframe
              id="youtube-video"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/aAPr6DUbJcM?si=GDnCfV_KYydeBwHS&autoplay=1&mute=1&rel=0&controls=1"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="w-1/3 flex flex-col justify-center items-center gap-8">
          <img src="rbc.png" className="w-96" />
          <h1 className="text-4xl font-black bg-white text-red-500 p-8 shadow-2xl rounded-2xl">
            Phishing Test Failed
          </h1>

          <p className="text-xl font-bold bg-white text-red-500 p-6 shadow-2xl rounded-2xl">
            Oops! It looks like you fell for a phishing attempt. Don't worry—
            this is part of the learning experience. Review the simulation and
            try again.
          </p>

          <Link href="/">
            <Button className="w-full bg-white text-red-500 font-bold text-xl p-6 hover:bg-gray-100 transition-all duration-300">
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
