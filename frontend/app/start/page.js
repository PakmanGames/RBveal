"use client";

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
  <Card className="w-64 h-48 flex flex-col justify-center p-6 bg-white/90">
    <div className="text-2xl font-bold text-blue-600 mb-2">Step {number}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:8080/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          subject: "Attention: Policy update for student accounts",
          message: `<table align="center" width="600" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; border-collapse: collapse; margin: auto; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <!-- Email template content remains the same -->
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
    await sendEmail();
  };

  const FormField = ({ label, id, type = "text", placeholder }) => (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-lg">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={formData[id]}
        onChange={handleInputChange}
        placeholder={placeholder}
        required
        className="h-12 text-lg"
      />
    </div>
  );

  return (
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
            title="Fill Your Details"
            description="Enter your basic information to personalize the simulation"
          />
          <StepCard
            number="2"
            title="Add Contact Info"
            description="Provide your contact details for communication purposes"
          />
        </div>

        {/* Center Form */}
        <Card className="max-w-2xl w-full mx-4">
          <div className="mb-4">
            <Button
              onClick={() => router.push("/")}
              className="w-full h-12 text-lg font-semibold bg-blue-500 text-white"
            >
              Go Back to Home
            </Button>
          </div>
          <CardHeader className="space-y-4">
            <CardTitle className="text-2xl">Start Your Simulation</CardTitle>
            <CardDescription className="text-lg">
              Please provide the following information to personalize your
              phishing simulation experience.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormField label="Name" id="name" placeholder="John Doe" />
              <FormField
                label="Email"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
              />
              <FormField
                label="Phone Number"
                id="phoneNumber"
                type="tel"
                placeholder="123-456-7890"
              />
              <FormField
                label="Trusted Individual"
                id="trustedIndividual"
                placeholder="e.g. Taylor Swift"
              />
            </form>
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full h-12 text-lg font-semibold"
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
            title="Name a Trusted Contact"
            description="Choose someone you trust who can help verify suspicious activities"
          />
          <StepCard
            number="4"
            title="Begin Simulation"
            description="Start your personalized phishing awareness training"
          />
        </div>
      </div>
    </div>
  );
}
