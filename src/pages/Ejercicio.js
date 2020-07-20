import React from 'react'
import Micomponente from '../componentes/Micomponente'
import Welcome from '../componentes/Welcome'


class Ejercicio extends ReactComponent {

    render() {
        return (
            <div>
                <Welcome
                    username="Rocibel" />
                <Micomponente
                    title="Hola"
                    description=""
                    img=""
                    leftColor=""
                    rightColor=""
                />
            </div>
        )
    }
}

export default Ejercicio