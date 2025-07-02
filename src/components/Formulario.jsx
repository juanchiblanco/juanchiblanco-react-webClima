import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Clima from "./Clima";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";

const Formulario = () => {
  const [clima, setClima] = useState([]);
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    if (latitud && longitud) {
      obtenerClima();
    }
  }, [latitud, longitud]);

  const obtenerUbicacion = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=13aa66a88f30ffd8edf17ce839c338c6&lang=es`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        if (datos.length === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "La ciudad no fue encontrada!",
          });
        }
        setLatitud(datos[0].lat);
        setLongitud(datos[0].lon);
        setUbicacion(datos[0]);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "La API no funciona en este momento!",
      });
    }
  };

  const obtenerClima = async () => {
    try {
      setMostrarSpinner(true);
      const respuestaClima = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=13aa66a88f30ffd8edf17ce839c338c6&units=metric&lang=es`
      );
      if (respuestaClima.status === 200) {
        const datosClima = await respuestaClima.json();
        setClima(datosClima);
        console.log(datosClima);
      }
      setMostrarSpinner(false);
    } catch (error) {}
  };

  return (
    <section className="container">
      <div>
        <Form onSubmit={obtenerUbicacion} className="mb-4">
          <Form.Group className="mb-3 row justify-content-center gap-2">
            <Form.Control
              type="text"
              placeholder="Ingresa una ciudad"
              className="col-12 col-md-6"
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
            />
            <Form.Control
              type="text"
              placeholder="Ingresa un pais"
              className="col-12 col-md-6"
              onChange={(e) => setPais(e.target.value)}
              value={pais}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Consultar clima
          </Button>
        </Form>
      </div>
      <div>
        {mostrarSpinner === true ? (
          <div className="my-4 text-center">
            <Spinner variant="light" />
          </div>
        ) : (
          <Clima clima={clima} ubicacion={ubicacion} />
        )}
      </div>
    </section>
  );
};

export default Formulario;
