import React from 'react';
import ReactDOM from 'react-dom/client'; // Nota: Usa 'react-dom/client' para React 18
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Recipes from './components/recipes';

const root = ReactDOM.createRoot(document.getElementById('root')); // Usar createRoot para React 18
root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/recipes" element={<Recipes />} />
            </Routes>
        </Router>
    </React.StrictMode>
);