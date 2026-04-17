import React from 'react';
import chroma from 'chroma-js';
import '../styles/Paleta.css';

export const Paleta = ({ seleccionado, sugerencias }) => {
  return (
    <div className="paleta-container">
      <h2>Combinación Recomendada (Regla 60-30-10)</h2>
      <div className="paleta-grid">
        <div className="paleta-item base">
          <div className="paleta-color" style={{ backgroundColor: seleccionado.hex }}>
            <span className="paleta-percentage">60%</span>
          </div>
          <div className="paleta-info">
            <h3>Base Principal</h3>
            <p className="color-name">{seleccionado.nombre}</p>
            <p className="color-code">{seleccionado.hex.toUpperCase()}</p>
            <p className="color-codigo">{seleccionado.codigo}</p>
          </div>
        </div>
        <div className="paleta-item secundario">
          <div className="paleta-color" style={{ backgroundColor: sugerencias.armonia }}>
            <span className="paleta-percentage">30%</span>
          </div>
          <div className="paleta-info">
            <h3>Secundario</h3>
            <p className="color-name">Complemento Armónico</p>
            <p className="color-code">{sugerencias.armonia.toUpperCase()}</p>
          </div>
        </div>
        <div className="paleta-item acento">
          <div className="paleta-color" style={{ backgroundColor: sugerencias.acento }}>
            <span className="paleta-percentage">10%</span>
          </div>
          <div className="paleta-info">
            <h3>Acento</h3>
            <p className="color-name">Contraste Dinámico</p>
            <p className="color-code">{sugerencias.acento.toUpperCase()}</p>
          </div>
        </div>
      </div>
      <div className="paleta-preview">
        <h3>Vista Previa Combinada</h3>
        <div className="preview-box">
          <div className="preview-section base-preview" style={{ backgroundColor: seleccionado.hex, width: '60%' }}></div>
          <div className="preview-section secondary-preview" style={{ backgroundColor: sugerencias.armonia, width: '30%' }}></div>
          <div className="preview-section accent-preview" style={{ backgroundColor: sugerencias.acento, width: '10%' }}></div>
        </div>
      </div>
    </div>
  );
};