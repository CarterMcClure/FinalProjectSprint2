// hub.js
function hub() {
    // This probably needs to be redone for using multiple javascript files
    let canvas = document.getElementById('game');
    let context = canvas.getContext('2d');
    context.font = "30px Arial";
    context.fillText("Hello world", 300, 100);
}

hub();

