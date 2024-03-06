import React from 'react';
import Button from '../Components/Button.tsx';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Home() {
    return (
        <div className='background'>
            <div style={{paddingTop: '250px', textAlign: 'center'}}>
                <Link to='/'>
                    <img src='./MainLogo.png'/>
                </Link>
                <h4 style={{color:'#6A9E9A'}}>상명대에서 연인을 찾습니다.</h4>
            </div>
            <div 
                style={{
                    paddingTop:'100px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '300px'
                }}
            >
                <Button size='large' title='시작하기' onClick={()=>{window.location = '/guideline';}} />
            </div>                
        </div>
    );
}