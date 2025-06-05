import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Lorraine Exam Management</h1>
            <p>Your platform for managing exam schedules, docimology sessions, and communication.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/exam-schedules">Exam Schedules</Link>
                    </li>
                    <li>
                        <Link to="/docimology">Docimology Sessions</Link>
                    </li>
                    <li>
                        <Link to="/communication">Communication</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;