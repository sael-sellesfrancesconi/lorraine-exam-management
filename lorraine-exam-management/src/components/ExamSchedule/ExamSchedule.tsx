import React, { useState, useEffect } from 'react';
import { fetchExamSchedules, signUpForExam } from '../../services/examService';

const ExamSchedule: React.FC = () => {
    const [schedules, setSchedules] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSchedules = async () => {
            try {
                const data = await fetchExamSchedules();
                setSchedules(data);
            } catch (err) {
                setError('Failed to load exam schedules');
            } finally {
                setLoading(false);
            }
        };

        loadSchedules();
    }, []);

    const handleSignUp = async (examId: string) => {
        try {
            await signUpForExam(examId);
            alert('Successfully signed up for the exam!');
        } catch (err) {
            alert('Failed to sign up for the exam');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Exam Schedule</h1>
            <ul>
                {schedules.map(schedule => (
                    <li key={schedule.id}>
                        {schedule.date} - {schedule.subject}
                        <button onClick={() => handleSignUp(schedule.id)}>Sign Up</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExamSchedule;