// import logo from './logo.svg';
import React from 'react'; // Had added useState import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
// import RSVPForm from './components/RSVPForm';
// import EditRSVPForm from './components/EditRSVPForm';


function App() {
  // const [rsvps, setRsvps] = useState({});
  // const [currentRsvp, setCurrentRsvp] = useState(null);

  // const addRSVP = (rsvp) => {
  //   const newRsvps = { ...rsvps, [Date.now()]: rsvp };
  //   setRsvps(newRsvps);
  //   // Set the current RSVP for editing
  //   setCurrentRsvp(rsvp); 
  // };

  // const updateRSVP = (updatedRsvp) => {
  //   const updatedRsvps = { ...rsvps };
  //   const rsvpId = Object.keys(rsvps).find(
  //     key => rsvps[key].email === updatedRsvp.email
  //   );
  //   updatedRsvps[rsvpId] = updatedRsvp;
  //   setRsvps(updatedRsvps);
  // };
  //  <Route 
  //             path="/rsvp" 
  //             element={
  //               currentRsvp ? (
  //                 <EditRSVPForm 
  //                   rsvp={currentRsvp} 
  //                   updateRSVP={updateRSVP}
  //                   onCancel={() => setCurrentRsvp(null)}
  //                 />
  //               ) : (
  //                 <RSVPForm addRSVP={addRSVP} />
  //               )
  //             } 
  //           />

  return (
    <Router>
      <div className="App">
        <header className="header">
          <img 
            src="https://i.imgur.com/txXzPTs.jpeg"
            alt="Em&Ha"
            className="header-image"
          />
          <a
            className="header-title"
            href="https://www.instagram.com/muyemily/p/C30rICkPvJI5sK3mxNa5j-jm4PRX0bRWRwBbFo0/?img_index=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emily & Hairo 
          </a>
        </header>
        <div className="body">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/story" element={<Body />} />
            <Route path="/gallery" element={<Body />} />
            <Route path="/accommodations" element={<Body />} />
            <Route path="/faq" element={<Body />} />
           
          </Routes>
        </div>
      </div>
  </Router>
  );
}

export default App;
