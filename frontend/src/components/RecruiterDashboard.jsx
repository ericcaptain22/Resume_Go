import React, { useState, useEffect } from 'react';
import { getResumes } from '../api';

const RecruiterDashboard = () => {
    const [resumes, setResumes] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        const response = await getResumes(search);
        setResumes(response.data);
    };

    return (
        <div>
            <input
                placeholder="Search by skill"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {resumes.map((resume) => (
                    <li key={resume.id}>
                        {resume.name} - {resume.skills} - {resume.location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecruiterDashboard;
