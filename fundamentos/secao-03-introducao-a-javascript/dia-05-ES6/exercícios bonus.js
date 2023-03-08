function substituaX (nome) {
    const frase = `Tryber x aqui!`;
    const separa = frase.split(' ');
    separa[1] = nome;
    return `${separa[0]} ${separa[1]} ${separa[2]}`;    
}

function minhasSkills (param) {
    const primeiraFrase = substituaX(param);
    const skills = [`HTML`, `CSS`, `Javascript`];
    let resultado = `${primeiraFrase}\nMinhas três principais habilidades são:\n* ${skills[0]}\n* ${skills[1]}\n* ${skills[2]}`
    console.log(resultado);
}

minhasSkills(`henrique`)