import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Taps/Home';
import Guideline from './Taps/Guideline.js';
import Information from './Taps/Information.js';
import AddInfo from './Taps/AddInfo.js';
import Requirement from './Taps/Requirement.js';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div classname="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/guideline" element={<Guideline />} />
                    <Route path="/information" element={<Information />} />
                    <Route path="/addinfo" element={<AddInfo />} />
                    <Route path="/requirement" element={<Requirement />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
