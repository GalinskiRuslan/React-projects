'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCheckLogin, fetchLogin, fetchSendCode } from '@/app/GlobalRedux/Features/login/loginSlice';
import { AppDispatch } from '@/app/GlobalRedux/store';
import { Loader } from './Loader';
import { clear } from '@/app/GlobalRedux/Features/login/loginSlice';
import { Smsinner } from './Smsinner';
import Link from 'next/link'




export const SendPhone = ({ buttonName, children, isOpen }: { buttonName: string, children: React.ReactNode, isOpen: any }) => {
    const [value, setValue] = useState('+994');
    const { code_id, error, isLoading } = useSelector<any, any>(state => state.login);
    const initDigits = ['', '', '', ''];
    const [digits, setDigits] = useState(initDigits);
    const dispatch = useDispatch<AppDispatch>();
    const handlerInput = (e: any) => {
        console.log(value.length)
        const formattedPhone = formatPhoneNumber(e.target.value);
        if (e.nativeEvent.inputType === 'deleteContentBackward') {
            return setValue(e.target.value);
        }
        else {
            setValue(formattedPhone);
        }
    }
    const loginUser = async () => {
        dispatch(fetchLogin({ codeId: code_id, code: `${digits[0]}${digits[1]}${digits[2]}${digits[3]}` }));
    }
    async function sendCode(phone: string) {
        const number = phone.replace(/\D/g, '');
        const numForTest = number.substring(1, number.length - 1);
        dispatch(fetchSendCode(numForTest));
    }
    if (isLoading) {
        return (<Loader />)
    }
    if (error) {
        return (<div><p>Ошибка!<br /> Неверный номер телефона или код...</p><button style={{ marginTop: "40px" }} className='login-btn' onClick={() => dispatch(clear())}>Попробовать ещё раз</button></div>)
    }
    else {
        if (!code_id) {
            return (
                <div>
                    <p className='modal-login-title'>Личный кабинет</p>
                    <form onSubmit={e => e.preventDefault()}>
                        <input className='inputSend' onChange={(e) => handlerInput(e)} value={value} />
                        <button disabled={value.length == 18 ? false : true} className='login' onClick={() => sendCode(value)}>{buttonName}</button>
                        <p className='modal-login-text'>Если вы впервые берете у нас займ можете </p>
                        <Link onClick={() => isOpen(false)} href='/registration'><button className='modal-registr-btn'>Зарегистрироваться</button></Link>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p className='inputSms'>Введите код из SMS</p>
                    <Smsinner digits={digits} changeHandler={setDigits} submit={loginUser} />
                    <button style={{ marginTop: '30px' }} className='login-btn' onClick={() => loginUser()}>Войти!</button><br />
                    <button style={{ marginTop: '30px' }} className='login-btn' onClick={() => dispatch(clear())}>отправить повторно</button>
                </div >)
        }
    }
}
function formatPhoneNumber(value: string): string {
    if (!value) return value;
    const phoneNumber = value.replace(/\D/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
        return '+994' + phoneNumber;
    }
    if (phoneNumberLength < 7) {
        return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength < 9)
        return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5)}`;
    if (phoneNumberLength < 14) {
        return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)}  ${phoneNumber.slice(8, 10)} ${phoneNumber.slice(10, 12)}`;
    }
    if (phoneNumberLength > 14)
        return `+${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)}  ${phoneNumber.slice(8, 10)} ${phoneNumber.substring(10, 13)}`

    return value;
}