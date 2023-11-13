import React from 'react'
import { useRef } from 'react';
import cls from './styles/Smsinner.module.css'


export const Smsinner = ({ digits, changeHandler, submit }: { digits: any, changeHandler: Function, submit: Function }) => {
    const inputRefs = useRef(new Array(digits.length));
    const handleChange = (index: number, newValue: any, event: any) => {


        const newDigits = [...digits];
        if (event == "deleteContentBackward") {
            console.log(index)
            newDigits[index] = '';
            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
            changeHandler(newDigits);
        }
        if (event.inputType == 'insertText') {
            if (newDigits[index].length < 1) {
                newDigits[index] = newValue.value;
                if (index < digits.length - 1) {
                    inputRefs.current[index + 1].focus();
                }
            }
            else {
                /* console.log(newValue.split('')[1]); */
                newDigits[index] = newValue.value.split('')[1];
                if (index < digits.length - 1) {
                    inputRefs.current[index + 1].focus();
                }
            }
            changeHandler(newDigits);
        }
        if (event.inputType == 'insertFromPaste') {
            changeHandler(['', '', '', '']);
        }
    }


    return (
        <div>
            <form onSubmit={(event) => {
                event.preventDefault(); console.log(event);
            }}>
                {digits.map(
                    (digit: any, index: number) =>
                        <input
                            onInput={(event) => { handleChange(index, event.target, event.nativeEvent) }}
                            onKeyDown={(event) =>
                                event.nativeEvent.key === 'Backspace' ? handleChange(index, event.target, "deleteContentBackward") : event.nativeEvent.key === "Enter" && index == 3 ? submit() : null}
                            value={digit}
                            key={index}
                            type='number'
                            className={cls.code__input}
                            max='1'
                            ref={element => inputRefs.current[index] = element} />)}
            </form>
        </div>
    )
}