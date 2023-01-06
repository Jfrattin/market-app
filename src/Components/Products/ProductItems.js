import React, {useContext} from 'react';
import { DataContext } from '../context/Dataprovider';
import { Link } from 'react-router-dom';



export const ProductItems = ( {id,title,price,image,category,cantidad} ) => {

  const value =  useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (  
    <div> <div className='Product'>
    <img src={image} width={250}></img>
  
    <div className='Product_footer'>
        <h1> {title}</h1>
        <p>Category: {category}</p>
        <p>cantidad: {cantidad}</p>
        <p className='Price'> Price: ${price}</p>
    </div>
  <div className='Buttom'>
      <button className='Btn' onClick={ () => addCarrito(id) }>ADD TO CART</button>
      <div>
      <a href= {`product/${id}`}  className='Btn-vista'>View</a>
    </div>
</div>
</div>
</div>
  )
}
