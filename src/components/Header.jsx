import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../components-css/Header.css'
import siteLogo from "../images/site-logo.png"

export default function Header(){

    return(
        <nav>
            <div className="nav--right">
                <div className="logo-container"><Link to="/"><img className="nav--logo" src={siteLogo} /></Link></div>
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