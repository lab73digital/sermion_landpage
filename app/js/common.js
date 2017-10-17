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
