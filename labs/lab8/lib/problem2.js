document.addEventListener("DOMContentLoaded", () => {
    
    if (!document.body) {
        document.body = document.createElement("body");
        document.documentElement.appendChild(document.body);
    }

    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.minHeight = "100vh"; // Takes up full viewport height
    document.body.style.margin = "0";

    const planetContainer = document.createElement("div");
    planetContainer.classList.add("planet");

    planetContainer.style.backgroundColor = "#2980b9"; 

    const moonElement = document.createElement("div");
    moonElement.classList.add("moon");

    moonElement.style.backgroundColor = "yellow";
    
    planetContainer.appendChild(moonElement);
    
    document.body.appendChild(planetContainer);
    
    const descriptiveText = document.createElement("div");
    descriptiveText.textContent = "The planet and the moon";

    descriptiveText.style.color = "white";
    descriptiveText.style.marginTop = "20px";
    descriptiveText.style.fontFamily = "sans-serif";
    descriptiveText.style.fontSize = "1.2rem";
    
    document.body.appendChild(descriptiveText);
});