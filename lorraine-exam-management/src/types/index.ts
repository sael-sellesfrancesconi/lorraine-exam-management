// This file exports TypeScript types and interfaces used throughout the application.

export interface ExamSchedule {
    id: string;
    date: string;
    time: string;
    subject: string;
    teacherId: string;
}

export interface DocimologySession {
    id: string;
    date: string;
    time: string;
    participants: string[];
}

export interface CommunicationMessage {
    id: string;
    senderId: string;
    recipientId: string;
    content: string;
    timestamp: Date;
}

export interface Teacher {
    id: string;
    name: string;
    email: string;
}