import React from 'react';
import img1 from "../images/imagen inicio/argentina.webp";
import img2 from "../images/imagen inicio/img-sneaker.webp";



export default function Inicio() {
  return (
    <div className='body'>
    <img src={img1} className='inicio-img'></img>
    <h2 className='inicio-h2'>Celebremos este momento. Por las lágrimas, por la ilusión, por la confianza y por dejarlo todo. Este es el esfuerzo que sigue inspirando a una generación que tiene todo por delante. Reinventar el juego y hacer historia es solo el comienzo. El futuro está acá. Reinventalo.</h2>
    <img src={img2} className='inicio-img'></img>
    </div>
  )
}
