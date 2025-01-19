"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Shield,
  Play,
  Brain,
  FileText,
  ChevronRight,
  Globe,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  PlayIcon,
  LightBulbIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

export default function Home() {

  const StepLabel = ({ number }) => (
    <div className=" animate-pulse relative w-1/3 top-8 right-4 bg-red-600 text-2xl text-center text-white font-bold px-4 py-2 rounded-lg z-10 shadow-2xl">Step {number}
    </div>
  );


  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border border-white/20 fixed z-50 left-1/2 transform -translate-x-1/2 w-3/4 rounded-2xl shadow-2xl mt-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 px-4">
            <Link href="/" className="flex items-center gap-2">
              <motion.span
                className="text-rbcblue font-black text-3xl md:text-4xl flex flex-row gap-2 justify-center items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src="rbc.png" className="w-12" />
                <p>
                  <span className="text-rbcdarkyellow">RB</span>veal
                </p>{" "}
              </motion.span>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/start">
                <Button
                  size="lg"
                  className="bg-white p-6 text-xl text-rbcblue font-black hover:bg-rbcdarkyellow hover:text-black transition-all duration-300"
                >
                  Get started
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>

      <div
        style={{
          backgroundImage: "url('/bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 80%",
        }}
        className=" min-h-screen flex justify-center items-center pt-16"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="bg-white p-12 rounded-2xl shadow-2xl">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="">
                    <motion.div
                      className="text-rbcblue font-black text-6xl flex flex-row gap-2 items-center"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <img src="rbc.png" className="w-44" />
                      <p>
                        <span className="text-rbcdarkyellow">RB</span>veal
                      </p>{" "}
                    </motion.div>
                  </div>

                  <div className="flex flex-col space-6">
                    <h1 className="flex items-center gap-4 bg-red-100 text-red-600 px-4 py-2 rounded text-2xl">
                      <AlertTriangle className="h-6 w-6" />
                      Be Cyber Aware
                    </h1>
                    <span className="my-4 font-light text-xl">
                      We safeguard our health. We safeguard our investments.{" "}
                      <br /> It is critical that we all become more Cyber Aware
                      and safeguard our online activities.
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/start">
                      <Button
                        size="lg"
                        className="bg-red-600 p-12 text-4xl w-full text-white font-black hover:bg-green-500 transition-all duration-300"
                      >
                        Start Your Simulation
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              <div className="flex flex-row gap-6">
                <div className="bg-white p-8 w-1/2 rounded-2xl shadow-2xl">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h1 className="font-black text-xl">
                      What is <span className="text-rbcdarkyellow">RB</span>
                      <span className="text-rbcblue">veal</span>?
                    </h1>
                    <p>
                      RBveal is an RBC phishing simulator that sends a real
                      email about a login attempt, leading students to the RBC
                      website where an AI scam call tries to trick them into
                      transferring money.
                    </p>
                  </motion.div>
                </div>

                <div className="bg-white p-8 w-1/2 rounded-2xl shadow-2xl">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h1 className="font-black text-xl">
                      Why use <span className="text-rbcdarkyellow">RB</span>
                      <span className="text-rbcblue">veal</span>?
                    </h1>
                    <p>
                      RBveal helps students learn to spot phishing attempts by
                      simulating a real-world scenario. It trains them to
                      recognize and handle scams, protecting their financial
                      information in the digital world.
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="w-full bg-rbcdarkgray rounded-2xl shadow-2xl py-4 px-8 text-white text-center font-semibold">
                Developed by Jacob Fu, Yarema Yaremchuk, Andy Pak, Aiden Suh
              </div>
            </div>

            <div className="flex flex-col w-full">
              <motion.div
                className=""
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <StepLabel number={1} />
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between border-b pb-2">
                    <div>
                      <div className="font-bold w-max rounded text-sm">
                        RBC Royal Bank
                      </div>
                      <p className="text-sm text-gray-600">
                        From: security@rbc-verify.net
                      </p>
                      <p className="text-xs text-gray-600">
                        10:29 PM (1 hour ago)
                      </p>
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                      Urgent
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-800 font-semibold">
                      URGENT: Unusual Login Attempt Detected on Your Account
                    </p>
                    <div className="flex flex-col gap-6 items-center">
                      <img src="rbc_email.png" className="w-24" />
                      <div className="text-xs text-gray-600 space-y-2">
                        <p>Dear valued customer,</p>
                        <p>
                          We have detected an unauthorized login attempt on your
                          account. For your security, we have temporarily
                          disabled your account to prevent any further
                          suspicious activity.
                        </p>
                        <p>
                          To restore access to your account and verify your
                          identity, we require immediate action. Please click
                          the button below and verify your identity within{" "}
                          <strong>24 hours</strong> to avoid getting permanently
                          suspended.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <p className="inline-block bg-blue-600 text-white py-2 px-4 rounded text-lg font-semibold">
                      Verify My Account Now
                    </p>
                  </div>
                  <div className="border-t pt-4 text-center text-xs text-gray-500">
                    <p>&copy; 2025 RBC Financial Group. All rights reserved.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <StepLabel number={2} />
                {/* Safari Browser Chrome */}
                <div className="bg-[#F5F5F5] rounded-t-lg border border-gray-200">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-2 p-3 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                    </div>

                    {/* URL Bar */}
                    <div className="flex-1 mx-4">
                      <div className="bg-white rounded-md flex items-center px-3 py-1">
                        <div className="flex items-center gap-2 w-full">
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                            />
                          </svg>
                          <span className="text-sm text-gray-600">
                            secure-rbc-online.net/login
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabs Bar */}
                  <div className="flex items-center px-3 py-2 gap-4 bg-[#E8E8E8]">
                    <div className="bg-white rounded-t px-4 py-1 text-sm border-t border-x">
                      RBC Online Banking
                    </div>
                    <div className="text-sm text-gray-500">+</div>
                  </div>
                </div>

                {/* Screenshot Container */}
                <div className="bg-white border-x border-b rounded-b-lg overflow-hidden">
                  <img
                    src="website.png"
                    alt="RBC Website Screenshot"
                    className="w-full object-cover transform scale-150 translate-y-[20%] transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
            <div className="container mx-auto px-4 py-8">
              <StepLabel number={3} />

              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h1 className="font-black text-2xl text-center py-4">
                  AI Scam Call
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center items-center"
                >
                  {/* iPhone Frame */}
                  <div className="relative bg-black rounded-[55px] p-3 shadow-xl w-[320px]">
                    {/* Dynamic Island */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[30%] h-[34px] bg-black rounded-3xl z-20 flex items-center justify-center">
                      <div className="bg-black w-[95%] h-[30px] rounded-[20px] flex items-center justify-between px-3">
                        <div className="w-3 h-3 rounded-full bg-[#262626] border border-gray-500"></div>
                      </div>
                    </div>

                    {/* Volume Buttons */}
                    <div className="absolute left-[-4px] top-[200px] space-y-6">
                      <div className="w-[6px] h-16 bg-[#1a1a1a] rounded-l-full"></div>
                      <div className="w-[6px] h-16 bg-[#1a1a1a] rounded-l-full"></div>
                    </div>

                    {/* Power Button */}
                    <div className="absolute right-[-6px] top-[120px] w-[12px] h-24 bg-[#1a1a1a] rounded-r-full"></div>

                    {/* Screen */}
                    <div className="relative bg-[#262626] rounded-[48px] overflow-hidden aspect-[9/19.5]">
                      {/* Status Bar */}
                      <div className="h-12 flex justify-between items-center px-6 pt-1">
                        <span className="text-[14px] text-white font-medium">
                          9:41
                        </span>
                        <div className="flex gap-2">
                          <span className="text-[14px] text-white">5G</span>
                          <div className="w-6 h-3 bg-white rounded-sm mt-1"></div>
                        </div>
                      </div>

                      {/* Call Screen */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                        <div className="text-center space-y-6">
                          {/* RBC Logo Circle */}
                        
                            <img src="hacker.png" className="w-36 h-36 rounded-full mx-auto" />

                          {/* Call Info */}
                          <div className="space-y-2">
                            <h3 className="text-white text-3xl font-semibold">
                              RBC Royal Bank
                            </h3>
                            <p className="text-gray-400 text-lg">
                              incoming call...
                            </p>
                          </div>

                          {/* Call Buttons */}
                          <div className="flex justify-center gap-12 mt-12">
                            {/* Decline Button */}
                            <div className="flex flex-col items-center">
                              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-4xl">×</span>
                              </div>
                              <span className="text-gray-400 text-lg mt-3">
                                Decline
                              </span>
                            </div>

                            {/* Accept Button */}
                            <div className="flex flex-col items-center">
                              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-4xl">✓</span>
                              </div>
                              <span className="text-gray-400 text-lg mt-3">
                                Accept
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="fixed bottom-0 w-full py-2 text-center text-rbcdarkgray">UofT Hacks Developed and designed by Jacob Fu, Andy Pak, Yarema Yaremchuk, Aiden Suh</footer> */}
    </div>
  );
}
