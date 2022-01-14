import React from 'react'
import { Link } from 'gatsby'
export default function nav() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/contact'>Contact</Link>
            <br></br>
            <Link to='/about'>About</Link>
        </div>
    )
}
