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
const ingresso_vip_sem_pipoca  = '80 reais'
const ingresso_vip_com_pipoca = '110 reais'
const ingresso_standard_sem_pipoca = '40 reais'
const ingresso_standard_com_pipoca = '70 reais'

let ingresso_cliente = prompt('Qual ingresso você deseja? Digite VIP ou STANDARD')
let pipoca_cliente = prompt('Você quer pipoca? Digite SIM ou NÃO')

//6. Chat