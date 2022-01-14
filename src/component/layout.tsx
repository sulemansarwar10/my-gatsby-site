import React from 'react'
import Footer from './footer'
import Nav from './nav'

export default function layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
