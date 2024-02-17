import React, { useState } from 'react'

//components 
import Header from './components/header/Header'
import Formulario from './components/formulario/Formulario'
import Actividad from './components/actividad/Actividad'


const App = () => {
  
  const [actividades, guardarActividades] = useState([]);

  const crearActividad = actividad => {
    guardarActividades([
      ...actividades,
      actividad
    ])    
  }


  return(
    <>
      <Header/>

      <div className="container">
        <div className="row">

          <div className="col-md-5 mt-5">
            <Formulario
              crearActividad={crearActividad}
            />
          </div>
          <div className="col-md-7 mt-5">
            <h2 className="text-center">Actividades Coord. Tecnología 9-1-1</h2>
            {actividades.map(actividad => (
              <Actividad
                key={actividad.id}
                actividad={actividad}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


export default App