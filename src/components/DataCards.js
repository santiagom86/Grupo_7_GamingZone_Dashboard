import React from 'react';
import DataCard from './DataCard.js';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

function DataCards(){
    return (
		<div className="row">
			<DataCard title="Cantidad de Productos" number="135" icon={ faGamepad }/>
			<DataCard title="Cantidad de Usuarios" number="8" icon={ faUser }/>
		</div>
    );
};

export default DataCards;