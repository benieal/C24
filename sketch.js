const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , box2, box3 , box4 ;
var supportbox;

var piggy1 , piggy2 ;

var log1 , log2 , log3 , log4;

var birdy ;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70); 
    box4 = new Box(920,240,70,70);

    supportbox = new Box(810,160,70,70);

    ground = new Ground(600,height,1200,20);


    piggy1 = new piggy(810,350);
    piggy2 = new piggy(810,220);

    birdy = new bird(100,100);

    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
    log3 = new log(760,120,150,PI/7);
    log4 = new log(870,120,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    supportbox.display();
    ground.display();
    piggy1.display();
    piggy2.display();
    birdy.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
   
}