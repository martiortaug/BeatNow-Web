// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Landing from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import './App.css';
import Upload from "./components/Upload";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="*" element={<Landing />} />
                <Route path="/Upload" element={<Upload />} />
            </Routes>
        </Router>
    );
}

export default App;