const numeros = [10, 19, 3, -4, 13, -11, 15, 0, -1]
const frutas = ['laranja', 'abacaxi', 'maçã', 'uva', 'jabuticaba', 'maracujá']
/*
 O método find() encontra o Primeiro Elemento de um vetor que corresponda ao retorno da função passada como parâmetro
*/
console.log('Primeiro número negativo:', numeros.find(n => n < 0))
console.log('Primeiro múltiplo de 5:', numeros.find(x => x % 5 === 0))
console.log('Primeira fruta começando com m:', frutas.find(f => f.charAt(0) === 'm'))
console.log('Primeira fruta que termina com r:', frutas.find(a => a.slice(-1) === 'r'))