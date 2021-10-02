var cat;
var catImage;
var cat_running;
function preload() {
    //cat_running = loadAnimation("se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se2.png","se13.png","se13.png","se13.png","se14.png","se14.png","se14.png","se14.png","se6.png","se5.png","se7.png","se4.png","se1.png","se3.png","se26.png","fro.png","fro2.png","fro3.png","fro4.png","fro5.png","fro6.png","fro7.png","fro8.png","fe1.png","fe19.png","fe10.png","fe11.png","fe8.png","fe9.png","se26.png","se27.png","fe12.png","fe7.png","fe6.png","fe3.png","fe4.png","fe5.png","fe13.png","fe13.png","fe13.png","fe13.png","fe14.png","fe14.png","fe14.png","fe16.png","fe15.png","fe17.png","se19.png","se20.png","se16.png","se17.png","se18.png","se23.png","se27.png","se10.png","se11.png","se12.png","se11.png","se12.png","se11.png","se12.png","se11.png","se12.png","se25.png","se22.png","se21.png","se8.png")
    cat_running = loadAnimation("pik-removebg-preview.png","p2-removebg-preview.png","p3-removebg-preview.png","p4-removebg-preview.png","p5-removebg-preview.png")
  }
function setup(){
    createCanvas(900,500);
    cat = createSprite(700,200,400,400);
    cat.addAnimation("moving",cat_running);
    cat.scale = 1.6;
}
function draw() {
  //cat.addImage("cat",catImage);
  background("red");

  stroke("black");
  fill("yellow");
  textSize(40);
  text("MY NEW POKMON FRIENDS",100,150);

  stroke("black");
  fill("yellow");
  textSize(40);
  text("*POKMON FAN*",250,100);
  textSize(50);
  text("*THIS IS FOR SMITH and PRANJAL:)*",10,440);
  textSize(30);
  text("From SHIVANI ",700,495);
  
  drawSprites()
}