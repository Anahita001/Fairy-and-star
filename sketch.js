var starImg,bgImg;
var star, starBody;
var fairyImg,fairy,fairyBody;
var fairySound,fairySoundl;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairySound = loadSound("sound/JoyMusic.mp3");

	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);
     
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
     fairy = createSprite(150,400);
	 fairy.addAnimation("flyingfairy",fairyImg);
	 fairy.scale = 0.3;
     fairySound.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	fairyBody = Bodies.circle(150,400,9)

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  
  if(star.y > 355 && starBody.position.y > 355){
	  Matter.Body.setStatic(starBody,true);
  }
 
  //write code to stop star in the hand of fairy
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}

	if (keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
    
	
	//writw code to move fairy left and right
	
}