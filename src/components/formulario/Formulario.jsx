import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'


const Formulario = ({ crearActividad }) => {
	
	const [ actividad, actualizarActividad ] = useState({
		nombre: "",
		responsable: "",
		dependencia: "",
		fecha: "",
		hora: ""		
	})

	const [error, actualizarError] = useState(false)

	//write on state
	const handleActividad = e => {
		actualizarActividad({
			...actividad,
			[e.target.name]: e.target.value
		})
	}

	//data extract 
	const { nombre, responsable, dependencia, fecha, hora } = actividad;


	//form submit
	const submitActividad = e =>{
		e.preventDefault();


		//validate
		if(nombre.trim() === "" || responsable.trim() === "" || dependencia.trim() === "" || fecha.trim() === "" || hora.trim() === ""){
			actualizarError(true);
			return;
		}


		//delete error message
		actualizarError(false);


		//add ID
		actividad.id = uuidv4();


		//activity create
		crearActividad(actividad);


		//form reset
		actualizarActividad({
			nombre: "",
			responsable: "",
			dependencia: "",
			fecha: "",
			hora: ""
		})
	}


	return(
		<>
			<h2 className="text-center">Agregar Actividad</h2>

			{error ? <p className="alerta-error">Todos los Campos son Obligatorios</p> : null}

			<form
				onSubmit={submitActividad}
			>
				<label className="mt-3">Actividad</label>
				<input
					type="text"
					name="nombre"
					className="form-control"
					onChange={handleActividad}
					value={nombre}
				/>

				<label className="mt-3">Responsable</label>
				<input
					type="text"
					name="responsable"
					className="form-control"
					onChange={handleActividad}
					value={responsable}
				/>

				<label className="mt-3">Dependencia</label>
				<input
					type="text"
					name="dependencia"
					className="form-control"
					onChange={handleActividad}
					value={dependencia}
				/>

				<label className="mt-3">Fecha</label>
				<input
					type="date"
					name="fecha"
					className="form-control"
					onChange={handleActividad}
					value={fecha}
				/>
 
				<label className="mt-3">Hora</label>
				<input
					type="time"
					name="hora"
					className="form-control"
					onChange={handleActividad}
					value={hora}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-lg mt-4"
				>Agregar</button>
			</form>			
		</>
	);
}


export default Formulario