function copyAccountNumber() {
    navigator.clipboard.writeText("36319538");
}

function copySortCode() {
    navigator.clipboard.writeText("601251");
}

function thumbnailActive(thumbnail) {
    thumbnails = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbnails.length; i ++) {
        thumbnails[i].classList.remove("active");
    }
    thumbnail.classList.add("active");
}

function getLast() {
    let thumbnails = document.getElementsByClassName("thumbnail");
    let currentLast = 0;
    for (let i = 0; i < thumbnails.length; i ++) {
        let index = parseInt(thumbnails[i].classList[1]);
        if (index > currentLast) {
            currentLast = index;
        }
    }

    return currentLast;
}

function getCurrent() {
    // get current active image
    let currentActive;
    let thumbnails = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbnails.length; i ++) {
        if (thumbnails[i].classList.contains("active")) {
            currentActive = thumbnails[i];
        }
    }
    return currentActive;
}

function prev() {
    // find which image should be active next
    let currentActive = getCurrent();
    let currentActiveIndex = currentActive.classList[1];
    let nextActiveIndex;
    if (currentActiveIndex === "0") {
        nextActiveIndex = getLast().toString();
    } else {
        nextActiveIndex = (parseInt(currentActiveIndex) - 1).toString();
    }

    // activate next image
    let thumbnails = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbnails.length; i ++) {
        if (thumbnails[i].classList.contains(nextActiveIndex)) {
            thumbnailActive(thumbnails[i]);
        }
    }
}

function next() {
    // find which image should be active next
    let currentActive = getCurrent();
    let currentActiveIndex = currentActive.classList[1];
    let nextActiveIndex;
    if (parseInt(currentActiveIndex) === getLast()) {
        nextActiveIndex = "0";
    } else {
        nextActiveIndex = (parseInt(currentActiveIndex) + 1).toString();
    }

    // activate next image
    let thumbnails = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbnails.length; i ++) {
        if (thumbnails[i].classList.contains(nextActiveIndex)) {
            thumbnailActive(thumbnails[i]);
        }
    }
}
