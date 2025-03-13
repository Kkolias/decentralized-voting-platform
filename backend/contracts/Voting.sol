// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Voting {
    struct Candidate {
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    uint public candidatesCount;
    mapping(address => bool) public hasVoted;

    event Voted(address indexed voter, uint canidateId);

    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates[i] = Candidate(candidateNames[i], 0);
            candidatesCount++;
        }
    }

    function vote(uint candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted");
        require(candidateId < candidatesCount, "Invalid candidate ID");

        candidates[candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, candidateId);
    }

    function getCandidate(uint candidateId) public view returns (string memory, uint) {
        require(candidateId < candidatesCount, "Invalid candidate ID");

        Candidate storage candidate = candidates[candidateId]; // voisko tää olla memorysta
        return (candidate.name, candidate.voteCount);
    }

    function getCandidates() public view returns (string[] memory, uint[] memory) {
        string[] memory names = new string[](candidatesCount);
        uint[] memory voteCounts = new uint[](candidatesCount);

        for (uint i = 0; i < candidatesCount; i++) {
            names[i] = candidates[i].name;
            voteCounts[i] = candidates[i].voteCount;
        }

        return (names, voteCounts);
    }

    function addCandidate(string memory name) public {
        candidatesCount++;
        candidates[candidatesCount - 1] = Candidate(name, 0);
    }

    function getVotes(uint candidateId) public view returns (uint) {
        require(candidateId < candidatesCount, "Invalid candidate ID");

        return candidates[candidateId].voteCount;
    }
}