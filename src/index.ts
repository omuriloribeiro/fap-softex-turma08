// 1.CONVERSOR DE DÓLAR PARA REAL
import PromptSync from "prompt-sync";
const prompt = require('prompt-sync')();
let dolar:number = prompt('Quantos dólares você quer converter para reais? ')
const dolar_conversao:number = 5.49*dolar
const mensagem: string = `${dolar} dólares equivalem a ${dolar_conversao.toFixed(2)} reais`
console.log(mensagem);

const { espacamento_2 } = require("./funcoes")