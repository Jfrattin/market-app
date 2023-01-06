
import React, { useEffect, useState, createContext } from "react";
import { createRoutesFromChildren } from "react-router-dom";

import Data from "../Data";

export const DataContext=createContext();

export const DataProvider = (props) => {
    
    const [products, setProducts] = useState([]);
    const [menu, setMenu] = useState(false);
    const [cart, setcart] = useState([]);
    const [total, settotal] = useState(0);

    console.log(cart)

    useEffect(()=>{
            const product = Data.items
            if (product){
            setProducts(product)}
            else{setProducts([])}
        },[])

    const addCarrito = (id) => {
        const check = cart.every(item => {
                return item.id !== id;
        })
        if (check){
            const data = products.filter(products => {
                return products.id === id;
            })
        setcart([...cart, ...data])
        }else{
            alert('El producto ya ha sido anteriormente agregado al carrito')
        }
    
    }
    
    
    useEffect(() => {
       const datacart = JSON.parse(localStorage.getItem('datacart')) 
       if (datacart){
           setcart(datacart)
        }
        }, [])
       
        


        useEffect( () => { 
            if(cart!=0){
            localStorage.setItem('datacart', JSON.stringify(cart))}
            else(localStorage.removeItem('datacart'))
        }, [cart])
            
    


    const value = {
        products : [products],
        menu : [menu, setMenu],
        addCarrito: addCarrito,
        cart: [cart,setcart],
        total: [total, settotal],
    }
    
    useEffect( () =>{
        const getTotal = () =>{
            const res = cart.reduce((prev,item) =>  {
             return prev + (item.price * item.cantidad); 
        }, 0 )
        settotal(res);
        
    
    }  
        getTotal() }, [cart])

    
    return(
        <DataContext.Provider value = {value}>
            {props.children}
            </DataContext.Provider>
    )
}