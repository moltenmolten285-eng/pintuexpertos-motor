import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const MotorColores = () => {
  const [colores, setColores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "colores"));
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setColores(docs);
        setLoading(false);
      } catch (error) {
        console.error("Error en Firebase:", error);
        setLoading(false);
      }
    };
    obtenerDatos();
  }, []);

  if (loading) return <div style={{padding: '20px'}}>Cargando colores de PintuExpertos...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Panel de Colores</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
        gap: '20px' 
      }}>
        {colores.map((c) => (
          <div key={c.id} style={{ border: '1px solid #ddd', borderRadius: '12px', padding: '10px', textAlign: 'center', backgroundColor: '#fff' }}>
            <div style={{ backgroundColor: c.hex || '#ccc', height: '80px', borderRadius: '8px', marginBottom: '10px' }}></div>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{c.nombre || 'Sin nombre'}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{c.codigo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotorColores;
