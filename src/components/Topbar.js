import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import NotificationItem from './NotificationItem'
import Profile from './Profile'

function Topbar(){
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faBars} />
            </button>
            <ul className="navbar-nav ml-auto">
                <NotificationItem icon={ faBell } number="+3"/>
                <NotificationItem icon={ faEnvelope } number="7"/>
                <div className="topbar-divider d-none d-sm-block"></div>
                <Profile name="Walter White" image={process.env.PUBLIC_URL + '/dummy-avatar.jpg'}/>
            </ul>
        </nav>
    );
};

export default Topbar;