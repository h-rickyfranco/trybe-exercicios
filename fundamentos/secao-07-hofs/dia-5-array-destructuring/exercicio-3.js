// escreva greet abaixo

function greet(name, salut = 'Hi') {
    return `${salut} ${name}`
}

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'