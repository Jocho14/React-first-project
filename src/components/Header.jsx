import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components-css/Header.css'

export default function Header(){

    return(
        <nav>
            <div className="nav--right">
                <ul>
                    <li><NavLink to="/feature" 
                        className={({isActive}) => isActive ? "active-link" : "not-active-link"}>Feature</NavLink></li>
                    <li><NavLink to="/products" 
                        className={({isActive}) => isActive ? "active-link" : "not-active-link"}>Products</NavLink></li>
                    <li>Store</li>
                    <li>Gallery</li>
                    <li>Help</li>
                </ul>
            </div>
        </nav>
    )
}