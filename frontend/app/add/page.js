"use client";
import Nav from "../components/Nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function AddRecipient() {
    return (
      <>
        <Nav />
        <div className="flex min-h-screen bg-gray-50">
          {/* Sidebar */}
          <div className="hidden w-64 border-r bg-white p-6 md:block">
            <h2 className="mb-4 font-semibold">Pay, Send & Receive Money</h2>
            <nav className="space-y-2">
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Pay a Bill
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Transfer Funds
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Send an Interac e-Transfer
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Send International Money Transfer
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Receive a Wire Transfer
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Pay Multiple Bills
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Request Money
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Register for Interac e-Transfer AutoDeposit
              </Link>

              <Separator className="my-4" />

              <h2 className="mb-2 font-semibold">
                Manage Payments & Transfers
              </h2>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Payment History
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Manage Postdated Transactions
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Cancel Bill Payment
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Cancel Interac e-Transfer
              </Link>

              <Separator className="my-4" />

              <h2 className="mb-2 font-semibold">Add Payees & Recipients</h2>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Add Bill Payee
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Add Canada Revenue Agency Payee
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Add Interac e-Transfer Recipient
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Add International Money Transfer Recipient
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Add Other RBC Royal Bank Customer
              </Link>

              <Separator className="my-4" />

              <h2 className="mb-2 font-semibold">Manage Payees & Recipients</h2>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Manage Payees
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Manage International Money Transfer Recipients
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Sort Payee List
              </Link>
              <Link
                href="#"
                className="block text-sm text-blue-600 hover:underline"
              >
                Nickname Payees
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="mx-auto max-w-2xl">
              <h1 className="mb-6 text-2xl font-semibold">Add New Recipient</h1>
              <p className="mb-8 text-sm text-gray-600">
                Fill in the recipient's contact details.
              </p>

              <form className="space-y-6">
                <div className="space-y-4">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" required />
                </div>

                <div className="space-y-4">
                  <h2 className="font-medium">Contact Details</h2>
                  <p className="text-sm text-gray-600">
                    Fill in either the recipient's email or mobile number.
                  </p>

                  <div className="space-y-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" />
                  </div>

                  <div className="text-center text-sm text-gray-600">Or</div>

                  <div className="space-y-4">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" type="tel" placeholder="000-000-0000" />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="payee-list" />
                  <Label htmlFor="payee-list">Add to payee list</Label>
                </div>

                <div className="space-y-4">
                  <Label>Preferred Language</Label>
                  <RadioGroup defaultValue="english">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="english" id="english" />
                      <Label htmlFor="english">English</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="french" id="french" />
                      <Label htmlFor="french">French</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Collapsible>
                  <CollapsibleTrigger className="flex items-center text-blue-600 hover:underline">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    When are my transactions processed?
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4 rounded-lg border bg-gray-50 p-4 text-sm">
                    <p>
                      After you initiate an Interac e-Transfer, we will withdraw
                      the chosen amount from the account selected and send an
                      email or text message notification to the Interac
                      e-Transfer recipient at the email address or mobile number
                      that you provide. The email or text message notification
                      will identify you as the sender and contain the Interac
                      Transfer amount, the name of the Interac e-Transfer
                      recipient, and that you are using Interac e-Transfer.
                    </p>
                    <p>
                      An Interac e-Transfer recipient can claim or decline the
                      Interac e-Transfer using Online and Mobile Banking, the
                      online and mobile banking services of another financial
                      institution.
                    </p>
                    <p>
                      RBC and other financial institutions participating in
                      Interac e-Transfer, the owner of the Interac e-Transfer
                      service, are entitled to pay an Interac e-Transfer to
                      anyone who, in using Online or Mobile Banking, or the
                      online or mobile banking service of another financial
                      institution, claims the Interac e-Transfer and where
                      applicable, correctly responds to the Interac e-Transfer
                      question, whether you intended that person to receive the
                      Interac e-Transfer or not.
                    </p>
                    <p>
                      You are responsible for providing a correct and
                      operational email address and/or mobile number for the
                      Interac e-Transfer recipient and for notifying us promptly
                      of any change to the email address or mobile number of the
                      Interac e-Transfer recipient.
                    </p>
                    <p>
                      Interac keeps only one question and answer per recipient
                      on file. If you change the question or answer for a
                      recipient, the new question or answer will override any
                      previous ones submitted for that recipient. It will allow
                      them to accept all outstanding Interac e-Transfers from
                      the sender that have not yet been cancelled. If there is
                      an outstanding Interac e-Transfer you do not wish a
                      recipient to receive, you must cancel it via Online or
                      Mobile Banking before it is accepted.
                    </p>
                    <p className="text-gray-500">
                      Additional text message or data charges may apply for the
                      recipient depending on their carrier and/or plan.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <div className="flex justify-between pt-6">
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
