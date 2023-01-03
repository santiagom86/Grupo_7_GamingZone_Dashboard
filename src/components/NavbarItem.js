import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavbarItem(props){
    return (
		<li className="nav-item active">
			<a className="nav-link" href="/">
				<FontAwesomeIcon icon={props.icon} />
				<span className="pl-2">{props.name}</span>
			</a>
		</li>
    );
};

export default NavbarItem;