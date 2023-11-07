import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = ({label, src = '/'}) => {
    return(
        <Link to={src} className='navItem mr-4 ml-5'>{label}</Link>
    );
}