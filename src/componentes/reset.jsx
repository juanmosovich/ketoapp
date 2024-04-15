import React from 'react'
import "../estilos/reset.css"

const Reset = ({resetApp, closeModalReset}) => {

   
  return (
    <div className='reset'>
      <h4>Va a eliminar los datos!!!</h4>  
      <div className='okno'>     
      <button className='eliminardatos' onClick={() => {resetApp()}}>👍OK</button>
       <button className='eliminardatos' onClick={() => {closeModalReset()}}>👎NO</button>
     </div>
    </div>
  )
}

export default Reset
