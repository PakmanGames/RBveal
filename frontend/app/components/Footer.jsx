import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Navigation() {
  return (
    <div className="w-full bg-rbcgray">
      <nav className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Banking Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Banking</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/banking/accounts"
                  className="text-blue-600 hover:underline"
                >
                  Personal Banking Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/banking/credit-cards"
                  className="text-blue-600 hover:underline"
                >
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/banking/loans"
                  className="text-blue-600 hover:underline"
                >
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/banking/mortgages"
                  className="text-blue-600 hover:underline"
                >
                  Mortgages
                </Link>
              </li>
              <li>
                <Link
                  href="/banking/exchange"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Exchange Rates
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Insurance</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/insurance/travel"
                  className="text-blue-600 hover:underline"
                >
                  Get Travel Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance/explore"
                  className="text-blue-600 hover:underline"
                >
                  Explore Insurance Options
                </Link>
              </li>
            </ul>
          </div>

          {/* Investing Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Investing</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/investing/tfsa"
                  className="text-blue-600 hover:underline"
                >
                  TFSAs
                </Link>
              </li>
              <li>
                <Link
                  href="/investing/gic"
                  className="text-blue-600 hover:underline"
                >
                  GICs
                </Link>
              </li>
              <li>
                <Link
                  href="/investing/mutual-funds"
                  className="text-blue-600 hover:underline"
                >
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link
                  href="/investing/rrsp"
                  className="text-blue-600 hover:underline"
                >
                  RRSPs
                </Link>
              </li>
              <li>
                <Link
                  href="/investing/rrif"
                  className="text-blue-600 hover:underline"
                >
                  RRIFs
                </Link>
              </li>
              <li>
                <Link
                  href="/investing/products"
                  className="text-blue-600 hover:underline"
                >
                  More Investment Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Investment Services Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Investment Services</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                How do you like to manage your investments with RBC?
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/i-manage"
                    className="text-blue-600 hover:underline"
                  >
                    I Manage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/you-manage"
                    className="text-blue-600 hover:underline"
                  >
                    You Manage
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/we-manage"
                    className="text-blue-600 hover:underline"
                  >
                    We Manage
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Centre Section */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-900">Solution Centre</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/home-ownership"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Home Ownership
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/retirement"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Retirement Planning
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/small-business"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Small Business
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/resources"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  More Solution Centre Resources
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t border-gray-200  bg-rbcdarkgray text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>Royal Bank of Canada Website, © 1995-2025</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="/legal"
              className="hover:underline inline-flex items-center gap-1"
            >
              Legal
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              href="/accessibility"
              className="hover:underline inline-flex items-center gap-1"
            >
              Accessibility
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              href="/privacy"
              className="hover:underline inline-flex items-center gap-1"
            >
              Privacy & Security
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link href="/cookies" className="hover:underline">
              Advertising & Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
