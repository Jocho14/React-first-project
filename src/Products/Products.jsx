import React from "react"
import { Link } from "react-router-dom"
import {
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
  } from 'firebase/firestore';
import db from '../firebase'
import '../Products-css/Products.css'

export default function Products(){
    const collectionRef = collection(db, 'products');

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        // const g = query(
        //     collectionRef,
        //     where('title', '==', 'Shoe 1')
        // );
        setLoading(true)
        const unsub = onSnapshot(collectionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach(doc => {
                items.push(doc.data())
            });
            setProducts(items)
            setLoading(false)
        });
        return () => {
            unsub()
        };
    }, [])

    const productElements = products.map(item =>(
        <div key={item.id} className="product-card">
                <Link to={`/products/${item.id}`} className="product-link">
                <div className="hover-rotate">
                    <figure>
                        <img src={item.imageURL} alt="image"/>
                    </figure>
                </div>
                <div className="description">
                    <h2 className="title">{item.title}</h2>
                    <h3 className="gender">{item.gender}</h3>
                    <h5 className="price">${item.price}</h5>
                </div>
            </Link> 
        </div>       
    ))

    return (
        <div className="product-card-list">
            {productElements}
        </div>  
    )
}