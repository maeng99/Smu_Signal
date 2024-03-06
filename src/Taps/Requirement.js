import React from 'react';
import Button from '../Components/Button.tsx';
import SmallLogo from '../Components/SmallLogo.tsx'
import {Link} from 'react-router-dom';
import '../App.css';

export default function Home() {
    return (
        <div className='background'>
            <SmallLogo />
            <div style={{textAlign: 'center'}}>
                <h2>요구 조건 입력</h2>
                <p style={{fontSize:'15px', color:'red'}}>요구하고 싶은 조건만 입력해주세요.</p>
            </div>
            
            <div
                style={{display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '100px'
                }}
            >
                <Button size='small' title='완료' onClick={()=>{window.location = '/';}} />
            </div>                
        </div>
    );
}