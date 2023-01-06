import React, { useContext } from 'react';
import { DataContext } from '../context/Dataprovider';


import { ProductItems } from './ProductItems';

export const Listproducts= () => {
  
const value = useContext(DataContext)
const [products] = value.products

  return (
    <>
    
    <h1 className='title'>PRODUCTOS</h1>
        
        <div className='Products'>
          {products.map((product)=>(
              <ProductItems
              id={product.id}
             title={product.title}
             price={product.price}
             image={product.image}
             category={product.category}
             cantidad={product.cantidad}
              >
            </ProductItems>
          ))}
        </div>    
                
             
   

      
  
    </>
    )
}
