import { useState, useEffect } from "react";

export function Productos() {
  const [listaProductos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const res = await fetch("./data.json");
      const data = await res.json();
      setProductos(data);
    };

    getProductos();
  }, []); // ✅ solo se ejecuta una vez

  return (
    <div>
      {listaProductos.map((produc) => (
        <div key={produc.id} className="producto">
          <h2>{produc.name}</h2>
          <p><b>Precio:</b> S/ {produc.price}</p>
          <p><b>Categoría:</b> {produc.category}</p>
          <p><b>Stock:</b> {produc.inStock ? "✅ Disponible" : "❌ Agotado"}</p>
          <p><b>Rating:</b> ⭐ {produc.rating}</p>
          <p><b>Descripción:</b> {produc.description}</p>
        </div>
      ))}
    </div>
  );
}