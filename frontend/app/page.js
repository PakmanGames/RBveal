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
    <div className=" animate-pulse relative w-1/3 top-4 right-4 bg-red-600 text-2xl text-center text-white font-bold px-4 py-2 rounded-lg z-10 shadow-2xl">Step {number}
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
                    <h1 className="text-4xl font-black mb-6 bg-rbcdarkyellow font-bold px-4 py-4 w-[21rem] rounded-xl">
                      Be Cyber Aware
                    </h1>
                    <span className="mt-2 font-light text-xl">
                      We safeguard our health. We safeguard our investments. It
                      is critical that we all become more Cyber Aware and
                      safeguard our online activities.
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/start">
                      <Button
                        size="lg"
                        className="bg-rbcblue p-12 text-4xl text-white font-black hover:bg-rbcdarkyellow hover:text-black transition-all duration-300"
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
                    <h1 className="font-black text-xl">What is RBveal?</h1>
                    <p>
                      Halsdasdasdlasod laosdl oasld asod laosld oaosdl aslo asd
                      aoisdj iajido oasjd ojaoisd joajsoid joadsjio asdasd.
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
                    <h1 className="font-black text-xl">Why is RBveal?</h1>
                    <p>
                      Halsdasdasdlasod laosdl oasld asod laosld oaosdl aslo asd
                      aoisdj iajido oasjd ojaoisd joajsoid joadsjio asdasd.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full gap-6">
              <motion.div
                className=""
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <StepLabel number={1} />
                <div className="bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center justify-between mb-4 border-b pb-2">
                    <div>
                      <p className="font-medium text-red-600 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        Suspicious Sender
                      </p>
                      <p className="text-sm text-gray-600">
                        From: security@rbc-verify.net
                      </p>
                    </div>
                    <div className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                      Phishing Alert
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-800 font-semibold">
                      Subject: Urgent Security Alert - Account Verification
                      Required
                    </p>
                    <div className="text-sm text-gray-600 space-y-2">
                      <p>Dear Valued Customer,</p>
                      <p>
                        We have detected unusual activity in your account.
                        Please verify your identity immediately by clicking the
                        link below:
                      </p>
                      <p className="text-blue-600 underline cursor-pointer">
                        https://secure-rbc-banking.com/verify
                      </p>
                      <motion.p
                        className="bg-yellow-100 p-2 rounded text-xs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        Warning: This is a suspicious URL that doesn't match
                        RBC's official domain
                      </motion.p>
                    </div>
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center items-center"
                >
                  {/* iPhone Frame */}
                  <div className="relative bg-black rounded-[40px] p-3 shadow-xl w-[280px]">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-6 bg-black rounded-b-3xl z-20"></div>

                    {/* Screen */}
                    <div className="relative bg-white rounded-[30px] overflow-hidden aspect-[9/19.5]">
                      {/* Status Bar */}
                      <div className="h-8 bg-[#262626] flex justify-between items-center px-4 pt-1">
                        <span className="text-[10px] text-white">9:41</span>
                        <div className="flex gap-1">
                          <span className="text-[10px] text-white">5G</span>
                          <span className="text-[10px] text-white">100%</span>
                        </div>
                      </div>

                      {/* Call Screen */}
                      <div className="absolute inset-0 bg-[#262626] flex flex-col items-center justify-center p-6">
                        <div className="text-center space-y-6">
                          {/* RBC Logo Circle */}
                          <div className="w-24 h-24 bg-[#1F4098] rounded-full mx-auto flex items-center justify-center">
                            <span className="text-3xl text-white font-bold">
                              RBC
                            </span>
                          </div>

                          {/* Call Info */}
                          <div className="space-y-2">
                            <h3 className="text-white text-2xl font-semibold">
                              RBC Royal Bank
                            </h3>
                            <p className="text-gray-400 text-sm">
                              incoming call...
                            </p>
                          </div>

                          {/* Call Buttons */}
                          <div className="flex justify-center gap-8 mt-8">
                            {/* Decline Button */}
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl">×</span>
                              </div>
                              <span className="text-gray-400 text-sm mt-2">
                                Decline
                              </span>
                            </div>

                            {/* Accept Button */}
                            <div className="flex flex-col items-center">
                              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-2xl">✓</span>
                              </div>
                              <span className="text-gray-400 text-sm mt-2">
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
