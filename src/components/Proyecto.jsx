import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import LogoGrupo from "../images/logogrupo.svg"
import Rolling from "../images/logotech.png"
import Qr from "../images/qrcode.svg"
import Triangulo from "../images/triangulo.svg"


const Integrantes = () => {
  return (
    <AbsoluteWrapper>
      <div className="container-fluid">
        <article className="row" style={{ backgroundColor: '#FFFFFF', height: '500px' }} >
          <div className="col-3">
          <img src={LogoGrupo} className="img-fluid mb-5"  alt="" style={{ maxWidth: '160px', paddingTop: '1.5rem', paddingLeft: '38px' }} />
          <p className="tituloSeccion mt-5">El proyecto</p>
          </div>
          <div className="col-6">
            <img src={Rolling} alt="" style={{ width: '900px', paddingTop: '9rem' }}/>
          </div>
          <div className="col-3">
            <img src={Qr} alt="" style={{ paddingTop: '7rem', width: '270px' }} className="text-center"/>
          </div>
          
        </article>
      </div>
      <div className="container-fluid" style={{ backgroundColor: '#aaaaaa', height: '485px', width: '100%' }}>
        <div className="row">
          <div className="col-3">
          <p className="subtitulo1 ml-5 mt-5">
              Comisión i7
            </p>
          </div>
          <div className="col-6">
            <p className="bajadaProyecto mt-5 pl-4">El proyecto constó en la creación de un sistema que permita a la empresa Rolling Tech su relación con los clientes desarrollando una aplicación para la venta de insumos tecnológicos utilizando la librería de React con una interface moderna e intuitiva.</p>
          </div>
          <div className="col-3">
          <img src={Triangulo} alt="" style={{ width:'160px', paddingLeft: '110px' }}/>
            <p className="textoQr">Escaneá el código QR y accede al enlace del proyecto</p>
          </div>
        </div>


      </div>
    </AbsoluteWrapper>
  );
};

export default Integrantes;

