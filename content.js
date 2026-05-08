let guiltImages = [
    "https://bit.ly/42VGfzp",
    "https://people.ce.pdn.ac.lk/images/staff/academic-staff/kamalanath-samarakoon.png",
    "https://people.ce.pdn.ac.lk/images/staff/academic-staff/suneth-namal-karunarathna.png"

];

function replaceImages() {
    const imgs = document.getElementsByTagName("img");
    for (let i = 0; i < imgs.length; i++) {
        const index = Math.floor(Math.random() * guiltImages.length);
        if (imgs[i].src !== guiltImages[index]) {
            imgs[i].src = guiltImages[index];
        }
    }
}

replaceImages();

const observer = new MutationObserver(replaceImages);
observer.observe(document.body, { childList: true, subtree: true });