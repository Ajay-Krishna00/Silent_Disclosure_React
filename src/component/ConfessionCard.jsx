import React from 'react'
import './ConfessionCard.css'

const ConfessionCard = ({ confession }) => {
    return (
        <article className='confessions'>
            <h3>{confession.confession}</h3>
            <p>{confession.date.toDate().toLocaleDateString()} </p>
            
        </article>
    )
}

export default ConfessionCard
