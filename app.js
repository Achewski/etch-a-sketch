let mouseDown = false;
let penColor = "black";
let html = document.querySelector("html");
let panel = document.querySelector("#panel");
let slider = document.querySelector("#slider");
let btnLeft = document.querySelector("#btnLeft");
let btnRight = document.querySelector("#btnRight");

document.addEventListener("mousedown", () => mouseDown = true);
document.addEventListener("mouseup", () => mouseDown = false);

btnLeft.addEventListener(("click"), () => {(penColor === "black") ? penColor = "initial": penColor = "black"});

let addPixels = ((rowSize) => {
	for (let i = 0; i < rowSize; i++) {
		let pixelRow = document.createElement("div");
		pixelRow.classList.add("pixelRow");
		pixelRow.style.flex = "1 1 0";
		pixelRow.style.display = "flex";
		panel.appendChild(pixelRow);
		for (let x = 0; x < rowSize; x++) {
			let newPixel = document.createElement("div");
			newPixel.classList.add("pixel");
			newPixel.style.flex = "1 1 0";
			pixelRow.append(newPixel);
			newPixel.addEventListener("mouseenter", () => {if (mouseDown === true) {newPixel.style.backgroundColor = penColor}});
			btnRight.addEventListener(("click"), () => {
				newPixel.style.backgroundColor = "initial";
				penColor = "black";
			});
		}
	}
});

addPixels(slider.value);

sliderLatestSetting = slider.value;
slider.onmouseup = () => {
	if (slider.value != sliderLatestSetting) {
		panel.innerHTML = "";
		sliderLatestSetting = slider.value;
		addPixels(slider.value);
		if (penColor === "initial") {penColor = "black"};
	}
};