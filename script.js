const body = document.querySelector('body');
body.style.background = 'linear-gradient(to bottom, #111, #222)';
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

const p = document.querySelector('p');
p.style.padding = '30px';
p.style.textAlign = 'center';

const art = document.querySelector('article');
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

const acao1 = () => {
    alert('Vc clicou no botão nº 537')
};

// const acao3 = () => {
//     const divA3 = document.createElement('div');
//     const novaDivA3 = divA3.appendChild(textoContador);
//     let contadorClickA3 = (i) = {
//         for(i=0;i<=click;i++){
//             btn3.addEventListener('click', () => {
//                 const textoContador = document.createTextNode(`Vc clicou no botao n° 640 ${contadorClickA3} vezes.`)

//         });
//        }
//     }

// };



menuBtn2.addEventListener('click', () => {
    art.style.left = '1px';
    art.style.transition = 'all 200ms linear';
    art.style.overflow = 'hidden'
});

menuBtn.addEventListener('click', () => {
    art.style.left = '-351px';
    art.style.transition = 'all 200ms linear';
});

btn2.addEventListener('click', function acao2() {
        location.reload();
});

// let menuAberto = false;
// document.addEventListener('keydown', (event) => {
//     if (event.key.toLowerCase() === 'm'){
//         art.style.left = '-351px';
//         art.style.transition = 'all 200ms linear';
//         menuAberto = false;
//     } else {
//         art.style.left = '-351px';
//         art.style.transition = 'all 200ms linear';
//         art.style.overflow = 'hidden';
//         menuAberto = false;
//     }
// });

let menuAberto = false; // Variável para controlar o estado

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