import React from 'react'
import fotocarrito from './fotos/carrito.png';

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

function Cabecera({carrito}) {
  
  return (
    <header>
      <img src={fotocarrito} alt = "carrito de compras"/>
      <div className='cabecera'>
        <h1>Carrito de compras</h1>
    <p>cantidad de productos:<span>{carrito}</span></p>
    </div>
    </header>
  )
}

export default Cabecera
