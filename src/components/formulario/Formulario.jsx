import React from 'react'


const Formulario = () => {
	return(
		<>
			<h2>Agregar Actividad</h2>

			<form>
				<label className="mt-3">Actividad</label>
				<input
					type="text"
					name="actividad"
					className="form-control"
				/>

				<label className="mt-3">Responsable</label>
				<input
					type="text"
					name="responsable"
					className="form-control"
				/>

				<label className="mt-3">Dependencia</label>
				<input
					type="text"
					name="dependencia"
					className="form-control"
				/>

				<label className="mt-3">Fecha</label>
				<input
					type="date"
					name="fecha"
					className="form-control"
				/>

				<label className="mt-3">Hora</label>
				<input
					type="time"
					name="hora"
					className="form-control"
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