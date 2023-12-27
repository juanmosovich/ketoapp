import React from 'react'
import "../estilos/tabla.css"



const Tablap = () => {



  return (
    <> 
    <hr></hr>
    <h4>
      Tabla (abajo) y galería de imágenes (botones arriba) de gramos de carbohidratos en porciones de alimentos de 100 gramos de peso
    </h4>
      <h6>Se clasifican en alimentos con baja (verde) moderada (amarillo) y alta (rojo) carga de carbohidratos. 
         La cantidad de carbohidratos en 100 gramos de peso puede variar según el tipo de preparación, marca, cocción etc. 
          Los valores son aproximados.
   </h6>
 <table>
        <thead>
          <tr>
            <th >Alimento 100 g</th>
             <th>Carbs g</th>
          </tr>
      </thead>
      <tbody>
      <tr className='rec'>
            <td className='rec'>Carnes (todas)</td>
            <td className='rec'>0 g</td>
      </tr>
      <tr>
            <td className='rec'>Manteca</td>
            <td className='rec'>0 g</td>
        </tr>
      <tr>
            <td className='rec'>Jamón (fiambres)</td>
            <td className='rec'>1 g</td>
        </tr>
        <tr>
            <td className='rec'>Provoleta y quesos duros</td>
            <td className='rec'>1 g</td>
          </tr>
          <tr>
            <td className='rec'>Mozzarella</td>
            <td className='rec'>1 g</td>
          </tr>  
      <tr>
            <td className='rec'>Lechuga</td>
            <td className='rec'>1 g</td>
          </tr>
          <tr>
            <td className='rec'>Apio</td>
            <td className='rec'>1 g</td>
         </tr> 
          <tr>
            <td className='rec'>Huevos</td>
            <td className='rec'>1.1 g</td>
          </tr>
          <tr>
            <td className='rec'>Queso Cheddar</td>
            <td className='rec'>1.3 g</td>
         </tr>
         <tr>
            <td className='rec'>Esparragos</td>
            <td className='rec'>2 g</td>
          </tr>
          <tr>
            <td className='rec'>Tofu</td>
            <td className='rec'>2 g</td>
         </tr> 
         <tr>
            <td className='rec'>Crema espesa (doble)</td>
             <td className='rec'>2,8 g</td>
         </tr>
        <tr>
            <td className='rec'>Queso cremoso</td>
             <td className='rec'>3 g</td>
         </tr>
         <tr>
            <td className='rec'>Hongos</td>
             <td className='rec'>3 g</td>
         </tr>
         <tr>
            <td className='rec'>Calabacin(Zucchini)</td>
            <td className='rec'>3.1 g</td>
         </tr>
         <tr>
            <td className='rec'>Queso crema (Philadelphia)</td>
            <td className='rec'>3,4 g</td>
         </tr>
         <tr>
            <td className='rec'>Pepino</td>
            <td className='rec'>3.6 g</td>
         </tr>  
         <tr>
            <td className='rec'>Frambuesas</td>
            <td className='rec'>4g</td>
         </tr>
         <tr>
            <td className='rec'>Pimientos (verde, rojo, amarillo)</td>
            <td className='rec'>4 g</td>
         </tr> 
        <tr>
            <td className='rec'>Kale</td>
            <td className='rec'>4 g</td>
          </tr> 
          <tr>
            <td className='rec'>Leche entera (100ml o 1/2 taza)</td>
            <td className='rec'>4,8 g</td>
         </tr>
         <tr>
            <td className='rec'>Coliflor</td>
            <td className='rec'>5 g</td>
         </tr>
         <tr>
            <td className='rec'>Yogur griego natural</td>
            <td className='rec'>5 g</td>
        </tr>
         <tr>
            <td className='rec'>Frutillas</td>
            <td className='rec'>7.7 g</td>
         </tr>
         <tr>
            <td className='rec'>Sandía</td>
            <td className='rec'>8 g</td>
         </tr>
          <tr>
               <td className='recy'>Arándanos</td>
               <td className='recy'>8.2 g</td>
            </tr> 
         <tr>
               <td className='recy'>Mandarina</td>
               <td className='recy'>8.2 g</td>
         </tr> 
         <tr>
            <td className='recy'>Melón</td>
            <td className='recy'>9 g</td>
         </tr>
          <tr>
            <td className='recy'>Moras</td>
            <td className='recy'>9 g</td>
         </tr>
         <tr>
               <td className='recy'>Pomelo</td>
               <td className='recy'>9 g</td>
            </tr> 
         <tr>
               <td className='recy'>Naranja</td>
               <td className='recy'>9 g</td>
            </tr> 
          <tr>
            <td className='recy'>Durazno</td>
            <td className='recy'>9 g</td>
         </tr>
         <tr>
            <td className='recy'>Cebolla</td>
            <td className='recy'>9.3 g</td>
         </tr> 
        <tr>
            <td className='recy'>Cacao 100%</td>
            <td className='recy'>13 g</td>
         </tr> 
         <tr>
            <td className='recy'>Nueces comunes</td>
            <td className='recy'>13.7 g</td>
         </tr>
        <tr>
            <td className='recy'>Chocolate 75%</td>
            <td className='recy'>13.7 g</td>
          </tr>
          <tr>
            <td className='recy'>Kiwi</td>
            <td className='recy'>14 g</td>
         </tr>
          <tr>
            <td className='recy'>Avellanas</td>
            <td className='recy'>16 g</td>
         </tr>
         <tr>
            <td className='recy'>Mani</td>
           <td className='recy'>16 g</td>
         </tr>
          <tr>
            <td className='recy'>Pistachos</td>
            <td className='recy'>17 g</td>
         </tr>
         <tr>
               <td className='rece'>Papa</td>
               <td className='rece'>17.49 g</td>
            </tr> 
            <tr>
            <td className='rece'>Pera</td>
            <td className='rece'>18 g</td>
         </tr>   
           <tr>
               <td className='rece'>Uva</td>
               <td className='rece'>18.1 g</td>
            </tr> 
            <tr>
               <td className='rece'>Higos</td>
               <td className='rece'>19.2 g</td>
            </tr>
       <tr>
            <td className='rece'>Manteca maní</td>
           <td className='rece'>20 g</td>
         </tr>  
          <tr>
            <td className='rece'>Almendras</td>
            <td className='rece'>20 g</td>
        </tr>
        <tr>
               <td className='rece'>Banana</td>
              <td className='rece'>23.2 g</td>
            </tr>
        <tr>
               <td className='rece'>Fideos</td>
               <td className='rece'>28 g</td>
            </tr>
            <tr>
               <td className='rece'>Arroz</td>
               <td className='rece'>28.7 g</td>
            </tr>    
            <tr>
               <td className='rece'>Chocolate negro 50%</td>
               <td className='rece'>45 g</td>
         </tr> 
            <tr>
               <td className='rece'>Pan</td>
               <td className='rece'>55 g</td>
            </tr> 
           <tr>
               <td className='rece'>Cereales</td>
               <td className='rece'>50 g</td>
            </tr>
            <tr>
               <td className='rece'>Dulce de leche</td>
               <td className='rece'>56.1 g</td>
            </tr> 
            <tr>
               <td className='rece'>Avena</td>
               <td className='rece'>57 g</td>
             </tr>
           <tr>
               <td className='rece'>Mermelada</td>
               <td className='rece'>66 g</td>
            </tr>
            <tr>
               <td className='rece'>Cereales c/chocolate</td>
               <td className='rece'>70 g</td>
            </tr> 
           <tr>
               <td className='rece'>Pasas de uva</td>
               <td className='rece'>79.2 g</td>
            </tr> 
             <tr>
               <td className='rece'>Azúcar (cualquier tipo)</td>
               <td className='rece'>99.8 g</td>
            </tr>
      </tbody>  
      </table>
<hr />
 <hr />

   </>
  )
}

export default Tablap
