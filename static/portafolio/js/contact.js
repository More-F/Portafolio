document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // 🚫 evita que se abra la URL /contacto/

        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        try {
            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    "X-CSRFToken": csrftoken,
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: new FormData(form)
            });

            const data = await response.json();

            if (data.status === "ok") {
                formMessage.innerHTML = `<p style="color:lime; font-weight:bold;">✅ ${data.message}</p>`;
                form.reset();
            } else {
                formMessage.innerHTML = `<p style="color:red;">❌ Error: ${data.errors ? JSON.stringify(data.errors) : data.message}</p>`;
            }
        } catch (err) {
            formMessage.innerHTML = `<p style="color:red;">❌ Error en el servidor. Intenta más tarde.</p>`;
        }
    });
});

