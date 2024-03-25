const burgerIcon: HTMLElement | null = document.querySelector('.header__burger');
const imgBurgerIcon:HTMLImageElement | null = document.querySelector('.header__burger-img');
import cross from '../assets/icons/cross.svg'

const arrPathImgIcon:string[] = [
    'assets/icons/burger-menu.svg',
    cross
]
let count:number = 0;
burgerIcon?.addEventListener('click', () => {
    burgerIcon.classList.add('header__burger--open');
    setTimeout(() => {
        if(imgBurgerIcon) {
            if(count == 1) {
                imgBurgerIcon.src = arrPathImgIcon[0];
                burgerIcon.classList.remove('header__burger--open');
                count = 0;
                return
            } 
           
            imgBurgerIcon.src = arrPathImgIcon[1];
            burgerIcon.classList.remove('header__burger--open');
            count++;
        }
    },400)
})