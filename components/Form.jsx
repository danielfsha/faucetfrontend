"use client";

import { useState } from "react";

const Form = () => {
  const [address, setAddress] = useState("");

  const requestTokens = async (e) => {
    e.preventDefault();
    alert("tokens requested");
  };

  return (
    <section className="form wrapper wrapper-sm">
      <div className="text-white w-full flex flex-col justify-center items-center">
        <p className="font-mono text-md font-medium text-center">
          Designed and developed by daniel fisseha
        </p>
        <p className="mt-2 text-sm font-light text-gray-400 max-w-xl text-center">
          This dapp is designed to dispense tokens every 5 minutes. Enter the
          address and you will receive test tokens for testing purposes. Add the
          following token address:
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
  );
};

export default Form;
