import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="bg-[#006AC3]">
        <div className="container mx-auto">
          {/* Main Nav */}
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex items-center">
              <Link href="/" className="mr-8 flex items-center gap-2">
                <Image
                  src="rbc_logo.svg"
                  alt="RBC Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <span className="text-white font-semibold">
                  Phishing Simulator
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#about"
                className="text-white text-sm hover:text-gray-200"
              >
                About
              </Link>
              <Link
                href="#how-it-works"
                className="text-white text-sm hover:text-gray-200"
              >
                How It Works
              </Link>
              <Link
                href="#start-simulation"
                className="text-white text-sm hover:text-gray-200"
              >
                Start Simulation
              </Link>
              <Link
                href="#resources"
                className="text-white text-sm hover:text-gray-200"
              >
                Fraud Resources
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006AC3] to-[#0051A5] relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <div className="inline-block bg-yellow-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                RBC Security Training
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                1 in 3 Canadians have encountered phishing attempts.
                <span className="block mt-2">Are you prepared?</span>
              </h1>
              <Button
                size="lg"
                className="bg-yellow-400 text-[#006AC3] hover:bg-yellow-300"
              >
                Start Your Simulation
              </Button>
            </div>
            <div className="relative">
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
                  <p className="text-sm text-gray-800">
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
                    <p className="text-blue-600 underline">
                      https://secure-rbc-banking.com/verify
                    </p>
                    <p className="bg-yellow-100 p-2 rounded text-xs">
                      Warning: This is a suspicious URL that doesn't match RBC's
                      official domain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-[#006AC3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Interactive Learning
              </h3>
              <p className="text-gray-600">
                Practice real-life phishing scenarios tailored for students and
                RBC customers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-[#006AC3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI-Driven Simulations
              </h3>
              <p className="text-gray-600">
                Experience scam calls and phishing emails in a safe environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#006AC3]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Personalized Reports
              </h3>
              <p className="text-gray-600">
                Learn how to spot red flags and protect yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fraud Prevention Stats
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#006AC3] mb-2">47%</div>
              <p className="text-gray-600">
                of Canadians have experienced at least one type of fraud in
                their lifetime
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#006AC3] mb-2">
                $380M
              </div>
              <p className="text-gray-600">
                in fraud losses reported by Canadians in 2021
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#006AC3] mb-2">92%</div>
              <p className="text-gray-600">
                success rate in preventing fraud attempts with proper training
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#006AC3] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to test your fraud detection skills?
          </h2>
          <Button
            size="lg"
            className="bg-yellow-400 text-[#006AC3] hover:bg-yellow-300"
          >
            Start Your Simulation Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6" />
                <span className="font-bold">RBC Phishing Simulator</span>
              </div>
              <p className="text-sm text-gray-400">
                Created for RBC Hackathon 2024.
                <br />
                Helping Canadians stay safe online.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Fraud Prevention Tips
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Security Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Report Fraud
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Royal Bank of Canada. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
