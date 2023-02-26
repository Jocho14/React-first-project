import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <div className="nav--right">
                <ul>
                    <li><Link to="/feature">Feature</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li>Store</li>
                    <li>Gallery</li>
                    <li>Help</li>
                </ul>
            </div>
        </nav>
    )
}