"use client"; // Important! Add this at the top of your component file
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link"
const Account = () => {
  const router = useRouter();
      const [formData, setFormData] = useState({
      from: "",
      to: "",
      amount: "",
      });
  
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.to === "INTERAC e-Transfer") {
      // Navigate to e-transfer page
      router.push("/confirm"); // or whatever your route is
    }
  };

  const balance = (Math.random() * (4000.00 - 1000.00) + 1000.00).toFixed(2);
  const investBalance = (Math.random() * (4000.00 - 1000.00) + 1000.00).toFixed(2);

  return (
    <div className="flex justify-center items-center text-black">
      <div className="flex flex-row w-3/5">
        {/* Mail Delay Notice */}
        <section>
          <div className="bg-gray-50 p-4 border-l-4 border-blue-500 mb-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">ℹ</span>
                <h2>Mail delays still expected</h2>
              </div>
              <button className="text-blue-600">Collapse</button>
            </div>
            <p className="text-gray-600 my-2">
              Canada Post has resumed their services. Due to the previous
              disruption, delivery of your printed documents will be delayed. In
              the meantime, you can still view, save and print them
              electronically.
            </p>
            <button className="text-blue-600">View Account Documents</button>
          </div>

          {/* Bank Accounts Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Bank Accounts</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Total:</span>
                <span className="text-xl">{`$${balance}`}</span>
                <span className="text-gray-600">CAD</span>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="py-4 flex justify-between items-center">
                <div>
                  <a href="#" className="text-blue-600 hover:underline">
                    RBC Advantage Banking
                  </a>
                  <p className="text-gray-600">Chequing 02402-5169537</p>
                </div>
                <div className="flex items-center gap-4">
                  <span>{`$${balance} CAD`}</span>
                  <button>⋮</button>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-blue-600 mt-4">
              <span className="w-6 h-6 border border-blue-600 rounded-full flex items-center justify-center text-sm">
                +
              </span>
              <span>Open a Bank Account</span>
            </button>
          </div>

          {/* Credit Cards Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Credit Cards</h2>
            </div>
            <div className="border-t border-gray-200"></div>
            <button className="flex items-center gap-2 text-blue-600 mt-4">
              <span className="w-6 h-6 border border-blue-600 rounded-full flex items-center justify-center text-sm">
                +
              </span>
              <span>Open a Bank Account</span>
            </button>
          </div>

          {/* Investments Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Investments</h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Total:</span>
                <span className="text-xl">{`$${investBalance}`}</span>
                <span className="text-gray-600">CAD</span>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <div className="py-4 flex justify-between items-center">
                <div>
                  <a href="#" className="text-blue-600 hover:underline">
                    RBC Direct Investing Practice Account
                  </a>
                  <p className="text-gray-600">
                    Discover online investing with a practice account.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span>{`$${investBalance} CAD`}</span>
                  <button>⋮</button>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-2 text-blue-600 mt-4">
              <span className="w-6 h-6 border border-blue-600 rounded-full flex items-center justify-center text-sm">
                +
              </span>
              <span>Purchase an Investment</span>
            </button>
          </div>

          {/* Lines & Loans Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Lines & Loans</h2>
            </div>
            <div className="border-t border-gray-200"></div>
            <button className="flex items-center gap-2 text-blue-600 mt-4">
              <span className="w-6 h-6 border border-blue-600 rounded-full flex items-center justify-center text-sm">
                +
              </span>
              <span>Apply for a Loan</span>
            </button>
          </div>

          {/* Mortgages Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl">Mortgages</h2>
            </div>
            <div className="border-t border-gray-200"></div>
            <button className="flex items-center gap-2 text-blue-600 mt-4">
              <span className="w-6 h-6 border border-blue-600 rounded-full flex items-center justify-center text-sm">
                +
              </span>
              <span>Prequalify for a mortgage</span>
            </button>
          </div>
        </section>

        <section className="w-2/5">
          {/* Quick Payments Form */}
          <div className="bg-white p-4">
            <div className="flex justify-between mb-4">
              <input
                type="text"
                placeholder="Enter your question here"
                className="flex-grow p-2 border rounded mr-2"
              />
              <button className="bg-rbcblue text-white px-4 py-2 rounded">
                Search
              </button>
            </div>

            <h2 className="text-xl mb-4">Quick Payments & Transfers</h2>
            <form className="bg-gray-100 p-2">
              <div className="mb-4">
                <label className="block mb-2">From</label>
                <select className="w-full p-2 border rounded">
                  <option>Chequing 02402-5169537 – $0.00</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">To</label>
                <select className="w-full p-2 border rounded">
                  <option>Select ...</option>
                  <option>INTERAC e-Transfer</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Amount</label>
                <div className="flex gap-2">
                  <span className="border p-2 rounded">$</span>
                  <input
                    type="text"
                    className="flex-grow p-2 border rounded"
                    placeholder="0.00"
                  />
                  <select className="border p-2 rounded">
                    <option>CAD</option>
                  </select>
                </div>
              </div>
              <Link href="/confirm">
                <button
                  onClick={() => handleSubmit}
                  className="w-full bg-rbcblue text-white p-3 rounded mb-4"
                >
                  Submit
                </button>
              </Link>
              <button className="w-full text-blue-600 flex items-center justify-center gap-2">
                <span>💎</span>
                Pay with Avion Points
              </button>
            </form>
          </div>

          <div className="p-8 max-w-2xl">
            {/* Transfers and Payments Section */}
            <section className="mb-8 border-2 p-4">
              <h2 className="text-2xl font-normal mb-4">
                Transfers and Payments
              </h2>
              <div className="flex flex-col space-y-4">
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Pay a Bill
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Transfer Funds
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Send an <i>Interac</i> e-Transfer
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Send International Money Transfer
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Transfer Money Cross-Border
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Add Payee
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Payment History
                </span>
              </div>
            </section>

            {/* Account Management Section */}
            <section className="border-2 p-4">
              <h2 className="text-2xl font-normal mb-4">Account Management</h2>
              <div className="flex flex-col space-y-4">
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Account Services
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Daily Transaction Limits
                </span>
                <span className="text-rbcblue cursor-pointer hover:underline">
                  Link Accounts
                </span>

                <div className="text-rbcblue cursor-pointer hover:underline flex items-center">
                  View Your Credit Score
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>

                <span className="text-rbcblue cursor-pointer hover:underline">
                  View Void Cheque
                </span>

                <div className="text-rbcblue cursor-pointer hover:underline flex items-center mt-8">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Make or Change an Appointment
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Account;
