let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'sim';

console.log(info);

for (let keys in info) {
    console.log(keys);
}
for (let keys in info) {
    console.log(info[keys]);
}

let infoTioPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinha',
    recorrente: 'sim',
  };

for (let keys in info) {
    if (keys != 'recorrente') {
        console.log(info[keys] + ' e ' + infoTioPatinhas[keys]);
    }
}
if (info.recorrente === infoTioPatinhas.recorrente && info.recorrente === 'sim') {
    console.log('Ambos recorrentes');
}