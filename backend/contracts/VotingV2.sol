// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;


/*
 Tässä on malli jos candidates olisi array eikä mapping
 Pystyy palauttaa getCandidates() funktiolla kaikki ehdokkaat array object tyylillä
*/
contract VotingV2 {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    event Voted(address indexed voter, uint canidateId);

    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(Candidate(i, candidateNames[i], 0));
        }
    }

    function vote(uint candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted");

        candidates[candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        emit Voted(msg.sender, candidateId);
    }

    function getCandidate(
        uint candidateId
    ) public view returns (string memory, uint) {
        require(candidateId < candidates.length, "Invalid candidate ID");

        Candidate storage candidate = candidates[candidateId]; // voisko tää olla memorysta
        return (candidate.name, candidate.voteCount);
    }

    function getCandidates() public view returns (Candidate[] memory) {
        return candidates;
    }
}
