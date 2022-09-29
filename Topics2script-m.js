window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const notloader = document.getElementById('notloader');
        loader.classList.add("loaded");
        notloader.classList.add("endloaded");
    }, 1200);
};

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    preventLinks: false,
    scrollContainer: true,
    speed: 1000,
    touchRatio: 0.7,
    grabCursor: true,
    parallax: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const burgerelement = document.getElementById("burger");
const headernavlistelement = document.getElementById("header-nav-list");
const headernavlistlielement = document.querySelectorAll(".header-nav-list li")

burgerelement.addEventListener("click", () => {
    headernavlistelement.classList.toggle("nav-active");
    headernavlistlielement.forEach((list, index) => {
        if (list.style.animation) {
            list.style.animation = ""
        }
        else {
            list.style.animation = `navlist .5s ease forwards ${index / 7 + 0.7}s`
        }
    })
    burgerelement.classList.toggle("toggle")
});

swiperslideelement = document.getElementById(`background-img1`);
swiperslideelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-1-AM.jpg`);
swiperslideelement = document.getElementById(`background-img2`);
swiperslideelement.setAttribute('src', `https://raw.githubusercontent.com/account0125/Web-File/main/img-2-AM.jpg`);
swiperslideelement = document.getElementById(`background-img3`);
swiperslideelement.setAttribute('src', `https://raw.githubusercontent.com/account0125/Web-File/main/img-3-AM.jpg`);

swiper.on('slideChange', function () {
    if (swiper.previousIndex < swiper.snapIndex && swiper.snapIndex < 30) {
        swiperslideelement = document.getElementById(`background-img${swiper.snapIndex + 3}`);
        swiperslideelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 3}-AM.jpg`);
    }
    else if (swiper.previousIndex > swiper.snapIndex && swiper.snapIndex > 2) {
        swiperslideelement = document.getElementById(`background-img${swiper.snapIndex - 3}`);
        swiperslideelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex - 3}-AM.jpg`);
    }
});

function imgopen() {
    imgpopupelement = document.getElementById("imgpopup");
    imgpopupimgelement = document.getElementById("imgpopup-img");
    imgpopupimgelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 1}-AM.jpg`);
    imgpopupelement.style.display = "block";
};

function answerbtn() {
    imgpopupimgelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 1}-BM.jpg`);
    answerbtnelement = document.getElementById("answerbtn");
    answerbtnelement.style.visibility = "hidden";
    questionbtnelement = document.getElementById("questionbtn");
    questionbtnelement.style.visibility = "visible";
};

function questionbtn() {
    imgpopupimgelement.setAttribute("src", `https://raw.githubusercontent.com/account0125/Web-File/main/img-${swiper.snapIndex + 1}-AM.jpg`);
    questionbtnelement = document.getElementById("questionbtn");
    questionbtnelement.style.visibility = "hidden";
    answerbtnelement = document.getElementById("answerbtn");
    answerbtnelement.style.visibility = "visible";
};

function imgclose() {
    imgpopupelement = document.getElementById("imgpopup");
    imgpopupelement.style.display = "none";
    questionbtnelement = document.getElementById("questionbtn");
    questionbtnelement.style.visibility = "hidden";
    answerbtnelement = document.getElementById("answerbtn");
    answerbtnelement.style.visibility = "visible";
};
