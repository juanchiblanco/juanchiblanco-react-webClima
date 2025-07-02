import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Clima = () => {
  return (
    <article>
      <Card className="h-100">
        <Card.Header className="shadow bg-light text-dark h-100">
          <p className="fs-5 text-uppercase text-start">Hola</p>
          <img
            src={
              "https://hsconsultinggroup.net/wp-content/themes/consultix/images/no-image-found-360x250.png"
            }
            alt="hola"
            className="img-fluid imgCard"
          />
          <p className="lead text-center">hola </p>
        </Card.Header>
        <Card.Body className="text-center border-top border-bottom border-light subtle h-100">
          <p className="text-truncate">hola</p>
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
