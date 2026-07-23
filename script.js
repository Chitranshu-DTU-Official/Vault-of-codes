// Portfolio Filter

const filterButtons = document.querySelectorAll(".filter");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioCards.forEach(card => {

            if(filter==="all" || card.classList.contains(filter)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

});


// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.onclick=()=>{

    navLinks.classList.toggle("show");

};


// Contact Form

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


// Video Popup

const popup=document.getElementById("videoPopup");
const iframe=document.getElementById("popupVideo");
const closeBtn=document.querySelector(".close-btn");

const videoLinks = [

"https://www.youtube.com/embed/A9PUMeAQRbA",
"https://www.youtube.com/embed/vK_IL6V17Js",
"https://www.youtube.com/embed/BJitvQrWDF8",
"https://www.youtube.com/embed/ntaX3SLnGh8",
"https://www.youtube.com/embed/IPLaajIJq8M",
"https://www.youtube.com/embed/HhJsaNYcGFk"

];

portfolioCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        popup.style.display="flex";

        iframe.src=videoLinks[index];

    });

});

closeBtn.onclick=()=>{

    popup.style.display="none";

    iframe.src="";

};

window.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

        iframe.src="";

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

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};