const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState="onSling"
function setup() {
 var canvas = createCanvas(1535,700);
    engine = Engine.create();
    world = engine.world;

  ground=new Ground(1100,650,5000,50)
  platform=new Ground(800,400,300,20)
  box1=new Box(200,350,60,60)
  box2=new Box(800,375,30,50)
  box3=new Box(700,375,30,50)
  box4=new Box(750,375,30,50)
  box5=new Box(850,375,30,50)
  box6=new Box(900,375,30,50)
  box7=new Box(725,310,30,50)
  box8=new Box(775,310,30,50)
  box9=new Box(825,310,30,50)
  box10=new Box(875,310,30,50)
  box11=new Box(750,260,30,50)
  box12=new Box(850,260,30,50)
  box13=new Box(800,260,30,50)
  box14=new Box(775,208,30,50)
  box15=new Box(825,208,30,50)
  box16=new Box(800,150,30,50)

  Ammo1=new Ammo(230,230,60,60)
  Launcher=new SlingShot(Ammo1.body,{x:230,y:200})
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  ground.display()
  platform.display()
  Ammo1.display()
  Launcher.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()

}
function mouseReleased(){
  Launcher.fly();
  gameState="launched"
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(Ammo1.body, {x: mouseX , y: mouseY});
  }
}
function keyPressed(){
  if(keyCode === 32 && Ammo1.body.speed<1){
      Matter.Body.setPosition(Ammo1.body,{x:200,y:50})
   Launcher.attach(Ammo1.body);
   gameState="OnSling"
  }
}
