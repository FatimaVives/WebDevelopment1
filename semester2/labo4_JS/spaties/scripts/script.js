const setup = () => {
    const processInput = () => {
        const inputText = document.getElementById("textInput").value;
        const charArray = inputText.split("");
        const spacedText = charArray.join(" ");
        console.log(spacedText);
    };

    const button = document.querySelector("button");
    button.addEventListener("click", processInput);
};

window.addEventListener("load", setup);

