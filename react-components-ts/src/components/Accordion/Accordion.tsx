"use client"
import React, { useRef } from 'react'
import cl from "./Accordion.module.css"

export const Accordion = ({ index, title, description, active, onToggle }:
    { index: number, title: string, description: string, active: number | null, onToggle: (index: number) => void }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    return (
        <li className={active === index ? cl.card_active : cl.card} onClick={() => {
            if (active == index) {
                onToggle(-1);
            }
            else {
                onToggle(index);
            }
        }}>
            <div className={cl.title}><p>{title}</p> {active === index ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#3DD4C3" />
                <rect x="12" y="18" width="16" height="4" fill="white" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#3DD4C3" />
                <path d="M27 21.5556H21.6247V27H18.3753V21.5556H13V18.4444H18.3753V13H21.6247V18.4444H27V21.5556Z" fill="white" />
            </svg>}</div>
            <div ref={ref} style={{ height: active === index ? ref.current?.scrollHeight : 0 }} className={index === active ? cl.collapse_active : cl.collapse}><p className={cl.description}>{description}</p></div>
        </li >
    )
}
