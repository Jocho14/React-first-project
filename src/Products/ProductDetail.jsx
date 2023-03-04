import React from "react"
import { Link, useParams } from "react-router-dom"
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
import '../Products-css/ProductDetail.css'

export default function ProductDetail(){
    const [product, setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const { id } = useParams()

    React.useEffect(() => {
        setLoading(true)

        const q = query(collection(db, "products"), where("id", "==", id))

        const unsub = onSnapshot(q, (querySnapshot) => {
            if(!querySnapshot.empty){
                const docSnapshot = querySnapshot.docs[0];
                
                setProduct(docSnapshot.data())
                console.log(docSnapshot.data())
            }

            else{
                setProduct({})
            }

            setLoading(false)
    });
        return () => {
            unsub()
        };
    }, [id])

    if (loading) {
        return <div>Loading...</div>;
      }

    return (
        <div className="main-wrapper">
            <Link to=".."
                relative="path">
                <span> ← Back to products</span>
            </Link>
            <div className="product-detail-wrapper">
                <div className="inner-wrapper">
                    <img src={product.imageURL} className="image"/>
                    <h1 className="title">{product.title}</h1>
                </div>  
            </div>
        </div>
        
        
    )
}