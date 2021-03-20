import React,{useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {obtenerDiferenciaYear, calcularMarca, obtenerPlan} from '../helper';


const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;//lo que hace es que le quita la apariencia de select y le puedes poner otras propiedades
`;
const InputRadio = styled.input`
  margin: 0 1rem; //0 arriba y abajo y 1 rem a los lados
`;
const Boton = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  margin-top: 2rem;
  transition: background-color .3s ease;

  &:hover{
    background-color: #26C6DA;
    cursor: pointer;
  }
  
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;


const Formulario = ({guardarResumen, guardarCargando}) => {

    const[datos, guardarDatos] = useState({
        marca:'',
        year: '',
        plan: 'basico'// es mejor por defecto seleccionar uno
    });

    const[error, guardarError] = useState(false);

    //extraemos los valores del state
    const{marca, year,plan} = datos;

    //leer los datos del formulario y cambiar el state
    const obtenerInformacion = e => {
        guardarDatos({
            
            ...datos,
            [e.target.name] : e.target.value
        });
    }

    //onSubmit
    const cotizarSeguro = (e) => {
        e.preventDefault();

        if(marca.trim() ==='' || year.trim() ===''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //base de 2000
        let resultado = 2000;

        //obtener la diferencia de años
        let diferencia = obtenerDiferenciaYear(year);
        //console.log(diferencia);

        //por cada año hay que quitar un 3%
        resultado -= ((diferencia * 3) * resultado / 100);
        //console.log(resultado);
        
        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        resultado = calcularMarca(marca) * resultado;
        //console.log(resultado);

        //Basico aumenta 20%
        //Completo aumenta 50%
        const incremento = obtenerPlan(plan);
        resultado = parseFloat(incremento * resultado).toFixed(2);//esto hace que solo devuelva dos digitos
        //console.log(resultado);

        
        
        guardarCargando(true)
        setTimeout(() =>{
            //elimina el spinner
            guardarCargando(false)
            //pasamos los datos al componente principal
            const solicitud ={
                marca,
                year,
                plan,
                resultado
            }
            
            guardarResumen(solicitud);
        }, 3000);
        
        

    }

    return(

        <form
           onSubmit={cotizarSeguro}
        >

            {error ? <Error>Tienes que completar todos los campos</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione una marca --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione un año --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerInformacion}
                />Basico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerInformacion}
                />Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>

    )
}

Formulario.propTypes = {//siempre es un objeto
    guardarResumen : PropTypes.func.isRequired,
    guardarCargando : PropTypes.func.isRequired
}
export default Formulario;