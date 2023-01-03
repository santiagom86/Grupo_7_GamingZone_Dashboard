import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NotificationItem(props){
    return (
        <li className="nav-item dropdown no-arrow mx-1">
            <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                <FontAwesomeIcon icon={props.icon} />
                <span className="badge badge-danger badge-counter">{props.number}</span>
            </a>
        </li>
    );
};

export default NotificationItem;