const cv = document.getElementById("canvas");
const ctx = cv.getContext("2d");
let pxgamepad = new PxGamepad();

pxgamepad.on('a', function() {
  console.log("A button pressed");
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "green";
  ctx.fill();
});

pxgamepad.on('b', function() {
  console.log("B button pressed");
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "red";
  ctx.fill();
});

pxgamepad.on('x', function() {
  console.log("X button pressed");
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "blue";
  ctx.fill();
});

pxgamepad.on('y', function() {
  console.log("Y button pressed");
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "yellow";
  ctx.fill();
});

pxgamepad.on('leftTrigger', function() {
  console.log("leftTrigger button pressed");
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "orange";
  ctx.fill();
});

setInterval(function() {
    pxgamepad.update();
},25);
