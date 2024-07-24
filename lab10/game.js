// Landscape
var Scene = (function () {
    var entity = {};
    function fullScreenProperties() {
        var ratio = 0.8;
        return {
            x: window.innerWidth * ratio,
            y: window.innerHeight * ratio
        };
    }
    function drawGrass() {
        entity.context.fillStyle = "#2ecc71";
        entity.context.fillRect(0, entity.y * 0.9, entity.x, entity.y * 0.1);
    }
    function drawSky() {
        entity.context.fillStyle = "#3498db";
        entity.context.fillRect(0, 0, entity.x, entity.y * 0.9);
    }
    entity.init = function (drawpad) {
        var dim = fullScreenProperties();
        this.drawpad = drawpad;
        this.context = drawpad.getContext("2d");
        this.x = dim.x;
        this.y = dim.y;
        this.drawpad.width = dim.x;
        this.drawpad.height = dim.y;
        drawGrass();
        drawSky();
    }
    return entity;
}());

// Load the Landscape
window.addEventListener("load", function () { Scene.init(drawpad); }, false);

// Trees 
function drawTree(x) {
    var y = entity.y * 0.9;
    var context = entity.context;
    context.beginPath();
    context.moveTo(x, y);
    context.fillStyle = "#A17917";
    context.lineTo(x + 4, y - 20);
    context.lineTo(x + 8, y - 20);
    context.lineTo(x + 12, y);
    context.closePath();
    context.fill();
    context.beginPath();
    context.arc(x + 6, y - 25, 10, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
}

