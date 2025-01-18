import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimulationStarted() {
  return (
    <div
      className="min-h-screen flex flex-col bg-rbcgray">
    
      {/* Header */}
      <header className="py-4 bg-rbcblue">
        <div className="container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-lg">RBC Phishing Simulator</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-rbcblue"
          >
            <CheckCircle className="h-12 w-12 text-white" />
                  </div>
                  <h1 className="text-8xl font-black">Simulation has started!</h1>
        </div>
      </main>
    </div>
  );
}
