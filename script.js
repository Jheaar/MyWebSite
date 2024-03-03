function copyEmailToClipboard() {
    var emailToCopy = "arnoldochoa2001@gmail.com";
    var dummyInput = document.createElement("input");
    document.body.appendChild(dummyInput);
    dummyInput.setAttribute("value", emailToCopy);
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
    var copyMailButton = document.getElementById("copy-mail");
    copyMailButton.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
    copyMailButton.disabled = true;
    setTimeout(function() {
        copyMailButton.innerHTML = 'Copiar';
        copyMailButton.disabled = false;
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var aboutSection = document.getElementById('about');
        var aboutSectionPosition = aboutSection.offsetTop - 50;
        var currentScrollPosition = window.pageYOffset;
        var navigation = document.querySelector('.navigation');
        if (currentScrollPosition > aboutSectionPosition) {
            navigation.classList.add('hidden');
        } else {
            navigation.classList.remove('hidden');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollIntoView({
            behavior: 'smooth'
        });
    });
});