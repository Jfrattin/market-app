import React, { useContext } from 'react';
import Nike from '../images/Nike.jpg';
import {DataContext} from '../context/Dataprovider';



export const Header = () => {
  
  const value = useContext(DataContext);
  const [menu,setMenu] = value.menu;
  
  const [cart] = value.cart;
  

  function toogleMenu() {
    setMenu(true);
  }
  
  
  
  return (
    <header>
   
      <a href='/inicio'>
        <div className='logo' > 
        <img src={Nike} alt='img not found' width={150}></img>
        </div>
      </a>
      <ul>
        <li> <a href='/inicio'> Inicio </a> </li>
        <li> <a href='/products'> Products </a> </li>
      
      </ul>
    
      <div className='cart' onClick={toogleMenu}>
        <box-icon name='cart'></box-icon>
        <span className='item_total'>  {cart.length} </span>
      </div>

    </header>
  )
}
