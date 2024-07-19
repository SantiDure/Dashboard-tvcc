import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "./FormularioActualizarPrecio.css"

export function FormularioActualizarPrecio() {
    const [montoOriginal, setMontoOriginal] = useState('');
    const [porcentajeSumar, setPorcentajeSumar] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const original = parseFloat(montoOriginal);
      const porcentaje = parseFloat(porcentajeSumar);
  
      if (isNaN(original) || isNaN(porcentaje)) {
        Swal.fire({
          title: 'Error',
          text: 'Por favor, ingrese valores numéricos válidos.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
        return;
      }
  
      const montoFinal = original + original * (porcentaje / 100);
  
      Swal.fire({
        title: 'Listo!',
        html: `El monto final es <br> <strong>$${montoFinal.toFixed()}</strong> `,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit} className="form_montoFinal form_container">
          <input
            className="input form-control"
            type="number"
            placeholder="Monto original"
            step="any"
            value={montoOriginal}
            onChange={(e) => setMontoOriginal(e.target.value)}
          />
          <div className="input-group">
            <input
              className="input form-control"
              type="number"
              placeholder="Porcentaje"
              step="any"
              value={porcentajeSumar}
              onChange={(e) => setPorcentajeSumar(e.target.value)}
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">%</span>
          </div>
          <button className="btn btn-primary" type="submit">Calcular monto final</button>
        </form>
        <div className="form__actualizar__p">
          <p>Recuerda solo escribir el número, sin el signo % a la hora de elegir un porcentaje</p>
        </div>
      </div>
    );
  };