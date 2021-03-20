import React from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula} from '../helper';
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({resumen}) => {
   
    const{marca, year, plan} = resumen;

    //if(marca === "" || year === "" || plan === "" || resultado === "") return null;
    if(!marca || !year || !plan){
        return null;
    }   
    
    return(
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)}</li>
                <li>Año: {primeraMayuscula(year)}</li>
                <li>Plan: {primeraMayuscula(plan)}</li>
                
            </ul>
        </ContenedorResumen>
        
    )
    

    
}

Resumen.propTypes = {//siempre es un objeto
    resumen : PropTypes.object.isRequired
    
}
export default Resumen;