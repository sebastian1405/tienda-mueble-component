import Header from "./components/ui/header/Header";
import Hero from "./components/ui/Hero";
import CategoriaProducto from "./components/ui/categoriaProducto/CategoriaProducto";
import SobreNosotros from "./components/ui/sobreNosotros/SobreNosotros";
import NuestrosProductos from "./components/ui/nuestrosProductos/NuestrosProductos";
import Footer from "./components/ui/footer/Footer";

import img from "./assets/images/principal.jpg";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero img={img} />
      <CategoriaProducto />
      <SobreNosotros />
      <NuestrosProductos />
      <Footer>
        <p className="copyright">
          Todos los Derechos Reservados - TiendaMueble
        </p>
      </Footer>
    </div>
  );
}

export default App;
