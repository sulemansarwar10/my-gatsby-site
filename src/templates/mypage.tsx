import React from 'react'

export default function mypage({ pageContext }) {
    console.log(pageContext)
    return (
        <div>
            <h1>
                {pageContext.name}
            </h1>
            <h3>
                {pageContext.desc}
            </h3>
        </div>
    )
}
