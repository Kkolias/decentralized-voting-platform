export function renderCandidatesComponent(
  parsedCandidates: { name: string; id: number; voteCount: number }[]
): void {
    const candidatesComponent = `
    <div>
    <h2>Candidates</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Votes</th>
          <th>Vote</th>
        </tr>
      </thead>
      <tbody>
      ${parsedCandidates
        .map(
          (candidate) =>
            `<tr>
            <td>
            ${candidate.name}
            </td>
            <td>
            ${candidate.voteCount} votes
            </td>
            <td>
            <button id="voteButton${candidate.id}">Vote</button>
            </td>
          </tr>`
        )
        .join("")}
      </tbody>
      </table>
  
      <div class="new-candidate-container">
        <input id="newCandidate" placeholder="new candidate" />
        <button id="addCandidate">Add candidate</button>
    </div>
    `;
  
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div>
    ${candidatesComponent}
    </div>
    `;
}
