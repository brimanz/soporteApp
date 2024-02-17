import React from 'react'


const Actividad = ( { actividad } ) => (
	<div className="actividad">
		<p>Actividad: 
			<span>{actividad.nombre} </span> 
		</p>
		<p>Responsable: 
			<span>{actividad.responsable} </span> 
		</p>
		<p>Dependencia: 
			<span>{actividad.dependencia} </span> 
		</p>
		<p>Fecha: 
			<span>{actividad.fecha} </span> 
		</p>
		<p>Hora: 
			<span>{actividad.hora} </span> 
		</p>
	</div>
);

export default Actividad