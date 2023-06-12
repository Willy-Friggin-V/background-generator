var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body= document.getElementById("gradient");
var button1 = document.querySelector(".btn1");
var button2 = document.querySelector(".btn2");

colorChange();

css.textContent = body.style.background + ";";

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);

function colorChange(){
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

button1.addEventListener("click", function()
{
	var letters = '0123456789ABCDEF';
 	var color = '#';
 	for (var i = 0; i < 6; i++)
 	{
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	color1.value = color;

  	colorChange();
});

button2.addEventListener("click", function()
{
	var letters = '0123456789ABCDEF';
 	var color = '#';
 	for (var i = 0; i < 6; i++)
 	{
    	color += letters[Math.floor(Math.random() * 16)];
  	}
  	color2.value = color;

  	colorChange();
});

//function change