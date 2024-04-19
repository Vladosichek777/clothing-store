const arrNewClothes:NodeListOf<Element> = document.querySelectorAll('[data-new-clothes]');
const arrSales:NodeListOf<Element> = document.querySelectorAll('[data-sales]');
import image1 from '../assets/images/slider-new/image1.png';
import image2 from '../assets/images/slider-new/image2.png';
import image3 from '../assets/images/slider-new/image3.png';
import image4 from '../assets/images/slider-new/image4.png';
import image5 from '../assets/images/slider-new/image5.png';

import image6 from '../assets/images/slider-sales/images-1.png';
import image7 from '../assets/images/slider-sales/images-2.png';
import image8 from '../assets/images/slider-sales/images-3.png';
import image9 from '../assets/images/slider-sales/images-4.png';


interface InfoSlides {
    [key:string]:{
        src:string;
        title:string;
        price: string;
    }
}
 const firstSliderInfo:InfoSlides = {
    1: {
        src: image1,
        title:'Набір для створення вишивки Home Tree Green',
        price: '2 120 грн.'
    },
    2: {
        src: image2,
        title:'Легка блузка вільного крою з орнаментом Indi',
        price: '3 800 грн.'
    },
    3: {
        src: image3,
        title:'Чоловіча лльна сорочка з вишивкою Sky',
        price: '2 800 грн.'
    },
    4: {
        src: image4,
        title:'Легка блузка вільного крою з орнаментом Indi',
        price: '3 800 грн.'
    },
    5: {
        src: image5,
        title:'Набір для створення вишивки Home Tree Green',
        price: '1 120 грн.'
    },
 }
 const secondSliderInfo:InfoSlides = {
    1: {
        src: image6,
        title:'Вишиванка для дівчинки Sakura',
        price: '1 827 грн.'
    },
    2: {
        src: image7,
        title: 'Лляна сукня темно-синього кольору Malva',
        price: '450 грн.'
    },
    3: {
        src: image8,
        title:'Лляна сукня темно-синього кольору Nizhnist Violet',
        price: '3 582 грн.'
    },
    4: {
        src: image9,
        title:'Чоловічий світшот бордовий VMG2',
        price: '2 880 грн.'
    },
    5: {
        src: image7,
        title:'Лляна сукня темно-синього кольору Nizhnist Violet',
        price: '1 360 грн.'
    }
 }
function writeSliderItem(nameOfArr:NodeListOf<Element>, object:InfoSlides, attr:string):void {
    for(let slide of nameOfArr) {
        const slideAttr: string | null = slide.getAttribute(attr);
        const slideImage: Element | null = slide.querySelector('.swiper-slide__img');
        const slideTitle: Element | null = slide.querySelector('.swiper-slide__title');
        const slidePrice: Element | null = slide.querySelector('.swiper-slide__price');

       if(slideAttr) {
        slideImage?.setAttribute('src', object[slideAttr].src);
        if(slideTitle) {
            slideTitle.textContent = object[slideAttr].title;
        }
        if(slidePrice) {
            slidePrice.textContent = object[slideAttr].price;
        }
       }
    }
}

function writeSliders() {
 
    // for(let slide of arrNewClothes) {
    //     const slideAttr: string | null = slide.getAttribute('data-new-clothes');
    //     const slideImage: Element | null = slide.querySelector('.swiper-slide__img');
    //     const slideTitle: Element | null = slide.querySelector('.swiper-slide__title');
    //     const slidePrice: Element | null = slide.querySelector('.swiper-slide__price');

    //    if(slideAttr) {
    //     slideImage?.setAttribute('src', firstSliderInfo[slideAttr].src);
    //     if(slideTitle) {
    //         slideTitle.textContent = firstSliderInfo[slideAttr].title;
    //     }
    //     if(slidePrice) {
    //         slidePrice.textContent = firstSliderInfo[slideAttr].price;
    //     }
    //    }
    // }

    // for(let slide of arrSales) {
    //     const slideAttr: string | null = slide.getAttribute('data-sales');
    //     const slideImage = slide.querySelector('.swiper-slide__img');
    //     const slideTitle = slide.querySelector('.swiper-slide__title');
    //     const slidePrice = slide.querySelector('.swiper-slide__price');

    //     if(slideAttr) {
    //         slideImage?.setAttribute('src', secondSliderInfo[slideAttr].src);
    //         if(slideTitle) {
    //             slideTitle.textContent = secondSliderInfo[slideAttr].title;
    //         }
    //         if(slidePrice) {
    //             slidePrice.textContent = secondSliderInfo[slideAttr].price;
    //         }
    //     }
    // }
}

writeSliderItem(arrNewClothes, firstSliderInfo, 'data-new-clothes')
writeSliderItem(arrSales, secondSliderInfo, 'data-sales')
