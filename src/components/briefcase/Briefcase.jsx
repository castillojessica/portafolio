import React from 'react';
import Portafolio from '../assets/data/Data'
import Article from './Article'
function Briefcase() {
    return (
        <div className='secction'>
            <h2>Portafolio</h2>  
                {Portafolio.map(articulo=> <Article
                key={articulo.id}
                articulo={articulo}
                />)}
        </div>
    );
}

export default Briefcase;