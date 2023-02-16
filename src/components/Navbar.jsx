import React from 'react'
import '../css/Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <div className="nav--right">
                <ul>
                    <li>Feature</li>
                    <li>Products</li>
                    <li>Store</li>
                    <li>Gallery</li>
                    <li>Help</li>
                </ul>
            </div>
        </nav>
    )
}