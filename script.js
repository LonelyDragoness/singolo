// 1. Header navigation.
// 1.1 Smooth scroll to sections.
let y = 0;
document.getElementById("home-button").addEventListener("click", (event) => {
    document.getElementById("empty-header").scrollIntoView({behavior: "smooth"});
});

document.getElementById("services-button").addEventListener("click", (event) => {
    y = document.getElementById("services-block").offsetTop - 89;
    window.scrollTo({ top: y, behavior: 'smooth' });
});

document.getElementById("portfolio-button").addEventListener("click", (event) => {
    y = document.getElementById("portfolio").offsetTop - 88;
    window.scrollTo({ top: y, behavior: 'smooth' });
});

document.getElementById("about-button").addEventListener("click", (event) => {
    y = document.getElementById("about-us").offsetTop - 89;
    window.scrollTo({ top: y, behavior: 'smooth' });
});

document.getElementById("contact-button").addEventListener("click", (event) => {
    document.getElementById("quote-block").scrollIntoView({behavior: "smooth"});
});

// 1.2 Active highlight.
document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPosition = window.scrollY + 89;
    const divs = document.querySelectorAll('.scroll-anchor');
    const links = document.querySelectorAll('#navigation>li');
    const topElement = document.getElementById('empty-header');
    if (window.scrollY < 650) {
        document.getElementById('services-button').classList.remove('active');
        document.getElementById('home-button').classList.add('active');
    }
    divs.forEach((el) => {
        if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
            links.forEach((li) => {
                li.classList.remove('active');
                if (el.getAttribute('data-tag') === li.getAttribute('id')) {
                    li.classList.add('active');
                } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    document.getElementById('about-button').classList.remove('active');
                    document.getElementById('contact-button').classList.add('active');
                }
            })
        }
    });
}

// 2. Carousel.
const carousel = document.querySelector('.slider');
const slider = document.querySelector('.wrapper-slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction = -1;

next.addEventListener('click', function() {
    if (direction === 1) {
        slider.appendChild(slider.firstElementChild);
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-50%)';
});

prev.addEventListener('click', function() {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(50%)';
});

slider.addEventListener('transitionend', function() {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => {
        slider.style.transition = 'all 0.5s';
    })
}, false);

// 3. Phone screen activation.
let verticalStatus = 'on';
let horizontalStatus = 'on';

//3.1 Vertical phone.
document.getElementById("vertical-screen").addEventListener("click", (event) => {
    if (verticalStatus === 'off') {
        document.getElementById('vertical-screen').src = './assets/vertical-screen.png';
        verticalStatus = "on";
    } else {
        document.getElementById('vertical-screen').src = './assets/black-screen.png';
        verticalStatus = 'off';
    }
});

document.getElementById("vertical-phone").addEventListener("click", (event) => {
    if (verticalStatus === 'off') {
        document.getElementById('vertical-screen').src = './assets/vertical-screen.png';
        verticalStatus = "on";
    } else {
        document.getElementById('vertical-screen').src = './assets/black-screen.png';
        verticalStatus = 'off';
    }
});

// 3.2 Horizontal phone.
document.getElementById("horizontal-screen").addEventListener("click", (event) => {
    if (horizontalStatus === 'off') {
        document.getElementById('horizontal-screen').src = './assets/horizontal-screen.png';
        horizontalStatus = "on";
    } else {
        document.getElementById('horizontal-screen').src = './assets/black-screen.png';
        horizontalStatus = 'off';
    }
});

document.getElementById("horizontal-phone").addEventListener("click", (event) => {
    if (horizontalStatus === 'off') {
        document.getElementById('horizontal-screen').src = './assets/horizontal-screen.png';
        horizontalStatus = "on";
    } else {
        document.getElementById('horizontal-screen').src = './assets/black-screen.png';
        horizontalStatus = 'off';
    }
});

// 4. Portfolio pictures dance.
const PORTFOLIO_BUTTONS = document.getElementById("portfolio__buttons").querySelectorAll("li");

document.querySelectorAll(".button").forEach(e => {
    e.addEventListener("click", (event) => {
        PORTFOLIO_BUTTONS.forEach(el => el.classList.remove("active-portfolio"));
        PORTFOLIO_IMAGES.querySelectorAll("li>img").forEach(el => el.classList.remove('chosen-picture'));

        let container = document.getElementById('portfolio-pictures');
        let childrenElements = [];
        for (let i = 0; i < container.children.length; i++) {
            childrenElements.push(container.children[i]);
        }

        childrenElements.sort(function () {
            return Math.random() - 0.5;
        });

        for (let i = 0; i < childrenElements.length; i++) {
            container.appendChild(childrenElements[i]);
        }
    });
});

// 5. Portfolio pictures border.
const PORTFOLIO_IMAGES = document.getElementById("portfolio-pictures");

PORTFOLIO_IMAGES.addEventListener("click", (event) => {
    if (event.target.classList[0] === "pic") {
        PORTFOLIO_IMAGES.querySelectorAll("li>img").forEach(el => el.classList.remove('chosen-picture'));
        event.target.classList.add("chosen-picture");
    }
});

//6. Get a quote submit message.
const SENDBUTTON = document.getElementById("send-button");
const EXITBUTTON = document.getElementById("exit-button");
let fullText = document.getElementById("submit-message");

SENDBUTTON.addEventListener("click", (event) => {

    const formName = document.getElementById("form__text").value.toString();
    const formEmail = document.getElementById("form__email").value.toString();
    const formSubject = document.getElementById("form__subject").value.toString();
    const formDetails = document.getElementById("textarea").value.toString();
    fullText.innerHTML = "Письмо отправлено" + "<br />";

    if (document.getElementById("form__subject").value !== '') {
        fullText.innerHTML += "<br />" + 'Тема: ' + formSubject + "<br />";
    } else {
        fullText.innerHTML += "<br />" + 'Без темы' + "<br />>";
    }

    if (document.getElementById("textarea").value !== '') {
        fullText.innerHTML += "<br />" + 'Описание: ' + formDetails;
    } else {
        fullText.innerHTML += "<br />" + 'Без описания';
    }

    // Validation.
    if (formName !== '' && formEmail !== '' && document.getElementById("form__email").checkValidity()) {
        event.preventDefault();
        document.getElementById("send-message-block").classList.remove("currently-disabled");
        document.getElementById("html").classList.add("modal-active");
    }
});

EXITBUTTON.addEventListener("click", (event) => {
    document.getElementById("submit-message").innerText = "";
    document.getElementById("send-message-block").classList.add("currently-disabled");
    document.getElementById("quote-form").reset();
    document.getElementById("html").classList.remove("modal-active");
});
