document.addEventListener("DOMContentLoaded", function () {
    let serviceBoxes = document.querySelectorAll(".hidden");

    function revealOnScroll() {
        let windowHeight = window.innerHeight;
        serviceBoxes.forEach(function (box) {
            let boxTop = box.getBoundingClientRect().top;
            if (boxTop < windowHeight - 50) {
                box.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run once on page load
});