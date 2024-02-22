let pressedKeys = '';

window.addEventListener('keyup', (e) => {
    pressedKeys += e.key;
    pressedKeys = pressedKeys.slice(-4);
    if(pressedKeys === "1337") {
        alert("You found an easter egg!");
    };
});