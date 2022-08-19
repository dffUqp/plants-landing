const [burger, menu] = [
  document.querySelector('.burger'),
  document.querySelector('.menu'),
];

const servicesImages = document.querySelector('.services__images');
const servicesRowOne = document.querySelector('.services__rowOne');
const servicesImageBlock = document.querySelector('.services__image');

const switchLanguage = document.querySelector('#switch-language');
const actionLanguage = document.querySelector('.header__action.language');

burger.onclick = () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');

  document.querySelector('body').classList.toggle('active');
};

switchLanguage.onclick = () => {
  actionLanguage.classList.toggle('active');
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('footer__spoiler__btn')) {
    const menuActive = e.target.closest('.footer__item');
    menuActive.classList.toggle('active');
  }
});

const setImageBlock = () => {
  if (window.innerWidth <= 876 && servicesImages.dataset.moved == 'false') {
    servicesImages.dataset.moved = 'true';
    servicesImages.appendChild(servicesImageBlock);
  }

  if (window.innerWidth >= 876 && servicesImages.dataset.moved == 'true') {
    servicesImages.dataset.moved = 'false';
    servicesImages.removeChild(servicesImageBlock);
    servicesRowOne.appendChild(servicesImageBlock);
  }
};

window.addEventListener('resize', setImageBlock);
setImageBlock();
