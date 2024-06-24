import { ConnectButton } from "thirdweb/react";

import { client, chain } from "@/utils/constant";

const Nav = () => {
  return (
    <nav className="nav wrapper">
      <h2>Faucet</h2>

      <ConnectButton client={client} chain={chain} />
    </nav>
  );
};

export default Nav;
