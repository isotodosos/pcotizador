import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Mensaje = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ResultadoCotizacion = styled.div`
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    padding: .5rem;
    text-align: center;
    border: 1px solid #26C6DA;
    position: relative;
`;
const TextoCotizacion = styled.p`
    color: #00838F;
    text-transform: uppercase;
    padding: 1rem;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({resumen}) => {
   
      
    const{resultado} = resumen;
    /* otra forma...
    if(!resultado) return <Mensaje>Elige Marca, año y plan de seguro</Mensaje>;
    
    return(
        <h2>{resultado}</h2>
   )*/
   return(
       (!resultado
        ? <Mensaje>Elige Marca, año y plan de seguro</Mensaje>
        : (
            <ResultadoCotizacion>
                
                <TextoCotizacion>Total presupuesto: {resultado} €</TextoCotizacion>
                
               
            </ResultadoCotizacion>
        )
       )
   )
}

Resultado.propTypes = {//siempre es un objeto
    resumen : PropTypes.object.isRequired
    
}
export default Resultado;