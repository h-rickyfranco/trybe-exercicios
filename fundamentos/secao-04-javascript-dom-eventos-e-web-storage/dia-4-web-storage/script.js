// ------------- Créditos ---------------
console.log('Exercícios da Trybe feitos por Henrique Franco');
// ---------------------------------------

// -------------- Captura de Elementos ---------
const btnBgWhite = document.getElementById('btnBgWhite');
const btnBgBlack = document.getElementById('btnBgBlack');
const btnBgGreen = document.getElementById('btnBgGreen');
const btnBgBlue = document.getElementById('btnBgBlue');
const btnBgYellow = document.getElementById('btnBgYellow');
const btnFontBlack = document.getElementById('btnFontBlack');
const btnFontRed = document.getElementById('btnFontRed');
const btnFontWhite = document.getElementById('btnFontWhite');
const btnFontSize8 = document.getElementById('btnFontSize8');
const btnFontSize10 = document.getElementById('btnFontSize10');
const btnFontSize12 = document.getElementById('btnFontSize12');
const btnFontSize14 = document.getElementById('btnFontSize14');
const btnFontSize20 = document.getElementById('btnFontSize20');
const btnLineSpace1 = document.getElementById('btnLineSpace1');
const btnLineSpaceN = document.getElementById('btnLineSpaceN');
const btnLineSpace1P5 = document.getElementById('btnLineSpace1.5');
const btnLineSpace2 = document.getElementById('btnLineSpace2');
const btnLineSpace3 = document.getElementById('btnLineSpace3');
const btnFFArial = document.getElementById('btnFFArial');
const btnFFTimes = document.getElementById('btnFFTimes');
// -------------------------------------------

// --------------- Mudar BG ------------------
document.body.style.backgroundColor = localStorage.getItem('bgcolor');
btnBgWhite.addEventListener('click', () => {
    localStorage.setItem('bgcolor', 'white')
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
});

btnBgBlack.addEventListener('click', () => {
    localStorage.setItem('bgcolor', 'black')
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
});

btnBgGreen.addEventListener('click', () => {
    localStorage.setItem('bgcolor', 'green')
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
});

btnBgBlue.addEventListener('click', () => {
    localStorage.setItem('bgcolor', 'blue')
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
});

btnBgYellow.addEventListener('click', () => {
    localStorage.setItem('bgcolor', 'yellow')
    document.body.style.backgroundColor = localStorage.getItem('bgcolor');
});
// ---------------------------------------

// ----------------Mudar Font Color ----------------
document.body.style.color = localStorage.getItem('fontcolor');
btnFontBlack.addEventListener('click', () => {
    localStorage.setItem('fontcolor', 'black')
    document.body.style.color = localStorage.getItem('fontcolor');
});

btnFontRed.addEventListener('click', () => {
    localStorage.setItem('fontcolor', 'red')
    document.body.style.color = localStorage.getItem('fontcolor');
});

btnFontWhite.addEventListener('click', () => {
    localStorage.setItem('fontcolor', 'white')
    document.body.style.color = localStorage.getItem('fontcolor');
});
// ---------------------------------------

// ----------------Mudar Font Size ----------------
document.body.style.fontSize = localStorage.getItem('fontsize');
btnFontSize8.addEventListener('click', () => {
    localStorage.setItem('fontsize', '8pt')
    document.body.style.fontSize = localStorage.getItem('fontsize');
});

btnFontSize10.addEventListener('click', () => {
    localStorage.setItem('fontsize', '10pt')
    document.body.style.fontSize = localStorage.getItem('fontsize');
});

btnFontSize12.addEventListener('click', () => {
    localStorage.setItem('fontsize', '12pt')
    document.body.style.fontSize = localStorage.getItem('fontsize');
});

btnFontSize14.addEventListener('click', () => {
    localStorage.setItem('fontsize', '14pt')
    document.body.style.fontSize = localStorage.getItem('fontsize');
});

btnFontSize20.addEventListener('click', () => {
    localStorage.setItem('fontsize', '20pt')
    document.body.style.fontSize = localStorage.getItem('fontsize');
});
// ------------------------------------------------

// ----------------Mudar Line Space ----------------
document.body.style.lineHeight = localStorage.getItem('lineheight');
btnLineSpace1.addEventListener('click', () => {
    localStorage.setItem('lineheight', '1')
    document.body.style.lineHeight = localStorage.getItem('lineheight');
});

btnLineSpaceN.addEventListener('click', () => {
    localStorage.setItem('lineheight', 'normal')
    document.body.style.lineHeight = localStorage.getItem('lineheight');
});

btnLineSpace1P5.addEventListener('click', () => {
    localStorage.setItem('lineheight', '1.5')
    document.body.style.lineHeight = localStorage.getItem('lineheight');
});

btnLineSpace2.addEventListener('click', () => {
    localStorage.setItem('lineheight', '2')
    document.body.style.lineHeight = localStorage.getItem('lineheight');
});

btnLineSpace3.addEventListener('click', () => {
    localStorage.setItem('lineheight', '3')
    document.body.style.lineHeight = localStorage.getItem('lineheight');
});
// ------------------------------------------------

// ----------------Mudar Font Family ----------------
document.body.style.fontFamily = localStorage.getItem('fontFamily');
btnFFArial.addEventListener('click', () => {
    localStorage.setItem('fontFamily', 'Arial')
    document.body.style.fontFamily = localStorage.getItem('fontFamily');
});

btnFFTimes.addEventListener('click', () => {
    localStorage.setItem('fontFamily', 'Times New Roman')
    document.body.style.fontFamily = localStorage.getItem('fontFamily');
});


// ------------------------------------------------