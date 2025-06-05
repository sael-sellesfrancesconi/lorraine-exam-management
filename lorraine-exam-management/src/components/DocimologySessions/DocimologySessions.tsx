import React, { useEffect, useState } from 'react';
import { getDocimologySessions, participateInSession } from '../../services/docimologyService';

const DocimologySessions: React.FC = () => {
    const [sessions, setSessions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSessions = async () => {
            const data = await getDocimologySessions();
            setSessions(data);
            setLoading(false);
        };

        fetchSessions();
    }, []);

    const handleParticipation = async (sessionId: string) => {
        await participateInSession(sessionId);
        // Optionally refresh the sessions after participation
        const updatedSessions = await getDocimologySessions();
        setSessions(updatedSessions);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Docimology Sessions</h1>
            <ul>
                {sessions.map(session => (
                    <li key={session.id}>
                        <h2>{session.title}</h2>
                        <p>{session.details}</p>
                        <button onClick={() => handleParticipation(session.id)}>Participate</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DocimologySessions;