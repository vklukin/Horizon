let headerPhoneIco = document.getElementById('phonecc');
let telPh = document.getElementById('t-tel');
headerPhoneIco.onclick = function cc() {
    telPh.style.visibility = 'visible';
    setTimeout(function q() {
        telPh.style.visibility = 'hidden';
    }, 10000);
}

let btnScrollTop = document.getElementById('btn-top');
let clHeight = document.documentElement.clientHeight;
let wScroll = window.scrollY;
window.addEventListener('scroll', function() {
    btnScrollTop.hidden = (scrollY < document.documentElement.clientHeight);
});
btnScrollTop.onclick = function() {
    window.scrollTo(0, 0);
};
