import axios from 'axios';

const API_URL = "http://localhost:8080";

export const createResume = async (resumeData) => {
    return axios.post(`${API_URL}/resumes/`, resumeData);
};

export const getResumes = async (skill) => {
    return axios.get(`${API_URL}/resumes/`, { params: { skill } });
};
