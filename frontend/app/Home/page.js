"use client"
import Nav from "../components/Nav";
import Summary from "../components/Summary";
import Account from "../components/Account";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function home() {
  const initiateCall = async () => {
    try {
      const response = await fetch('http://localhost:8080/startOutboundCall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: `${process.env.TWILIO_USER_PHONE_NUMBER}`,
        }),
      });
    } catch (error) {
      console.error('Error initiating call:', error);
    }
  };


  useEffect(() => {
    initiateCall();
    }, []);
  return (
    <main className="bg-white">
      <Nav />
      <Summary />
      <Account />
      <Footer />
    </main>
  );
}
