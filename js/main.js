const btn_learnMore = document.querySelectorAll('.btn-learnMore');
const popup_alert = document.querySelector('.popup-alert');
const overlay_bg = document.querySelector('.overlay-bg');

console.log(btn_learnMore);
btn_learnMore.forEach((btn) => {
    btn.addEventListener('click', () => {
        overlay_bg.style.visibility = "visible";
        popup_alert.classList.add('popup-alert--show');
    
        setTimeout(() => {
            overlay_bg.style.visibility = "hidden";
            popup_alert.classList.remove('popup-alert--show');
        }, 3000);
    });
})