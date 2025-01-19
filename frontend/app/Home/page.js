"use client";
import Nav from "../components/Nav";
import Summary from "../components/Summary";
import Account from "../components/Account";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function home() {
  const [curname, setCurName] = useState("");
  const initiateCall = async () => {
    try {
      const response = await fetch("http://localhost:8080/startOutboundCall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: `${process.env.NEXT_PUBLIC_TWILIO_USER_PHONE_NUMBER}`,
        }),
      });
    } catch (error) {
      console.error("Error initiating call:", error);
    }
  };

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8080/getUserName"); // GET request to fetch data
        const data = await response.json();
        setCurName(data.name); // Update state with fetched name
        console.log(data.name);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    initiateCall();
  }, []);
  return (
    <main className="bg-white">
      <Nav name={curname}/>
      <Summary name={curname}/>
      <Account />
      <Footer />
    </main>
  );
}
