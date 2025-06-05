// src/services/docimologyService.ts
import { DocimologySession, Teacher } from '../types';

const docimologySessions: DocimologySession[] = [];

// Function to fetch all docimology sessions
export const fetchDocimologySessions = async (): Promise<DocimologySession[]> => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(docimologySessions);
        }, 1000);
    });
};

// Function to add a new docimology session
export const addDocimologySession = async (session: DocimologySession): Promise<void> => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            docimologySessions.push(session);
            resolve();
        }, 1000);
    });
};

// Function to manage teacher participation in a session
export const manageTeacherParticipation = async (sessionId: string, teacher: Teacher, isParticipating: boolean): Promise<void> => {
    // Simulate an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            const session = docimologySessions.find(s => s.id === sessionId);
            if (session) {
                if (isParticipating) {
                    session.participants.push(teacher);
                } else {
                    session.participants = session.participants.filter(p => p.id !== teacher.id);
                }
            }
            resolve();
        }, 1000);
    });
};