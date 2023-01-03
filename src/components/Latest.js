import React from 'react';

function Latest(props){
    return (
		<div className="col-lg-6 mb-4">
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">{props.title}</h6>
				</div>
				<div className="card-body">
					<div className="text-center">
						<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.image} alt="dummy"/>
					</div>
					<p>{props.productTitle}</p>
					<a target="_blank" rel="nofollow" href="/">Ver detalle</a>
				</div>
			</div>
	</div>
    );
};

Latest.defaultProps = {
	image: "{process.env.PUBLIC_URL + '/product_dummy.svg'}",
	productTitle: "No hay nuevos productos"
}

export default Latest;