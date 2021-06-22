import React from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Imagen1 from "../images/logogrupo.svg"
import Fede from "../images/fede.jpg"
import Andres from "../images/andres.jpg"
import Javier from "../images/javier.jpg"
import Tomas from "../images/tomas.jpg"
import Linked from "../images/linked.png"
import Triangulo from "../images/triangulo.svg"

const Integrantes = () => {
  return (
    <AbsoluteWrapper>
      <div className="container-fluid">
        <article className="row" style={{ backgroundColor: '#FFFFFF', height: '500px' }} >
          <div className="col-3">
          <img src={Imagen1} className="img-fluid"  alt="" style={{ maxWidth: '200px', paddingTop: '6rem', paddingLeft: '38px' }} />
          <p className="tituloSeccion">Integrantes</p>
          </div>
          
          <div className="col-2 mr-3">
            <img src={Andres} alt="" className="rounded-circle" style={{ maxWidth: '280px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-4 mr-5 text-center">Andrés Donadio</p>
          </div>
          <div className="col-2  mr-3">
            <img src={Tomas} alt="" className="rounded-circle" style={{ maxWidth: '280px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-4 mr-5 text-center">Tomás Guerineau</p>
          </div>
          <div className="col-2  mr-3 ">
            <img src={Javier} alt="" className="rounded-circle" style={{ maxWidth: '280px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-4 mr-5 text-center">Javier Truquin</p>
          </div>
          <div className="col-2 mr-3">
            <img src={Fede} alt="" className="rounded-circle" style={{ maxWidth: '280px', marginTop: '105px' }}/>
            <p className="nombreIntegrante mt-4  mr-5 text-center">Federico Álvarez</p>
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
          <div className="col-3">
          <p className="subtitulo1 ml-5 mt-5">
              Comisión i7
            </p>
          </div>
          <div className="col-2 text-white mr-3">
          <img src={Triangulo} alt="" style={{ width:'160px', paddingLeft: '110px' }}/>
              <p className="detalleIntegrante mt-4">Vive en San Nicolás, tiene 35 años y dice que GIT confabula contra el borrandole los archivos, ahora trabaja de <i>Freelance</i>.</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
          <div className="col-2 text-white mr-3">
          <img src={Triangulo} alt="" style={{ width:'160px', paddingLeft: '110px' }}/>
              <p className="detalleIntegrante mt-4">Promesa tucumana de 25 años, desconoce el español y se comunica en JavaScript, demostró su valor ampliamente co-pilotando los instrumentos con solidez</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
          <div className="col-2 text-white mr-3">
          <img src={Triangulo} alt="" style={{ width:'160px', paddingLeft: '110px' }}/>
              <p className="detalleIntegrante mt-4">Un tucumano de 27 años que tuvo el valor de pilotar esta nave, convirtiendose en un gran Capitán llevandonos por una ruta confiable</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
          <div className="col-2 text-white mr-3">
          <img src={Triangulo} alt="" style={{ width:'160px', paddingLeft: '110px' }}/>
              <p className="detalleIntegrante mt-4">Diseñador tucumano de 36 años que delineó las cartas de navegación del proyecto para orientar a la tripulación</p>
              <img src={Linked} alt="" style={{ maxWidth: '110px' }} />
          </div>
        </div>


      </div>
    </AbsoluteWrapper>
  );
};

export default Integrantes;
