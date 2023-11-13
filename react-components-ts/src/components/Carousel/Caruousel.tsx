'use client'
import React, { useState } from 'react'
import cl from "./Carusel.module.css"

export default function Caruousel({ items }: { items: any }) {
    const [index, setIndex] = useState(0);

    const moveRight = () => {
        if (index < items.length - 1) {
            setIndex(index + 1);
        }
        else if (index === items.length - 1) {
            setIndex(0);
        }
    }
    const moveLeft = () => {
        if (index === 0) {
            setIndex(items.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    const classTriger = (i: number) => {
        if (index === i) {
            return cl.slider_item_active;
        }
        if (index === i + 1 && index !== items.length - 1) {
            return cl.slider_item_prev;
        }
        if (index === i - 1 && index !== 0) {
            return cl.slider_item_next;
        }
        if (index === 0 && i === items.length - 1) {
            return cl.slider_item_prev;
        }
        if (index === 0 && i === index + 1) {
            return cl.slider_item_next;
        }
        if (index === items.length - 1 && i === 0) {
            return cl.slider_item_next;
        }
        if (index === items.length - 1 && i === index - 1) {
            return cl.slider_item_prev;
        }
        if (index !== i && index !== i - 1 && index > i) {
            return cl.slider_item_left;
        }
        if (index !== i && index !== i + 1 && index < i) {
            return cl.slider_item_right;
        }
    }
    return (
        <div className={cl.slider} onTouchMove={(e) => console.log(e)
        }>
            <div className={cl.slide_line} style={{ width: `calc(100% * (${items.length}/3))` }}>
                {items.map((item: any, i: number) => (
                    <div key={i} className={classTriger(i)}>
                        {item}
                    </div>

                ))}
            </div><button className={cl.arrow_left} onClick={() => moveRight()} type='button' aria-label="Go to next slide">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <circle cx="17" cy="17" r="17" transform="rotate(-180 17 17)" fill="#3DD4C3" />
                    <path d="M21 25L13 17L21 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className={cl.arrow_right} onClick={() => moveLeft()} type='button' aria-label="Go to next slide" style={{}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                    <circle cx="17" cy="17" r="17" fill="#3DD4C3" />
                    <path d="M13 9L21 17L13 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </ div>
    )
}
