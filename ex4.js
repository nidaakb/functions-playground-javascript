/**
 * El ciclista
 *
 * Queremos implementar una función que calcule, en función de los quilómetros que el ciclista queire recorrer, cuantos litros de agua necesita
 *
 * Sabemos que para recorrer 1km, necesita 0.5 litros.
 *
 * Implementa una función que devuelva un numero real con la cantidad de litros de agua que necesita el ciclista para recorrer 'km' kilómetros.
 * La función está casi completa pero hay que modificar la línea 13
 */

function agua_necesaria(km) {
  let agua = km * 0.5;
  console.log("🚀 ~ agua_necesaria ~ agua:", agua)
  return agua;
}

let agua = agua_necesaria(5);
console.log(
  "Para recorrer 5km , el ciclista necesitaria 2.5 litros de agua: ",
  agua
);

let agua2 = agua_necesaria(20);
console.log(
  "Para recorrer 20km , el ciclista necesitaria 10 litros de agua: ",
  agua2
);

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4ODAxNV8yMjIwOTI5MQ
 */
