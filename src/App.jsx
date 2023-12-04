import React from 'react'


//components 
import Header from './components/header/Header'
import Formulario from './components/formulario/Formulario'


const App = () => {
  return(
    <>
      <Header/>

      <div className="container">
        <div className="row">

          <div className="col-md-5 mt-5">
            <Formulario/>
          </div>
          <div className="col-md-7 mt-5">
            2
          </div>
        </div>
      </div>
    </>
  )
}


export default App