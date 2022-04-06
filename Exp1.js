//Solicite o preço de uma mercadoria e o percentual de desconto 20¢% . Exiba no console o valor do desconto e o preço a pagar.

let preçoMercadoria = 150
let Desconto = (preçoMercadoria / 100) * 20
let mercadoriaComDesconto = (preçoMercadoria - Desconto)

console.log ("O valor do desconto é R$" + Desconto)
console.log ("O valor da mercadoria com desconto é de R$" + mercadoriaComDesconto)

//Resultado: R$120