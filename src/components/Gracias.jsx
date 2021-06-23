import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";

import LogoRolling from "../images/logorolling.png"

const Gracias = () => {
  return (
    <AbsoluteWrapper>
      <div className="container-fluid">
        <article className="row" style={{ backgroundColor: '#FFFFFF', height: '500px' }} >
          <div className="col-12">
          <p className="gracias">Muchas Gracias</p>
          </div>
         
          {/* <div className="card p-1 m-1 shadow">
            <div className="card-body">
              <h4 className="card-title mt-1">I'm PageOne!</h4>
            </div>
          </div> */}
        </article>
      </div>
      <div className="container-fluid" style={{ backgroundColor: '#aaaaaa', height: '485px', width: '100%' }}>
        <div className="row text-center">

          <div className="col-12 text-center">
            
            <div className="mt-5">
              <img src={LogoRolling} alt="" style={{ height: '145px' }} />
              <p className="fecha2 pt-5">23 de junio de 2021</p>
            </div>
            
          </div>
          
        </div>


      </div>
    </AbsoluteWrapper>
  );
};

export default Gracias;