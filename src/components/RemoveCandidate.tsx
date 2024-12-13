import React, { useState, useEffect } from "react";
import type Candidate from "../interfaces/Candidate.interface";


const RemoveCandidateButton: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  // Load items from localStorage on component mount
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("candidates") || "[]");
    setCandidates(storedItems);
  }, []);

  // Function to remove an object by id
  const removeItemByLogin = (loginToRemove: string) => {
    // Filter out the object with the matching id
    const updatedItems = candidates.filter((candidate) => candidate.login !== loginToRemove);

    // Update state and localStorage
    setCandidates(updatedItems);
    localStorage.setItem("candidates", JSON.stringify(updatedItems));
  };

  return (
    <div>
      <ul>
        {candidates.map((candidate) => (
            <button onClick={() => removeItemByLogin(candidate.login)}>➖</button>
        ))}
      </ul>
    </div>
  );
};



// const RemoveCandidateButton: React.FC = () => {

//     // Function to remove item from localStorage
//     const handleRemoveCandidate = () => {
//       localStorage.removeItem("candidates");
//       alert("Candidate removed from localStorage!");
//     };

//     return (
//         <button onClick={handleRemoveCandidate}>➖</button>
//     );
// };

export default RemoveCandidateButton
