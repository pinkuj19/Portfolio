// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// Navbar Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(window.pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active");
        }

    });

});


// Contact Form

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const inputs =
            this.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {

            if(input.value.trim() === ""){

                valid = false;

            }

        });

        if(!valid){

            alert(
                "Please fill all fields 💕"
            );

            return;
        }

        alert(
            "Thank you for your message! 🌸 I'll get back to you soon."
        );

        form.reset();

    });

}


// Fade Animation on Scroll

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.15
}

);

document
.querySelectorAll(
".section, .card, .hero-text, .hero-photo"
)
.forEach(el => {

    observer.observe(el);

});


// Floating Hearts Effect

function createHeart(){

    const heart =
    document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";
    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-20px";

    heart.style.fontSize =
        Math.random() * 15 + 15 + "px";

    heart.style.color = "#ffb6c9";

    heart.style.opacity = "0.7";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let position = -20;

    const interval = setInterval(() => {

        position += 2;

        heart.style.bottom =
            position + "px";

        heart.style.opacity -= 0.003;

        if(position > window.innerHeight){

            clearInterval(interval);

            heart.remove();

        }

    },20);

}

setInterval(createHeart,800);


// Hero Button Animation

const heroBtn =
document.querySelector(".btn");

if(heroBtn){

    heroBtn.addEventListener("mouseenter", () => {

        heroBtn.style.transform =
        "scale(1.05)";

    });

    heroBtn.addEventListener("mouseleave", () => {

        heroBtn.style.transform =
        "scale(1)";

    });

}


// Current Year Auto Update

const footerText =
document.querySelector(".footer p");

if(footerText){

    footerText.innerHTML =
    `© ${new Date().getFullYear()} Priyanka | Built with ♡`;

}
