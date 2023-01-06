import React, { useContext } from 'react';
import {DataContext} from '../context/Dataprovider';

export const Carrier = () => {
  
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setcart]=value.cart;
  const [total]= value.total;

   const tooglefalse = () => {
    setMenu(false)
   }

  const show1 = menu ? 'carriers show' : 'carriers';
  const show2 = menu ? 'carrier show' : 'carrier ';
  
  console.log()
  

  const removeProduct = id  => {
        if(window.confirm('¿Desea eliminar el producto del carrito ?')){

              cart.forEach((item, index) => {
                if(item.id === id){
                  item.cantidad=1;
                  cart.splice(index,1)
                  
                }
                setcart([...cart])
                
              
              })
            

                
              }
            
          setcart([...cart])
        }   
        


const suma = id => {

    cart.forEach((item, index) => {
      if(item.id === id){
      item.cantidad +=1 ;
     }
     setcart([...cart])})}


const resta = id => {

  cart.forEach((item, index) => {
    if(item.id === id){
      item.cantidad ===  1  ?  item.cantidad =  1 : item.cantidad -=  1 ;
    }
    setcart([...cart])
    })

    }



  return (
    <div className={show1}>
      <div className={show2}>
        <div className='carrier_close' onClick={tooglefalse}>
        <box-icon name='x'></box-icon>
        </div>
     
        <div className='carrier_center'>
          <h1>Your cart:</h1>
          
            {     cart.map((product) => 
  <div className='carrier_item' key={product.id}>
  <img src={product.image} alt='img not found'></img>
    <div className='title-price'>
    <h2>{product.title}</h2>
    <p className='price'>$ {product.price}</p>
    </div>
  <div className='arrows'>
    <box-icon name='up-arrow' type='solid' onClick= { () => suma(product.id)}  > </box-icon>
    <p className='amount'>{product.cantidad}</p>
    <box-icon name='down-arrow' type='solid'  onClick= { () => resta(product.id)} > </box-icon>
  </div> 
  <div>
    <div className='remove-item' onClick={()=> removeProduct(product.id) }>
    <box-icon name='trash'></box-icon>
  </div>
</div>
</div>


  )




            }
            
            <div className='carrier_footer'>
              <h2>Total: ${total}</h2>
              <button className='btn'> Payment </button>
            </div>
      </div>
      </div>
    </div>
  )
}
