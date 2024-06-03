import React from 'react';
import './BusinessInformation.css';
import crossIcon from './crossIcon.svg';
import correctIcon from './correctIcon.svg';


const BusinessInformation = () => {
  return (
    <div className="create-account-container">
                  <div className="contact-us">Contact Us</div>

            <h2>Create New Account</h2>


      <div className="step-container">
        <div className="step-indicator">
          <span>1</span>
          <span>Your Profile</span>
        </div>
        <div className="step-indicator active">
          <span>2</span>
          <span>Business Information</span>
        </div>
        <div className="step-indicator">
          <span>3</span>
          <span>Additional Users</span>
        </div>
      </div>
      <div className="form-container">
        <h3>Step 2: Business Information</h3>
        <p>Please, enter information about your company.</p>
        <div className="general-info">
       
          <div className="form-group">
       
            <div className="form-field">
               
              <label htmlFor="brandName">Brand Name*</label>
              <input type="text" id="brandName" placeholder="Input Your Brand Name" />
            </div>
            <div className="dropdown">
              <label htmlFor="brandType">Brand Type*</label>
              <select id="brandType">
                <option value="">Select Type</option>
                <option value="local">
                  Local: Brands with distribution in 3 divisions or less OR multiple divisions but a total of 150 stores or less.
                </option>
                <option value="national">National: Brands with distribution in 4 or more divisions or in more than 150 stores.</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="streetAddress">Street Address*</label>
              <input type="text" id="streetAddress" placeholder="Input Your Street Address" />
            </div>
            <div className="form-field">
              <label htmlFor="city">City*</label>
              <input type="text" id="city" placeholder="Input City" />
            </div>
          </div>
          <div className="form-group">
            <div className="form-field">
              <label htmlFor="zipCode">Zip Code*</label>
              <input type="text" id="zipCode" placeholder="Input Zip Code" />
            </div>
            <div className="form-field">
              <label htmlFor="taxID">Tax ID Number*</label>
              <input type="text" id="taxID" placeholder="Input Tax ID Number" />
            </div>
          </div>
        </div>
        <div className="documents">
  <h4>DOCUMENTS</h4>
  <p>Once the following documents are signed, you'll be ready to get started</p>
  <div className="document-item">
    <div className="document-text">
      <i className="fa fa-check"></i>
      <span>Electronically sign the agreement(s)</span>
    </div>
   
    <i className="fa fa-chevron-right"></i>
    <img src={correctIcon} alt="correct icon " />
  </div>
  
  <div className="document-item">
    <div className="document-text">
      <i className="fa fa-times"></i>
      <span>Non adult beverage Kroger market supplier waiver and release</span>
    </div>
    <i className="fa fa-chevron-right"></i>
    <img src={crossIcon} alt="cross icon " />

  </div>
</div>
<div className="coi-pdf">
  <h4>COI PDF UPLOAD</h4>
  <p>Once the following documents are signed, you'll be ready to get started</p>
  <div className="document-item">
    <div className="document-text">
      <i className="fa fa-check"></i>
      <span>Electronically sign the agreement(s)</span>
    </div>
    <i className="fa fa-chevron-right"></i>
    <img src={correctIcon} alt="correct icon " />

  </div>
</div>
      
      </div>
      <div className="button-container">
          <button className="back-button">Back to Login</button>
          <div>
            <button className="prev-button" onClick={() => window.history.back()}>Previous Step</button>
            <button className="next-button">Next Step</button>
          </div>
        </div>
    </div>
  );
};

export default BusinessInformation;