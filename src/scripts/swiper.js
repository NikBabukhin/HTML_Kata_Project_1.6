import Swiper from "swiper";
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


let init = false;
let swiper;
let swiperPrice;
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                width: 240,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
                modules: [Pagination]
            })

            swiperPrice = new Swiper('.swiper-prices', {
                width: 260,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
                modules: [Pagination]
            })
        }
    } else if (init) {
        swiper.forEach(el => el.destroy(true, true))
        swiperPrice.destroy(true, true)
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

