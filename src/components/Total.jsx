import React from 'react'
import "../style/total.css"

const Total = (props) => {
    const { title, total } = props

    return (
        <div className='total-container'>
            <p className="title">{title}</p>
            <p className='amount'>${total}</p>
        </div>
    )
}

export default Total
