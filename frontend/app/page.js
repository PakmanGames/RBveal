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
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border border-white/20 fixed z-50 left-1/2 transform -translate-x-1/2 w-3/4 rounded-2xl shadow-2xl mt-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-4 px-4">
            <Link href="/" className="flex items-center gap-2">
              <motion.span
                className="text-white font-black text-3xl md:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                RBveal
              </motion.span>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/start">
                <Button
                  size="lg"
                  className="bg-white p-6 text-xl text-rbcblue font-black hover:bg-rbcdarkyellow hover:text-white transition-all duration-300"
                >
                  Start Your Simulation
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
            <div className="bg-white p-12 rounded-2xl shadow-2xl">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="inline-block bg-rbcdarkyellow text-sm font-bold px-3 py-1 rounded-xl mb-4">
                  RBC Security Training
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-rbcyellow">
                  1 in 3 Canadians have encountered phishing attempts.
                  <span className="block mt-2 text-rbcblue">
                    Are you prepared?
                  </span>
                </h1>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/start">
                    <Button
                      size="lg"
                      className="bg-white p-6 text-xl text-rbcblue font-black hover:bg-rbcdarkyellow hover:text-white transition-all duration-300"
                    >
                      Start Your Simulation
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
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
                      We have detected unusual activity in your account. Please
                      verify your identity immediately by clicking the link
                      below:
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
                      Warning: This is a suspicious URL that doesn't match RBC's
                      official domain
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-rbcblue">
            Why Choose RBVeal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Realistic Simulations",
                description: "Experience true-to-life phishing scenarios",
              },
              {
                icon: PlayIcon,
                title: "Interactive Learning",
                description: "Engage with our platform for hands-on training",
              },
              {
                icon: LightBulbIcon,
                title: "Adaptive Difficulty",
                description: "Challenges that grow with your skills",
              },
              {
                icon: DocumentTextIcon,
                title: "Comprehensive Reports",
                description: "Detailed feedback on your performance",
              },
              {
                icon: ExclamationTriangleIcon,
                title: "Risk Assessment",
                description: "Identify your vulnerabilities",
              },
              {
                icon: Globe,
                title: "Always Updated",
                description: "Stay current with the latest phishing tactics",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 text-rbcblue mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
