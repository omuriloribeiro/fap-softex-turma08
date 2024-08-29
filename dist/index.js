"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
let dolar = prompt('Quantos dólares você quer converter para reais? ');
const dolar_conversao = 5.49 * dolar;
const mensagem = `${dolar} dólares equivalem a ${dolar_conversao.toFixed(2)} reais`;
console.log(mensagem);
const { espacamento_2 } = require("./funcoes");
