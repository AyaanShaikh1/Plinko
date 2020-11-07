
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [] ;
var plinko = [] ;
var division = [] ;

var divisionHeight = 300;

function preload()
{
	
}

function setup() {
	createCanvas(500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(50,790,1200,20);
	
	
	plinko1 = new Plinko(5,90,20);
	plinko2 = new Plinko(65,90,20);
	plinko3 = new Plinko(125,90,20);
	plinko4 = new Plinko(185,90,20);
	plinko5 = new Plinko(245,90,20);
	plinko6 = new Plinko(305,90,20);
	plinko7 = new Plinko(365,90,20);
	plinko8 = new Plinko(425,90,20);
	plinko9 = new Plinko(480,90,20);

	
	plinko10 = new Plinko(65,210,20);
	plinko11 = new Plinko(125,210,20);
	plinko12 = new Plinko(185,210,20);
	plinko13 = new Plinko(245,210,20);
	plinko14 = new Plinko(305,210,20);
	plinko15 = new Plinko(365,210,20);
	plinko16 = new Plinko(425,210,20);
	plinko17 = new Plinko(480,210,20);
	plinko18 = new Plinko(5,210,20);

	plinko19 = new Plinko(5,340,20);
	plinko20 = new Plinko(65,340,20);
	plinko21 = new Plinko(125,340,20);
	plinko22 = new Plinko(185,340,20);
	plinko23 = new Plinko(245,340,20);
	plinko24 = new Plinko(305,340,20);
	plinko25 = new Plinko(365,340,20);
	plinko26 = new Plinko(425,340,20);
	plinko27 = new Plinko(480,340,20);

	plinko28 = new Plinko(5,470,20);
	plinko29 = new Plinko(65,470,20);
	plinko30 = new Plinko(125,470,20);
	plinko31 = new Plinko(185,470,20);
	plinko32 = new Plinko(245,470,20);
	plinko33 = new Plinko(305,470,20);
	plinko34 = new Plinko(365,470,20);
	plinko35 = new Plinko(425,470,20);
	plinko36 = new Plinko(480,470,20);


	Engine.run(engine);
  
 }


      function draw() {
      rectMode(CENTER);
		background(0);
		
	
  	  ground.display();
	 

	 

	  plinko1.display();
	  plinko2.display();
	  plinko3.display();
	  plinko4.display();
	  plinko5.display();
	  plinko6.display();
	  plinko7.display();
	  plinko8.display();
	  plinko9.display();

	  plinko10.display();
	  plinko11.display();
	  plinko12.display();
	  plinko13.display();
	  plinko14.display();
	  plinko15.display();
	  plinko16.display();
	  plinko17.display();
	  plinko18.display();

	  plinko19.display();
	  plinko20.display();
	  plinko21.display();
	  plinko22.display();
	  plinko23.display();
	  plinko24.display();
	  plinko25.display();
	  plinko26.display();
	  plinko27.display();

	  plinko28.display();
	  plinko29.display();
	  plinko30.display();
	  plinko31.display();
	  plinko32.display();
	  plinko33.display();
	  plinko34.display();
	  plinko35.display();
	  plinko36.display();

	drawSprites();
	spawnDivisions();
		spawnParticles();
	}

	
	
function spawnDivisions(){
	for(var k = 0; k <=width; k = k + 80 ){
		division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
		}

		for(var k = 0; k < division.length; k++ ){
			division[k].display(); 
		}	
	}

 function spawnParticles(){
	 if(frameCount%60===0){
		particles.push(new Particle(random(width/2-10,width/2+10),10,10));
	 }

	 for(var m = 0; m < particles.length; m++ ){
		particles[m].display();
	 }
 } 
