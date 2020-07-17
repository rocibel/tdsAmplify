//componentes de clase
import React from 'react';
import exerciseImg from '../img/exercise.png'
import circles from '../img/circles.png'
//import './styles/Micomponente.css'



class Micomponente extends React.Component {

    render() {
        return (
            <div className="card mx-auto Fitness-card"
            style={{
                backgroundImage:`url(${circles}),linear-gradient(to right, #A74CF2, #617BFB)`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6" >
                            <img src={exerciseImg} />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1> Hola </h1>
                            <p> Learn</p>
                            <p> Learn</p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Micomponente;