// Ejercicio 4
const turnBlack = (evt) => {
    const { target } = evt;
    target.classList.add('bg-black');
}

document.getElementById('box_1').addEventListener('click', turnBlack);
document.getElementById('box_2').addEventListener('click', turnBlack);
document.getElementById('box_3').addEventListener('click', turnBlack);
document.getElementById('box_4').addEventListener('click', turnBlack);

// Teclas
const colors = new Map();
colors.set('a', '#ffc0cb');
colors.set('s', '#ffa500 ');
colors.set('d', '#87ceeb');
colors.set('q', '#572364');
colors.set('w', '#8b8b8e');
colors.set('e', '#a18262');

const boxKeys = document.getElementById('key');
const wrapper = document.getElementById('wrapper');

document.addEventListener('keydown', (evt) => {
    if (evt.key === 'a') {
        boxKeys.style.background = colors.get('a');
    } else if (evt.key === 's') {
        boxKeys.style.background = colors.get('s');
    } else if (evt.key === 'd') {
        boxKeys.style.background = colors.get('d');
    } else if (evt.key === 'q') {
        renderBox(evt.key);
    } else if (evt.key === 'w') {
        renderBox(evt.key);
    } else if (evt.key === 'e') {
        renderBox(evt.key);
    }
});

const renderBox = (key) => {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.background = colors.get(key);
    wrapper.appendChild(newBox);
}