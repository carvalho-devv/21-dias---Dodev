// DESAFIO 2

const nome = prompt('Qual é o seu nome?')
const idade = parseInt(prompt('Qual é a sua idade?'))
const cartaMotorista = prompt('Você possui carta de motorista? (sim/nao')
const possuiCarro = prompt('Você possui carro?(sim ou nao)')

if (idade >= 18 && cartaMotorista === 'sim' && possuiCarro === 'sim'){
    console.log(nome +", voce será o motorista!")

} else if (idade >= 18 && cartaMotorista === 'sim' && possuiCarro === 'nao'){
    console.log(nome +", voce pode dirigir, mas nao tem um carro.")
} else {
    console.log(nome +", voce nao pode dirigir.")
}