const setup = () => {
    const selectElement = document.getElementById("staat");
	const imgElement = document.getElementById("img");
	const noteElement = document.getElementById("note");

	selectElement.addEventListener("change", () => {
		if (selectElement.value === "Met een ei") {
			imgElement.innerHTML = `<img src="./images.with-egg.png" alt="Kip met ei">`;
			imgElement.classList.remove("hidden");
			noteElement.innerHTML = "Hierboven, een kip met een ei";
		} else {
			imgElement.classList.add("hidden");
			noteElement.innerHTML = "";
		}
	})

    
    const zoekTerm = document.getElementById('letter').value;
    let teller = 0;
        let index = noteElement.indexOf(zoekTerm);
        while (index !== -1) {
            teller++;
            index = noteElement.indexOf(zoekTerm, index + 1);
        }

};
window.addEventListener("load", setup);

