//componentes de clase
import React from 'react';
import exerciseImg from '../img/exercise.png'
import './styles/Micomponente.css'

class Micomponente extends React.Component{

    render(){
        return(
            
                        <div >
                            <img src={exerciseImg}/>
                        </div>
                        <div>
                             <h1> Hola </h1>
                             <p> Learn</p>
                        </div>
                  
        
         
    
        )
    }
}
export default Micomponente;