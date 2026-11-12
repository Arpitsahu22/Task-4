// Mobile Navigation

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

}


// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        let formMessage = document.getElementById("formMessage");

        // Check required fields

        if (name === "" || email === "" ||
            subject === "" || message === "") {

            formMessage.style.color = "red";
            formMessage.innerText =
                "Please fill in all required fields.";

            return;
        }

        // Check email format

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.style.color = "red";
            formMessage.innerText =
                "Please enter a valid email address.";

            return;
        }

        // Successful validation

        formMessage.style.color = "green";

        formMessage.innerText =
            "Your form has been validated successfully!";

        contactForm.reset();

    });

}
