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
  
  const enlargeImage = (imgUrl, altText) => {
    setSelectedImage({ imgUrl, altText });
  };
  
  const closeModal = () => {
    setSelectedImage(null);
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
              Welcome to our wedding website where you can learn more details.  
            </p>
            <p>
              Be sure to check back later as there's more information to come. 
            </p>
           
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
      
      {location.pathname === '/faq' && (
        <section className="faq-section">
          <h2>FAQ</h2>
          <div className="faq-content">
            <h1>Questions & Answers</h1>
            {/* <h2>Q: How do I RSVP for the wedding?</h2>
            <h3>A: Please RSVP by (date) through the RSVP form on our website. We ask that you kindly respond as soon as possible so we can finalize our headcount!</h3> */}
            <h2>Q: What is the dress code?</h2>
            <h3>A: Dress to impress! Our wedding is formal, so please wear your best outfit.<br></br> 
            We're encouraging our guests to wear pastel colors.</h3>
            <h2>Q: Can I bring a plus one?</h2>
            <h3>A: In an effort to keep our wedding as intimate as possible, only the guests formally invited on your wedding invitation will be accomodated. 
              If you received a plus one they will appear when you RSVP.</h3>
            <h2>Q: What if I don't RSVP on time?</h2>
            <h3>A: If we do not receive your RSVP by the date provided, it will automatically be marked as a "no."
              We will miss celebrating with you but it is important we provide our vendors with final guest count within the time frame they have given us. 
            </h3>
            <h2>Q: Are children allowed?</h2>
            <h3>A: While we adore your little ones, we've chosen to keep our celebration adults-only. Thank you for your understanding!</h3>
            <h2>Q: Where will the wedding be?</h2>
            <h3>A: Our ceremony and reception will be at the Westlake Village Inn. The ceremony will be held at the Inn's Tuscan Garden at 5:00pm, followed by a reception at the Wine Cellar.  
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
              // width="600" 
              // height="450" 
              // style={{ border: 0 }}
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