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
        trustedIndividual: formData.trustedIndividual
      }),
    });


    await sendEmail();
  };

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
              className="m-4 w-1/3 h-12 text-lg font-semibold bg-rbcblue text-white"
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
                    Trusted Individual
                  </Label>
                  <select
    id="trustedIndividual"
    name="trustedIndividual"
    value={formData.trustedIndividual}
    onChange={handleInputChange}
    required
    className="h-12 text-lg w-full"
  >
    {/* List of trusted voices */}
    <option value="">Select a Trusted Individual</option>
    <option value="Voice1">Voice 1</option>
    <option value="Voice2">Voice 2</option>
    <option value="Voice3">Voice 3</option>
    <option value="Voice4">Voice 4</option>
    <option value="Voice5">Voice 5</option>
    <option value="Voice6">Voice 6</option>
    <option value="Voice7">Voice 7</option>
    <option value="Voice8">Voice 8</option>
    <option value="Voice9">Voice 9</option>
    <option value="Voice10">Voice 10</option>
    <option value="Voice11">Voice 11</option>
    <option value="Voice12">Voice 12</option>
  </select>
                </div>
              </div>
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
