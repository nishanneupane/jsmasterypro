import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default RootLayout