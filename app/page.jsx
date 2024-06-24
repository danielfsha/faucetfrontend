"use client";

import { useActiveAccount, useReadContract } from "thirdweb/react";

import Nav from "@/components/Nav";
import Form from "@/components/Form";
import Transactions from "@/components/Transactions";

import { CONTRACT } from "@/utils/constant";

export default function Home() {
  const account = useActiveAccount();

  const { data, isLoading } = useReadContract({
    contract: CONTRACT,
    method: "getUserTransactions",
    params: [account?.address],
  });

  return (
    <main className="flex flex-col w-screen min-h-screen relative overflow-hidden">
      {/* nav */}
      <Nav />

      {/* form */}
      <Form />

      {/* transactions */}
      {account && (
        <Transactions
          transactions={isLoading || data == undefined ? [] : data}
        />
      )}
    </main>
  );
}
