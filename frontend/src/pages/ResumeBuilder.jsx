import React, { useState } from 'react';
import '../index.css';

const ResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreview(true);
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>
      {preview ? (
        <div>
          <h2>Preview</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Education:</strong> {formData.education}</p>
          <p><strong>Experience:</strong> {formData.experience}</p>
          <p><strong>Skills:</strong> {formData.skills}</p>
          <button onClick={() => setPreview(false)}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <label htmlFor="education">Education</label>
          <textarea
            id="education"
            name="education"
            rows="4"
            value={formData.education}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="experience">Work Experience</label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="skills">Skills</label>
          <textarea
            id="skills"
            name="skills"
            rows="3"
            value={formData.skills}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Preview Resume</button>
        </form>
      )}
    </div>
  );
};

export default ResumeBuilder;
