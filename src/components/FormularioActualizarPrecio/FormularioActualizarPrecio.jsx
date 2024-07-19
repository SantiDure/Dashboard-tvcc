import "./FormularioActualizarPrecio.css"

export function FormularioActualizarPrecio(){
    return <>
            <div>
                <form id="form_montoFinal" className="form_montoFinal form_container">
                    <input className="input form-control" type="number" placeholder="Monto original" step="any"/>
                     <div className="input-group ">
                        <input className="input form-control" type="number" placeholder="Porcentaje" step="any" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2">%</span>
                      </div>
                    <button className="btn btn-primary" type="submit">Calcular monto final</button>
                </form>
            <div className="form__actualizar__p">
                <p >Recorda solo escribir el numero, sin el signo % a la hora de elegir un porcentaje</p>
            </div>
            </div>
    </>
}