
var button

function setup() {
  createCanvas(400,400);
 
  button=createButton("");
  button.size(80,50);
  button.style("background-image","url(../images/push.png)");
  button.style("background-size","80%");
  button.style("background-repeat","no-repeat");
  button.style("background-position","center");
  button.style("border-radius","50px")
  button.style("border-color","red");
  button.mouseClicked(changeStyle);

 
 


  
}
function changeStyle(){
  button.style("background-image","url(../images/play.png)");
  button.style("background-size","1%");
  button.style("background-repeat","no-repeat");
  button.style("background-position","center");
}

function draw() 
{
  
}