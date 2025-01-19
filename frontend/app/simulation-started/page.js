import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function SimulationStarted() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('bg2.svg')",
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
                </p>{" "}
              </div>
            </Link>

            <div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/start">
                <Button
                  size="lg"
                  className="bg-white p-6 text-xl text-rbcblue font-black hover:bg-rbcdarkyellow hover:text-black transition-all duration-300"
                >
                  Get started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content */}{" "}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 bg-rbcblue">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-black bg-rbcblue text-white p-12 shadow-2xl rounded-2xl">
            Simulation has started!
          </h1>
          <Link href="/">
            <Button className="mt-8 bg-rbcblue text-white font-bold text-xl p-8">
              Return Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
