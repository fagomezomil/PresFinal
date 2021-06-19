import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Imagen1 from "../images/logogrupo.svg"
import Fede from "../images/fede.jpg"
import Andres from "../images/andres.jpg"
import Javier from "../images/javier.jpg"
import Tomas from "../images/tomas.jpg"
import Linked from "../images/linked.png"

const Integrantes = () => {
  return (
    <AbsoluteWrapper>
      <div className="container-fluid">
        <article className="row" style={{ backgroundColor: '#FFFFFF', height: '390px' }} >
          <div className="col-4">
          <img src={Imagen1} className="img-fluid"  alt="" style={{ maxWidth: '160px', paddingTop: '1.5rem', paddingLeft: '38px' }} />
          <p className="tituloSeccion">Integrantes</p>
          </div>
          
          <div className="col-2 ">
            <img src={Andres} alt="" className="rounded-circle" style={{ maxWidth: '200px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-3 ml-2">Andrés Donadio</p>
          </div>
          <div className="col-2 ">
            <img src={Tomas} alt="" className="rounded-circle" style={{ maxWidth: '200px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-3 ml-2">Tomás Guerineau</p>
          </div>
          <div className="col-2 ">
            <img src={Javier} alt="" className="rounded-circle" style={{ maxWidth: '200px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-3 ml-4">Javier Truquin</p>
          </div>
          <div className="col-2 ">
            <img src={Fede} alt="" className="rounded-circle" style={{ maxWidth: '200px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-3 ml-3">Federico Álvarez</p>
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
          <div className="col-4">
          <p className="subtitulo1 ml-5 mt-5">
              Comisión i7
            </p>
          </div>
          <div className="col-2 text-white mt-5">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium ipsa natus facere ex suscipit voluptas odio et sint consequuntur!</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
          <div className="col-2 text-white mt-5">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium ipsa natus facere ex suscipit voluptas odio et sint consequuntur!</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
          <div className="col-2 text-white mt-5">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium ipsa natus facere ex suscipit voluptas odio et sint consequuntur!</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
          <div className="col-2 text-white mt-5">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat praesentium ipsa natus facere ex suscipit voluptas odio et sint consequuntur!</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
        </div>


      </div>
    </AbsoluteWrapper>
  );
};

export default Integrantes;
