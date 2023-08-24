var toggleButton = document.getElementById("toggleButton");
var enlaces = document.getElementById("links");

toggleButton.addEventListener('click', function() {
    enlaces.classList.toggle("hidden");
});