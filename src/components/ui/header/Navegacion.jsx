import React from "react";
import "./Navegacion.css";

const Navegacion = ({ items }) => {
  return (
    <>
      <ul className="menu">
        {items && items.map((element) => <li key={element}>{element}</li>)}
      </ul>
    </>
  );
};

export default Navegacion;
