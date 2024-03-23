const initialize = () => {
	let sliders = document.getElementsByClassName("slider");
	for (let i = 0; i < sliders.length; i++) {
		sliders[i].addEventListener("change", update);
		sliders[i].addEventListener("input", update);
	}

	let saveBtn = document.createElement("button");
    saveBtn.innerHTML = "Save";
    saveBtn.addEventListener("click", saveSwatch);
    let colorPicker = document.querySelector(".colorPicker");
    colorPicker.appendChild(saveBtn);

	update(); //als je refresht alles staat treug goed
};

const update = () => {
	let red=document.getElementById("sldRed").value; //input always value
	let green=document.getElementById("sldGreen").value;
	let blue=document.getElementById("sldBlue").value;
	document.getElementById("lblRed").innerHTML=red;
	document.getElementById("lblGreen").innerHTML=green;// html-element innerHTML
	document.getElementById("lblBlue").innerHTML=blue;
	let swatch=document.getElementById("swatch");
	swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
};

const saveSwatch = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;
    let swatch = document.createElement("div");
    swatch.classList.add("swatch"); //soort array
    swatch.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", deleteSwatch);
    swatch.appendChild(deleteBtn);
    let savedSwatches = document.querySelector(".savedSwatches");
    savedSwatches.appendChild(swatch);
    swatch.addEventListener("click", () => {
        setSwatch(red, green, blue);
    });
};

const setSwatch = (red, green, blue) => {
    document.getElementById("sldRed").value = red;
    document.getElementById("sldGreen").value = green;
    document.getElementById("sldBlue").value = blue;

    update();
};

const deleteSwatch = (event) => {
    event.stopPropagation(); //save the staat van de kleuren na het verwijderen
    let swatch = event.target.parentNode;
    swatch.parentNode.removeChild(swatch);
};

window.addEventListener("load", () => {
    initialize();
    let savedSwatches = document.createElement("div");
    savedSwatches.classList.add("savedSwatches");
    document.body.appendChild(savedSwatches);
});