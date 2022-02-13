import React from "react";

import Navegacion from "./Navegacion";
import "./Header.css";

const Header = () => {
  const menu = ["Inicio", "Nosotros", "Tienda", "Blog", "Galería", "Contacto"];

  return (
    <div className="header">
      <h1 className="text-center">
        Tienda <span>Mueble</span>{" "}
      </h1>
      <Navegacion items={menu} />
    </div>
  );
};

export default Header;
