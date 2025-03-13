import "./style.css";
import { ethers } from "ethers";
import config from "../config.json";
import { connectWallet } from "./utils/connectWallet";
import { renderCandidatesComponent } from "./utils/renderCandidatesComponent";

const contractAddress = config.contractAddress;
const contractABI = config.contractABI;

let parsedCandidates: { id: number; name: string; voteCount: number }[] = [];
let signer: ethers.Signer;
let contract: ethers.Contract;

async function getSigner() {
  const _signer = await connectWallet();
  if (!_signer) {
    return;
  }
  signer = _signer;
}

async function setupContract() {
  const _contract = new ethers.Contract(contractAddress, contractABI, signer);
  contract = _contract;
}

async function handleConnectWallet(): Promise<void> {
  await getSigner()
  setupContract();
  getAndParseCandidates();
}

async function getAndParseCandidates() {
  const [names, voteCounts]: [string[], number[]] =
    await contract.getCandidates();

  parsedCandidates = names.map((name, index) => ({
    id: index,
    name,
    voteCount: voteCounts[index],
  }));

  renderCandidates();
}

async function handleVoteForCandidate(candidateId: number) {
  if (!signer) {
    await getSigner();
  }
  voteForCandidate(candidateId);
}

async function voteForCandidate(candidateId: number) {
  const tx = await contract.vote(candidateId);
  await tx.wait();
  getAndParseCandidates();
}

async function addCandidate() {
  const input = document.getElementById("newCandidate") as HTMLInputElement;
  const candidateName = input?.value;
  if (!candidateName) return;
  const tx = await contract.addCandidate(candidateName);
  await tx.wait();
  getAndParseCandidates();
}

function setup() {
  const connectComponent = `
  <div>
  <h2>Connect wallet</h2>
  <button id="connectButtonMetamask">Connect wallet</button>
  </div>
  `;

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  ${connectComponent}
  </div>
  `;
  document
    ?.getElementById("connectButtonMetamask")
    ?.addEventListener("click", handleConnectWallet);
}

setup();

function renderCandidates() {
  renderCandidatesComponent(parsedCandidates);

  parsedCandidates.forEach((candidate) => {
    document
      ?.getElementById(`voteButton${candidate.id}`)
      ?.addEventListener("click", async () => {
        handleVoteForCandidate(candidate.id);
      });
  });

  document
    .getElementById("addCandidate")
    ?.addEventListener("click", addCandidate);
}
