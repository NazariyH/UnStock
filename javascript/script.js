//hamburger menu
let menu_btn;
let menu_list;

menu_list = document.querySelector('.menu__list');
menu_btn = document.querySelector('.hamburger');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('active');
    menu_list.classList.toggle('active')
});

//scrol
let anchors = document.querySelectorAll('.top');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        let blockId = anchor.getAttribute('href');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}