import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DataCard(props){
    return (
	<div className="col-md-4 mb-4">
		<div className="card border-left-primary shadow h-100 py-2">
			<div className="card-body">
				<div className="row no-gutters align-items-center">
					<div className="col mr-2">
						<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.title}</div>
						<div className="h5 mb-0 font-weight-bold text-gray-800">{props.number}</div>
					</div>
					<div className="col-auto">
					<FontAwesomeIcon icon={props.icon} className="fa-2x text-gray-300"/>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
};

DataCard.defaultProps = {
	number: "Sin Información"
}

export default DataCard;