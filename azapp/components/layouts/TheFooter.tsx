import React from 'react'
import { useTranslations } from 'next-intl';



export const TheFooter = () => {
    const t = useTranslations('Index');
    return (
        <footer className='footer'>
            <div className='container'>
                <div>
                    <div><img src='/imgs/mainlogo.png' alt='azpulmat' /></div>
                </div>
            </div>
        </footer>
    )
}