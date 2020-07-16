//componentes de clase
import React from 'react';
import exerciseImg from '../img/animado.jpg'
import './styles/Micomponente.css'

class Micomponente extends React.Component{

    render(){
        return(
            <div className="micomponente mx-auto Fitness-componente">
                <div>
                    <div>
                        <div>
                            <img src={exerciseImg}/>
                        </div>
                        <div>
                             <h1> Hola </h1>
                             <p> Learn</p>
                        </div>
                    </div>
                </div>
            </div>
        
         
    
        );
    }
}
export default Micomponente;