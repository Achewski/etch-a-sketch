let panel = document.querySelector("#panel");
let btnRight = document.querySelector("#btnRight");

function addPixels(rowSize) {
	for (let i = 0; i < rowSize; i++) {
		let pixelRow = document.createElement("div");
		panel.appendChild(pixelRow);
		pixelRow.classList.add("pixelRow");
		pixelRow.style.flex = "1 1 0";
		pixelRow.style.display = "flex";
		for (let x = 0; x < rowSize; x++) {
			let pixel = document.createElement("div");
			pixelRow.append(pixel);
			pixel.classList.add("pixel");
			pixel.style.flex = "1 1 0";
			pixel.addEventListener("mouseover", () => {
				pixel.style.backgroundColor = "black";
			});
			btnRight.addEventListener("click", () => {
				pixel.style.backgroundColor = "initial";
			});
		}
	}
}

addPixels(80);