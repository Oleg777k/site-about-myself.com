document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    
    function revealSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.classList.add("fade-in");
            }
        });
    }
    
    window.addEventListener("scroll", revealSections);
    revealSections();
    
    document.querySelectorAll(".more-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Подробнее о хобби!");
        });
    });
});
