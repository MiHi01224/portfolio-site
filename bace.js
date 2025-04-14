/* menu */
const menu = document.getElementById('js-menu');
const nav = document.getElementById('js-nav');
const bg = document.getElementById('js-bg');

/* ハンバーガーメニュー切り替え   */
menu.addEventListener("click", () => {
    menu.classList.toggle('open');
    nav.classList.toggle('open');
    bg.classList.toggle('open');
});

/* top */
const typing = document.getElementById('js-typing');

const typingSt = (el, sentence) => {
    [...sentence].forEach((char, index) => {
        setTimeout(() => {
            document.querySelector(el).textContent += char;
        }, 100 * ++index);
    });
}
const countUp = () => {
    typingSt('#js-typing', 'MIHIRO KAWAGUCHI PORTFOLIO SITE');
    typing.innerHTML = "";
    setTimeout(countUp, 6000);
};

setTimeout(countUp, 1000);

/* pagetop */
const pagetop_btn = document.querySelector(".pagetop");
pagetop_btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,behavior: "smooth"
    });
})

window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}