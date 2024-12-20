// DESAFIO 1 

const fome = prompt('Voce está com fome?(sim/nao)')
const dinheiro = prompt('Voce está com dinheiro?(sim/nao)')
const restauranteaberto = prompt('O restaurante está aberto?(sim/nao)')

if (fome === " nao" || dinheiro === "nao" ) {
    console.log('Hoje a janta será em casa')
} else if (fome === 'sim' && dinheiro === 'sim' && restauranteaberto === 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido')
} else {
    console.log('Peça um delivery.')

}


