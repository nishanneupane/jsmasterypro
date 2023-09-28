import React from 'react'
import Link from 'next/link'

const NavRoutes = () => {
    return (
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
            <li className='body-text text-gradient_blue-purple !font-bold'>
                <Link href={"https://jsmastery.pro/next13"} target='_blank'>
                    Next.js 13.4 Course
                </Link>
            </li>
            <li className='body-text !font-bold'>
                <Link href={"https://jsmastery.pro/masteryclass"} target='_blank'>
                    Mastery Class
                </Link>
            </li>
        </ul>
    )
}

export default NavRoutes