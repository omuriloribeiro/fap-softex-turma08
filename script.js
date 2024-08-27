// 1.CONVERSOR DE DÓLAR PARA REAL
const prompt = require('prompt-sync')();
let dolar = prompt('Quantos dólares você quer converter para reais? ')
const dolar_conversao = 5.49*dolar
const mensagem = `${dolar} dólares equivalem a ${dolar_conversao.toFixed(2)} reais`
console.log(mensagem);

const { espacamento_2 } = require("./funcoes")

//2.NÚMERO ÍMPAR OU PAR
// let numero = parseInt(prompt('Digite um número inteiro: '))
// if (numero % 2 == 0){
//     alert('Este número é par')
// } else{
//     alert('Este número é ímpar'
// }

//3.INFORMAR QUAL NÚMERO É MAIOR OU MENOR
// let numero_1 = prompt('Digite o primeiro número: ')
// let numero_2 = prompt('Digite o segundo número: ')
// if (numero_1 > numero_2){
//     console.log(`${numero_1} é maior que ${numero_2}`)
// } else{
//     console.log(`${numero_1} é menor que ${numero_2}`)
// }

//4.NOTAS DE PROVA
// let prova_1 = parseFloat(prompt('Digite a nota da sua primeira prova: '))
// let prova_2 = parseFloat(prompt('Digite a nota da segunda prova: '))
// if (prova_1 && prova_2 >= 6){
//     alert('Você foi aprovado nas duas provas')
// }else if (prova_1 >= 6 && prova_2 < 6){
//     alert('Você foi aprovado na primeira prova e reprovado na segunda')
// }else if (prova_2 >= 6 && prova_1 < 6){
//     alert('Você foi reprovado na primeira prova e aprovado na segunda')
// }else{
//     alert('Você foi reprovado nas duas provas')
// }

//5.CINEMA

// const prompt = require('prompt-sync')();
// const ingressoVipSemPipoca = '80 reais';
// const ingressoVipComPipoca = '110 reais';
// const ingressoStandardSemPipoca = '40 reais';
// const ingressoStandardComPipoca = '70 reais';

// let ingressoCliente = prompt('Qual ingresso você deseja? Digite VIP ou STANDARD: ');
// let pipocaCliente = prompt('Você quer pipoca? Digite SIM ou NÃO: ');

// switch (ingressoCliente) {
//   case "VIP":
//     if (pipocaCliente === "SIM") {
//       console.log("O total da sua compra foi " + ingressoVipComPipoca);
//     } else {
//       console.log("O total da sua compra foi " + ingressoVipSemPipoca);
//     }
//     break;
//   case "STANDARD":
//     if (pipocaCliente === "SIM") {
//       console.log("O total da sua compra foi " + ingressoStandardComPipoca);
//     } else {
//       console.log("O total da sua compra foi " + ingressoStandardSemPipoca);
//     }
//     break;
//   default:
//     console.log("Opção inválida. Por favor, digite VIP ou STANDARD.");
// }


//6. Chat
// Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo
// com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. 
// Antes de terminar, o código deve informar que irá ser encerrado.

// const prompt = require('prompt-sync')();
// let nome = prompt('Qual o seu nome? ')

// console.log('-------------------------------------------------------')
// console.log('Olá, ' + nome + '. Bem-vindo(a) a operadora Johnson')
// console.log('-------------------------------------------------------')
// console.log('Digite o número de acordo com o que deseja: ')
// console.log('1.Contratar plano')
// console.log('2.Suporte técnico')
// console.log('3.Feedback')
// let opcao_cliente = prompt('')
// switch (opcao_cliente){
//     case '1':
//         console.log('          Qual plano deseja contratar?')
//         console.log('          1. Celular')
//         console.log('          2.Casa')
//         console.log('          3.Celular + Casa')
//         let plano = prompt("          ")
//             if (plano == '1'){ 
//                 console.log('Estamos lhe transferindo para um atendente... Por favor aguarde')
//             } 
//             if (plano == '2'){
//                 console.log('Estamos lhe transferindo para um atendente... Por favor aguarde')
//             }
//             if (plano == '3'){
//                 console.log('Estamos lhe transferindo para um atendente... Por favor aguarde')
//             }
//         break;

//     case '2':
//         console.log('O suporte é para que finalidade? 1.Celular 2.Wi-fi residensical 3.Televisão')
//         let suporte = prompt('')
//             if (suporte == '1'){
//                 console.log('Estamos lhe transferindo para um atendente... Por favor aguarde')
//             }
//             if (suporte == '2'){
//                 console.log('Estamos lhe transferindo para um atendente... Por favor aguarde')
//             }
//             if (suporte =='3'){
//                 console.log('Estamos lhe transferindo para um atendente... Por favor aguarde')
//             }
//         break;

//     case '3': 
//         console.log('Que tipo de feedback é: 1.Positivo 2.Negativo')
//         let feedback = prompt('')
//             if (feedback == '1'){
//                 console.log('Digite o seu feedback:')
//                 prompt('')
//                     console.log('Agradecemos! Sua opinião é muito importante para nós e servirá para melhorarmos.')
//             }
//             if (feedback == '2'){
//                 console.log('Digite o seu feedback:')
//                 prompt('')
//                     console.log('Agradecemos! Sua opinião é muito importante para nós e servirá para melhorarmos.')
//             }
//         break;

//     default:
//         console.log('Opção inválida. Por favor digite novamente');
    
// }
// console.log('')
// console.log('Seu atendimento será encerrado. Caso deseje um novo, inicie novamente.')

// 7 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
// cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um programa que leia o número de horas trabalhadas em um mês,
// o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas.
// (considere que o mês possua 4 semanas exatas). 

// const {espacamento2} = require('./funcoes.js')
// const prompt = require('prompt-sync')();
// const JornadaTrabalhoSemanal = '40'
// let nome = prompt('Qual o seu nome? ')
// let JornadaExtra = prompt('Quantas horas extras você fez no mês? ')
// let SalarioHora = prompt('Quanto é o seu salário por hora? ')
// const SalarioExtra = JornadaExtra * SalarioHora * 1.5
// const SalarioTotal = JornadaTrabalhoSemanal * SalarioHora * 4 + SalarioExtra

// espacamento2()
// console.log('Olá, ' + nome + ', seu salário total mensal é igual a: ' + SalarioTotal)
// espacamento2()




// 8 - Elabore uma calculadora simples, levando em consideração dois números
// de entrada pelo usuário e uma opção de operação
//  (SOMA, SUBTRAÇÃO, DIVISÃO etc). Pode ser utilizado o conceito do switch/case,
// IF/ELSE, funções e... laço se já souber! 

// const {espacamento2} = require('./funcoes.js')
// const prompt = require('prompt-sync')();

// console.log('Olá, está é sua calculadora virtual.')
// console.log('Por favor digite o primeiro número: ')
// const PrimeiroNumero = Number(prompt(''))

// console.log('Qual operação matemática você deseja realizar? Digite o número dela.')
// console.log('1.Adição  2.Subtração  3.Multiplicação  4.Divisão')
// const Operacao = Number(prompt(''))

// console.log('Por favor digite o segundo número da operação:')
// const SegundoNumero = Number(prompt(''))

// switch(Operacao) {

//     case 1:
//         console.log('O resultado é igual a: ' + (PrimeiroNumero + SegundoNumero))
//         break;

//     case 2:
//         console.log('O resultado é igual a: ' + (PrimeiroNumero - SegundoNumero))
//         break;

//     case 3: 
//         console.log('O resultado é igual a: ' + (PrimeiroNumero * SegundoNumero))
//         break;

//     case 4: 
//         console.log('O resultado é igual a: ' + (PrimeiroNumero / SegundoNumero))
//         break;

//     default:
//         console.log('Por favor digite uma opção válida.')

// }