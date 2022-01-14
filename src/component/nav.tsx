import React from 'react'
import { Link } from 'gatsby'
import * as styles from "./nav.module.css"
export default function nav() {
    return (
        <div className={styles.header}>
            <Link to='/'>Home</Link>

            <Link to='/contact'>Contact</Link>

            <Link to='/about'>About</Link>
        </div>
    )
}
