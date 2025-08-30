'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import style from './ActiveLink.module.css'

interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({path, text}:Props) => {
    const pathName = usePathname()
    console.log(pathName)

    // ${style.link} ${style['active-link']}

    return (
        <>
            <Link 
                key={path} 
                className={`${pathName == path ? "color: red" : "color: auto"}`}
                href={path}
            >
                {text}
            </Link>
        </>
    )
}