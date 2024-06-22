requirejs.config({
    waitSeconds: 0,
    paths: {
        'jquery': 'lib/jquery-2.1.1.min',
        'bPopup': 'lib/bpopup.min',
        'fancy': 'lib/jquery.fancybox.pack',
        'fancyThumb': 'lib/jquery.fancybox-thumbs',
        'domReady': 'lib/domReady',
        'waitImg': 'lib/jquery.waitforimages.min',
        'owlCarousel': 'lib/owl.carousel.min',
        'inView': 'lib/jquery.inview.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'matchH': 'lib/jquery.matchHeight-min',
        'fastclick': 'lib/fastclick',
        'velocity': 'lib/velocity.min',
        'velocityUi': 'lib/velocity.ui',
        'SmoothScroll': 'lib/SmoothScroll',
        'circleTimer': 'lib/TimeCircles',
        'scroll': 'lib/jquery.mCustomScrollbar.concat.min'
    },

    shim: {
        'bPopup': ['jquery'],
        'fancy': ['jquery'],
        'fancyThumb': {
            deps: ['jquery', 'fancy']
        },
        'domReady': ['jquery'],
        'waitImg': ['jquery'],
        'owlCarousel': ['jquery'],
        'inView': ['jquery'],
        '/56underscore': ['jquery'],
        'backbone': ['underscore'],
        'matchH': ['jquery'],
        'fastclick': ['jquery'],
        'velocity': ['jquery'],
        'circleTimer': ['jquery'],
        'velocityUi': {
            depse: [
                'jquery',
                'velocity'
            ]
        },
        'SmoothScroll': ['jquery'],
        'scroll': ['jquery'],
        'defineCategories': ['jquery']
    }
});


require([
    'com/ponents/menuScript',
    'components/basicBind',
    'components/sliderScript',
    'components/getinTouch',
    'components/customSelect',
    'components/googleMap',
    'components/headerScript',
    'components/bgVideo',
    'components/mobileMenu',
    'components/preloader',
    'components/timer',
    'products/products',
], function(){});

if(document.body.offsetWidth <= 640){
    document.getElementById("news-list-block-res").classList.remove("hidden")
    document.getElementById("news-list-block").classList.add("hidden")  
}



function resizeWindow(){
    if(document.body.offsetWidth <= 640){
        document.getElementById("news-list-block").classList.add("hidden")
        document.getElementById("news-list-block-res").classList.remove("hidden")
    } else {
        document.getElementById("news-list-block").classList.remove("hidden")
        document.getElementById("news-list-block-res").classList.add("hidden")
    }
}

window.addEventListener('resize', resizeWindow);
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
});