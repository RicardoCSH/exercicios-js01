/* 

[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, 
imprime false.
Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. 
Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.

*/


const ricardo = {
    name :"Ricardo",
    idade: 35,
    sex: "masculino",
    altura: 1.80,
    address: "Rua julia ferreira"

}

const rita = {
    name :"Rita",
    idade: 34,
    sex: "Feminino",
    altura: 1.60,
    address: "Rua julia ferreira da silva"
}


let soma = ricardo.name !== rita.name

console.log(`seu nome é diferente? ${soma}`)
