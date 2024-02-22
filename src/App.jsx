
                   import { useState, useEffect } from 'react';
                   import './estilos/App.css';
                   import Tablap from './componentes/tablap';
                   import Imagenr from './componentes/imagenr';
                   import Reset from './componentes/reset';
                  
                   
                   
                   
                   function App() {

                     const getLocalStorageItem = (key) => {
                       const storedValue = localStorage.getItem(key);
                       return storedValue ? parseInt(storedValue, 10) : 0;
                     };
                   
                     const [count, setCount] = useState(getLocalStorageItem('count'));
                     const [keto, setKeto] = useState(getLocalStorageItem('keto'));
                     const [low, setLow] = useState(getLocalStorageItem('low'));
                     const [flex, setFlex] = useState(getLocalStorageItem('flex'));
                     const [noDiet, setNoDiet] = useState(getLocalStorageItem('noDiet'));
                     const [modalUno, setModalUno]= useState(false);
                     const [modalReset, setModalReset] = useState(false);
                  

                     const hadleModalUno = () => {
                      setModalUno(true)
                     }
                     const closeModalUno = () => {
                      setModalUno(false)
                     }

                     const handleModalReset = () => {
                      setModalReset(true)
                     }
                     const closeModalReset = () => {
                      setModalReset(false)
                     }
                                        
                   
                     const updateAndSaveLocalStorage = (key, value) => {
                       localStorage.setItem(key, JSON.stringify(value));
                     };
                   
                     const handleEnter = () => {
                           if (count <= 30) {
                          setKeto(keto + 1);
                        } else if (count > 30 && count <= 50) {
                          setLow(low + 1);
                        } else if (count > 50 && count <= 100) {
                          setFlex(flex + 1);
                        } else {
                          setNoDiet(noDiet + 1);
                        };
                      };
                       updateAndSaveLocalStorage('count', count)
                       updateAndSaveLocalStorage('keto', keto)
                       updateAndSaveLocalStorage('low', low)
                       updateAndSaveLocalStorage('flex', flex)
                       updateAndSaveLocalStorage('noDiet', noDiet)
                                            
                    const cargarDia = () => {
                      handleEnter();
                      setCount(0);
                    };
                                        
                     useEffect(() => {
                       const stateKeys = ['count', 'keto', 'low', 'flex', 'noDiet'];
                   
                       stateKeys.forEach((key) => {
                         const storedValue = localStorage.getItem(key);
                         if (storedValue) {
                           updateAndSaveLocalStorage(key, parseInt(storedValue, 10));
                         }
                       });
                     }, []);

                     const botonRestar = () => {
                      if ( count >= 1 ) {
                        setCount((count) => count - 1)
                      }
                     }
                   
                     const resetApp = () => {
                       setCount(0);
                       setKeto(0);
                       setLow(0);
                       setFlex(0);
                       setNoDiet(0);
                   
                       // Además, resetea los valores en localStorage
                       updateAndSaveLocalStorage('count', 0);
                       updateAndSaveLocalStorage('keto', 0);
                       updateAndSaveLocalStorage('low', 0);
                       updateAndSaveLocalStorage('flex', 0);
                       updateAndSaveLocalStorage('noDiet', 0);

                      // retorna al modal false
                      closeModalReset();
                     };
                   
                     return (
                       <>
                         <h1><strong>Ketohoy🍖counter</strong></h1>
                         <div className="display">
                           <h3>🏆 Dias Keto: {keto}</h3>
                           <h3>😀 Dias low-carb estrictos: {low}</h3>
                           <h3>🙂 Dias low-carb flexibles: {flex}</h3>
                           <h3>😟 Dias sin dieta: {noDiet}</h3>
                         </div>
                   
                         <div className="numero">{count}</div>
                   
                         <div className="controles">
                           <button onClick={() => setCount((count) => count + 1)}>➕</button>
                           <button onClick={() => botonRestar()}>➖</button>
                         </div>
                   
                         <button className="entrar-dia" onClick={cargarDia}>
                           Entrar dia.
                         </button>
                   {modalReset && <Reset resetApp={resetApp} closeModalReset={closeModalReset}/>}

                         <button className="reset-app" onClick={handleModalReset}>
                           Reset
                         </button>

                        

                         <h4>
                          Cómo usar esta App.
                        </h4>
                        <h6>
                        Consuma libremente los alimentos en verde. Cuidado con los alimentos en amarillo. Evite los alimentos en rojo.
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
                            los datos guardados. La App está pensada para su uso en teléfonos móviles y es parte del sitio web <a target='_blank' rel="noopener-noreferrer" href="https://ketohoy.com/"><strong>🍖Ketohoy.com.</strong></a>
                          </h6>

                         <div className='controles'>
                          <button onClick={hadleModalUno}>Abrir galería</button>
                          <button onClick={closeModalUno} >Cerrar galería</button>
                         </div>

{modalUno && <Imagenr />}

<Tablap />

                       </>
                     );
                   }
                   
                   export default App;
                          
