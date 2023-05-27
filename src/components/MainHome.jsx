import React from "react";
import "../css/mainHome.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/slider1.png";
import img2 from "../assets/slider2.png";
import img3 from "../assets/slider3.png";
import img4 from "../assets/slider4.png";
import img5 from "../assets/slider5.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imgCard from "../assets/card.jpg";
const MainHome = ({ alumno }) => {
  return (
    <div className="home">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="home-info">
        <div className="card">
          <div className="imagen">
            <img className="img-card" src={imgCard} alt="" />
          </div>
          <div className="info">
            <h4>
              <ul>
                <li>Nombre:{alumno.nombre}</li>
                <li>Edad:{alumno.edad} años</li>
                <li>Legajo:{alumno.legajo}</li>
                <li>Telefono:{alumno.tel}</li>
                <li>Universidad:{alumno.uni}</li>
              </ul>
            </h4>
          </div>
        </div>
        <div className="tarjetaPerfil">
          <h4 className="p">
            Bienvenidos a la presentación de {alumno.nombre}, estudiante
            de la carrera Tecnicatura Universitaria en Programación en la {alumno.uni}, nacido en San José de Metán, Salta, Argentina, con 28 años.
            Diego ha estado desarrollando habilidades en programación durante
            los últimos años y actualmente se encuentra en su último año de la
            carrera. Ha trabajado con lenguajes como C++, Pascal, C#, SQLserver,
            mySQL, HTML, CSS, Bootstrap, JavaScript y React, entre otros. Su
            pasión por la informática lo ha llevado a tener un amplio
            conocimiento en estas áreas. Pero Diego no solo se enfoca en la
            informática, también tiene intereses en la carpintería, finanzas,
            inversiones, cocina, electrónica y disfruta de una amplia variedad
            musical. Esta diversidad de intereses ha ampliado su perspectiva y
            le ha permitido desarrollar habilidades en diferentes campos. Con su
            actitud proactiva y su constante deseo de aprendizaje, Diego está
            seguro de que puede contribuir en cualquier proyecto que se
            proponga. No dudes en contactarlo si estás buscando un profesional
            dedicado y apasionado en su trabajo.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MainHome;
