import{ Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              HOME
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2>
            <Link
              to='/SavedCandidates'
              className={
                currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'
              }
              >
              Potential Candidates
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

// function Nav({ currentPage, handlePageChange }) {
//   // const currentPage = useLocation().pathname;
//   // TODO: Add necessary code to display the navigation bar and link between the pages
//   return (
//       <nav>
//           <ul className="nav nav-tabs">
//               <h2>
//                 {/* <Link
//                 to='/' */}
//                 <a
//                 href='#home'
//                 id='home'
//                 onClick={() => handlePageChange('Home')}
//                 className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Home
//                   {/* </Link> */}
//                   </a>
//               </h2>
//               <h2>
//                 {/* <Link
//                 to='/potential-candidates' */}
//                 <a
//                 href='#potential'
//                 id='potential'
//                 onClick={() => handlePageChange('Potential Candidates')}
//                 className={currentPage === 'Potential Candidates' ? 'nav-link active' : 'nav-link'}
//                 >
//                   Potential Candidates
//                 {/* </Link> */}
//                 </a>
//               </h2>
//           </ul>
//         </nav>
//   );
// }

// export default Nav;
