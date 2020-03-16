// 1. Header navigation
// 1.1 Mark buttons with active color.
const NAVIGATION = document.getElementById("navigation");
const HOME_BUTTON = document.getElementById("home-button");
const SERVICES_BUTTON = document.getElementById("services-button");
const PORTFOLIO_BUTTON = document.getElementById("portfolio-button");
const ABOUT_BUTTON = document.getElementById("about-button");
const CONTACT_BUTTON = document.getElementById("contact-button");
const LIST_ELEMENTS = NAVIGATION.querySelectorAll('li');

HOME_BUTTON.addEventListener("click", (event) => {
    LIST_ELEMENTS.forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
});

SERVICES_BUTTON.addEventListener("click", (event) => {
    LIST_ELEMENTS.forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
});

PORTFOLIO_BUTTON.addEventListener("click", (event) => {
    LIST_ELEMENTS.forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
});

ABOUT_BUTTON.addEventListener("click", (event) => {
    LIST_ELEMENTS.forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
});

CONTACT_BUTTON.addEventListener("click", (event) => {
    LIST_ELEMENTS.forEach(el => el.classList.remove('active'));
    event.target.classList.add("active");
});

// 1.2 Smooth scroll to sections.
document.getElementById("home-button").addEventListener("click", (event) => {
    document.getElementById("header").scrollIntoView({behavior: "smooth"});
});

document.getElementById("services-button").addEventListener("click", (event) => {
    document.getElementById("services-block").scrollIntoView({behavior: "smooth"});
});

document.getElementById("portfolio-button").addEventListener("click", (event) => {
    document.getElementById("portfolio").scrollIntoView({behavior: "smooth"});
});

document.getElementById("about-button").addEventListener("click", (event) => {
    document.getElementById("about-us").scrollIntoView({behavior: "smooth"});
});

document.getElementById("contact-button").addEventListener("click", (event) => {
    document.getElementById("quote-block").scrollIntoView({behavior: "smooth"});
});

// 2. Carousel.
const carousel = document.querySelector('.slider');
const slider = document.querySelector('.wrapper-slider');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let direction;

next.addEventListener('click', function() {
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

// 3. Phone screen activation
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

//4. Portfolio pictures dance.
const PORTFOLIO_ALL_BUTTON = document.getElementById("all_button");
const WEB_DESIGN_BUTTON = document.getElementById("web-design__button");
const GRAPHIC_DESIGN_BUTTON = document.getElementById("graphic-design__button");
const ARTWORK_BUTTON = document.getElementById("artwork_button");
const PORTFOLIO_BUTTONS = document.getElementById("portfolio__buttons").querySelectorAll("li");

// 4.1 All button
PORTFOLIO_ALL_BUTTON.addEventListener("click", (event) => {
    PORTFOLIO_BUTTONS.forEach(el => el.classList.remove("active-portfolio"));
    PORTFOLIO_IMAGES.querySelectorAll("li>img").forEach(el => el.classList.remove('chosen-picture'));
    event.target.classList.add("active-portfolio");
    document.getElementById('pic1').src = './assets/img1.png';
    document.getElementById('pic2').src = './assets/img2.png';
    document.getElementById('pic3').src = './assets/img3.png';
    document.getElementById('pic4').src = './assets/img4.png';
    document.getElementById('pic5').src = './assets/img5.png';
    document.getElementById('pic6').src = './assets/img6.png';
    document.getElementById('pic7').src = './assets/img7.png';
    document.getElementById('pic8').src = './assets/img8.png';
    document.getElementById('pic9').src = './assets/img9.png';
    document.getElementById('pic10').src = './assets/img10.png';
    document.getElementById('pic11').src = './assets/img11.png';
    document.getElementById('pic12').src = './assets/img12.png';
});

// 4.2 Web design button
WEB_DESIGN_BUTTON.addEventListener("click", (event) => {
    PORTFOLIO_BUTTONS.forEach(el => el.classList.remove("active-portfolio"));
    PORTFOLIO_IMAGES.querySelectorAll("li>img").forEach(el => el.classList.remove('chosen-picture'));
    event.target.classList.add("active-portfolio");
    document.getElementById('pic1').src = './assets/img4.png';
    document.getElementById('pic2').src = './assets/img5.png';
    document.getElementById('pic3').src = './assets/img6.png';
    document.getElementById('pic4').src = './assets/img7.png';
    document.getElementById('pic5').src = './assets/img8.png';
    document.getElementById('pic6').src = './assets/img9.png';
    document.getElementById('pic7').src = './assets/img10.png';
    document.getElementById('pic8').src = './assets/img11.png';
    document.getElementById('pic9').src = './assets/img12.png';
    document.getElementById('pic10').src = './assets/img1.png';
    document.getElementById('pic11').src = './assets/img2.png';
    document.getElementById('pic12').src = './assets/img3.png';
});

// 4.3 Web design button
GRAPHIC_DESIGN_BUTTON.addEventListener("click", (event) => {
    PORTFOLIO_BUTTONS.forEach(el => el.classList.remove("active-portfolio"));
    PORTFOLIO_IMAGES.querySelectorAll("li>img").forEach(el => el.classList.remove('chosen-picture'));
    event.target.classList.add("active-portfolio");
    document.getElementById('pic1').src = './assets/img7.png';
    document.getElementById('pic2').src = './assets/img8.png';
    document.getElementById('pic3').src = './assets/img9.png';
    document.getElementById('pic4').src = './assets/img10.png';
    document.getElementById('pic5').src = './assets/img11.png';
    document.getElementById('pic6').src = './assets/img12.png';
    document.getElementById('pic7').src = './assets/img1.png';
    document.getElementById('pic8').src = './assets/img2.png';
    document.getElementById('pic9').src = './assets/img3.png';
    document.getElementById('pic10').src = './assets/img4.png';
    document.getElementById('pic11').src = './assets/img5.png';
    document.getElementById('pic12').src = './assets/img6.png';
});

// 4.4 Web design button
ARTWORK_BUTTON.addEventListener("click", (event) => {
    PORTFOLIO_BUTTONS.forEach(el => el.classList.remove("active-portfolio"));
    PORTFOLIO_IMAGES.querySelectorAll("li>img").forEach(el => el.classList.remove('chosen-picture'));
    event.target.classList.add("active-portfolio");
    document.getElementById('pic1').src = './assets/img10.png';
    document.getElementById('pic2').src = './assets/img11.png';
    document.getElementById('pic3').src = './assets/img12.png';
    document.getElementById('pic4').src = './assets/img1.png';
    document.getElementById('pic5').src = './assets/img2.png';
    document.getElementById('pic6').src = './assets/img3.png';
    document.getElementById('pic7').src = './assets/img4.png';
    document.getElementById('pic8').src = './assets/img5.png';
    document.getElementById('pic9').src = './assets/img6.png';
    document.getElementById('pic10').src = './assets/img7.png';
    document.getElementById('pic11').src = './assets/img8.png';
    document.getElementById('pic12').src = './assets/img9.png';
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
