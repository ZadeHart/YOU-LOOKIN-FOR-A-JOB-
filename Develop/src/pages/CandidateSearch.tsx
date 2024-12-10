import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] =useState<Candidate>({
    name: '',
    userName: '', 
    location: '',
    email: '',
    company: '',
    bio: '',
  });

  const addCandidate = () => {
    let parsedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('candidates');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(currentCandidate);
    localStorage.setItem('candidates', JSON.stringify(parsedCandidates))
  };

  const skipCandidate = () => {

  }

    const searchForGithubName = async () => {
      event.preventDefault();
      const data: Candidate = await searchGithub();

      setCurrentCandidate(data);
  };

  return (
    <body>
      <h1>Candidate Search</h1>

      <button
      className='button'
      onClick={skipCandidate}
      >
        ➖
      </button>

      <button
      className='button'
      onClick={addCandidate}
      >
        ➕
      </button>

    </body>
  );
}

export default CandidateSearch;
