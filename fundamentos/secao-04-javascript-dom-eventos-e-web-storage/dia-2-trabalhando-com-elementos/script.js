//Acesse o elemento elementoOndeVoceEsta.

const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = ondeVoceEsta.parentElement
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = 'Texto adicionado pelo DOM na seção primeiroFilhoDoFilho';

// Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const primeiroFilho2 = ondeVoceEsta.previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const atencaoTexto = ondeVoceEsta.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const terceiroFilho = ondeVoceEsta.nextElementSibling

// Agora acesse o terceiroFilho a partir de pai.

const terceiroFilho2 = pai.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;

// Crie um irmão para elementoOndeVoceEsta.

const irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.id = 'irmaoDoOndeVoceEsta';
pai.appendChild(irmaoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.

const filhoOndeVoceEsta = document.createElement('section');
filhoOndeVoceEsta.id = 'filhoDoOndeVoceEsta';
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoFilhoDoFilho = document.createElement('section');
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho3 = document.getElementById('filhoDoFilhoDoFilho');
const terceiroFilho3_2 = terceiroFilho3.parentElement.parentElement.nextElementSibling;
