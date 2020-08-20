import React from 'react';

function About() {
    return (
        <div className='secction'>
            <h2 id="acerca">Acerca de mi</h2>
            <center><p className="yo">
            Empática, con resultados satisfactorios en el trabajo por objetivos y en equipo.
            Apasionada de la programaciòn,al reto mental, diseño de interfaces, administración, investigación, aprendizaje y
            desarrollo de nuevas tecnologías. 
            </p></center>
        
            
            <div className="habilidades">
                <p className="herramientas">HERRAMIENTAS</p>
                <div >
                <i className="fab fa-html5" id="iconos"></i>
                <i className="fab fa-css3-alt" id="iconos"></i>
                <i className="fab fa-js" id="iconos"></i>
                <i className="fab fa-git" id="iconos"></i>
                <i className="fab fa-node-js" id="iconos"></i>
                <i className="fab fa-react" id="iconos"></i>
                <i className="fab fa-github" id="iconos"></i>
                <i className="fab fa-sass" id="iconos"></i>
                </div>
                
                
            </div><br/><br/>
         
                <div className="habilidades">
                <p className="skills">SOFT SKILLS</p>
                <div className="center">
                <p className="palabra">CREATIVA</p>
                <p className="palabra">AUTODIDACTA</p>
                <p className="palabra">INNOVADORA</p>
                <p className="palabra">TRABAJO EN EQUIPO</p>
                </div>
                
               
                </div>

                <br/><br/>

                <div className="habilidades">
                
                <p className="formacionp">FORMACION</p>
                <div className="center">
                <p className="palabras">INSTITUTO POLITECNICO NACIONAL</p>
                <p className="palabras">Lic. Administración Industrial (UPIICSA)(2020)</p>
                <p className="palabras">LABORATORIA</p>
                <p className="palabras">Bootcamp Front-end Developer (2020)</p>
                </div>
                
                </div>
                
                
            
           
            

        </div>
    );
}

export default About;