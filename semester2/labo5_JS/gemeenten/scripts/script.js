const setup = () => {
    let gemeenten = [];
			while (true) {
				const input = (prompt("Voer u favorite gemeente in :) \nU kunt 'stop' typen om te stoppen")).toLowerCase();
				if (input === "stop") {
					break;
				}
				if (!gemeenten.includes(input)) {
					gemeenten.push(input);
				}

			
		}
		gemeenten.sort();
		const choiceList = document.createElement("select");
		for (const gemeente of gemeenten) {
			const optie = document.createElement("option");
			optie.value = gemeente;
			optie.text = gemeente;
			choiceList.appendChild(optie);
		}
		document.body.appendChild(choiceList);
};

window.addEventListener("load", setup);