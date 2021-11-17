let telInput = document.getElementById('tel');
telInput.addEventListener('focus', _ => {
    if(!/^\+\d*$/.test(telInput.value)){
        telInput.value = '+7';
    }
})
telInput.addEventListener('keypress', e =>{
    if(!/\d/.test(e.key)){
        e.preventDefault();
    }
})



let button = document.getElementById('butt');
button.onmouseover = function push(){
    button.classList.add('call');
}
button.onmouseleave = function out() {
    button.classList.remove('call');
}



let headerPhoneIco = document.getElementById('phonecc');
let telPh = document.getElementById('t-tel');
headerPhoneIco.onclick = function cc() {
    telPh.style.visibility = 'visible';
    setTimeout(function q() {
        telPh.style.visibility = 'hidden';
    }, 10000);
}



function rastvWindow() {
    let body = document.querySelector('body');
    let rastrGallery = document.getElementById('rastr-gallery');
    let closeBtn = document.getElementById('closeBtn1');
    let rastr = document.getElementById('rastr');
    let btnTop = document.getElementById('btn-top');

    rastr.onclick = function openWindow1() {
        rastrGallery.classList.add('visible');
        body.style.overflowY = 'hidden';
        btnTop.style.visibility = 'hidden';
    }
    closeBtn.onclick = function closeWindow1() {
        rastrGallery.classList.remove('visible');
        body.style.overflowY = 'visible';
        btnTop.style.visibility = 'visible';
    }
}
function vectorWindow() {
    let body = document.querySelector('body');
    let vectorGallery = document.getElementById('vector-gallery');
    let closeBtn = document.getElementById('closeBtn2');
    let vector = document.getElementById('vector');
    let btnTop = document.getElementById('btn-top');

    vector.onclick = function openWindow2() {
        vectorGallery.classList.add('visible');
        body.style.overflowY = 'hidden';
        btnTop.style.visibility = 'hidden';
    }
    closeBtn.onclick = function closeWindow2() {
        vectorGallery.classList.remove('visible');
        body.style.overflowY = 'visible';
        btnTop.style.visibility = 'visible';
    }
}
function model3dWindow() {
    let body = document.querySelector('body');
    let model3dGallery = document.getElementById('model3dGallery');
    let closeBtn = document.getElementById('closeBtn3');
    let models = document.getElementById('models');
    let btnTop = document.getElementById('btn-top');

    models.onclick = function openWindow3() {
        model3dGallery.classList.add('visible');
        body.style.overflowY = 'hidden';
        btnTop.style.visibility = 'hidden';
    }
    closeBtn.onclick = function closeWindow3() {
        model3dGallery.classList.remove('visible');
        body.style.overflowY = 'visible';
        btnTop.style.visibility = 'visible';
    }
}

rastvWindow();
vectorWindow();
model3dWindow();



let btnScrollTop = document.getElementById('btn-top');
let clHeight = document.documentElement.clientHeight;
let wScroll = window.scrollY;
window.addEventListener('scroll', function() {
    btnScrollTop.hidden = (scrollY < document.documentElement.clientHeight);
});
btnScrollTop.onclick = function() {
    window.scrollTo(0, 0);
};






