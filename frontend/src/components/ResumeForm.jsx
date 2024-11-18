import React, { useState } from 'react';
import { createResume } from '../api';

const ResumeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        skills: '',
        experience: 0,
        location: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createResume(formData);
            alert("Resume created successfully!");
        } catch (err) {
            console.error("Error creating resume:", err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="skills" placeholder="Skills" onChange={handleChange} />
            <input type="number" name="experience" placeholder="Experience" onChange={handleChange} />
            <input name="location" placeholder="Location" onChange={handleChange} />
            <button type="submit">Create Resume</button>
        </form>
    );
};

export default ResumeForm;
