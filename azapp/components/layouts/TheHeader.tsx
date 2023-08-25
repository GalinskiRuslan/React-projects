'use client'
import React from 'react'
import LangChanger from '../ui/LangChanger'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Navigation } from '../ui/Navigation'
import { useTranslations } from 'next-intl';
import Modal from '../ui/Modal'


export default function TheHeader() {
    const t = useTranslations('navigation');
    const path = usePathname();
    const [open, setOpen] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    return (
        <header className='header'>
            <div className={`header-container ${open ? 'active' : ''}`}>
                <img src='/imgs/mainlogo.png' alt='azpulmat' />
                <LangChanger />
                {/*  <Navigation navLinks={
                    [
                        { label: t('howget'), href: '/' },
                        { label: t('howreplay'), href: '/about' },
                        { label: t('about'), href: '#123' },
                        { label: t('document'), href: '#1' },
                        { label: t('actii'), href: '#444' },
                        { label: t('contact'), href: '#123' },
                    ]} /> */}
                <nav>
                    <Link href='/' className='linknav'>{t('howget')}</Link>
                    <Link href='/' className='linknav'>{t('howreplay')}</Link>
                    <Link href='/' className='linknav'>{t('about')}</Link>
                    <Link href='/' className='linknav'>{t('document')}</Link>
                    <Link href='/' className='linknav'>{t('actii')}</Link>
                    <Link href='/' className='linknav'>{t('contact')}</Link>
                </nav>
                <div>
                    <button className='login-btn' onClick={() => setOpenModal(true)}>{t('login')}</button>
                    <button className='registr-btn'>{t('registr')}</button>

                </div>
            </div>
            <div className='mobile'>
                <div className='mob-btn' onClick={() => { setOpen(!open) }}><div className='midle'></div></div>
                <div className='overflow'></div>
            </div>
            <Modal visible={openModal} setVisible={setOpenModal} >
                <div>
                    <p>Личный кабинет</p>
                    <input />
                    <button>Вход</button>
                    <p>Если вы впервые берете у нас
                        займ можете пройти </p>
                    <button>Регистрация</button>
                </div>
            </Modal>
        </header >
    )
}
