import React from 'react';
import back from '../assets/img/back.jpg'


function Header() {
    return (
        <div id="inicio"className="header">         
 <img className="image" src={back}/>                   
                <div className="perfil">
                <img className="perfil-img" src="https://i.ibb.co/fHX70cm/yo.jpg"/>
                    <p className="perfil-title">
                        " Creo en la capacidad de cada ser humano para  la mejora en equipo " 
                    </p>
                </div>
        </div>
    );
}

export default Header;