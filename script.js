const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 400);
let gameSpeed = 2;
const doge = document.getElementById("doge");
const tree = document.getElementById("tree");
function jump() {
  if (doge.classList != "animate") {
    doge.classList.add("animate");
  }
  setTimeout(function () {
    doge.classList.remove("animate");
  }, 500);
}
var lose = setInterval(function () {
  var dogeTop = parseInt(window.getComputedStyle(doge).getPropertyValue("top"));
  var dogeLeft = parseInt(
    window.getComputedStyle(doge).getPropertyValue("left")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(tree).getPropertyValue("left")
  );
  var blockTop = parseInt(
    window.getComputedStyle(tree).getPropertyValue("top")
  );
  console.log(dogeTop, dogeLeft, blockLeft, blockTop);
  if (blockLeft - dogeLeft <= 50 && blockLeft - dogeLeft >= 0 && blockTop - dogeTop <= 50 && blockTop - dogeTop >= -20) {
    tree.style.animation = "none";
    tree.style.display = "none";
    alert("You lose.");
    window.location.reload();
  }
}, 10);
const backgroundLayer1 = new Image();
backgroundLayer1.src = "game.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "game.png";
let x = 0;
let x1 = 800;
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer1, x, 0);
  ctx.drawImage(backgroundLayer2, x1, 0);
  if (x < -800) x = 800 + x1 - gameSpeed;
  else x -= gameSpeed;
  if (x1 < -800) x1 = 800 + x - gameSpeed;
  else x1 -= gameSpeed;
  requestAnimationFrame(animate);
}
animate();
