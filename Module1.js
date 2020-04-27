//B1: Tạo giao diện.
//B1.1: Tao qua bong.
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let x = 20, y = 20;
let dx = 11, dy =3;
let radius = 10;
function ball() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI);
    ctx.fillStyle = "#d3d";
    ctx.fill();
    ctx.closePath();
}
//B1.2: Tao Bong nhay
function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ball();
    if (x-radius<0|| x+radius > c.width){
        dx = -dx;
    }
    if (y-radius<0|| y+radius>c.height){
        dy = -dy;
    }
    x +=dx;
    y +=dy;
    requestAnimationFrame(draw);
}
draw();

