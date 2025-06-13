import React, { useState } from "react";

const RSVPForm = ({ addRSVP }) => {
  // Initialize state for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    postalAddress: '',
    city: '',
    postcode: '',
    attendance: '',
    music: '',
    guestName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRSVP(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      postalAddress: '',
      city: '',
      postcode: '',
      attendance: '',
      music: '',
      guestName: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h3>We can't wait to celebrate with you!</h3>
      
      <div className="form-group">
        <label htmlFor="name">Your Name*</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="postalAddress">Street Address</label>
        <input 
          type="text" 
          id="postalAddress" 
          name="postalAddress"
          value={formData.postalAddress}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city" 
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="postcode">Postal Code</label>
          <input 
            type="text" 
            id="postcode" 
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Will you be attending?*</label>
        <select 
          name="attendance"
          value={formData.attendance}
          onChange={handleChange}
          required
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes, absolutely!</option>
          <option value="No">Regretfully, no</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="music">Song Requests</label>
        <input 
          type="text" 
          id="music" 
          name="music"
          value={formData.music}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="guestName">Guest Name</label>
        <input 
          type="text" 
          id="guestName" 
          name="guestName"
          value={formData.guestName}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="submit-button">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;