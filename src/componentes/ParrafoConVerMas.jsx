


      import React, { useState } from 'react';

      function ParrafoConVerMas() {
        const [mostrarMas, setMostrarMas] = useState(false);
      
        const textoCompleto = `Consuma libremente los alimentos en verde. Cuidado con los alimentos en amarillo. Evite los alimentos en rojo.
        Los alimentos en verde son los mas nutritivos, menos tóxicos y menos adictivos. Los alimentos en rojo son 
        los menos nutritivos, más tóxicos y más adictivos. Con los botones "+ -"  usted podrá ir sumando, 
        a lo largo del día, la cantidad de carbohidratos que 
          consume. Puede usar como referencia la tabla o la galería de imágenes de porciones 
          de 100 gramos de diferentes alimentos que se despliega con los botones de "abrir-cerrar". Los 
          alimentos se clasifican en baja (verde) moderada (amarillo) y alta (rojo) carga de carbohidratos.
          Al terminar el dia, oprimiendo el botón "entrar-dia", su recuento de carbohidratos
           será clasificado en keto si es de menos de 30, low-carb estricta de 30 a 50, flexible de 50 a 100
           y sin dieta si es mayor a 100. Este recuento quedara guardado en la memoria de su celular aunque
            reinicie la App o apague su equipo. Así podrá llevar un control de la cantidad de carbohidratos que consume y 
            el tipo de dieta que hace. Tenga en cuenta que los valores son aproximados y pueden variar según la 
            marca, preparación, cocción etc. El botón "Reset App" retorna todos los valores a cero perdiendo 
            los datos guardados. La App está pensada para su uso en teléfonos móviles y es parte del sitio web 🍖Ketohoy.com.`;
      
        const longitudMaxima = 300;
      
        const handleVerMas = () => {
          setMostrarMas(!mostrarMas);
        };
      
        return (
          <div>
            <p>
              {mostrarMas ? textoCompleto : textoCompleto.slice(0, longitudMaxima)}
              {!mostrarMas && textoCompleto.length > longitudMaxima && (
                <span onClick={handleVerMas} style={{ color: 'blue', cursor: 'pointer' }}>
                  ...ver más
                </span>
              )}
              {mostrarMas && (
                <span onClick={handleVerMas} style={{ color: 'blue', cursor: 'pointer' }}>
                  ...ver menos
                </span>
              )}
            </p>
          </div>
        );
      }
      
      export default ParrafoConVerMas;