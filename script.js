// Portfolio Filter

const filterButtons = document.querySelectorAll(".filter");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioCards.forEach(card => {

            if (filter === "all" || card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.onclick = () => {

    navLinks.classList.toggle("show");

};


// Contact Form

const form = document.getElementById("contactForm");

const scriptURL = "https://script.google.com/macros/s/AKfycbzuLfbknQW6Cf4V8I32OcJZ2UhbNt3MGGTrZ4_SZ4-cLCCCQwVk1UPf3tgGDEwJxPlC/exec";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            type: "Contact",

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value,

            message: document.getElementById("message").value

        })
    });

    alert("Message Sent Successfully!");
    form.reset();
});

// Video Popup

const popup = document.getElementById("videoPopup");
const iframe = document.getElementById("popupVideo");
const closeBtn = document.querySelector(".close-btn");

const videoLinks = [

    "https://www.youtube.com/embed/A9PUMeAQRbA",
    "https://www.youtube.com/embed/vK_IL6V17Js",
    "https://www.youtube.com/embed/BJitvQrWDF8",
    "https://www.youtube.com/embed/ntaX3SLnGh8",
    "https://www.youtube.com/embed/IPLaajIJq8M",
    "https://www.youtube.com/embed/HhJsaNYcGFk",

    "https://www.youtube.com/embed/A9PUMeAQRbA",
    "https://www.youtube.com/embed/vK_IL6V17Js",
    "https://www.youtube.com/embed/BJitvQrWDF8",
    "https://www.youtube.com/embed/ntaX3SLnGh8",
    "https://www.youtube.com/embed/IPLaajIJq8M",
    "https://www.youtube.com/embed/HhJsaNYcGFk",

    "https://www.youtube.com/embed/A9PUMeAQRbA",
    "https://www.youtube.com/embed/vK_IL6V17Js",
    "https://www.youtube.com/embed/BJitvQrWDF8",
    "https://www.youtube.com/embed/ntaX3SLnGh8",
    "https://www.youtube.com/embed/IPLaajIJq8M",
    "https://www.youtube.com/embed/HhJsaNYcGFk"

];

portfolioCards.forEach((card, index) => {

    card.addEventListener("click", () => {

        popup.style.display = "flex";

        iframe.src = videoLinks[index];

    });

});

closeBtn.onclick = () => {

    popup.style.display = "none";

    iframe.src = "";

};

window.onclick = (e) => {

    if (e.target === popup) {

        popup.style.display = "none";

        iframe.src = "";

    }

};

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Email Subscription

const subscribeForm = document.getElementById("subscribeForm");

const subscribeMessage = document.getElementById("subscribeMessage");

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            type: "Subscriber",
            name: "",
            email: document.getElementById("subscriberEmail").value,
            message: ""
        })
    });

    subscribeMessage.innerHTML = "Subscribed Successfully!";
    subscribeForm.reset();
});

// Portfolio Search

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    portfolioCards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

});