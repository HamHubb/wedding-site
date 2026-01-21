import React, { useState } from "react";
// import Navbar from "./Navbar";
// import RSVPForm from "./RSVPForm";
import "./Body.css"
import { useLocation } from 'react-router-dom';



const getRouteClass = (pathname) => {
  if (pathname === '/') 
  return 'home-route';
  return `${pathname.slice(1)}-route`;
};


const Body = () => {
  // creates const that allows for event
  const [selectedImage, setSelectedImage] = useState(null);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const enlargeImage = (imgUrl, altText) => {
    setSelectedImage({ imgUrl, altText });
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "ParaSiempre") {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError(false);
  };



  const location = useLocation();




//set up backend: useState for RSVP

    return(
        <main className={`page-body ${getRouteClass(location.pathname)}`}>
            {location.pathname === '/' && (
        <section className="home-section" id="home">
          <h2>You're invited!</h2>
          <div className="home-grid">
            <p>
              We're excited to annouce that we're getting married on Saturday, April 25, 2026.
            </p>
            <p>
               We've added a reservations page under "Accommodations." 
            </p>
            <p>
               Last day to reserve is March 25, 2026.
            </p>
           
          </div>
        </section>
      )}
          {location.pathname === '/story' && (
      <section className="story-section">
        <h2>Two star-crossed lovers</h2>
        <div className="story-content">
          <p>One doesn't usually imagine a love story to begin in the halls of a high school and 
            thankfully that's not where this one began. It is, however, where the two unlikely lovebirds did first meet. 
            One of them longing to meet the other. As creepy as that sounds, there is a less obsessive explanation.</p>
          <p>Hairo meets Emily's bestfriend and hears about her for about a year. 
            Eventually he's made aware that Emily would be transfering to the same school. Excited
            to give the best first impression, Hairo yells Emily's name from down the hall without an introduction.</p>
          <p>Let's put ourselves into the mind and perspective of a teenage Emily. To suddenly hear our name be yelled at us by a nameless boy. 
            Beaming at us with an unhealthy level of eagerness. 
            It doesn't stop there, Hairo follows it up with, "heard a lot about you" still without introducting himself or giving any explanation </p>
          <p>Until Emily's face does all the talking. Uncomfortable would be an understatement in describing our first interaction. 
            Luckily, when we start low the only way is up! Hairo had plenty more opportunities to redeem his no-so meet cute.</p>
          <p></p>
        </div>
      </section>
    )}
            {/* {location.pathname === '/story' && (
                <section className="story-section" id="story">
                    
                    <h2>Our Story</h2>
                   
                    <div className="story-content">
                    
                    <p>Meeting: 2009<br></br>
                    First date: 2015<br></br>
                    First time saying, "I love you": 2016<br></br>
                    First 
                    While most love stories starts with a happenstance, meet-cute interaction that forever bonds those fated lovers.
                    This one begins with possibly one of the creepiest first interactions imaginable. 
                    
                    Let's put ourselves inside 15-year-old Emily Lopez's mind. We're transfering highschools after our freshman year and we meet this  
                    As  
              
                        
                    </div>
                </section>
            )} */}
      {location.pathname === '/gallery' && (
  <>
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        {[
          "https://i.imgur.com/vU4RSYE.jpeg",
          "https://i.imgur.com/Q15PxKy.jpeg",
          "https://i.imgur.com/SHKKBHQ.jpeg",
          "https://i.imgur.com/0xJKlXn.jpeg",
          "https://i.imgur.com/DTCR1cF.jpeg",
          "https://i.imgur.com/OIwVSYF.jpeg"
        ].map((imgUrl, index) => (
          <div key={index} className="gallery-item" onClick={() => enlargeImage(imgUrl, `Gallery item ${index + 1}`)}>
            <img
              src={imgUrl}
              alt={`Gallery item ${index + 1}`}
              loading="lazy"
            />
            <div className="image-overlay">
              <span>E❤️H</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Image Modal */}
    {selectedImage && (
      <div className="image-modal" onClick={closeModal}>
        <span className="close-modal" onClick={closeModal}>&times;</span>
        <img 
          className="modal-content" 
          src={selectedImage.imgUrl} 
          alt={selectedImage.altText}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    )}
  </>
)}

{location.pathname === '/accommodations' && (
  <section className="accommodations-section">
    <h2>Hotel Accommodations</h2>
    
    {!isAuthenticated ? (
      // Password form - shown when not authenticated
      <div className="password-protection">
        <p>Please enter the password from your invitation to access the reservation links:</p>
        <form onSubmit={handlePasswordSubmit} className="password-form">
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className={error ? "password-input error" : "password-input"}
          />
          <button type="submit" className="password-submit">
            Unlock Reservations
          </button>
        </form>
        {error && (
          <p className="error-message">Incorrect password. Please try again.</p>
        )}
      </div>
    ) : (
      <div className="accommodations-content">
        <p>Thank you! Below you will find the reservation links for our hotel blocks:</p>
        
        <div className="accommodations-grid">
          <div className="accommodation-column">
            <h3>Westlake Village Inn</h3>
            <p>Limited on-site accommodations are offered at our wedding venue with special rates for guests. </p>
            <p>Starting Rate: $320 per night</p>
            <a
              className="accommodations-link"
              href="https://reservations.travelclick.com/6531?groupID=4856184"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book at Westlake Village Inn
            </a>
          </div>
          <div className="accommodation-column">
            <h3>Courtyard by Marriott Agoura Hills</h3>
            <p>Alternative accommodations a few minutes from our venue. </p> 
            <p>Starting Rate: $189 per night</p>
            <a
              className="accommodations-link"
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1761068764929&key=GRP&app=resvlink&dtt=true&_branch_match_id=1479103530153609079&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXTywo0MtNLCrKzC8p0UvOz9UvSi3OyczLtgdK2ALZZSCOWkpJiW1JUWmqWmaKraG5maGBmYW5mYmlkaVadmqlrXtQgFpdUWpaKtCYvPT4pKL88uLUIlvnjKL83FQAV1GjX2kAAAA%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book at Marriott Hotel
            </a>
          </div> 
        </div>
        
        <p className="logout-note">
          <small>
            (The reservation links will remain accessible on this device until you close the browser)
          </small>
        </p>
      </div>
    )}
  </section>
)}

{location.pathname === '/registry' && (
      <section className="registry-section">
        <h1>Welcome and thank you!</h1>
        {/* <h2></h2> */}
        <div className="registry-content">
          <a
              className="registry-link"
              href="https://www.zola.com/wedding/emilyandhairo/registry"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zola Registry!
            </a>
        </div>
      </section>
    )}
      
      {location.pathname === '/faq' && (
        <section className="faq-section">
          <h2>FAQ</h2>
          <div className="faq-content">
            <h1>Questions & Answers</h1>
            {/* <h2>Q: How do I RSVP for the wedding?</h2>
            <h3>A: Please RSVP by (date) through the RSVP form on our website. We ask that you kindly respond as soon as possible so we can finalize our headcount!</h3> */}
            <h2> What is the dress code?</h2>
            <h3> Welcome Party: Dressy Casual - We recommend bringing a jacket to this evening event as it will be partially outdoors.</h3>
             <div className="dressAtireImage">
              <img src="https://i.imgur.com/YNK4WWE.jpeg" 
              alt="Attire inspiration example"
              width="800"
              height="300"></img>
            </div>
             
            {/* https://i.imgur.com/F7H47ld.jpeg */}
            {/* https://i.imgur.com/YNK4WWE.jpeg */}
            <h3>Wedding Day: Spring Formal - Full length or cocktail dresses in spring colors for women and classic suits or tailored separates for men.</h3>
            <div className="dressAtireImage">
              <img src="https://i.imgur.com/F7H47ld.jpeg" 
              alt="Attire inspiration example"
              width="800"
              height="300"></img></div>
            <h2> Can I bring a plus one?</h2>
            <h3> In an effort to keep our wedding as intimate as possible, only the guests formally invited on your wedding invitation will be accomodated. 
              If you received a plus one they will appear when you RSVP.</h3>
            <h2> What if I don't RSVP on time?</h2>
            <h3> If we do not receive your RSVP by the date provided, it will automatically be marked as a "no."
              We will miss celebrating with you but it is important we provide our vendors with final guest count within the time frame they have given us. 
            </h3>
            <h2> Are children allowed?</h2>
            <h3> While we adore your little ones, we've chosen to keep our celebration adults-only. Thank you for your understanding!</h3>
            <h2> Where will the wedding be?</h2>
            <h3> Our ceremony and reception will be at the Westlake Village Inn. The ceremony will be held at the Inn's Tuscan Garden at 4:30pm, followed by a reception at the Fairway Room.  
            </h3>
            <a
                className="address"
                href="https://www.westlakevillageinn.com/wp-content/uploads/2020/09/2020-property-map.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View property map. 
              </a>
          </div>
           <p className="address">
            31943 Agoura Rd, Westlake Village, CA 91361
            </p>
            <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.4415625446145!2d-118.81779308827188!3d34.14872047300877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82400adde2e2b%3A0x78672c8f8e8cc18b!2sWestlake%20Village%20Inn!5e1!3m2!1sen!2sus!4v1744655150186!5m2!1sen!2sus" 
              title="Google Maps location of Westlake Village Inn" 
              allowFullScreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            </div>
        </section>
        
      )}
        </main>
    );
}




export default Body