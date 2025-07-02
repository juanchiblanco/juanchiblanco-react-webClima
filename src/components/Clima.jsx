import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Clima = ({ clima, ubicacion }) => {
  return (
    <article className="row justify-content-center">
      <Card className="border-0 w-75">
        <Card.Body className="shadow bg-light text-dark h-100 d-flex">
          <div className="me-auto">
            <p className="fs-5 text-uppercase text-start">
              {ubicacion.name}, {ubicacion.country}
            </p>
            <p>{clima.name}</p>
            <p>
              {clima.weather && clima.weather.length > 0
                ? clima.weather[0].description
                : "Información no disponible"}
            </p>
          </div>
          <div>
            <p className="text-center display-2">
              {clima.weather && clima.weather.length > 0
                ? `${clima.main.temp} °`
                : "Información no disponible"}
            </p>
            <p className="text-center">
              {clima.weather && clima.weather.length > 0
                ?  `Min: ${clima.main.temp_min} °`
                : "Información no disponible"}
            </p>
            <p className="text-center">
              {clima.weather && clima.weather.length > 0
                ? `Max: ${clima.main.temp_max} °`
                : "Información no disponible"}
            </p>
          </div>
        </Card.Body>
      </Card>
    </article>
  );
};

export default Clima;
