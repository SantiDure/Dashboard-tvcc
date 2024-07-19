import { FormularioActualizarPrecio } from "../../components/FormularioActualizarPrecio/FormularioActualizarPrecio.jsx"
import  {FormularioCalcularPorcentaje}  from "../../components/FormularioCalcularProcentaje/FormularioCalcularPorcentaje.jsx"
import { Logo } from "../../components/Logo/Logo.jsx"

export function Dashboard(){
    return <>
        <Logo/>
        <FormularioCalcularPorcentaje/>
        <FormularioActualizarPrecio/>
        </>
}