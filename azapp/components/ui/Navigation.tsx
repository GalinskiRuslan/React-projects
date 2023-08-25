"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { type } from 'os';

type NavLink = {
    label: string;
    href: string;
};
type Props = {
    navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
    const pathname = usePathname();
    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname.includes(link.href);


                return (
                    <Link key={link.label} href={link.href} className={`linknav ${isActive ? 'activeL' : ''}`}>
                        {link.label} </Link>
                )
            }

            )}
        </>
    )
}
