import React from "react";

const Transactions = ({ transactions }) => {
  return (
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
  );
};

export default Transactions;
