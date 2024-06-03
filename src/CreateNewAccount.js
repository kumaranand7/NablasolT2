import React from 'react';
import './CreateNewAccount.css';
import { useNavigate } from 'react-router-dom';
import wave from './wave.svg';


const CreateNewAccount = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate('/business-info');
  };

  return (
    <> 
     <img src={wave} alt="wave bg" id='wave-img'/>
    <div className="create-account-container">
         

            <div className="contact-us">Contact Us</div>

      <h2>Create New Account</h2>
      <div className="step-container">
        <div className="step-indicator active">
          <span>1</span>
          <span>Your Profile</span>
        </div>
        <div className="step-indicator">
          <span>2</span>
          <span>Business Information</span>
        </div>
        <div className="step-indicator">
          <span>3</span>
          <span>Additional Users</span>
        </div>
      </div>
      <div className="form-container">
        <h3>Step 1: Your Profile</h3>
        <p>Enter the login information for your account. You will be able to create additional users after registering.</p>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="firstName">First Name*</label>
            <input type="text" id="firstName" placeholder="Input Your First Name" />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name*</label>
            <input type="text" id="lastName" placeholder="Input Your Last Name" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="Input Your Email" />
          </div>
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input type="text" id="phoneNumber" placeholder="Input Your Phone Number" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-field">
            <label htmlFor="password">Password*</label>
            <input type="password" id="password" placeholder="Create Password" />
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password*</label>
            <input type="password" id="confirmPassword" placeholder="Confirm Your Password" />
          </div>
        </div>
      
      </div>
      <div className="button-container">
          <button className="back-button">Back to Login</button>
          <button className="next-button" onClick={handleNextClick}>
            Next Step
          </button>
        </div>
    </div>
    </>
  );
};

export default CreateNewAccount;