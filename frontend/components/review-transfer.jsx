"'use client'"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { InfoIcon as InfoCircle, Eye } from "'lucide-react'"
import Image from "next/image"
import Link from "next/link"

export default function ReviewTransfer() {
  return (
    (<div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden w-64 border-r bg-white p-6 md:block">
        <h2 className="mb-4 font-semibold">Pay, Send & Receive Money</h2>
        <nav className="space-y-2">
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Pay a Bill</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Transfer Funds</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Send an Interac e-Transfer</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Send International Money Transfer</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Receive a Wire Transfer</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Pay Multiple Bills</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Request Money</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Register for Interac e-Transfer AutoDeposit</Link>
          
          <Separator className="my-4" />
          
          <h2 className="mb-2 font-semibold">Manage Payments & Transfers</h2>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Payment History</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Manage Postdated Transactions</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Cancel Bill Payment</Link>
          <Link href="#" className="block text-sm text-blue-600 hover:underline">Cancel Interac e-Transfer</Link>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-2xl font-semibold">Review Details</h1>
          <p className="mb-6 text-sm text-gray-600">Before sending, double check the amount and contact details are correct.</p>

          {/* Mobile App Promotion */}
          <Card className="mb-8">
            <CardContent className="flex items-center gap-6 p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WxEs9iS5SYHADdjJhf3IpvbqVEFHgB.png"
                alt="Mobile app illustration"
                width={100}
                height={100}
                className="object-contain" />
              <div>
                <h2 className="mb-2 text-lg font-semibold">Get a Higher Interac e-Transfer Limit with the RBC Mobile App</h2>
                <p className="mb-2 text-sm text-gray-600">
                  Use your RBC Mobile app to securely send above your current Online Banking $1,000 Interac e-Transfer daily limit. You can send up to $10,000 per day from your mobile device when you successfully verify your identity.{"'"}
                  <Link href="#" className="text-blue-600 hover:underline">Learn more about 2-Step Verification</Link>
                </p>
                <Link href="#" className="text-blue-600 hover:underline">How To Get the RBC Mobile App</Link>
              </div>
            </CardContent>
          </Card>

          <form className="space-y-8">
            {/* Transfer Details */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Interac e-Transfer Details</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-3 gap-4">
                  <Label>From</Label>
                  <div className="col-span-2">Chequing 02402-5169537</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Label>To</Label>
                  <div className="col-span-2">scammer</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Label>Amount</Label>
                  <div className="col-span-2">$232.00</div>
                </div>
              </div>
            </div>

            {/* Notify Recipient */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Notify Recipient By</h2>
              <RadioGroup defaultValue="email" className="space-y-4">
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="email" id="email" />
                  <Label htmlFor="email">Email</Label>
                  <Input value="asdasd@asdasd.com" readOnly className="max-w-xs" />
                </div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="text" id="text" />
                  <Label htmlFor="text">Text</Label>
                  <Input value="613-929-0383" readOnly className="max-w-xs" />
                </div>
              </RadioGroup>
            </div>

            {/* Security Question */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Security Question and Answer</h2>
              <p className="mb-4 text-sm text-gray-600">Create a security question and answer</p>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="security-question">Security Question</Label>
                  <Input id="security-question" required />
                </div>
                <div>
                  <Label htmlFor="security-answer">Security Answer</Label>
                  <div className="relative">
                    <Input id="security-answer" required />
                    <Eye className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">3-25 characters, no spaces or special characters</p>
                </div>
                <div>
                  <Label htmlFor="security-answer-confirm">Re-enter Security Answer</Label>
                  <div className="relative">
                    <Input id="security-answer-confirm" required />
                    <Eye className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Message */}
            <div>
              <h2 className="mb-4 text-lg font-semibold">Message <span className="font-normal">(Optional)</span></h2>
              <p className="mb-4 text-sm text-gray-600">Please do not include the security question and answer in this message</p>
              <Textarea className="h-32" />
              <p className="mt-2 text-sm text-gray-500">You have 400 characters remaining</p>
            </div>

            {/* 2-Step Verification Notice */}
            <div className="rounded-lg bg-yellow-50 p-4 text-sm">
              <p>
                You may be required to verify your identity using 2-Step Verification. For more information, visit the{"'"}
                <Link href="#" className="text-blue-600 hover:underline">FAQ page</Link>
              </p>
            </div>

            {/* Important Information */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <InfoCircle className="h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div className="space-y-4 text-sm">
                    <h3 className="font-semibold">Important Information</h3>
                    <p>
                      Once confirmed, funds are immediately withdrawn from your account. A service fee may also apply. You can
                      cancel an Interac e-Transfer after you have sent it, unless the recipient has accepted the money. To cancel an
                      Interac e-Transfer, go to the Payment History page and click on the hyperlink.
                    </p>
                    <p>
                      Notifications regarding your Interac e-Transfer will be sent to your Message Centre. Please review new
                      messages on a regular basis.If you do not cancel an unclaimed Interac e-Transfer within 15 calendar days
                      after we've notified you of its expiry, we will return the funds to your account and apply a reclaim fee.
                    </p>
                    <p>
                      You're responsible for providing a correct and operational email address and/or mobile number for the Interac
                      e-Transfer recipient.
                    </p>
                    <p className="text-gray-500">
                      Additional text message or data charges may apply for the recipient depending on their carrier and/or plan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Send</Button>
            </div>
          </form>
        </div>
      </div>
    </div>)
  );
}

