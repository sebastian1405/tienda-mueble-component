// export default [
//   {id: 1,title:'Categorías', info:['Cocina','Oficina','Jardín','Cochera','Dormitorio']},
//   {id: 2,title:'Sobre Nosotros', info:['Nuestra Historia','Misión, Visión y Valores','Carreras','Políticas de Privacidad','Términos del Servicio']},
//   {id: 3,title:'Soporte', info:['Preguntas Frecuentes','Ayuda en línea','Confianza y Seguridad']}
// ]
import React from "react";

const FooterInfo = ({ categorias, sobreNosotros, soporte }) => {
  return (
    <>
      <div>
        <h3>Categorias</h3>
        <nav>
          {categorias?.map((i) => (
            <a href="/">{i}</a>
          ))}
        </nav>
      </div>
      <div>
        <h3>Sobre Nosotros</h3>
        <nav>
          {sobreNosotros?.map((i) => (
            <a href="/">{i}</a>
          ))}
        </nav>
      </div>
      <div>
        <h3>Soporte</h3>
        <nav>
          {soporte?.map((i) => (
            <a href="/">{i}</a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default FooterInfo;
