import React from 'react';
import { BrowserRouter , Route, Routes} from 'react-router-dom';

import Inicio from './inicio/inicio';
import { Listproducts } from './Products/Listproducts';
import { DetailProducts } from './Products/DetailProducts';


export const Paginas = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path='' element={<Inicio/>}></Route>
            <Route path='/inicio' element={<Inicio/>}></Route>
            <Route path='/products' exact element={<Listproducts/>}></Route>
            <Route path='/product/:id' exact element={<DetailProducts/>} ></Route>
        </Routes>
         </BrowserRouter>
  )
}
