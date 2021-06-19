import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Imagen1 from "../images/logogrupo.svg"
import LogoRolling from "../images/logorolling.png"

const PageTwo = () => {
  return (
    <AbsoluteWrapper>
      <div className="container-fluid">
        <article className="row" style={{ backgroundColor: '#FFFFFF', height: '390px' }} >
          <div className="col-7"></div>
          <div className="col-5">
          <img src={Imagen1} className="img-fluid"  alt="" style={{ maxWidth: '450px', paddingTop: '3rem' }} />
          </div>
         
          {/* <div className="card p-1 m-1 shadow">
            <div className="card-body">
              <h4 className="card-title mt-1">I'm PageOne!</h4>
            </div>
          </div> */}
        </article>
      </div>
      <div className="container-fluid" style={{ backgroundColor: '#aaaaaa', height: '355px', width: '100%' }}>
        <div className="row">
          <div className="col-7"></div>
          <div className="col-5">
            <p className="titulo1">
              Presentación Proyecto Final
            </p>
            <p className="subtitulo1">
              Comisión i7
            </p>
            <p className="nose">lorem</p>
            <div>
              <img src={LogoRolling} alt="" style={{ height: '100px' }} />
            </div>
          </div>
        </div>


      </div>
    </AbsoluteWrapper>
  );
};

export default PageTwo;
