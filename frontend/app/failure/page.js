"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <nav className="bg-white/90 backdrop-blur-md border border-white/20 fixed z-50 left-1/2 transform -translate-x-1/2 w-3/4 rounded-2xl shadow-2xl mt-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 px-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-rbcblue font-black text-3xl md:text-4xl flex flex-row gap-2 justify-center items-center">
                <img src="rbc.png" className="w-12" />
                <p>
                  <span className="text-rbcdarkyellow">RB</span>veal
                </p>
              </div>
            </Link>

            <div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/start">
                <Button
                  size="lg"
                  className="bg-white p-6 text-xl text-rbcblue font-black hover:bg-rbcdarkyellow hover:text-black transition-all duration-300"
                >
                  Try Again
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-6xl font-black bg-red-500 text-white p-12 shadow-2xl rounded-2xl mb-8">
            Phishing Test Failed
          </h1>
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl mb-8"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/aAPr6DUbJcM"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-xl font-bold bg-red-500 text-white p-8 shadow-2xl rounded-2xl mb-8">
            Oops! It looks like you fell for a phishing attempt. Don’t worry—
            this is part of the learning experience. Review the simulation and
            try again.
          </p>
          <Link href="/">
            <Button className="mt-8 bg-red-500 text-white font-bold text-xl p-8">
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;
