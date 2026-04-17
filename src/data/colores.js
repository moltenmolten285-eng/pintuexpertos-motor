export const catalogoPopular = [
    { nombre: "Azul Colonial", codigo: "CC-054", hex: "#2E5077", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Verde Bosque", codigo: "CC-062", hex: "#435334", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Crema Suave", codigo: "CC-012", hex: "#F3EEEA", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Gris Cemento", codigo: "CC-088", hex: "#9DB2BF", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Rojo Ladrillo", codigo: "CC-041", hex: "#9A3B3B", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Amarillo Ocre", codigo: "CC-025", hex: "#E2B659", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Blanco Puro", codigo: "CC-001", hex: "#FFFFFF", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Negro Profundo", codigo: "CC-099", hex: "#1A1A1A", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Turquesa Caribeño", codigo: "CC-055", hex: "#0DB4A6", marca: "Popular", linea: "CC-Pro" },
    { nombre: "Marrón Tierra", codigo: "CC-043", hex: "#6B4423", marca: "Popular", linea: "CC-Pro" }
];

export const catalogoTropical = [
    { nombre: "Azul Caribeño", codigo: "TR-101", hex: "#0077BE", marca: "Tropical", linea: "Contractor" },
    { nombre: "Verde Tropical", codigo: "TR-102", hex: "#2D6A4F", marca: "Tropical", linea: "Contractor" },
    { nombre: "Arena Playa", codigo: "TR-103", hex: "#E8D4B8", marca: "Tropical", linea: "Contractor" },
    { nombre: "Gris Isla", codigo: "TR-104", hex: "#A8A8A8", marca: "Tropical", linea: "Contractor" },
    { nombre: "Coral Atardecer", codigo: "TR-105", hex: "#FF6B6B", marca: "Tropical", linea: "Contractor" },
    { nombre: "Mango Dorado", codigo: "TR-106", hex: "#FFB703", marca: "Tropical", linea: "Contractor" }
];

export const catalogoKing = [
    { nombre: "Azul Ejecutivo", codigo: "K-201", hex: "#1E3A5F", marca: "King", linea: "Superior" },
    { nombre: "Verde Profesional", codigo: "K-202", hex: "#3A5A3A", marca: "King", linea: "Superior" },
    { nombre: "Beige Premium", codigo: "K-203", hex: "#E5D5C0", marca: "King", linea: "Superior" },
    { nombre: "Gris Moderno", codigo: "K-204", hex: "#7B7B7B", marca: "King", linea: "Superior" },
    { nombre: "Rojo Sofisticado", codigo: "K-205", hex: "#8B3A3A", marca: "King", linea: "Superior" },
    { nombre: "Oro Luxe", codigo: "K-206", hex: "#D4A574", marca: "King", linea: "Superior" },
    { nombre: "Gris Proyecto", codigo: "K-301", hex: "#989898", marca: "King", linea: "Proyecto" },
    { nombre: "Blanco Construcción", codigo: "K-302", hex: "#F5F5F5", marca: "King", linea: "Proyecto" }
];

export const todosLosCatalogos = [
    ...catalogoPopular,
    ...catalogoTropical,
    ...catalogoKing
];
