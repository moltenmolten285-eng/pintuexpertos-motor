import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

function App() {
  const [colores, setColores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerColores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "colores"));
        const listaColores = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setColores(listaColores);
        setLoading(false);
      } catch (error) {
        console.error("Error al traer colores: ", error);
        setLoading(false);
      }
    };
    obtenerColores();
  }, []);

  if (loading) return <div style={{padding: '20px'}}>Cargando motor de colores...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>PintuExpertos - Motor de Colores</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px' }}>
        {colores.map((color) => (
          <div key={color.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
            <div style={{ backgroundColor: color.hex, height: '100px', borderRadius: '4px', marginBottom: '10px' }}></div>
            <strong>{color.nombre}</strong>
            <p style={{ fontSize: '12px', color: '#666' }}>{color.marca} - {color.codigo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
