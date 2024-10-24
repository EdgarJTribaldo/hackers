// script.js
const slider = document.querySelector('.slider-content');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const totalItems = items.length;

// Función para moverse al siguiente slide
function moveToNextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reinicia al primer slide
    }
    updateSliderPosition();
}

// Función para moverse al slide anterior
function moveToPrevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Va al último slide
    }
    updateSliderPosition();
}

// Función para actualizar la posición del slider
function updateSliderPosition() {
    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    slider.style.transform = newTransformValue;
}

// Agregar eventos a los botones
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);


//password 
// script.js
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    
    // Elementos de los criterios
    const lengthCriteria = document.getElementById("length");
    const uppercaseCriteria = document.getElementById("uppercase");
    const lowercaseCriteria = document.getElementById("lowercase");
    const numberCriteria = document.getElementById("number");
    const specialCriteria = document.getElementById("special");
    const passwordStrength = document.getElementById("password-strength");

    // Variables de verificación
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    const specialCheck = /[!@#$%^&*]/.test(password);
    
    // Actualizamos la clase de cada criterio según si se cumple
    lengthCheck ? lengthCriteria.classList.add("valid") : lengthCriteria.classList.remove("valid");
    uppercaseCheck ? uppercaseCriteria.classList.add("valid") : uppercaseCriteria.classList.remove("valid");
    lowercaseCheck ? lowercaseCriteria.classList.add("valid") : lowercaseCriteria.classList.remove("valid");
    numberCheck ? numberCriteria.classList.add("valid") : numberCriteria.classList.remove("valid");
    specialCheck ? specialCriteria.classList.add("valid") : specialCriteria.classList.remove("valid");
    
    // Mensaje de fuerza de la contraseña
    const checks = [lengthCheck, uppercaseCheck, lowercaseCheck, numberCheck, specialCheck];
    const passedChecks = checks.filter(Boolean).length;
    
    // Evaluamos la fortaleza en base a la cantidad de criterios cumplidos
    if (passedChecks === 5) {
        passwordStrength.textContent = "Contraseña fuerte";
        passwordStrength.style.color = "green";
    } else if (passedChecks >= 3) {
        passwordStrength.textContent = "Contraseña moderada";
        passwordStrength.style.color = "orange";
    } else {
        passwordStrength.textContent = "Contraseña débil";
        passwordStrength.style.color = "red";
    }
});
