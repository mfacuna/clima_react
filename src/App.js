import React, { Fragment, useState, useEffect } from "react";
import Header from "./component/Header";
import Formulario from "./component/Formulario";
import Clima from './component/Clima';

function App() {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    if (consultar) {
      const consultarApi = async () => {
        const appId = "5e257e39bb6fc5aca6af84972fe1f43c";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const resp = await fetch(url);
        const resultado = await resp.json();

        guardarResultado(resultado);
        guardarConsultar(false)
      };
      consultarApi();
    }
  }, [consultar]);

  return (
    <Fragment>
      <Header />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12">
              <Clima
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
