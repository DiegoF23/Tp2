import React from "react";
import "../css/Footer.css";

//import logoFacebook from"../../assets/logo-facebook.svg"

const Footer = () => {
  const style1 = {
    "--color": "white",
  };
  const style2 = {
    "--color": "#1298f6",
  };
  const style3 = {
    "--color": "#da1339",
  };
  const style4 = {
    "--color": "#1bd741",
  };
  const style5 = {
    "--color": "#de4032",
  };

  return (
    
      <div className="footer">
        <br />

        <ul className="ul">
          <li className="li" style={style2}>
            <a className="a" href="https://facebook.com" target="_blank">
              <span className="base"></span>
              <span className="title">facebook</span>
              <span className="icon">
                <ion-icon name="logo-facebook"></ion-icon>
              </span>
            </a>
          </li>
          <li className="li" style={style3}>
            <a className="a" href="https://www.instagram.com/" target="_blank">
              <span className="base"></span>
              <span className="title">instagram</span>
              <span className="icon">
                <ion-icon name="logo-instagram"></ion-icon>
              </span>
            </a>
          </li>
          <li className="li" style={style1}>
            <a
              className="a"
              href="https://github.com/DiegoF23/PortfolioUTN"
              target="_blank"
            >
              <span className="base"></span>
              <span className="title">GitHub</span>
              <span className="icon">
                <ion-icon name="logo-github"></ion-icon>
              </span>
            </a>
          </li>
          <li className="li" style={style4}>
            <a
              className="a"
              href="https://wa.me/5493816155136?text=Hola%20me%20comunico%20desde%20tu%20sitio%20web"
              target="_blank"
            >
              <span className="base"></span>
              <span className="title">WhatsApp</span>
              <span className="icon">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </span>
            </a>
          </li>
          <li className="li" style={style5}>
            <a
              className="a"
              href="mailto:floresdiego2012@gmail.com"
              target="_blank"
            >
              <span className="base"></span>
              <span className="title">Gmail</span>
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
            </a>
          </li>
        </ul>
      </div>
  );
};

export default Footer;