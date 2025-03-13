// import { ethers } from "hardhat";
const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const candidates = ["Jorma", "Matti", "Liisa"];

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(candidates);
  await voting.waitForDeployment()

  console.log("Voting deployed to:", voting.target);

  const contractAddress = voting.target;
  const contractABI = JSON.parse(
    fs.readFileSync("./artifacts/contracts/Voting.sol/Voting.json", "utf8")
  ).abi;
  
  fs.writeFileSync(
    "../frontend/config.json",
    JSON.stringify({ contractAddress, contractABI }, null, 2)
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
