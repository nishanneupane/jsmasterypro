"use client"
import { cn } from '@/lib/utils'
import { formUrlQuery } from '@/sanity/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const links = [
    'All',
    'Next 13',
    'Frontend',
    'backend',
    'fullstack'
]
const Filters = () => {
    const [active, setActive] = useState('')
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleFilter = (link: string) => {
        let newUrl = '';

        if (active === link) {
            setActive('')
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["category"],
                value: null,
            })
        } else {
            setActive(link)
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "category",
                value: link.toLowerCase(),
            })
        }
        router.push(newUrl, { scroll: false })
    }
    return (
        <ul className='text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {
                links.map((link) => (
                    <button
                        className={cn('whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ', active === link ? "gradient_blue-purple" : "")}
                        key={link}
                        onClick={() => handleFilter(link)}

                    >
                        {link}
                    </button>
                ))
            }
        </ul>
    )
}

export default Filters