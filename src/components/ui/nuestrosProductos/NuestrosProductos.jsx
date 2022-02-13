import React from "react";
import "./NuestrosProductos.css";

import Producto from "../../../assets/images/Producto";

const NuestrosProductos = () => {
  return (
    <main className="contenedor contenido-principal">
      <h2 className="text-center">Nuestros productos</h2>
      <div className="listado-productos">
        {Producto &&
          Producto.map((item) => (
            <div key={item.title} className="producto">
              <img src={item.imagen} alt="" />
              <div className="texto-producto">
                <h3>{item.title}</h3>
                <p>{item.info}</p>
                <p>{item.precio}</p>
                <a href="#" className="btn">
                  Agregar al Carrito
                </a>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default NuestrosProductos;
