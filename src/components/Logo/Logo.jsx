import logo from "./assets/LOGO_CABLE.png"
import "./logo.css"
export function Logo(){
    return <>
    <div className="logo__container">
        <img src={logo} alt="LOGO TVCC" />
    </div>
    </>
}