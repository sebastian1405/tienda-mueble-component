import React from "react";
import "./Footer.css";
import FooterInfo from "./FooterInfo";
// import FooterInfo from './FooterInfo';

const footer = ({ children }) => {
  const categorias = ["Cocina", "Oficina", "Jardín", "Cochera", "Dormitorio"];
  const sobreNosotros = [
    "Nuestra Historia",
    "Misión, Visión y Valores",
    "Carreras",
    "Políticas de Privacidad",
    "Términos del Servicio",
  ];
  const soporte = [
    "Preguntas Frecuentes",
    "Ayuda en línea",
    "Confianza y Seguridad",
  ];

  return (
    <footer className="footer">
      <div className="footer-grid contenedor">
        <FooterInfo
          categorias={categorias}
          sobreNosotros={sobreNosotros}
          soporte={soporte}
        />
        {/* {
          FooterInfo && FooterInfo.map(item=>(
            <div key={item.id}>
              <h3>{item.title}</h3>
              <nav>
                {
                  item.info && item.info.map(e => <a href='/' key={e}>{e}</a>)
                }
              </nav>
            </div>
          ))
        } */}
      </div>
      {children}
    </footer>
  );
};

export default footer;
