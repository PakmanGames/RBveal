"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
const rbcLogo = "https://i.imgur.com/g4L5Xfu.png";

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
          subject: "Attention: Policy update for student accounts",
          message: `<table align="center" width="600" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; border-collapse: collapse; margin: auto; border: 1px solid #ddd; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
  <!-- Logo Row -->
  <tr>
    <td style="padding: 20px; text-align: center;">
      <img src="${rbcLogo}" alt="RBC Logo" style="max-width: 200px; height: auto; margin-top: 20px;">
    </td>
  </tr>

  <!-- Header Row -->
  <tr>
    <td style="padding: 20px; text-align: center;">
      <h1 style="color: #333; font-size: 24px;">UPDATES TO OUR STUDENT ACCOUNT POLICY</h1>
    </td>
  </tr>

  <!-- Content Row -->
  <tr>
    <td style="padding: 20px;">
      <p>Dear valued customer,</p>
      <p>
        We are notifying you of a recent change to the policy regarding student accounts for online shopping. Due to this update, your account currently shows <strong>non-sufficient funds</strong> to proceed with further transactions.
      </p>
      <p>
        To avoid disruptions, please review the updated policy details and verify your account information within <strong>24 hours</strong>. Failure to do so may result in a temporary suspension of your account.
      </p>
    </td>
  </tr>

  <!-- Button Row -->
  <tr>
    <td style="padding: 20px; text-align: center;">
      <a href="http://example.com" style="display: inline-block; background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 16px; font-family: 'Arial', sans-serif; 
              font-weight: bold;">
        Learn More
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
    await sendEmail();
  };

  return (
    <div className="min-h-screen bg-rbcgray flex flex-col">
      <header className="bg-[#006AC3] text-white py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="font-bold text-lg">RBC Phishing Simulator</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Start Your Simulation</CardTitle>
            <CardDescription>
              Please provide the following information to personalize your
              phishing simulation experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="123-456-7890"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="trustedIndividual">Trusted Individual</Label>
                  <Input
                    id="trustedIndividual"
                    name="trustedIndividual"
                    value={formData.trustedIndividual}
                    onChange={handleInputChange}
                    placeholder="e.g. Taylor Swift"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Start the Simulation
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-rbcgray text-white py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Royal Bank of Canada. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
