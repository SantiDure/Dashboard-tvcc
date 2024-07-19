import React from 'react';
import Swal from "sweetalert2";
import { useState } from "react";
import "./FormularioCalcularPorcentaje.css"
export function FormularioCalcularPorcentaje(){

    const [montoOriginal, setMontoOriginal] = useState('');
    
    const [montoActual, setMontoActual] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const original = parseFloat(montoOriginal);
      const actual = parseFloat(montoActual);
  
      if (isNaN(original) || isNaN(actual)) {
        Swal.fire({
          title: 'Error',
          text: 'Por favor, ingrese valores numéricos válidos.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
        return;
      }
  
      const diferencia = actual - original;
      const diferenciaPorcentual = (diferencia / original) * 100;
  
      Swal.fire({
        title: 'Listo!',
        html: `La diferencia porcentual es <br> <strong>${diferenciaPorcentual.toFixed(2)}%</strong> `,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      });
    };
  
    return (
      <div className="section">
        <h2>Calculá el aumento desde el mes anterior</h2>
        <div>
          <form onSubmit={handleSubmit} className="form_porcentaje form_container">
            <input
              className="input form-control"
              type="number"
              placeholder="Monto original"
              step="any"
              value={montoOriginal}
              onChange={(e) => setMontoOriginal(e.target.value)}
            />
            <input
              className="input form-control"
              type="number"
              placeholder="Monto actual"
              step="any"
              value={montoActual}
              onChange={(e) => setMontoActual(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">Calcular porcentaje</button>
          </form>
        </div>
      </div>
    );
  };