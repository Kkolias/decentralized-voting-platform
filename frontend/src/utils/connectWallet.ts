import { ethers } from "ethers";

export async function connectWallet(): Promise<ethers.Signer | null> {
  if (!(window as any).ethereum) {
    alert("Lompakkoa ei ole asennettuna!");
    return null;
  }

  const provider = new ethers.BrowserProvider((window as any).ethereum);
  await (window as any).ethereum.request({ method: "eth_requestAccounts" });
  const signer = await provider.getSigner();

  const network = await provider.getNetwork();
  console.log("Verkko:", network.chainId);

  return signer;
}
