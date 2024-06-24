"use client";

import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");

  return (
    <main className="flex flex-col w-screen min-h-screen relative overflow-hidden">
      {/* nav */}
      <nav className="nav wrapper">
        <h2>Faucet</h2>

        <button className="btn" onClick={() => alert("wallet connected")}>
          connect wallet
        </button>
      </nav>

      {/* form */}
      <section className="form wrapper">
        <div class="text-white w-full flex flex-col justify-center items-center">
          <p class="font-mono text-md font-medium text-center highlight rounded-lg">
            Designed and developed by daniel fisseha
          </p>
          <p class="mt-2 text-sm font-light text-gray-400 max-w-xl text-center">
            This dapp is designed to dispense tokens every 5 minutes. Enter the
            address and you will receive test tokens for testing purposes.
          </p>
        </div>

        <form className="card wrapper-sm">
          <input
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input"
            placeholder="0X0000000000000000000000000000000000000000"
          />

          <button
            className="btn w-full"
            onClick={() => alert("wallet connected")}
          >
            Request Tokens
          </button>
        </form>
      </section>

      {/* transactions */}

      <section className="wrapper wrapper-sm">
        <div className="flex items-center justify-between py-2">
          <p class="font-mono text-lg">Recent Transaction</p>
        </div>

        <div className="w-full flex flex-col pb-20">
          {[0, 1, 2, 3, 4, 5].map((transaction, index) => (
            <div key={index} className="card flex flex-col">
              <div className="flex items-start justify-start space-x-5 ">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg highlight">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-arrow-down-left"
                  >
                    <line x1="17" y1="7" x2="7" y2="17"></line>
                    <polyline points="17 17 7 17 7 7"></polyline>
                  </svg>
                </div>
                <div className="flex flex-col space-y-2 flex-1">
                  <p class="text-base text-white lg:text-md">
                    Requested 100 $Tokens on Sepolia Testnet
                  </p>
                  <p class="text-sm text-gray-500 lg:text-sm">
                    Transaction Hash:
                    <span className="highlight rounded-md ml-2">
                      0x000000....000000
                    </span>
                  </p>
                  <p class="font-mono text-sm pb-4">65 blocks ago</p>
                  <button className="btn space-x-2">
                    <span>Check in Explorer</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-up-right"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
