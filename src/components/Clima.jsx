import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Clima = ({clima, ubicacion}) => {
  return (
    <article>
      <Card className="h-100">
        <Card.Header className="shadow bg-light text-dark h-100">
          <p className="fs-5 text-uppercase text-start">{ubicacion.name}, {ubicacion.country}</p>
          <p>{clima.name}</p>
          <p>{clima.weather[0].description}</p>
          <p className="lead text-center">{clima.main.temp}</p>
          <div>
            <p className="lead text-center">{clima.main.temp_min}</p>
            <p className="lead text-center">{clima.main.temp_max}</p>
          </div>
        </Card.Header>
        <Card.Body className="text-center border-top border-bottom border-light subtle h-100">
          <p className="text-truncate"></p>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <a href="hola">
            <Button>Ver noticia completa</Button>
          </a>
        </Card.Footer>
      </Card>
    </article>
  );
};

export default Clima;
