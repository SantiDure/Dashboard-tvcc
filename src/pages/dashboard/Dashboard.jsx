import { FormularioActualizarPrecio } from "../../components/FormularioActualizarPrecio/FormularioActualizarPrecio.jsx"
import  {FormularioCalcularPorcentaje}  from "../../components/FormularioCalcularProcentaje/FormularioCalcularPorcentaje.jsx"

export function Dashboard(){
    return <>
        
        <FormularioCalcularPorcentaje/>
        <FormularioActualizarPrecio/>
        </>
}