//STYLES 

const body = document.querySelector('body');
body.style.height = '100dvh';
body.style.margin = '0';
body.style.padding = '0';
body.style.color = '#eee';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.fontFamily = 'Inter, sans-serif';
body.style.gap = '2rem';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
let backgroundColors = [
    `linear-gradient(to bottom, #111, #222)`,
    `linear-gradient(to bottom, #2d0070, #222)`,
    `linear-gradient(to bottom, #990005, #222)`,
    `linear-gradient(to bottom, #b34200, #222)`,
    `linear-gradient(to bottom, #007006, #222)`,
    `linear-gradient(to bottom, #700067, #222)`,
    `linear-gradient(to bottom, #004f10, #222)`,
    `linear-gradient(to bottom, #014e52, #222)`,
    `linear-gradient(to bottom, #6e5800, #222)`,
    `linear-gradient(to bottom, #48006e, #222)`
]

body.style.background = `${backgroundColors[0]}`;

const p = document.querySelector('p');
p.style.padding = '30px';
p.style.textAlign = 'center';

const art = document.getElementById('menu');
art.style.background = 'linear-gradient(to bottom, #110024ff, #350053ff)';
art.style.padding = '2rem';
art.style.borderRadius = '8px'
art.style.position = 'absolute';
art.style.height = '800px';
art.style.left = '-351px';
art.style.display = 'flex';
art.style.flexDirection = 'column';
art.style.justifyContent = 'space-around';
art.style.alignItems = 'center';
art.style.width = '250px'
art.style.gap = '2rem';

const menuBtn = document.getElementById("fechar");
menuBtn.style.background = 'rgba(255, 255, 255, 0.1)';
menuBtn.style.border = '1px solid #ccc';
menuBtn.style.color = 'white';
menuBtn.style.padding = '8px';
menuBtn.style.borderRadius = '8px';

const menuBtn2 = document.getElementById("abrir");
menuBtn2.style.background = 'rgba(255, 255, 255, 0.1)';
menuBtn2.style.border = '1px solid #ccc';
menuBtn2.style.color = 'white';
menuBtn2.style.padding = '8px';
menuBtn2.style.borderRadius = '8px';

const btn1 = document.getElementById('btn1');
btn1.style.background = 'rgba(0, 0, 0, 0.1)';
btn1.style.border = '1px solid #ccc';
btn1.style.color = 'white';
btn1.style.padding = '8px';
btn1.style.borderRadius = '8px';

const btn2 = document.getElementById('btn2');
btn2.style.background = 'rgba(0, 0, 0, 0.1)';
btn2.style.border = '1px solid #ccc';
btn2.style.color = 'white';
btn2.style.padding = '8px';
btn2.style.borderRadius = '8px';

const btn3 = document.getElementById('btn3');
btn3.style.background = 'rgba(0, 0, 0, 0.1)';
btn3.style.border = '1px solid #ccc';
btn3.style.color = 'white';
btn3.style.padding = '8px';
btn3.style.borderRadius = '8px';

const btn4 = document.getElementById('btn4');
btn4.style.background = 'rgba(0, 0, 0, 0.1)';
btn4.style.border = '1px solid #ccc';
btn4.style.color = 'white';
btn4.style.padding = '8px';
btn4.style.borderRadius = '8px';

newDivA3.style.margin = '0'
newDivA3.style.padding = '0'

// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//     button.style.background = 'rgba(0, 0, 0, 0.1)';
//     button.style.border = '1px solid #ccc';
//     button.style.color = 'white';
//     button.style.padding = '8px';
//     button.style.borderRadius = '8px';
// });

// Esse codigo acima estiliza todos os botoes, mas perde as funcionalidades

//EVENTOS E DOM

// btn1
btn1.addEventListener('click', function acao1() {
    alert('Vc clicou no botão nº 537')
});

// btn2
btn2.addEventListener('click', function acao2() {
        location.reload();
});

// btn3
let contadorA3 = 0;
btn3.addEventListener('click', function acao3() {
    contadorA3++;

    const divA3 = document.createElement('article');
    const textoA3 = document.createTextNode(`Vc clicou no botão n° 640 [ ${contadorA3} ] vezes.`);
    divA3.appendChild(textoA3);

    const newDivA3 = document.getElementById('newDivA3');
    if(newDivA3){
        const divExistente = document.querySelector("#contador-div");
        if(divExistente){
            divExistente.remove();
        }
        divA3.id = 'contador-div';
        document.body.insertBefore(divA3, newDivA3);
    } else {
        document.body.appendChild(divA3);
    }
});

// btn4 - Controle de fundo
let currentColorIndex = 0;
let rgbMode = false;
let intervalId = null;

btn4.addEventListener('click', function changeBackground() {
    if (rgbMode) {
        // Se o modo RGB estiver ativo, desativar ao clicar
        clearInterval(intervalId);
        rgbMode = false;
        console.log('Modo RGB desativado pelo clique');
    }
    // Mudar para a próxima cor
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    body.style.background = backgroundColors[currentColorIndex];
    body.style.transition = 'all 5500ms linear';
});

btn4.addEventListener('dblclick', function toggleRgbMode() {
    if (rgbMode) {
        // Desativar modo RGB
        clearInterval(intervalId);
        rgbMode = false;
        console.log('Modo RGB desativado');
    } else {
        // Ativar modo RGB
        rgbMode = true;
        intervalId = setInterval(() => {
            currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
            body.style.background = backgroundColors[currentColorIndex];
            body.style.transition = 'all 5s linear';
        }, 5000);
        console.log('Modo RGB ativado');
    }
});

// Menu - Botões
menuBtn2.addEventListener('click', () => {
    art.style.left = '1px';
    art.style.transition = 'all 200ms linear';
    art.style.overflow = 'hidden'
});

menuBtn.addEventListener('click', () => {
    art.style.left = '-351px';
    art.style.transition = 'all 200ms linear';
});

let menuAberto = false; // Variável para controlar o estado do menu, se fechado ou aberto

document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'm') {
        if (menuAberto) {
            // Fechar menu
            art.style.left = '-351px';
            art.style.transition = 'all 200ms linear';
            menuAberto = false;
        } else {
            // Abrir menu
            art.style.left = '1px';
            art.style.transition = 'all 200ms linear';
            art.style.overflow = 'hidden';
            menuAberto = true;
        }
    }
});