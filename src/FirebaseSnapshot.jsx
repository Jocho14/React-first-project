import React, { useEffect } from 'react'
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
import db from './firebase'

export default function FirebaseSnapshot(){

    const collectionRef = collection(db, 'products');

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const g = query(
            collectionRef,
            where('title', '==', 'Shoe 1')
        );

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

    return (products)
}