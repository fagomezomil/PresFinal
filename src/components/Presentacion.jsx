import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Imagen1 from "../images/logogrupo.svg"
import LogoRolling from "../images/logorolling.png"


const Presentacion = () => {
  return (
    <AbsoluteWrapper>
      <div className="container-fluid">
        <article className="row" style={{ backgroundColor: '#FFFFFF', height: '500px' }} >
          <div className="col-6"></div>
          <div className="col-6">
          <img src={Imagen1} className="img-fluid"  alt="" style={{ maxWidth: '450px', paddingTop: '7rem' }} />
          </div>
         
          {/* <div className="card p-1 m-1 shadow">
            <div className="card-body">
              <h4 className="card-title mt-1">I'm PageOne!</h4>
            </div>
          </div> */}
        </article>
      </div>
      <div className="container-fluid" style={{ backgroundColor: '#aaaaaa', height: '485px', width: '100%' }}>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <p className="titulo1 pt-5">
              Presentación Proyecto Final
            </p>
            <p className="subtitulo1">
              Comisión i7
            </p>
            <p className="fecha">23 de junio de 2021</p>
            <div className="">
              <img src={LogoRolling} alt="" style={{ height: '70px' }} />
            </div>
          </div>
        </div>


      </div>
    </AbsoluteWrapper>
  );
};

export default Presentacion;
