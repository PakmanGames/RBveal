"use client";
import Nav from "../components/Nav";
import Link from "next/link"
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Image from "next/image";

export default function ETransferWarning() {
  return (
    <>
      <Nav />
      <div className="min-h-screen p-4 md:p-8">
        <Card className="mx-auto max-w-4xl">
          <CardHeader className="space-y-6">
            <div className="flex items-start justify-between gap-8 bg-gray-200">
              <div className="space-y-2">
                <h1 className="text-2xl font-medium md:text-3xl">
                  Before You Add an e-Transfer Recipient...
                </h1>
              </div>
              <div className="relative hidden h-32 w-32 md:block">
                <Image
                  src=""
                  alt="Security illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h2 className="text-xl font-medium md:text-2xl">
              Protect Yourself from Scams
            </h2>
            <p className="text-muted-foreground">
              Online banking and money transfers can be convenient, but they
              also come with risks. Here are some common types of scams, along
              with tips for avoiding them and protecting yourself and your
              money:
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">
                Select a type of scam to learn more
              </h3>
              <Button variant="link" className="text-blue-600">
                Expand all
              </Button>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="investment">
                <AccordionTrigger className="text-blue-600">
                  Investment Scams
                </AccordionTrigger>
                <AccordionContent>
                  Information about investment scams would go here.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bank">
                <AccordionTrigger className="text-blue-600">
                  Bank Impersonation Scams
                </AccordionTrigger>
                <AccordionContent>
                  Information about bank impersonation scams would go here.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="social">
                <AccordionTrigger className="text-blue-600">
                  Social Engineering
                </AccordionTrigger>
                <AccordionContent>
                  Information about social engineering would go here.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="space-y-4 text-sm">
              <p>
                By staying vigilant and following these tips, you can better
                protect yourself from money transfer scams. You can also{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  stay informed about the latest cyber scams here
                </a>
                .
              </p>
              <p>
                Even if you are the victim of a scam, RBC may not be able to
                refund you after you&apos;ve sent money. Please acknowledge that
                you know and trust the recipient and would like to continue.
              </p>
            </div>

            <div className="flex justify-between gap-4 pt-4">
              <Link href="/"><Button variant="outline">Cancel</Button></Link>
<Link href="/add">
                <Button>I Understand</Button>
  
</Link>            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
