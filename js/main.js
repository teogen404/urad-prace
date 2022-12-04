function openMenu() {
    document.querySelector('.main__buttons').classList.toggle('active');
    document.querySelector('.menu__button').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
}

function openFAQ(){
    var faq = document.getElementsByClassName("question");
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        }) ;
    }
}
var faq = document.getElementsByClassName("question");
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    }) ;
}