import "./FormularioCalcularPorcentaje.css"

export function FormularioCalcularPorcentaje(){
return <>
        <div className="section">
            <h2>Calculá el aumento desde el mes anterior</h2>

            <div >
                <form id="form_porcentaje" className="form_porcentaje form_container">
                    <input className="input form-control" type="number" placeholder="Monto original" step="any"/>
                    <input className="input form-control" type="number" placeholder="Monto actual" step="any"/>
                    <button className="btn btn-primary" type="submit">Calcular porcentaje</button>
                </form>
            </div>

        </div>
</>
}
