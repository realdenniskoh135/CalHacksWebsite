import React from 'react';

export default function Home() {
  return (
    <form className="form-container">
      <img src="https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/branding/cal_hacks_9" alt="Cal Hacks Logo" className="form-logo" />
      <h1 className="form-field">Cal Hacks 2024 Hackathon Registration</h1>
      
      <div className="form-field">
        <label htmlFor="frm-full-name">Participant Full Name</label>
        <input id="frm-full-name" type="text" name="full-name" required />
      </div>
      
      <div className="form-field">
        <label htmlFor="frm-university">University</label>
        <input id="frm-university" type="text" name="university" required />
      </div>

      <div className="form-field">
        <label htmlFor="frm-major">Major(s)</label>
        <input id="frm-major" type="text" name="major" required />
      </div>

      <div className="form-field">
        <label htmlFor="frm-graduation-date">Graduation Date</label>
        <select id="frm-graduation-date" name="graduation-date" required>
          <option value="">Select Year</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">Other</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="frm-gender">Gender</label>
        <select id="frm-gender" name="gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="prefer-not-to-say">Non-Binary / Prefer Not To Say</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="frm-country">Country of Residence</label>
        <input id="frm-country" type="text" name="country" required />
      </div>
      
      <div className="form-field">
        <label htmlFor="frm-message">
          Why are you interested in attending Cal Hacks 11.0? 
          What are you interested in building? (1000 character maximum)
        </label>
        <textarea id="frm-message" name="message" rows="5"></textarea>
      </div>

      <div className="form-field">
        <label htmlFor="frm-resume">Upload Resume</label>
        <input id="frm-resume" type="file" name="resume" className="resume-upload" required />
      </div>

      <fieldset className="age-verification">
        <legend>Age Verification</legend>
        <div>
          <input type="checkbox" id="age-verification" name="age-verification" />
          <label htmlFor="age-verification">I am 18 years of age or older</label>
        </div>
      </fieldset>
      
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}
