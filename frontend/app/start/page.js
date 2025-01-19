"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const StepCard = ({ number, title, description }) => (
  <Card className="w-[30em] h-[20em] flex flex-col justify-center p-8 bg-white/90">
    <div className="text-5xl font-bold text-blue-600 mb-3">Step {number}</div>
    <h3 className="text-2xl font-semibold mb-3">{title}</h3>
    <ul className="text-xl text-gray-600 list-disc pl-4 space-y-1">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </Card>
);

export default function StartSimulation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    trustedIndividual: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:8080/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: "URGENT: Unusual Login Attempt Detected on Your Account",
          message: ` <table align="center" width="600" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; border-collapse: collapse; margin: auto; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <!-- Logo Row -->
  <tr>
    <td style="padding: 20px; text-align: center;">
      <img src="https://i.imgur.com/g4L5Xfu.png" alt="RBC Logo" style="max-width: 200px; height: auto; margin-top: 20px;">
    </td>
  </tr>

  <!-- Content Row -->
  <tr>
    <td style="padding: 20px;">
      <p>Dear valued customer</p>
      <p>
        We have detected an unauthorized login attempt on your account. For your security, we have temporarily disabled your account to prevent any further suspicious activity.
      </p>
      <p>
        To restore access to your account and verify your identity, we require immediate action. Please click the button below and verify your identity within <strong>24 hours</strong> to avoid getting permanently suspended.
      </p>
    </td>
  </tr>

  <!-- Button Row -->
  <tr>
    <td style="padding: 20px; text-align: center;">
      <a href="http://localhost:3000/home" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; font-family: 'Arial', sans-serif; 
              font-weight: bold;">
        Verify My Account Now
      </a>
    </td>
  </tr>

  <!-- Footer Row -->
  <tr>
    <td style="padding: 20px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #ddd;">
      <p>&copy; 2025 RBC Financial Group. All rights reserved.</p>
    </td>
  </tr>
</table>`,
        }),
      });

      if (response.ok) {
        router.push("/simulation-started");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const response = await fetch("http://localhost:8080/set-voice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trustedIndividual: formData.trustedIndividual,
      }),
    });

    const response2 = await fetch("http://localhost:8080/saveUserName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: formData.name }),
    });

    await sendEmail();
  };

  return (
    <>
      {/* <nav className="bg-white/90 backdrop-blur-md border border-white/20 fixed z-50 left-1/2 transform -translate-x-1/2 w-3/4 rounded-2xl shadow-2xl mt-4">
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
      </nav> */}

      <div
        className="min-h-screen bg-rbcgray flex items-center justify-center"
        style={{
          backgroundImage: "url('bg2.svg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 90%",
        }}
      >
        <div className="flex gap-8 items-center">
          {/* Left Steps */}
          <div className="flex flex-col gap-6">
            <StepCard
              number="1"
              title="Fill in Details of User"
              description={[
                "Enter the participant's basic information",
                "Provide contact details for simulation",
                "Select voice preferences for AI call",
              ]}
            />
            <StepCard
              number="2"
              title="Send Urgent Email"
              description={[
                "Generate realistic phishing email",
                "Simulate urgent account notice",
                "Track email interaction metrics",
              ]}
            />
          </div>

          {/* Center Form */}

          <Card className="max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between p-4 text-5xl font-black text-rbcblue text-center">
              <div className="flex flex-row justify-center items-center">
                <img src="rbc.png" className="w-36" />
                <p>
                  <span className="text-rbcdarkyellow">RB</span>veal
                </p>{" "}
              </div>
              <div className="mb-4">
                <Button
                  onClick={() => router.push("/")}
                  className="m-4 w-max h-12 text-lg font-bold bg-white text-black hover:bg-rbcblue hover:text-white"
                >
                  Go Back to Home
                </Button>
              </div>
            </div>
            <CardHeader className="space-y-4">
              <CardTitle className="text-2xl">Start Your Simulation</CardTitle>
              <CardDescription className="text-lg">
                Please provide the following information to personalize your
                phishing simulation experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-lg">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@example.com"
                      required
                      className="h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-lg">
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="123-456-7890"
                      required
                      className="h-12 text-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trustedIndividual" className="text-lg">
                      Familiar Voice
                    </Label>
                    <select
                      id="trustedIndividual"
                      name="trustedIndividual"
                      value={formData.trustedIndividual}
                      onChange={handleInputChange}
                      required
                      className="h-12 text-lg w-full"
                    >
                      <option value="">Select a Familiar Voice</option>
                      <option value="Voice1">US Female</option>
                      <option value="Voice2">US Female 2</option>
                      <option value="Voice3">UK Female</option>
                      <option value="Voice4">US Male</option>
                      <option value="Voice5">Irish Male</option>
                      <option value="Voice6">UK Male</option>
                    </select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="">
              <Button
                type="submit"
                className="w-full h-12 text-2xl p-12 bg-rbcblue font-black"
                onClick={handleSubmit}
              >
                Start the Simulation
              </Button>
            </CardFooter>
          </Card>

          {/* Right Steps */}
          <div className="flex flex-col gap-6">
            <StepCard
              number="3"
              title="Enter Simulated RBC Banking"
              description={[
                "Access mock banking interface",
                "Navigate security features",
                "Experience realistic banking scenario",
              ]}
            />
            <StepCard
              number="4"
              title="AI Scammer Phone Call"
              description={[
                "Receive simulated scam call",
                "Experience AI voice interaction",
                "Practice identifying fraud tactics",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
