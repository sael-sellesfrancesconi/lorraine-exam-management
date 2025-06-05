import React, { useState, useEffect } from 'react';
import { sendMessage, fetchMessages } from '../../services/communicationService';

const Communication: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [newMessage, setNewMessage] = useState<string>('');

    useEffect(() => {
        const loadMessages = async () => {
            const fetchedMessages = await fetchMessages();
            setMessages(fetchedMessages);
        };

        loadMessages();
    }, []);

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            await sendMessage(newMessage);
            setNewMessage('');
            const updatedMessages = await fetchMessages();
            setMessages(updatedMessages);
        }
    };

    return (
        <div>
            <h2>Communication</h2>
            <div>
                <h3>Messages</h3>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                    ))}
                </ul>
            </div>
            <div>
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Communication;