import React from "react"
import '../css/ProductCard.css'

export default function ProductCard(props){
    return (
        <div className="product-card">
            <div className="hover-rotate">
                <figure>
                    <img src={props.item.imageURL} alt="image"/>
                </figure>
            </div>
            <div className="description">
                <h2 className="title">{props.item.title}</h2>
                <h3 className="gender">{props.item.gender}</h3>
                <h5 className="price">${props.item.price}</h5>
            </div>
        </div>
    )
}