import React from 'react'
import '../pages-css/AccountPanel.css'

import signInIcon from "../images/signInIcon.png"
import shoppingCartIcon from "../images/shoppingCartIcon.png"

export default function AccountPanel(){
    return (
        <div className="account-panel">
            <div className="sign-in-action">
                <img className="sign-in-icon" src={signInIcon} /> <span className="sign-in-text">Sign in</span>
            </div>
            <img className="shopping-cart-icon" src={shoppingCartIcon} />
        </div>
    )
}