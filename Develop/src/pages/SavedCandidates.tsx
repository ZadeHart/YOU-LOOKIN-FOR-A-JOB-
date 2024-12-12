import { useState, useEffect} from 'react';
import type Candidate from "../interfaces/Candidate.interface";

// interface SavedCandidatesProps {
//   savedCandidatesList: Candidate[];
//   removeFromStorage:
//     | ((
//       e: React.MouseEvent<SVGSVGElement, MouseEvent>,
//       currentlyOnSavedList: boolean | null | undefined,
//       login: string | null
//     ) => null)
//   | null;
// }

const SavedCandidates = () => {

  const [candidates, setCandidates] = useState<Candidate | null>(null);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
    setCandidates(JSON.parse(storedCandidates));
    }
  }, []);
  console.log('Candidates', candidates)
  console.log('Local Storage', localStorage)

  const removeCand = (index) => {
    const newCand = [...candidates];
    newCand.splice(index, 1);
    setCandidates(newCand);
  };

  //   savedCandidatesList,
  //   removeFromStorage,
  // }: SavedCandidatesProps) => {
  //   console.log('Saved Candidiates', SavedCandidates)

    return (
      <>
        <h1>Potential Candidates</h1>
        <div className='cards'>
          <ul>
            {candidates ? (
              <pre>{JSON.stringify(candidates, null, 2)}</pre>
            ) : (
              <p>No Data</p>
            )}

            <button
            className='button'
            onClick={removeCand}
            >
              ➖
            </button>

          </ul>
        {/* <img src={candidates?.avatar_url}>
        </img> 
      <p>
              <strong>Username:</strong> {candidates?.login}
            </p>
            <p>
              <strong>Location:</strong> {candidates?.location}
            </p>
            <p>
              <strong>Email:</strong> {candidates?.email}
            </p>
            <p>
              <strong>Company:</strong> {candidates?.company}
            </p>
            <p>
              <strong>Bio:</strong> {candidates?.bio}
            </p>
 */}
        </div>
        <ul>

          
          {/* {savedCandidatesList.map((candidate) => (
            <CandidateCard
            currentCandidate={candidate}
            key={candidate.login}
            onSavedList={true}
            removeFromStorage={removeFromStorage}
            />
          ))} */}
        </ul>
      </>
    );
  }


export default SavedCandidates;
