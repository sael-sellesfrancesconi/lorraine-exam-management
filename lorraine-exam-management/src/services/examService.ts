// src/services/examService.ts
import axios from 'axios';

const API_URL = '/api/exams';

export const fetchExamSchedules = async () => {
    try {
        const response = await axios.get(`${API_URL}/schedules`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exam schedules');
    }
};

export const signUpForExam = async (examId, teacherId) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, { examId, teacherId });
        return response.data;
    } catch (error) {
        throw new Error('Error signing up for exam');
    }
};

export const fetchExamDetails = async (examId) => {
    try {
        const response = await axios.get(`${API_URL}/details/${examId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exam details');
    }
};