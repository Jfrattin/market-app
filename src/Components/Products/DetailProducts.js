import React, { useContext, useEffect, useImperativeHandle, useState } from 'react';
import { DataContext } from '../context/Dataprovider';
import {useParams} from 'react-router-dom';

export const DetailProducts = () => {
    const values = useContext(DataContext);
    const [products] = values.products;
    const [detail, setdetail] = useState([]);
    const params = useParams();
    const [urlimage, seturlimage] = useState(0);
    const [images360, setimages360 ] = useState();
    const addCarrito = values.addCarrito;


    useEffect(() => {
    products.forEach(product => {
            if(product.id == params.id){
                setdetail(product);
                seturlimage(0);
            }

        });
    }, [params.id, products])

    const handleImput = e => { 
    const number =  e.target.value.toString().padStart(2,`01`);
    seturlimage(number);
    console.log(number);}

    

    
    useEffect(()=>{
        const values=`${detail.img1}${urlimage}${detail.img2}`;
        setimages360(values);
        console.log(values);
    }, [urlimage, params.id])
 
 
    return (
        <div className='detailProduct'>
            <div className='detailTitle'>
                <h2>{detail.title}</h2>
                <p className='detailPrice'> Price: ${detail.price}</p>
            </div>
        <div className='detailGridup'>
            <p className='detailNuevo'>NUEVO</p>
                <div className='detailSize'>
                   <p>Tamaño</p>
                    <select placeholder='Tamaño'>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>    
                    </select>
                </div>
                
                <button onClick={()=>addCarrito(detail.id)}>Add Cart</button>

    </div>

    

    <div className='detailGriddown'>     
        {
            urlimage ? <img src={images360} alt={detail.title} className='detailimg' /> : <img src={detail.image}  className='detailimg' alt={detail.title}/>
          }
        <input className='detailRange' type='range' min="1"  max="36" value={urlimage} onChange={handleImput}/>
        <p><b>Descripcion:</b>Contrary to popu  lar belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
        </p>
        </div>
    </div>
  )
}
