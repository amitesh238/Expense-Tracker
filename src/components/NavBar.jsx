import React from 'react'
import "../style/navbar.css"

const NavBar = ({ toggleForm }) => {
    return (
        <div className='navbar'>
            <header>
                <h1>Expenser</h1>
                <button className='add-more' onClick={toggleForm}>Add More</button>
            </header>
        </div>
    )
}

export default NavBar
