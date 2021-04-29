import { Avatar } from '@material-ui/core';
import React from 'react';
import './Siderow.css';

const Siderow = ({ src, Icon, title }) => {
    return (
        <div className="siderow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
};

export default Siderow;