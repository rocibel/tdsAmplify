//componentes de clase
import React from 'react';
import exerciseImg from '../img/animado.jpg'
import './styles/Micomponente.css'

class Micomponente extends React.Component{

    render(){
        return(
            <div className="card mx-auto Fitness-Card">
                <div className="card-body">
                    <div className="row center">
                        <div div className="col">
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