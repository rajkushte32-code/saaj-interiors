
/* =========================================================
   SAAJ INTERIORS
   Premium Interior Design Website
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(function () {
        if (loader) {
            loader.classList.add("hide");
        }
    }, 900);

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        menuBtn.classList.toggle("active");
        nav.classList.toggle("active");

    });


    // Close menu after clicking a link

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            menuBtn.classList.remove("active");
            nav.classList.remove("active");

        });

    });

}


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".intro-left, .intro-right, .service, .gallery-item, .process-row, .contact-left, .contact-form"
);

const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   SERVICE CARD HOVER EFFECT
========================================================= */

const services = document.querySelectorAll(".service");

services.forEach(function (service) {

    service.addEventListener("mouseenter", function () {

        this.classList.add("service-hover");

    });

    service.addEventListener("mouseleave", function () {

        this.classList.remove("service-hover");

    });

});


/* =========================================================
   CONTACT FORM → WHATSAPP
========================================================= */

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name = contactForm.elements["name"].value.trim();
        const phone = contactForm.elements["phone"].value.trim();
        const email = contactForm.elements["email"].value.trim();
        const project = contactForm.elements["project"].value;
        const message = contactForm.elements["message"].value.trim();


        if (!name || !phone) {

            if (formNote) {

                formNote.textContent =
                    "Please enter your name and phone number.";

                formNote.style.opacity = "1";

            }

            return;

        }


        const whatsappNumber = "918104291443";


        const whatsappMessage =
            "Hello Samruddhi, I am interested in SAAJ INTERIORS.%0A%0A" +

            "Name: " + encodeURIComponent(name) + "%0A" +

            "Phone: " + encodeURIComponent(phone) + "%0A" +

            "Email: " + encodeURIComponent(email || "Not provided") + "%0A" +

            "Project Type: " + encodeURIComponent(project || "Not selected") + "%0A" +

            "Project Details: " + encodeURIComponent(message || "Not provided");


        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappMessage;


        if (formNote) {

            formNote.textContent =
                "Opening WhatsApp...";

            formNote.style.opacity = "1";

        }


        setTimeout(function () {

            window.open(whatsappURL, "_blank");

        }, 500);

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        "© " + new Date().getFullYear() + " SAAJ INTERIORS";

}


/* =========================================================
   PHONE NUMBER PROTECTION
========================================================= */

document.querySelectorAll('input[type="tel"]').forEach(function (input) {

    input.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9+\-\s]/g, "");

    });

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "%cSAAJ INTERIORS",
    "font-size: 24px; font-weight: bold;"
);

console.log(
    "Luxury Interior Design Studio · Mumbai"
)


/* =========================================================
   FOUNDER SECTION ANIMATION
========================================================= */

const founderSection = document.querySelector(".founder");

if (founderSection) {

    const founderElements = founderSection.querySelectorAll(
        ".founder-image, .founder-content"
    );

    const founderObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("founder-visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    founderElements.forEach(function (element) {

        element.classList.add("founder-hidden");

        founderObserver.observe(element);

    });

}

