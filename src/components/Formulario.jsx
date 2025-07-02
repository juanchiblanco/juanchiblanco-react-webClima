import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Clima from "./Clima";

const Formulario = () => {

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    return (
        <section className="container">
            <div>
                <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group className="mb-3 row justify-content-center gap-2">
          <Form.Control
            type="text"
            placeholder="Ingresa una ciudad"
            {...register("inputCiudad", {
              required: "La ciudad es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La ciudad debe tener 3 caracteres como minimo",
              },
              maxLength: {
                value: 50,
                message: "La ciudad debe tener 50 caracteres como minimo",
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,50}$/,
                message:
                  "La ciudad debe contener caracteres alfa, mayusculas o minusculas",
              },
            })} className="col-12 col-md-6"
          />
          <Form.Text className="text-danger">
          {errors.inputCiudad?.message}
        </Form.Text>
          <Form.Control
            type="text"
            placeholder="Ingresa un pais"
            {...register("inputPais", {
              required: "El pais es un dato obligatorio",
              minLength: {
                value: 3,
                message: "El pais debe tener 3 caracteres como minimo",
              },
              maxLength: {
                value: 50,
                message: "El pais debe tener 50 caracteres como minimo",
              },
              pattern: {
                value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{1,50}$/,
                message:
                  "El pais debe contener caracteres alfa, mayusculas o minusculas",
              },
            })} className="col-12 col-md-6"
          />
          
        <Form.Text className="text-danger">
          {errors.inputPais?.message}
        </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
            Consultar clima
          </Button>
      </Form>
            </div>
        <Clima/>
        </section>
    );
};

export default Formulario;