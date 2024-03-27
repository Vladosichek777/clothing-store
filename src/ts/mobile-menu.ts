import cross from '../assets/icons/cross.svg';
import burgerMenuIcon from '../assets/icons/burger-menu.svg';
const burgerIcon: HTMLElement | null = document.querySelector('.header__burger');
const imgBurgerIcon:HTMLImageElement | null = document.querySelector('.header__burger-img');
const mobileMenu:HTMLElement | null = document.querySelector('.mobile-menu');


let isMenuOpen:boolean = false;

const arrPathImgIcon:string[] = [
    burgerMenuIcon,
    cross
]


function changeBurgerIcon() {
    burgerIcon?.classList.add('header__burger--open');
    setTimeout(() => {
        if(imgBurgerIcon) {
            imgBurgerIcon.src = arrPathImgIcon[isMenuOpen ? 0 : 1]
            isMenuOpen = !isMenuOpen;
            burgerIcon?.classList.remove('header__burger--open');
        }
    },400)
}

function openMobileMenu() {
    mobileMenu?.classList.toggle('mobile-menu--open');
}

function closeMobileMenu() {
    document.body.addEventListener('click', (e) => {
      let target = e.target as HTMLElement;
      if(!target.className.includes('header__burger') && !target.className.includes('mobile-menu')) {
        if(mobileMenu?.classList.contains('mobile-menu--open')) {
            mobileMenu?.classList.remove('mobile-menu--open');
            changeBurgerIcon()
        }
      }
    })
}

burgerIcon?.addEventListener('click', () => {
    openMobileMenu()
    changeBurgerIcon()
})



closeMobileMenu()
