// function ResultOutOfRangeException(mensaje) {
//   this.mensaje = mensaje;
//   this.exception = "ResultOutOfRangeException";
// }

// function NegativeParameterException(mensaje) {
//   this.mensaje = mensaje;
//   this.exception = "NegativeParameterException";
// }

export function add(a, b) {
  var resultado = Number(a) + Number(b);
  if (resultado < 0) {
    throw new Error("Resultado fuera del rango permitido");
  }
  return resultado;
}

export function subtract(a, b) {
  var resultado;
  if (a < 0 || b < 0) {
    throw new Error("Los Paramentos no pueden ser negativos");
  } else {
    resultado = a - b;
    if (resultado < 0) {
      throw new Error("Resultado fuera del rango permitido");
    }
    return resultado;
  }
}
