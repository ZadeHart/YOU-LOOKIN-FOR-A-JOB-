import { useState, useEffect} from 'react';
import type Candidate from "../interfaces/Candidate.interface";
import RemoveCandidateButton from '../components/RemoveCandidate';

const SavedCandidates = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
    setCandidates(JSON.parse(storedCandidates));
    }
  }, []);
  console.log('Candidates', candidates)
  console.log('Local Storage', localStorage)

  // const removeCandidate = (index) => {
  //   const newCandidate = [...candidates];
  //   newCandidate.splice(index, 1);
  //   setCandidates(newCandidate);
  // };

    return (
      <>
        <h1>Potential Candidates</h1>
        <div>
          <ul>
              {candidates.map((candidate) => (
                <div className='cards'>
                  <ul>
                    <img src={candidate.avatar_url}></img>
                    <li>
                      Username:
                      {candidate.name}
                    </li>
                    <li>
                      Login:
                      {candidate.login}
                    </li>
                    <li>
                      Location:
                      {candidate.location}
                    </li>
                    <li>
                      Email:
                      {candidate.email}
                    </li>
                    <li>
                      Company:
                      {candidate.company}
                    </li>
                    <li>
                      Bio:
                      {candidate.bio}
                    </li>
                  <RemoveCandidateButton />
                  </ul>

                </div>
              )
            )}

          </ul>
        </div>
      </>
    );
  }


export default SavedCandidates;
