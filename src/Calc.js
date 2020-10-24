import { OperationType } from "./Types";
function ResultOutOfRangeException() {
  this.exception = "ResultOutOfRangeException";
}

/* Funcion que ayuda a controlar el manejo de excepcion de numeros
   Numero negativos ingresados como parametros */
function NegativeParameterException() {
  this.exception = "Should throw a NegativeParameterException";
}

/* Funcion para sumar los valores de a y b, se deberia considerar
   el manejo de excepcion para valores que no sean numeros
*/

export function add(a, b) {
  var resultado = Number(a) + Number(b);

  if (a < 0 || b < 0) {
    // throw new NegativeParameterException().exception;
    checkNegativeNumbers(a, b);
  }

  if (resultado < 0) {
    // throw new Error("Resultado fuera del rango permitido");
    throw new ResultOutOfRangeException().exception;
  }
  return resultado;
}

/* Funcion para restar los valores de a y b, se deberia considerar
   el manejo de excepcion para valores que no sean numeros
*/

export function subtract(a, b) {
  var resultado;
  if (a < 0 || b < 0) {
    // throw new NegativeParameterException().exception;
    checkNegativeNumbers(a, b);
  } else {
    resultado = a - b;
    if (resultado < 0) {
      // throw new Error("Resultado fuera del rango permitido");
      throw new ResultOutOfRangeException().exception;
    }
    return resultado;
  }
}

export function checkNegativeNumbers(a, b) {
  if (a < 0 || b < 0) {
    throw new NegativeParameterException().exception;
  }
}

/* Esta funcion reciber 3 parametros a es el primer valor, 
op es la operacion a realizar por ahora(sumar o restar), b el segundo valor

*/
export function calculate(a, op, b) {
  var resultado = 0;
  if (OperationType.Add === Number(op)) {
    resultado = add(a, b);
  } else if (OperationType.Subtract === Number(op)) {
    resultado = subtract(a, b);
  }
  console.log(resultado);
  return resultado;
}
/* Funcion de multiplicar dos valores de a y b a falta implementar*/
/* Funcion division dos valores de a y b a falta implementar*/
