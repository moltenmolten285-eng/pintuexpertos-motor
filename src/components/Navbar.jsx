import React from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">🎨 PintuExpertos Motor</h1>
                <p className="navbar-subtitle">Combina colores como un profesional</p>
            </div>
        </nav>
    );
};