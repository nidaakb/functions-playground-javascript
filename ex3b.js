/**
 * Contesta a todas las preguntas al lado
 */

function isPositive(num) {
  return num > 0;
}

/**
 * 1. ¿Que nombre tiene esta función? isPositive
 * 2. ¿Que deberíamos escribir para ejecutar esta función? isPostive();
 * 3. ¿Qué tipo de datos devuelve esta función? ¿Un string, un number o un boolean? boolean - true or false.
 * 4. El código de abajo usa la función isPositve. ¿La usa adecuadamente? ¿Por qué? No porque estamos diciendo que si el valor de x es positivo deberia devolvernos "El número es negativo". Tendria que ser al revés.. if isPositive(x) console.log (el número es positivo) else el numero es negativo.
 */

let x = 4;
if (isPositive(x)) {
  console.log("El número es negativo");
} else {
  console.log("El número es positivo");
}
