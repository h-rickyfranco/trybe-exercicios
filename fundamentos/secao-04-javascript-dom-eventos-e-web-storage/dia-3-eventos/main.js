const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

    // - Porque a primeira caixa está com a classe 'tech', que tem como propriedade no CSS que altera o posicionamento dela em relação ao eixo Y.

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

const changeClassTech = (event) => {
    
    const elementeTech = document.querySelector('.tech');
    elementeTech.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
}
firstLi.addEventListener('click', changeClassTech);
secondLi.addEventListener('click', changeClassTech);
thirdLi.addEventListener('click', changeClassTech);

//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

    // do jeito que foi feito acima.

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('input', (event) => {
      const techElement = document.querySelector('.tech');
  techElement.innerText = event.target.value;
});
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
myWebpage.addEventListener('dblclick', (event) => {
    window.open('http://www.google.com', '_blank');
});


//  - Que tal redirecionar para seu portfólio?

// ainda não está pronto

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
});
myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = 'unset';
});

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.