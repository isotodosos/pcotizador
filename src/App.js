import React, {Fragment,useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color:#FFF;
  padding: 3rem;
`;


function App() { // los style components tienen etiqueta de cierre o no dependiendo del componente que represente
  
  const [resumen, guardarResumen] = useState({});
  const[cargando, guardarCargando] = useState(false);

  return (
    <Contenedor>

      <Header
        titulo="Cotizador de Seguros"    
      />

      <ContenedorFormulario>

        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {!cargando
          ? <Fragment>
              <Resumen
                resumen={resumen}
              />

              <Resultado
                resumen={resumen}
              />

            </Fragment>
          
          : <Spinner></Spinner>
        }
         
      </ContenedorFormulario>


    </Contenedor>
    
  );
}

export default App;
