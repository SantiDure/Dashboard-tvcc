export function FormularioActualizarPrecio(){
    return <>
    <div>
                <form id="form_montoFinal" className="form_montoFinal form_container">
                    <input className="input form-control" type="number" placeholder="Monto original" step="any"/>
                     <div className="input-group mb-3">
                        <input className="input form-control" type="number" placeholder="Porcentaje" step="any" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2">%</span>
                      </div>
                    <button className="btn btn-primary" type="submit">Calcular monto final</button>
                </form>
            
                <span>Recorda solo escribir el numero, sin el signo % a la hora de elegir un porcentaje</span>
            </div>
    </>
}