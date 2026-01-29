const numero = 10;
const textoNumero = "10";

/**
 * OPERADORES DE IGUALDADE/DIFERENÇA SIMPLES
 *
 * Os operadores de igualdade (==) e diferença (!=) simples são utilizados para
 * fazer a comparação de igualdade entre duas variáveis no JS, realizando uma
 * conversão de tipos caso sejam de tipos diferentes.
 */

console.log(numero == textoNumero); // true

/**
 * OPERADORES DE IGUALDADE/DIFERENÇA ESTRITOS
 *
 * Já os operadores de igualdade (===) e diferença (!==) estritos não realizam
 * qualquer conversão de tipos nas variáveis, retornando sempre false quando
 * possuem tipos diferentes.
 */

console.log(numero === textoNumero); // false
