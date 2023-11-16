import Swiper from "swiper";
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


let init = false;
let swiper;
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
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

