import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// init Swiper:
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Scrollbar],
    loop: true,
    slidesPerView: 3.5,
    spaceBetween: 50,

  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },

    breakpoints: {
      100: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 2
      },
      700: {
        slidesPerView: 3
      },
      1000: {
        slidesPerView: 3.6
      }

    }
});

