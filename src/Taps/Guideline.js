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
                <h2>개인정보 처리방침</h2>
                <p style={{fontSize:'15px', color:'red'}}>시작하기 전 아래 사향을 반드시 확인해주세요.</p>
            </div>
            <div
                style={{display: 'flex',
                    justifyContent: 'flex-end',
                    margin: '100px'
                }}
            >
                <Button size='small' title='다음' onClick={()=>{window.location = '/information';}} />
            </div>                
        </div>
    );
}