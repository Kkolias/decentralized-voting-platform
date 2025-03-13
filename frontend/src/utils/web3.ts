import { ethers } from "ethers";
import config from "../../config.json";

const contractAddress = config.contractAddress;
const contractABI = config.contractABI;


export async function getCandidates() {
  if (!(window as any).ethereum) throw new Error("MetaMask not installed");

  
  const provider = new ethers.BrowserProvider((window as any).ethereum);
  console.log(provider)
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  return await contract.getCandidates();
}