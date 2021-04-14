const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane, rubber; 
var stone, iron;

function setup(){
    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world  = engine.world;
    
    plane =  new  Plane(600,height,1200,100);
    hammer = new Hammer(10,100);
    rubber = new Rubber(300,200,50);
    
    stone = new Stone(400,150);
    iron = new Iron(400,300);
}

function draw(){
    background('pink');
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}