// El pq tener un helper es para quitar codigo del principal y dejar el principal mas limpio y tb para poder reutilizar en otra parte que lo necesites

// obtiene la diferencia de años
export function obtenerDiferenciaYear (year) {

    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca

export function calcularMarca (marca) {
   
    let incremento; 

    switch(marca){
        case 'europeo' :
            incremento = 1.30;
            break;

        case 'americano' :
            incremento = 1.15;
            break;
            
        case 'asiatico' :
            incremento = 1.05;
        break;
        
        
        default:
            break;
    }

    return incremento;
}

// calcula el tipo de seguro

export function obtenerPlan(plan) {
    let incremento;
    return( plan==='basico' ? incremento = 1.2 : incremento = 1.5);
}

// funcion para la primera mayuscula

export function primeraMayuscula(texto) {

    return texto[0].toUpperCase() + texto.slice(1);
}



