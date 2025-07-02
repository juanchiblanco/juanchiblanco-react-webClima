import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main className="container my-3">
        <h1 className="text-center">Hola Mundo</h1>
        <Formulario/>
      </main>
      <footer className="bg-info text-light text-center py-3">
        <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
