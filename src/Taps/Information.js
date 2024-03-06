import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import SmallLogo from '../Components/SmallLogo.tsx';
import Button from '../Components/Button.tsx'
import '../App.css';

export default function Information() {

    const {register, getValues, handleSubmit, formState: {errors}} = useForm();
    const [hover, setHover] = useState(false);
    const onValid = (e) => {
        console.log(e, 'onValid');
        alert('정보 입력 완료. 반갑습니다.'
            +'\n\n이름: '+e.Name
            +'\n생년월일: '+e.Birth
            +'\n성별: '+e.Gender
            +'\n번화번호: '+e.PhoneNum
            +'\n학과: '+e.Major
            +'\n학년: '+e.Grade
            );
        window.location = '/addinfo';
    };
    
    const onInvalid = (e) => {
        console.log(e, 'onInvalid');
        alert('입력한 정보를 다시 확인해주세요.');
    }

    return (
        <div className='background'>
            <SmallLogo />
            <div>
                <h2>정보 입력</h2>
                <p style={{fontSize:'15px', color:'red'}}>모든 정보는 반드시 입력해주세요.</p>
            </div>
            <form onSubmit={handleSubmit(onValid, onInvalid)} className='form'>
                <div><p style={{fontSize:'18px'}}>이름</p>
                    <input
                        type='text'
                        {...register('Name', {
                            required: '이름을 입력해주세요.'
                        })}
                        placeholder='이름'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Name && <span>* {errors.Name.message}</span>}
                </div>
                <div><p style={{fontSize:'18px'}}>생년월일(8자리)</p> 
                    <input
                        type='number'
                        {...register('Birth', {
                            required: '생년월일을 입력해주세요.',
                            pattern: {
                                value: /^[0-9]{8,8}$/,
                                message: '생년월일은 8글자를 입력해주세요.(ex 20240101)'
                            }
                        })}
                        placeholder='생년월일(ex 20240101)'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Birth && <span>* {errors.Birth.message}</span>}
                </div>
                <div><p style={{fontSize:'18px'}}>성별</p>
                    <label style={{marginRight: '100px'}}>
                        <input
                            type='radio'
                            {...register('Gender', {required: '성별을 입력해주세요.'})}
                            value='남자'
                        />
                        남자
                    </label>
                    <label style={{marginRight: '75px'}}>
                        <input
                            type='radio'
                            {...register('Gender', {required: '성별을 입력해주세요.'})}
                            value='여자'
                        />
                        여자
                    </label>
                    {errors.Gender && <span>* {errors.Gender.message}</span>}
                </div>
                <div><p style={{fontSize:'18px'}}>전화번호(11자리)</p>
                    <input
                        type='number'
                        {...register('PhoneNum', {
                            required: '전화번호를 입력해주세요.',
                            minLength: {
                                value: 11,
                                message: "전화번호는 '-'를 제외한 11자리를 입력해주세요.(ex 01012345678)"
                            },
                            maxLength: {
                                value:11,
                                message: "전화번호는 '-'를 제외한 11자리를 입력해주세요.(ex 01012345678)"
                            }
                        })}
                        placeholder='전화번호(ex 01012345678)'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.PhoneNum && <span>* {errors.PhoneNum.message}</span>}
                </div>
                <div><p style={{fontSize:'18px'}}>학과</p>
                    <input
                        type='text'
                        {...register('Major', {
                            required: '학과를 입력해주세요.'
                        })}
                        placeholder='학과'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Major && <span>* {errors.Major.message}</span>}
                </div>
                <div><p style={{fontSize:'18px'}}>학년</p>
                    <input
                        type='text'
                        {...register('Grade', {
                            required: '학년을 입력해주세요.',
                            pattern: {
                                value: /^[0-9]{1,1}$/,
                                message: '학년은 숫자 한 자리만 입력해주세요.'
                            }
                        })}
                        placeholder='학년(숫자만)'
                        style={{width: '400px', height: '20px'}}
                    />
                    {errors.Grade && <span>* {errors.Grade.message}</span>}
                </div>
                <div style={{marginTop:'30px', paddingBottom: '40px'}}>
                    <button
                        type='submit'
                        style={{
                            fontSize: '17px',
                            width: '150px',
                            height: '30px',
                            textAlign: 'center',
                            backgroundColor: '#FFC8C8',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => setHover(true)}
      on                MouseLeave={() => setHover(false)}
                    >
                        입력 완료
                    </button>
                </div>
            </form>
        </div>
    );
}