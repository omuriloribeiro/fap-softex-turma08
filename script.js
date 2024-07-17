//1.CONVERSOR DE DÓLAR PARA REAL
// let dolar = prompt('Quantos dólares você quer converter para reais?')
// const dolar_conversao = 5.49*dolar
// const mensagem = `${dolar} dólares equivalem a ${dolar_conversao.toFixed(2)} reais`
// alert(mensagem);

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
//     alert(`${numero_1} é maior que ${numero_2}`)
// } else{
//     alert(`${numero_1} é menor que ${numero_2}`)
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
//Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo
// com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. 
//Antes de terminar, o código deve informar que irá ser encerrado.

const prompt = require('prompt-sync')();
let nome = prompt('Qual o seu nome? ')

console.log('Olá, ' + nome + '. Bem-vindo(a) a operadora Johnson')
let opcao_cliente = prompt('Digite o número de acordo com o que deseja: 1.Contratar plano  2.Suporte técnico  3.Feedback: ')
switch (opcao_cliente){
case '1':
    console.log('boa')
    break;
case '2':
    console.log('ai sim')
    break;
case '3': 
    console.log('kkkk')
    break;

default:
    console.log('Opção inválida. Por favor digite novamente')
}