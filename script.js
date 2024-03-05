let pressedKeys = '';

window.addEventListener('keyup', (e) => {
    pressedKeys += e.key;
    pressedKeys = pressedKeys.slice(-4);
    if(pressedKeys === "1337") {
        alert("You found an easter egg!");
    };
});

let myDiv = document.getElementById("easteregg1");
myDiv.addEventListener('click', (e) => {
    document.querySelector('main').style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F1%2Fthe-brawl-motionage-designs.jpg&f=1&nofb=1&ipt=86da209c301d719801172bdaa41be42a2d8892b56f38caa87a9be81dab28bd97&ipo=images')";
});