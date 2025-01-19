import { Shield, ThumbsUp, AlertTriangle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Image from 'next/image';

export default function PhishingSimulationSuccess() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4 relative overflow-hidden">
      <Card className="w-full max-w-2xl relative z-20 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4">
            <Shield className="h-12 w-12 text-blue-600" />
            {/* <Image src="/rbc.png" alt="RBveal Logo" width={64} height={64} className="h-24 w-24 text-blue-600" /> */}
          </div>
          <CardTitle className="text-2xl font-bold text-blue-700 mb-2">Congratulations! You've Passed the Phishing Test</CardTitle>
          <CardDescription className="text-blue-600">
            Your vigilance is key to our organization's cybersecurity.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-700">
            You successfully identified and avoided a simulated phishing attempt. 
            This demonstrates your strong awareness of cybersecurity threats.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-700 flex items-center mb-2">
              <ThumbsUp className="h-5 w-5 mr-2" />
              What You Did Right:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Recognized suspicious elements in the communication</li>
              <li>Didn't click on potentially harmful links</li>
              <li>Didn't provide sensitive information</li>
              <li>Remained cautious and alert</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-700 flex items-center mb-2">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Remember:
            </h3>
            <p className="text-gray-700">
              Phishing attempts are becoming increasingly sophisticated. Always stay vigilant, 
              verify sender identities, and report any suspicious communications to IT security.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Continue to Security Training
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

