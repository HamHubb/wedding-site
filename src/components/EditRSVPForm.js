import React, { useState } from 'react';

const EditRSVPForm = ({ rsvp, updateRSVP, onCancel }) => {
  const [formData, setFormData] = useState(rsvp);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRSVP(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h3>Edit Your RSVP</h3>
      
      <div className="form-group">
        <label htmlFor="name">Your Name*</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your email*</label>
        <input 
          type="text" 
          id="email" 
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalAddress ">Your address*</label>
        <input 
          type="text" 
          id="postalAddress" 
          name="postalAddress"
          value={formData.postalAddress || ''}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="form-actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Save Changes</button>
      </div>
    </form>
  );
};

export default EditRSVPForm