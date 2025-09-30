document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".faq-item");

  function closeAll(except = null) {
    items.forEach(item => {
      if (item === except) return;
      item.classList.remove("open");
      const btn = item.querySelector(".faq-question");
      btn.setAttribute("aria-expanded", "false");
      const ans = item.querySelector(".faq-answer");
      if (ans) ans.hidden = true;
    });
  }

  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const ans = item.querySelector(".faq-answer");
    btn.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (isOpen) {
        ans.hidden = false;
        // cerrar otros para UX tipo acordeón (opcional)
        closeAll(item);
      } else {
        ans.hidden = true;
      }
    });

    // keyboard accessibility: Enter or Space activates
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });
});
