let modal = document.getElementById("myModal");
let modalImage = document.getElementById("modalImage");

function openModal(img) {
    modal.style.display = "block";
    modalImage.src = img.src;
}

function closeModal() {
    modal.style.display = "none";
}

let slideIndex = 0;

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(index) {
    let slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
    
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    if (index >= slides.length) {
        slideIndex = 0;
    }

    modalImage.src = slides[slideIndex].src;
}

// Agrega estas funciones al archivo JS existente

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(index) {
    let slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
    
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    
    if (index >= slides.length) {
        slideIndex = 0;
    }

    modalImage.src = slides[slideIndex].src;
}
