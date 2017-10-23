// var changeSectionQ = false,
//     scrollReturner = true,
//     height = window.innerHeight;
// var supportsOrientationChange = "onorientationchange" in window,
//     orientationEvent = supportsOrientationChange ? "orientationchange" : "resize",
//     screenApply,
//     screenHeight = screen.height,
//     screenWidth = screen.width,
//     windowHeight = window.innerHeight,
//     windowWidth = window.innerWidth;
// if (_detectPhone()) {
//     orientationChanger();
//     window.addEventListener(orientationEvent, function () {
//         screenHeight = screen.height;
//         screenWidth = screen.width;
//         windowHeight = window.innerHeight;
//         windowWidth = window.innerWidth;
//         orientationChanger();
//     }, false);
// } else {
//     document.querySelector('.landing-container').style.display = 'block';
// }
//
// function orientationChanger() {
//     if (_detectApple()) {
//         if (Math.abs(window.orientation) === 90 || Math.abs(window.orientation) === 180) {
//             screenApply = false;
//         } else {
//             screenApply = true;
//         }
//         if (screenApply) {
//             document.querySelector('.landing-container').style.display = 'none';
//             if (screenHeight >= 568) {
//                 document.querySelector('.rotate-block').style.display = 'block';
//             } else {
//                 document.querySelector('.default-block').style.display = 'block';
//             }
//         } else {
//             document.querySelector('.rotate-block').style.display = 'none';
//             document.querySelector('.landing-container').style.display = 'block';
//         }
//     } else {
//         screenApply = screenWidth < screenHeight;
//         if (screenApply) {
//             if (screenHeight >= 568) {
//                 document.querySelector('.landing-container').style.display = 'none';
//                 document.querySelector('.rotate-block').style.display = 'block';
//             } else {
//                 document.querySelector('.default-block').style.display = 'block';
//             }
//         } else {
//             document.querySelector('.rotate-block').style.display = 'none';
//             document.querySelector('.landing-container').style.display = 'block';
//         }
//     }
// }
//
// function _detectPhone(phone, desktop) {
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         if (phone) {
//             phone();
//         }
//         return true
//     } else {
//         if (desktop) {
//             desktop();
//         }
//         return false
//     }
// }
//
// function _detectApple() {
//     if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
//         $('html').addClass('ios-mobile');
//         return true
//     } else {
//         return false
//     }
// }
//
// function _detectSafari() {
//     if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
//         return true
//     } else {
//         return false
//     }
// }

$(document).ready(function () {
    $('.parallax').parallax({
        imageSrc: 'img/doc-parallax/inside-bg.jpg',
        speed: 0.8
    });
    $('#screen-1_button').on('click', function () {
        $('.screen-1_visible').toggleClass('hide');
        $('.screen-1_hidden').toggleClass('show');
        TweenMax.to('#violet-1', 0.4, {ease: Power1.easeInOut,x:-400,rotation: -25});
        TweenMax.to('#red-2', 0.4, {ease: Power1.easeInOut,x:-300,y:200,rotation: -35});
        TweenMax.to('#yelloow-3', 0.4, {ease: Power1.easeInOut,x:300,rotation: -20});
        TweenMax.to('#blue-4', 0.4, {ease: Power1.easeInOut,x:300,y:50,rotation: 15});
    });
    // $('svg').on('click', function () {
    //     $('.screen-1').hide();
    // })

    var controller = new ScrollMagic.Controller();
    var tween1 = new TimelineMax().fromTo('.s-3__graph-line, .s-3__graph-circle, .s-3__graph-percent', 1, {
        opacity: 0
    }, {
        opacity: 1
    }).add(TweenMax.from('.s-3__graph-circle, .s-3__graph-percent', 1, {
        bottom: 0
    }), '.s-3__graph-line, .s-3__graph-circle, .s-3__graph-percent').add(TweenMax.from('.s-3__graph-line', 1, {
        height: 0
    }), '.s-3__graph-line, .s-3__graph-circle, .s-3__graph-percent').add(function () {
        $('.s-3__animate-number').each(function () {
            var number = $(this).data('number');
            var decimal_places = 1;
            var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);
            $(this).animateNumber({
                number: number * decimal_factor,

                numberStep: function(now, tween) {
                    var floored_number = Math.floor(now) / decimal_factor,
                        target = $(tween.elem);

                    if (decimal_places > 0) {
                        // force decimal places even if they are 0
                        floored_number = floored_number.toFixed(decimal_places);

                        // replace '.' separator with ','
                        floored_number = floored_number.toString();
                    }

                    target.text(floored_number);
                }
            }, 1000)
        });
    }, '.s-3__graph-line, .s-3__graph-circle, .s-3__graph-percent');

    var tween2 = new TimelineMax().from('.s-4__graph-item_row--1', .6, {
        ease: Power1.easeInOut,
        opacity: 0,
        y: -50
    }).from('.s-4__graph-item_row--2', .6, {
        ease: Power1.easeInOut,
        opacity: 0,
        y: -50
    }).from('.s-4__graph-item_row--3', .6, {
        ease: Power1.easeInOut,
        opacity: 0,
        y: -50
    }).from('.s-4__graph-item_row--4', .6, {
        ease: Power1.easeInOut,
        opacity: 0,
        y: -50
    }).from('.s-4__graph-item_row--5', .6, {
        ease: Power1.easeInOut,
        opacity: 0,
        y: -50
    });

    new ScrollMagic.Scene({
        triggerElement: ".s-3",
        reverse: false
    }).setTween(tween1).addTo(controller);
    new ScrollMagic.Scene({
        triggerElement: ".s-4",
        reverse: false
    }).setTween(tween2).addTo(controller);


});


