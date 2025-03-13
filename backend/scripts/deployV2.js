// import { ethers } from "hardhat";
const { ethers } = require("hardhat");

async function main() {
  const candidates = ["Jorma", "Matti", "Liisa"];

  const Voting = await ethers.getContractFactory("VotingV2");
  const voting = await Voting.deploy(candidates);
  await voting.waitForDeployment()

  console.log("Voting deployed to:", voting.target);

  // test getting candidates

  const _voting = await ethers.getContractAt("VotingV2", voting.target);
  // console.log("Voting at:", _voting);
  const _candidates = await _voting.getCandidates();
  console.log("Candidates:", _candidates);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
