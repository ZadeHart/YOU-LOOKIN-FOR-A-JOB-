import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
// import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProps = {
  currentCandidate: Candidate;
  addToSavedCandidateList?: (() => void) | null;
  onSavedList?: boolean | null;
  removeFromStorage?:
    | ((
        e: React.MouseEvent<SVGSVGElement, MouseEvent>,
        currentlyOnSavedList: boolean | null | undefined,
        name: string | null
      ) => void)
    | null;
};

const CandidateCard = ({
  currentCandidate,
  addToSavedCandidateList,
  onSavedList,
  removeFromStorage,
}: CandidateCardProps) => {
  return (
    <>
      {currentCandidate?.name ? (
        <section className='candidateCard'>
          <figure>
            <img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.name}`} />
          </figure>
          <article className='details'>
            <h2>{currentCandidate.name}</h2>
            <p>
              <strong>Username:</strong> {currentCandidate.login}
            </p>
            <p>
              <strong>Location:</strong> {currentCandidate.location}
            </p>
            <p>
              <strong>Email:</strong> {currentCandidate.email}
            </p>
            <p>
              <strong>Company:</strong> {currentCandidate.company}
            </p>
            <p>
              <strong>Bio:</strong> {currentCandidate.bio}
            </p>
          </article>
          {onSavedList ? (
            <aside className='icons'>
              <ImCross
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                  removeFromStorage?.(
                    e,
                    onSavedList,
                    currentCandidate.login
                  )
                }
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToSavedCandidateList?.()}
              />
              {/* <IoEyeOutline
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={() => addToSeenItList?.()}
              /> */}
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>What's up?</h1>
      )}
    </>
  );
};

export default CandidateCard;
