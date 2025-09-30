document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((btn) => {
        btn.addEventListener("click", () => {
            const item = btn.parentElement;

            // Cerrar otros
            document.querySelectorAll(".faq-item").forEach((el) => {
                if (el !== item) {
                    el.classList.remove("active");
                }
            });

            // Toggle actual
            item.classList.toggle("active");
        });
    });
});
