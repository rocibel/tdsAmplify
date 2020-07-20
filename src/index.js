import React from 'react'
import ReactDOM from 'react-dom'
import Micomponente from './componentes/Micomponente'
import Welcome from './componentes/Welcome'
import 'bootstrap/dist/css/bootstrap.css'



const container =document.getElementById('root')

ReactDOM.render(<div>
                <Welcome
                username="Rocibel"/>
                <Micomponente
                    title="Hola"
                    description=""
                    img=""
                    leftColor=""
                    rightColor=""
                  />
                  </div>,container)