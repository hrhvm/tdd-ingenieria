// function ResultOutOfRangeException(mensaje) {
//   this.mensaje = mensaje;
//   this.exception = "ResultOutOfRangeException";
// }

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
    throw new NegativeParameterException().exception;
  }

  if (resultado < 0) {
    throw new Error("Resultado fuera del rango permitido");
  }
  return resultado;
}

/* Funcion para restar los valores de a y b, se deberia considerar
   el manejo de excepcion para valores que no sean numeros
*/

export function subtract(a, b) {
  var resultado;
  if (a < 0 || b < 0) {
    throw new NegativeParameterException().exception;
  } else {
    resultado = a - b;
    if (resultado < 0) {
      throw new Error("Resultado fuera del rango permitido");
    }
    return resultado;
  }
}

/* Funcion de multiplicar dos valores de a y b a falta implementar*/
/* Funcion division dos valores de a y b a falta implementar*/
