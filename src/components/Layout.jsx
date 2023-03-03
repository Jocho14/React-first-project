import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import "../components-css/Layout.css"


export default function Layout() {
    return (
        <div className="layout-wrapper">
            <Header /> 
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}