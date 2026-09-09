
document.addEventListener("DOMContentLoaded", () => {

    document.title = "KKU Engineering";

    const kkuLogoImage = document.getElementById("kku-logo");

    if (kkuLogoImage) {
        // 1. Image Replacement
        kkuLogoImage.src = "pic/EN_KKU.jpg";
        kkuLogoImage.alt = "Faculty of Engineering Logo";

        // Create the anchor element to make the image clickable
        const imageLinkWrapper = document.createElement("a");
        imageLinkWrapper.href = "https://www.en.kku.ac.th";
        imageLinkWrapper.target = "_blank";

        kkuLogoImage.parentNode.insertBefore(imageLinkWrapper, kkuLogoImage);
        imageLinkWrapper.appendChild(kkuLogoImage);

        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = "We hope you enjoy learning";
        
        messageParagraph.className = "greeting-message";
        
        imageLinkWrapper.insertAdjacentElement("afterend", messageParagraph);
    }
});