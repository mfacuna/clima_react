import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  //Extraer los valores desde resultado
  const { name, main } = resultado;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <p className="flow-text">El clima de {name} es:</p>
        <blockquote>
          Temperatura Actual: {parseFloat(main.temp - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </blockquote>
        <blockquote>
          Temperatura Máxima:{" "}
          {parseFloat(main.temp_max - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </blockquote>
        <blockquote>
          Temperatura Mínima:{" "}
          {parseFloat(main.temp_min - kelvin, 10).toFixed(2)}
          <span>&#x2103;</span>
        </blockquote>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired 
}

export default Clima;
