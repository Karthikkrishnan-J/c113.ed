function preload(){

}
function setup(){
canva = createCanvas(640,480);
canva.position(110,250);
camera = createCapture(VIDEO);
camera.hide();
color = "";
}
function draw(){
image(camera,0,0,640,480);
circle(70,60,50);
fill("red");
circle(70,410,50);
fill("red");
circle(570,60,50);
fill("red");
circle(570,410,50);
fill("red");
tint(color);
}
function filter_img(){
console.log("new color in added to picture");
color = document.getElementById("color").value;
document.getElementById("color").innerHTML="";
}
function snap(){
save("your.png");
console.log("picture is saved")
}