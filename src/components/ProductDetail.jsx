import React from "react"
import { useParams } from "react-router-dom"
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
import '../css/ProductDetail.css'

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
        <h1>{product.title}</h1>
    )
}