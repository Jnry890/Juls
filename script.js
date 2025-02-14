let slideIndex = 0;
let audio = document.getElementById("romanticSong");

// Open Pop-up and Play Music (Fix for Mobile)
function openPopup() {
    document.getElementById("popup").style.display = "flex";
    showSlide(slideIndex);

    // Try playing the song, but only after user interaction
    if (audio.paused) {
        audio.play().catch(() => {
            console.log("Autoplay blocked, waiting for user interaction.");
        });
    }
}


// Close Pop-up and Pause Music
function closePopup() {
    document.getElementById("popup").style.display = "none";
    audio.pause(); // Stop the song when closing
    audio.currentTime = 0; // Reset to beginning
}

// Change Slide
function changeSlide(n) {
    showSlide(slideIndex += n);
}

// Show Selected Slide
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    
    if (n >= slides.length) {
        slideIndex = 0; // Loop back to first slide
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Go to last slide
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Random speed

    document.querySelector(".hearts-container").appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);
