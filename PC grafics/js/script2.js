let headerPhoneIco = document.getElementById('phonecc');
let telPh = document.getElementById('t-tel');
headerPhoneIco.onclick = function cc() {
    telPh.style.visibility = 'visible';
    setTimeout(function q() {
        telPh.style.visibility = 'hidden';
    }, 10000);
}

//кнопка вверх
let btnScrollTop = document.getElementById('btn-top');
let clHeight = document.documentElement.clientHeight;
let wScroll = window.scrollY;
window.addEventListener('scroll', function() {
    btnScrollTop.hidden = (scrollY < document.documentElement.clientHeight);
});
btnScrollTop.onclick = function() {
    window.scrollTo(0, 0);
};

//slider
let offset = 0;
const cardLine = document.getElementById('card-line');
let btnPrev = document.getElementById('but-prev');
let btnNext = document.getElementById('but-next');

btnNext.addEventListener('click', function () {
    offset += 1110;
    if (offset > 2220){
        offset = 0;
    }
    cardLine.style.left = -offset + 'px';
});
btnPrev.addEventListener('click', function() {
    offset -= 1110;
    if (offset < 0){
        offset = 2220;
    }
    cardLine.style.left = -offset + 'px';
})
