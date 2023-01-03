import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faChartArea } from '@fortawesome/free-solid-svg-icons'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import logo from '../logo.svg'
import NavbarItem from './NavbarItem'

function Sidebar(){
    return (
		<ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<img src={logo} className='px-3 py-3 w-auto'/>
			</a>
			<hr className="sidebar-divider my-0"/>
			<NavbarItem icon={ faTachometerAlt } name="Dashboard"/>
			<hr className="sidebar-divider"/>
			<div className="sidebar-heading">Actions</div>
			<NavbarItem icon={ faFolder } name="Pages"/>
			<NavbarItem icon={ faChartArea } name="Charts"/>
			<NavbarItem icon={ faTable } name="Tables"/>
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    );
};

export default Sidebar;