import React from 'react';

function Article({articulo}) {
    return (
        <div className="article">
            <img src={articulo.imagen} className={articulo.classimg} />
            <div className='info-article'>
                <h3>{articulo.nombreProyecto}</h3>
                <p>{articulo.texto}</p>
                <a href={articulo.link} target="_blank" alt={articulo.nombreProyecto}>Visita mi proyecto</a>
            </div>
        </div>
    );
}

export default Article;