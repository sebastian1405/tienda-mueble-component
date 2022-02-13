import React from "react";
import "./Productos.css";

const Productos = ({ product }) => {
  return (
    <div className="categorias-productos">
      {product &&
        product.map((item) => (
          <div key={item.title} className="category-product">
            <img src={item.imagen} alt={item.alt} />
            <a href="#">{item.title}</a>
          </div>
        ))}
    </div>
  );
};

export default Productos;
