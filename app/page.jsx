"use client";

import { useEffect, useState } from "react";

import {
  ConnectButton,
  useActiveAccount,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";

import { client, chain, CONTRACT } from "@/utils/constant";
import { prepareContractCall } from "thirdweb";

export default function Home() {
  const [address, setAddress] = useState("");
  const [transactions, setTransactions] = useState();

  const account = useActiveAccount();

  const { mutate: sendTx, isPending } = useSendTransaction();

  const { data, isLoading } = useReadContract({
    contract: CONTRACT,
    method: "requestTokens",
    params: [account?.address],
  });

  useEffect(() => {
    setTransactions(data == undefined ? [] : data);
  }, [data]);

  const requestTokens = async (e) => {
    e.preventDefault();

    if (!account.address || address == "") return;

    const tx = prepareContractCall({
      contract: CONTRACT,
      method: "requestTokens",
      params: [address],
    });

    sendTx(tx);

    alert(address);
  };

  return (
    <main className="flex flex-col w-screen min-h-screen relative overflow-hidden">
      {/* nav */}
      <nav className="nav wrapper">
        <h2>Faucet</h2>

        <ConnectButton client={client} chain={chain} />
      </nav>

      {/* form */}
      <section className="form wrapper wrapper-sm">
        <div className="text-white w-full flex flex-col justify-center items-center">
          <p className="font-mono text-md font-medium text-center">
            Designed and developed by daniel fisseha
          </p>
          <p className="mt-2 text-sm font-light text-gray-400 max-w-xl text-center">
            This dapp is designed to dispense tokens every 5 minutes. Enter the
            address and you will receive test tokens for testing purposes. Add
            the following token address:
            <span className="highlight inline-flex rounded-xl font-mono mt-2">
              0x458213f469e0E97579b798178eBf9F1110D3A9Ba
            </span>
          </p>
        </div>

        <form className="card wrapper-sm" onSubmit={requestTokens}>
          <input
            name="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input"
            placeholder="0X0000000000000000000000000000000000000000"
          />

          <button className="btn w-full" onClick={requestTokens}>
            Request Tokens
          </button>
        </form>
      </section>

      {/* transactions */}
      {account && (
        <section className="wrapper wrapper-sm">
          <div className="flex items-center justify-between py-2">
            <p className="font-mono text-lg">Recent Transaction</p>
          </div>

          <div className="w-full flex flex-col pb-20">
            {transactions.map((transaction, index) => (
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-arrow-down-left"
                    >
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="17 17 7 17 7 7"></polyline>
                    </svg>
                  </div>
                  <div className="flex flex-col space-y-2 flex-1">
                    <p className="text-base text-white lg:text-md">
                      Requested 100 $AFLX on Sepolia Testnet
                    </p>

                    <p className="font-mono text-sm">65 blocks ago</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
