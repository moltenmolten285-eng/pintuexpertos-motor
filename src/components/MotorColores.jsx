import React, { useState } from 'react';
import chroma from 'chroma-js';
import { todosLosCatalogos } from '../data/colores';
import { Paleta } from './Paleta';
import '../styles/MotorColores.css';

export const MotorColores = () => {
    const [seleccionado, setSeleccionado] = useState(todosLosCatalogos[0]);
    const [filtroMarca, setFiltroMarca] = useState('Todas');

    const obtenerSugerencias = (colorHex) => {
        return {
            acento: chroma(colorHex).complementary().hex(),
            armonia: chroma(colorHex).brighten(1.5).hex(),
            sombra: chroma(colorHex).darken(1.5).hex()
        };
    };

    const enviarCotizacionWhatsApp = (colorPrincipal, paleta) => {
        const miTelefono = "8297333918";
        const mensaje = `¡Hola PintuExpertos! 👋 Estoy interesado en esta combinación de colores: 🎨 *Color Principal (60%):* ${colorPrincipal.nombre} (${colorPrincipal.codigo}) Marca: ${colorPrincipal.marca} | Línea: ${colorPrincipal.linea} Código HEX: ${colorPrincipal.hex} 🏠 *Color Secundario (30%):* Código HEX: ${paleta.armonia} ✨ *Color Acento (10%):* Código HEX: ${paleta.acento} ¿Podrían darme una cotización para estas pinturas?`;
        const url = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    const coloresFiltrados = filtroMarca === 'Todas' ? todosLosCatalogos : todosLosCatalogos.filter(c => c.marca === filtroMarca);
    const marcas = ['Todas', 'Popular', 'Tropical', 'King'];
    const sugerencias = obtenerSugerencias(seleccionado.hex);

    return (
        <div className="motor-container">
            <div className="motor-main">
                <div className="filter-section">
                    <h3>Filtrar por Marca</h3>
                    <div className="marca-buttons">
                        {marcas.map(marca => (
                            <button key={marca} className={`marca-btn ${filtroMarca === marca ? 'active' : ''}`} onClick={() => {
                                setFiltroMarca(marca);
                                setSeleccionado(marca === 'Todas' ? todosLosCatalogos[0] : todosLosCatalogos.find(c => c.marca === marca));
                            }}>{marca}</button>
                        ))}
                    </div>
                </div>
                <div className="selector-section">
                    <h2>Selecciona un Color</h2>
                    <select onChange={(e) => {
                        const color = coloresFiltrados.find(c => c.codigo === e.target.value);
                        setSeleccionado(color);
                    }} className="color-select" value={seleccionado.codigo}>
                        {coloresFiltrados.map(color => (<option key={color.codigo} value={color.codigo}>{color.nombre} ({color.codigo}) - {color.marca}</option>))}
                    </select>
                </div>
                <div className="color-principal">
                    <div className="color-display" style={{ backgroundColor: seleccionado.hex }}>
                        <div className="color-overlay">
                            <p className="color-name-large">{seleccionado.nombre}</p>
                            <p className="color-hex-large">{seleccionado.hex.toUpperCase()}</p>
                            <p className="color-codigo-large">{seleccionado.codigo}</p>
                        </div>
                    </div>
                    <p className="color-desc">Color Base de tu Paleta</p>
                </div>
                <Paleta seleccionado={seleccionado} sugerencias={sugerencias} />
                <div className="tip-profesional">
                    <h3>💡 Consejo del Experto</h3>
                    <p>Usa <strong>{seleccionado.nombre}</strong> como color principal en las <strong>paredes</strong>. El tono <strong>{sugerencias.armonia}</strong> es perfecto para <strong>techos o áreas secundarias</strong>, y el <strong>{sugerencias.acento}</strong> para detalles como <strong>puertas, marcos o molduras</strong>.</p>
                </div>
                <button onClick={() => enviarCotizacionWhatsApp(seleccionado, sugerencias)} className="btn-whatsapp"><span className="whatsapp-icon">💬</span><span>Cotizar esta Paleta por WhatsApp</span></button>
                <div className="brand-info">
                    <p><strong>Marca:</strong> {seleccionado.marca} | <strong> Línea:</strong> {seleccionado.linea}</p>
                </div>
            </div>
        </div>
    );
};