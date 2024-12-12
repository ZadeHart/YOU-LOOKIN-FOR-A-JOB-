import { 
  useState, 
  useEffect } from 'react';
import { 
  searchGithub,
  searchGithubUser
 } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

    const [ listOfCandidates, setListOfCandidates ] =useState<Candidate[]>([])
    const [ loadingData, setLoadingData ] = useState<boolean>(true)
    const [ currentIndex, setCurrentIndex ] = useState<number>(0)
    const [ currentUser, setCurrentUser ] = useState<Candidate>({
    name: null,
    login: null, 
    location: null,
    avatar_url: '',
    email: null,
    company: null,
    bio: null,

    })

  const addToCandidateList = () => {
    let parsedCandidates: Candidate[] = [];
    const storedCandidates = localStorage.getItem('candidates');
    if (typeof storedCandidates === 'string') {
      parsedCandidates = JSON.parse(storedCandidates);
    }
    parsedCandidates.push(currentUser);
    localStorage.setItem('candidates', JSON.stringify(parsedCandidates))
    nextCandidate()
  };

  const nextCandidate = () => {
    setCurrentIndex(currentIndex + 1)
    getSingleGithubUser()
  }

  const getSingleGithubUser = async () => {
    console.log(listOfCandidates, currentIndex)
    const data = await searchGithubUser(listOfCandidates[currentIndex].login as string)
    console.log('Data', data)

    setCurrentUser(data)

  }

  const getAllGithubUsers = async () => {
    const response = await searchGithub()
    if (response) {

      setListOfCandidates(response)

      setLoadingData(false)
    }

  }
  useEffect(() => {
    getAllGithubUsers()
    getSingleGithubUser()

  },[loadingData])


  return (
    <div>
      <h1>Candidate Search</h1>

      <div>
        <img src={currentUser?.avatar_url}>
        </img> 
      <p>
              <strong>Username:</strong> {currentUser?.login}
            </p>
            <p>
              <strong>Location:</strong> {currentUser?.location}
            </p>
            <p>
              <strong>Email:</strong> {currentUser?.email}
            </p>
            <p>
              <strong>Company:</strong> {currentUser?.company}
            </p>
            <p>
              <strong>Bio:</strong> {currentUser?.bio}
            </p>
      <button
      className='button'
      onClick={nextCandidate}
      >
        ➖
      </button>

      <button
      className='button'
      onClick={addToCandidateList}
      >
        ➕
      </button>

      </div>

    </div>
  );
}

export default CandidateSearch;
