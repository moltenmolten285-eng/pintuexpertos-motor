import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const MotorColores = () => {
  const [colores, setColores] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchColores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "colores"));
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setColores(data);
      } catch (error) {
        console.error("Error cargando colores:", error);
      }
    };
    fetchColores();
  }, []);

  const filtrados = colores.filter(c => 
    c.nombre?.toLowerCase().includes(busqueda.toLowerCase()) || 
    c.codigo?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>PintuExpertos - Catálogo</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Busca por nombre o código..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '10px', width: '80%', maxWidth: '400px', borderRadius: '20px', border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
        gap: '20px' 
      }}>
        {filtrados.map(color => (
          <div key={color.id} style={{ 
            backgroundColor: '#fff', 
            borderRadius: '12px', 
            padding: '15px', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            textAlign: 'center'
          }}>
            <div style={{ 
              backgroundColor: color.hex, 
              height: '100px', 
              borderRadius: '8px', 
              marginBottom: '10px',
              border: '1px solid #eee'
            }}></div>
            <strong style={{ display: 'block', fontSize: '14px' }}>{color.nombre}</strong>
            <small style={{ color: '#888' }}>{color.marca} - {color.codigo}</small>
          </div>
        ))}
      </div>
      {filtrados.length === 0 && <p style={{textAlign: 'center'}}>No se encontraron colores.</p>}
    </div>
  );
};

export default MotorColores;
