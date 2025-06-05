import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ExamSchedules from './pages/ExamSchedules';
import Docimology from './pages/Docimology';
import Communication from './pages/Communication';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/exam-schedules" component={ExamSchedules} />
                <Route path="/docimology" component={Docimology} />
                <Route path="/communication" component={Communication} />
            </Switch>
        </Router>
    );
};

export default App;