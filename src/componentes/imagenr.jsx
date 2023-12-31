import React from 'react'

import Huevos from "../img/huevos.jpg"
import Queso from "../img/queso.jpg"
import Morron from "../img/morron.jpg"
import Calabaza from "../img/calabaza.jpg"
import Frutillas from "../img/frutillas.jpg"
import Mani from "../img/mani.jpg"
import Zucchini from "../img/zucchini.jpg"
import Zapallito from "../img/zapallito.jpg"
import Pepino from "../img/pepino.jpg"
import Palta from "../img/palta.jpg"
import Nueces from "../img/nueces.jpg"
import Chocolate from "../img/chocol-75.jpg"
import Carne from "../img/carne.jpg"
import Manteca from "../img/manteca.jpg"
import Yogurg from "../img/yogur-griego.jpg"
import Yogurn from "../img/yogur-natural.jpg"
import Tomate from "../img/tomate.jpg"
import Coliflor from "../img/coliflor.jpg"
import Arandanos from "../img/arandanos.jpg"
import Berenjena from "../img/berenjena.jpg"
import PastaMani from "../img/pasta-mani.jpg"
import Crema from "../img/crema.jpg"
import Arroz from "../img/arroz.jpg"
import Azucar from "../img/azucar.jpg"
import Banana from "../img/banana.jpg"
import Durazno from "../img/durazno.jpg"
import Muffin from "../img/muffin.jpg"
import Manzana from "../img/manzana.jpg"
import Zanahoria from "../img/zanahoria.jpg"
import CerealCchoc from "../img/cereales.jpg"
import ChocNegro from "../img/chocNegro.jpg"
import Pan from "../img/pan.jpg"
import Fideos from "../img/fideos.jpg"
import Jamon from "../img/jamon.jpg"
import Provo from "../img/provo.jpg"
import Muza from "../img/muza.jpg"
import Cremon from "../img/cremon.jpg"
import Pomelo from "../img/pomelo.jpg"
import Naranja from "../img/naranja.jpg"
import Pera from "../img/pera.jpg"
import Cebolla from "../img/cebolla.jpg"
import Melon from "../img/melon.jpg"
import Sandia from "../img/sandia.jpg"
import Minions from "../img/minions.jpg"
import Lentejas from "../img/lentejas.jpg"




import "../estilos/imagenes.css"



const Imagenr = ({setModalUno}) => {
  
  const ocultarModalUno = () => {
    setModalUno(false);
  }


  return (
    
   

<div className='container-img'> 

   <div className='card'>
      <img src={Carne} alt="porción de 100g de carne picada" /> 
      <h6>Carne 0g</h6>
    </div>
    <div className='card'>
      <img src={Manteca} alt="porción de 100g de manteca" /> 
      <h6>Manteca 0g</h6>
    </div>    
    <div className='card'>
      <img src={Jamon} alt="porción 100 gramos de jamon" /> 
      <h6>Fiambre 1g</h6>
    </div>
    <div className='card'>
      <img src={Provo} alt="porción 100 gramos de provoleta" /> 
      <h6>Provoleta 1g</h6>
    </div> 
    <div className='card'>
      <img src={Muza} alt="porción 100 gramos de mozzarella" /> 
      <h6>Mozzarella 1g</h6>
    </div>
  <div className='card'>
      <img src={Huevos} alt="porción de 100g de huevo" /> 
      <h6>Huevos 1.1g</h6>
    </div>
  <div className='card'>
      <img src={Queso} alt="porción 100g de queso duro" /> 
      <h6>Queso duro 1.3g</h6>
    </div>  
    <div className='card'>
      <img src={Crema} alt="porción de 100g de crema doble" /> 
      <h6>Crema espesa 2.8</h6>
    </div>
    <div className='card'>
      <img src={Cremon} alt="porción 100 gramos de queso cremoso" /> 
      <h6>Queso cremón 3g</h6>
    </div>
    <div className='card'>
      <img src={Zapallito} alt="porción de 100g de zapallito" /> 
      <h6>Zapallito 3.1g</h6>
    </div>
    <div className='card'>
      <img src={Zucchini} alt="porción de 100g de Zucchini" /> 
      <h6>Zucchini 3.1g</h6>
    </div> 
    <div className='card'>
      <img src={Yogurg} alt="porción 100g yogur de griego" /> 
      <h6>Yogur griego 3.6g</h6>
    </div>  
     <div className='card'>
      <img src={Pepino} alt="porción 100g de pepino" /> 
      <h6>Pepino 3.6g</h6>
    </div>   
     <div className='card'>
      <img src={Tomate} alt="porción 100g de tomate" /> 
      <h6>Tomate 3.9g</h6>
    </div> 
    <div className='card'>
      <img src={Coliflor} alt="porción 100g de coliflor" /> 
      <h6>Coliflor 4.9g</h6>
    </div>
    <div className='card'>
      <img src={Yogurn} alt="porción 100g yogur natural" /> 
      <h6>Yogur natural 5g</h6>
    </div> 
    <div className='card'>
      <img src={Berenjena} alt="porción 100g de berenjenas" /> 
      <h6>Berenjenas 5.7g</h6>
    </div>
    <div className='card'>
      <img src={Morron} alt="imagen morron" /> 
      <h6>Pimiento 6.3g</h6>
    </div>
    <div className='card'>
      <img src={Calabaza} alt="porción 100g de zapallo anco" /> 
      <h6>Zapallo anco 7g</h6>
    </div>
    <div className='card'>
      <img src={Frutillas} alt="porción 100g de frutillas" /> 
      <h6>Frutillas 7.7g</h6>
    </div>
    <div className='card'>
      <img src={Sandia} alt="porción 100g de sandía" /> 
      <h6>Sandía 8g</h6>
    </div>
    <div className='card'>
      <img  src={Arandanos} alt="porción 100g de arándanos" /> 
      <h6>Arándanos 8.2g</h6>
    </div> 
   <div className='card'>
      <img src={Palta} alt="porción de 100g de palta" /> 
      <h6>Palta 8.52g</h6>
    </div>
    <div className='cardy'>
      <img src={Melon} alt="porción 100 gramos de melón" /> 
      <h6>Melón 9g</h6>
    </div> 
    <div className='cardy'>
      <img src={Pomelo} alt="porción 100 gramos de pomelo" /> 
      <h6>Pomelo 9g</h6>
    </div> 
    <div className='cardy'>
      <img src={Cebolla} alt="porción 100 gramos de cebolla" /> 
      <h6>Cebolla 9.3g</h6>
    </div> 
    <div className='cardy'>
      <img src={Durazno} alt="porción 100g de durazno" /> 
      <h6>Durazno 9.5g</h6>
    </div>
    <div className='cardy'>
      <img src={Zanahoria} alt="porción 100g de zanahoria" /> 
      <h6>Zanahoria 9.6g</h6>
    </div>  
    <div className='cardy'>
      <img src={Naranja} alt="porción 100 gramos de naranja" /> 
      <h6>Naranja 9g</h6>
    </div>
    <div className='cardy'>
      <img src={Chocolate} alt="porción 100g de chocolate 75%" /> 
      <h6>Chocolate 75% 13.7g</h6>
    </div>
    <div className='cardy'>
      <img src={Nueces} alt="porción 100g de nueces" /> 
      <h6>Nueces 13.7g</h6>
    </div> 
    <div className='cardy'>
      <img src={Manzana} alt="porción 100g de manzana" /> 
      <h6>Manzana 14g</h6>
    </div>
    <div className='cardy'>
      <img src={Mani} alt="porción 100g de maní" /> 
      <h6>Mani 16g</h6>
    </div>
    <div className='cardr'>
      <img src={Pera} alt="porción 100 gramos de queso pera" /> 
      <h6>Pera 18g</h6>
    </div>
    <div className='cardr'>
      <img src={PastaMani} alt="porción 100g pasta de maní" /> 
      <h6>Pasta de maní 20g</h6>
    </div>
   <div className='cardr'>
      <img src={Banana} alt="porción 100g de banana" /> 
      <h6>Banana 23.2g</h6>
    </div>
    <div className='cardr'>
      <img src={Lentejas} alt="porción 100 gramos de lentejas" /> 
      <h6>Lentejas 25g</h6>
    </div> 
    <div className='cardr'>
      <img src={Fideos} alt="porción 100 gramos de fideos" /> 
      <h6>Pasta 28g</h6>
    </div> 
    <div className='cardr'>
      <img src={Arroz} alt="porción 100g de arroz" /> 
      <h6>Arroz 28.7g</h6>
    </div>
    <div className='cardr'>
      <img src={ChocNegro} alt="porción 100 gramos de chocolate negro 50%" /> 
      <h6>Chocolate 50% 45g </h6>
    </div> 
    <div className='cardr'>
      <img src={Minions} alt="porción 100 gramos de pan francés" /> 
      <h6>Pan francés 50g</h6>
    </div>
     <div className='cardr'>
      <img src={Pan} alt="porción 100 gramos de pan" /> 
      <h6>Pan lactal 50g</h6>
    </div>
    <div className='cardr'>
      <img src={Muffin} alt="porción 100g de Muffin Chocolate" /> 
      <h6>Muffin 60g</h6>
    </div>
    <div className='cardr'>
      <img src={CerealCchoc} alt="porción 100 gramos de cereal con chocolate" /> 
      <h6>Cereales c/chocolate 75g</h6>
    </div>
    <div className='cardr'>
      <img src={Azucar} alt="porción 100 gramos de azúcar" /> 
      <h6>Azúcar (todas) 99.8g</h6>
    </div>

    </div> 
  );
}

export default Imagenr

