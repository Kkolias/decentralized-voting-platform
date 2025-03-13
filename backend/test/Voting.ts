const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting", () => {
  it("should initialize candidates", async () => {
    const candidates = ["Alice", "Bob", "Charlie"];
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(candidates);
    await voting.waitForDeployment();

    const result = await voting.getCandidates();

    const rNames = result[0];
    const rVotes = result[1];

    expect(rNames).to.deep.equal(candidates);
    expect(rVotes).to.deep.equal([0, 0, 0]);
  });
  it("should vote for a candidate", async () => {
    const candidates = ["Alice", "Bob", "Charlie"];
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(candidates);
    await voting.waitForDeployment();

    await voting.vote(0);

    const result = await voting.getVotes(0);
    expect(result).to.equal(1);
  })
});
