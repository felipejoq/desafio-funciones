// Ejercicio 4
const turnBlack = (evt) => {
    const { target } = evt;
    target.classList.add('bg-black');
}

// Selecciona los elementos por clase .box y por id que cumplan el patrón box_#
const boxes = document.querySelectorAll('.box[id^="box_"]');

boxes.forEach(box => {
    box.addEventListener('click', turnBlack);
});

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
    const key = evt.key;
    if (colors.has(key)) {
        if (key === 'q' || key === 'w' || key === 'e') {
            renderBox(key);
        } else {
            boxKeys.style.background = colors.get(key);
        }
    }
});

const renderBox = (key) => {
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.background = colors.get(key);
    wrapper.appendChild(newBox);
}