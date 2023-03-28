import React, {Component} from "react";


class Header extends Component {
    render(){
        return (
        <div>
            <h2>Isaias Lawicki</h2>
                <ul className="lista-container">
                    <li>Inicio</li>
                    <li>Sobre Mi</li>
                    <li>Habilidades</li>
                    <li>Proyectos</li>
                    <li>Contacto</li>
                </ul>
        </div>
        )
    }
}

export default Header;