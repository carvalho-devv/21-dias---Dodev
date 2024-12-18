// CRIANDO AS VARIÁVEIS
let nome = ""
let idade = 0
let altura = 0
let peso = 0

// Preenchimento de informações do usuário
nome = prompt('Qual o seu nome?')
idade = parseInt(prompt('Qual a sua idade?'))
altura = parseInt(prompt('Qual é a sua altura?'))
peso = parseInt(prompt('Qual é o seu peso?'))

// Calculando nascimento
let anoNascimento = 0
anoNascimento = 2023 - idade

// Calculando IMC
let imc = 0
imc = peso / (altura * altura)
imc = imc

console.log('Olá ' + nome + ' você tem ' + idade + ' anos, nasceu em ' + anoNascimento + ' tem ' + altura + ' de altura, pesa ' + peso + ' kg, seu IMC é de ' + imc + ' Kg/m2')




  