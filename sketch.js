function setup() {
  createCanvas(1200, 1200);background("black");
}

function draw() {
  
  //console.log(mouseIsPressed);
  if(mouseIsPressed){
      rect(mouseX, mouseY, 40, 85);

  }
  
  fill("red");
  stroke("blue");
}
