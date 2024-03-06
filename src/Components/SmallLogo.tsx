import React from 'react';
import {Link} from 'react-router-dom';

export default function SmallLogo(props) {
    return (
        <div style={{
            marginTop: '20px',
            marginLeft: '20px',
            textAlign: 'left'
        }}>
            <Link to='/'>
                <img 
                    src='./SmallLogo.png'
                />
            </Link>
        </div>
    );
}