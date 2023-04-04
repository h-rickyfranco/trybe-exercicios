const sorteador = (bet, generated) => bet === generated;

const sorteio = (bet, fctn) => {
    const number = Math.round(Math.random() * 5);
    
    return fctn(bet, number) ? 'Parabens, vc venceu!' : 'Tente de novo';
}
console.log(sorteio(2, sorteador));