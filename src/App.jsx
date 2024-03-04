import React, { useState, useEffect } from 'react'

//components 
import Header from './components/header/Header'
import Formulario from './components/formulario/Formulario'
import Actividad from './components/actividad/Actividad'


const App = () => {
  
  const [actividades, guardarActividades] = useState([]);

  //useEffect
  useEffect( () => {
    console.log('documento listo');
  }, [actividades]);



  const crearActividad = actividad => {
    guardarActividades([
      ...actividades,
      actividad
    ])    
  }

  //delete activities using ID
  const eliminarActividad = id => {
    const nuevasActividades = actividades.filter(actividad => actividad.id !== id);
    guardarActividades(nuevasActividades);
  }

  //conditional message
  const title = actividades.length === 0 ? "No hay Actividades" : "Actividades Agregadas"


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
            <h2 className="text-center">{ title }</h2>
            {actividades.map(actividad => (
              <Actividad
                key={actividad.id}
                actividad={actividad}
                eliminarActividad={eliminarActividad}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}


export default App