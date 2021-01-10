function colorFix(posicio) {
    for (i = posicio; i > 0; i--) {
        document.getElementById("vinil" + i).classList.add("pintar");
    }

    for (i = posicio + 1; i <= 5; i++) {
        document.getElementById("vinil" + i).classList.remove("pintar");
    }
}

document.addEventListener("click", (evt) => {
    let vinil = document.getElementById("container");
    let targetElement = evt.target;

    if (!vinil.contains(targetElement)) {
        colorFix(0);
    }
});

