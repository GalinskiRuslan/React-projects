'use client'
import LinkLang from 'next-intl/link'
import React from 'react'
import { usePathname } from 'next/navigation'



export default function LangChanger() {
    const path = usePathname();
    return (
        <div className='flex gap-5 py-40'>
            <LinkLang className={`link ${!path.includes('/ru') ? 'activeL' : ''}`} href="/" locale='az'>AZ</LinkLang><div className='link'>/</div>
            <LinkLang className={`link ${path.includes('/ru') ? 'activeL' : ''}`} href="/" locale='ru'>RU</LinkLang>
        </div>
    )
}
