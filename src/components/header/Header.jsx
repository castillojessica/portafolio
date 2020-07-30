import React from 'react';
import back from '../assets/img/back.jpg'


function Header() {
    return (
        <div className="header">         
 <img className="image" src={back}/>                   
                <div className="perfil">
                <img className="perfil-img" src="https://i.ibb.co/fHX70cm/yo.jpg"/>
                    <p className="perfil-title">
                        " No por miedo a errar vas a dejar de jugar " 
                    </p>
                </div>
        </div>
    );
}

export default Header;