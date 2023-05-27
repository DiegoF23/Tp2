import React from "react";
import "../css/MainContact.css";
import { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
const MainContact = () => {
  const consultas = [
    {
      id: 1,
      nombre: "Maria Abraham",
      email: "emailEjemplo@gmail.com",
      descripcion: "Me interesa contactarme con tigo para el desarrollo de una pag Web",
    },
    {
      id: 2,
      nombre: "Enzo Gonzales",
      email: "enzito@gmail.com",
      descripcion: "Hola cual es el presupuesto de los proyectos en React",
    },
    {
      id: 3,
      nombre: "Nelson Lobo",
      email: "nelsonLobo@hotmail.com",
      descripcion: "Necesito realizar un proyecyo en C# con conexion a BD SQL Server, contactame para mas informacion",
    },
    {
      id: 4,
      nombre: "Ricardito",
      email: "helloPdf@noCode.com",
      descripcion: "Abran el PDF",
    }
    
  ];

  const [pedidos, setPedidos] = useState(consultas);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [id, setId] = useState(null);

  const myStyles = {
    width: "60%",
    backgroundColor: "orange",
  };

  const handlerChange = (e) => {
    setEmail(e.target.value);
  };
  const agregarConsulta = (e) => {
    e.preventDefault();
    setPedidos([...pedidos, { id, nombre, email, descripcion }]);
    alert("Gracias me contactare con tigo 😉");
    e.target.reset();
  };

  const deleteConsulta = (id) => {
    console.log("borro el id: " + id);
    const resultado = pedidos.filter((pedido) => pedido.id !== id);
    setPedidos(resultado);
  };
  return (
    <div className="contact">
      <h1 className="text-center">Contactame</h1>
      <br />
      <br />
      <div className="form-table">
        <div className="form">
          <Form  onSubmit={agregarConsulta}>
            <Form.Group style={{ width: "80%", margin: "auto" }}>
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setId(e.target.value)}
                required
              />
              <br />
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
              <br />
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="text" onChange={handlerChange} required />
              <br />
              <Form.Label type="text">Descripcion</Form.Label>
              <Form.Control
                onChange={(e) => setDescripcion(e.target.value)}
                required
              />
              <br />
              <Button className="btn btn-primary" type="submit">
                Enviar 😄
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div className="tabla">
          <Table striped bordered hover className="container">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre </th>
                <th>Email</th>
                <th>Descripcion</th>
                <th>acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.id}</td>
                  <td>{pedido.nombre}</td>
                  <td>{pedido.email}</td>
                  <td>{pedido.descripcion}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteConsulta(pedido.id)}
                    >
                      eliminar 😕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>{" "}
      </div>
    </div>
  );
};

export default MainContact;
