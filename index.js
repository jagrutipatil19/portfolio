const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>


emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

document.getElementById("contact-form")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const status = document.getElementById("form-status");
    const button = this.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )
    .then(() => {
        status.textContent = "Message sent successfully!";
        this.reset();
    })
    .catch((error) => {
        status.textContent = "Message could not be sent. Please try again.";
        console.error(error);
    })
    .finally(() => {
        button.disabled = false;
        button.textContent = "Send Message";
    });
});