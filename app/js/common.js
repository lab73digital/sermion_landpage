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
    //$('.sermion-page').hide();
    //$('[class*="goto"]').hide();
    // $('.parallax').parallax({
    //     imageSrc: 'img/doc-parallax/inside-bg.jpg',
    //     speed: 0.8
    // });

    $('.to-sermion').on('click', function () {
        headPuzzleGatherAll();
        scrolledToBottom = false;
        new TimelineMax().to('.screen-page:visible', 0.5, {
            opacity: 0,
            display: 'none',
            ease: Power1.easeInOut,
            onComplete: function () {
                $('body').scrollTop(0);
            }
        }).fromTo('.sermion-page', 0.5, {
            opacity: 0,
            display: 'none',
            y: $(window).height(),
            ease: Power1.easeInOut
        }, {
            opacity: 1,
            display: 'block',
            y: 0,
            ease: Power1.easeInOut,
            onComplete: function () {
                $('.parallax').parallax({
                    imageSrc: 'img/doc-parallax/inside-bg.jpg',
                    speed: 0.8
                });


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

                            numberStep: function (now, tween) {
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

            }
        });


    });

    $('#screen-1_button').on('click', function () {
        TweenMax.to('.screen-1_visible', 0.7, {
            opacity: 0,
            onComplete: function () {
                $('.screen-1_visible').toggleClass('hide');
                $('.screen-1_hidden').toggleClass('show');
                TweenMax.from('.screen-1_hidden', 0.7, {opacity: 0});
            }
        });
        var puzzleTweenViolet = new TimelineMax().fromTo('#violet-1', 0.9,
            {
                ease: Power1.easeInOut,
                x: 0,
                y: 0,
                rotation: 0
            }, {
                ease: Power1.easeInOut,
                x: -400,
                y: 0,
                rotation: -25
            }).to('#violet-1', 2,
            {
                ease: Power1.easeInOut,
                rotation: -15,
                x: -410,
                y: 5,
                repeat: -1,
                yoyo: true
            });
        var puzzleTweenRed = new TimelineMax().fromTo('#red-2', 0.9,
            {
                ease: Power1.easeInOut,
                x: 0,
                y: 0,
                rotation: 0
            }, {
                ease: Power1.easeInOut,
                x: -300,
                y: 200,
                rotation: -35
            }).to('#red-2', 2,
            {
                ease: Power1.easeInOut,
                rotation: -25,
                x: -310,
                y: 205,
                repeat: -1,
                yoyo: true
            });
        var puzzleTweenYellow = new TimelineMax().fromTo('#yelloow-3', 0.9, {
                ease: Power1.easeInOut,
                x: 0,
                y: 0,
                rotation: 0
            },
            {
                ease: Power1.easeInOut,
                x: 280,
                y: -50,
                rotation: -20
            }).to('#yelloow-3', 2,
            {
                ease: Power1.easeInOut,
                rotation: -30,
                x: 290,
                y: -40,
                repeat: -1,
                yoyo: true
            });
        var puzzleTweenBlue = new TimelineMax().fromTo('#blue-4', 0.9, {
                ease: Power1.easeInOut,
                x: 0,
                y: 0,
                rotation: 0
            },
            {
                ease: Power1.easeInOut,
                x: 300,
                y: 50,
                rotation: 15
            }).to('#blue-4', 2,
            {
                ease: Power1.easeInOut,
                rotation: 5,
                x: 310,
                y: 40,
                repeat: -1,
                yoyo: true
            });

        $('.puzzle_text').addClass('puzzle_text--active');
        $('.violet-1,.red-2,.yelloow-3,.blue-4').addClass('shadow-puzzles');


        var puzzleTweenKilled = false;
        $('#red-2').on('click', function () {
            puzzleTweenRed.kill();
            puzzleTweenKilled = true;
        }).on('mouseenter', function () {
            puzzleTweenRed.paused(true);
        }).on('mouseleave', function () {
            if (!puzzleTweenKilled) {
                puzzleTweenRed.paused(false);
            }
        });
        $('#violet-1').on('click', function () {
            puzzleTweenViolet.kill();
            puzzleTweenKilled = true;
        }).on('mouseenter', function () {
            puzzleTweenViolet.paused(true);
        }).on('mouseleave', function () {
            if (!puzzleTweenKilled) {
                puzzleTweenViolet.paused(false);
            }
        });
        $('#blue-4').on('click', function () {
            puzzleTweenBlue.kill();
            puzzleTweenKilled = true;
        }).on('mouseenter', function () {
            puzzleTweenBlue.paused(true);
        }).on('mouseleave', function () {
            if (!puzzleTweenKilled) {
                puzzleTweenBlue.paused(false);
            }
        });
        $('#yelloow-3').on('click', function () {
            puzzleTweenYellow.kill();
            puzzleTweenKilled = true;
        }).on('mouseenter', function () {
            puzzleTweenYellow.paused(true);
        }).on('mouseleave', function () {
            if (!puzzleTweenKilled) {
                puzzleTweenYellow.paused(false);
            }
        });

        headPuzzleFistCheck();


    });


    $('.confirm,.discard').on('click', function () {
        $('.disclaimer').hide('slow');
        $('.screen-1').removeClass('blured');
    });


    function pagePuzzlesSwitcher(activePage) {
        console.log(activePage);
        $('.page_puzzle__active').removeClass('page_puzzle__active');
        $(activePage).find('.page_puzzle_first-item').addClass('page_puzzle__active');
        $(activePage).find('.page_puzzle__active').everyTime(2500, function () {
            if (!$(activePage).find('.page_puzzle__active').parent().next().length) {
                $(activePage).find('.page_puzzle__active').removeClass('page_puzzle__active');
                $(activePage).find('.page_puzzle_first-item').addClass('page_puzzle__active');
            } else {
                $(activePage).find('.page_puzzle__active').removeClass('page_puzzle__active').parent().next().find('.page_puzzle').addClass('page_puzzle__active');
            }
        });

    }


    $('.head_puzzle--click').on('click', function () {
        TweenMax.killChildTweensOf(document.getElementById("#headsvg"));
    });

    var scrolledToBottom = false;
    function scrollHead () {
        $(window).on('scroll', function () {
            if (scrolledToBottom) {
                //scrolledToBottom = false;
                return
            }
            if ($('.screen-page:visible').length) {
                var bodyTop = $(window).scrollTop(),
                    visiblePage = $('.screen-page:visible').height(),
                    windowHeight = $(window).height(),
                    headSvgLeft = '';
                var headPosTop = (bodyTop / (visiblePage - windowHeight));
                if (headPosTop * 30 > 24) {
                    var ttttop = ($('.head-svg').offset().top + $('.head-svg').height() / 2) / visiblePage * 100;
                    var lllleft = ($('.head-svg').offset().left + $('.head-svg').width() / 2) / $('.screen-page:visible').width() * 100;
                    //console.log(ttttop, lllleft);
                    new TimelineMax().set('.head_puzzle--checked',
                        {
                            y: 0
                        }).set($('.head_puzzle--checked').find('.puzzle_image_bad'),
                        {
                            opacity: 0, display: 'none'
                        }).set($('.head_puzzle--checked').find('.puzzle_image_good'),
                        {
                            opacity: 1, display: 'inline'
                        }).set('.head-svg', {
                        position: 'absolute',
                        top: ttttop + '%',
                        left: lllleft + '%'
                    }).to('.head-svg', 2, {
                        bezier: [{left: lllleft + '%', top: ttttop + '%'}, {left: '15%', top: 90 + '%'},
                            {left: '50%', top: 93 + '%'}],
                        ease: Power1.easeInOut,
                        onComplete: function () {
                            $('.head_puzzle--checked').addClass('head_puzzle--pasted');
                            $('.head_puzzle--pasted').removeClass('head_puzzle--checked').removeClass('head_puzzle--click');
                            new TimelineMax().set('.head-svg',
                                {
                                    top: ($('.head-svg').offset().top + $('.head-svg').height / 2) / windowHeight * 10 + '%',
                                    position: 'absolute'
                                }).to($('.head_puzzle--pasted').find('.puzzle_text_good'), .5,
                                {
                                    display: 'inline',
                                    opacity: 1
                                }).to('.head_puzzle--unchecked', 0.5,
                                {
                                    ease: Power1.easeInOut,
                                    opacity: 1,
                                    display: 'block',
                                    onComplete: function () {
                                        $('.head_puzzle--unchecked').find('.puzzle_text').addClass('puzzle_text--big');
                                        headPuzzleCheck();
                                    }
                                });
                        }
                    });
                    scrolledToBottom = true;
                } else {
                    headSvgLeft = '7vw';
                    TweenMax.set('.head-svg',
                        {
                            top: 50 + (headPosTop * 30) + 'vh',
                            left: headSvgLeft
                        });
                    TweenMax.set('.head_puzzle--checked',
                        {
                            y: -800 + headPosTop * 800
                        });
                }
            } else if ($('.sermion-page:visible').length) {
                //console.log('sermion-page is ready to scroll');
                var bodyTopSer = $(window).scrollTop(),
                    visiblePageSer = $('.sermion-page:visible').height(),
                    windowHeightSer = $(window).height(),
                    headPosTopSer = (bodyTopSer / (visiblePageSer - windowHeightSer)),
                    headSvgLeftSer = '7%';
                    TweenMax.set('.head-svg',
                        {
                            top: 20 + (headPosTopSer * 50) + '%',
                            left: headSvgLeftSer
                        });
            }
        });
    }
    scrollHead();


    function headPuzzleFistCheck() {
        $('.head_puzzle--click').on('click', function () {
            if (!$('.head_puzzle--pasted').length) {
                var goto = $(this).data('goto-page');
                //$('.page_puzzle__active').removeClass('page_puzzle__active');
                pagePuzzlesSwitcher(goto);
                TweenMax.to('.screen-1', 1,
                    {
                        ease: Power1.easeInOut,
                        opacity: 0,
                        display: 'none',
                        onComplete: function () {
                            new TimelineMax().set(goto,
                                {display: 'block'}).fromTo(goto, 1,
                                {ease: Power1.easeInOut, opacity: 0, y: $(window).height() + 'px'},
                                {ease: Power1.easeInOut, opacity: 1, y: 0});
                        }
                    });
                $(this).removeClass('head_puzzle--unchecked').addClass('head_puzzle--checked')
                    .find('.puzzle_text').css('display', 'none');
                TweenMax.to('.head_puzzle--unchecked', 0.5,
                    {
                        ease: Power1.easeInOut,
                        opacity: 0,
                        display: 'none',
                        onComplete: function () {
                            TweenMax.to('.head-svg', 1,
                                {
                                    ease: Power1.easeInOut,
                                    left: ('7vw'),
                                    //top: 400 + 'px',
                                    height: ('10vw'),
                                    position: 'fixed'
                                });
                            TweenMax.to('.head_puzzle--checked', 1,
                                {
                                    ease: Power1.easeInOut,
                                    x: 0,
                                    y: -800,
                                    rotation: 360
                                });
                        }
                    });
            } else {headPuzzleCheck()}
        })
    }

    function headPuzzleCheck() {
            $('.head_puzzle--click').on('click', function () {
                //if (!$(this).hasClass('head_puzzle--pasted')) {
                    if (true) {
                    $(this).removeClass('head_puzzle--unchecked').addClass('head_puzzle--checked')
                        .find('.puzzle_text').css('display', 'none');
                    new TimelineMax().to('.puzzle_text_good', .5,
                        {
                            display: 'none',
                            opacity: 0
                        });
                    TweenMax.to('.head_puzzle--unchecked', .5,
                        {
                            ease: Power1.easeInOut,
                            opacity: 0,
                            display: 'none',
                            onComplete: function () {
                                var tttttop = ($(window).height() - ($('.screen-page:visible').height() - $('.head-svg').offset().top - ($('.head-svg').height()) / 2)) / $(window).height() * 100;
                                var llllleft = ($('.head-svg').offset().left + $('.head-svg').width() / 2) / $('.screen-page:visible').width() * 100;
                                //console.log(llllleft, tttttop);
                                new TimelineMax().set('.head-svg',
                                    {
                                        position: 'fixed',
                                        top: tttttop + '%',
                                        left: llllleft + '%'
                                    }).to('.head-svg', 1,
                                    {
                                        ease: Power1.easeInOut,
                                        bezier: [{left: llllleft + '%', top: tttttop + '%'}, {
                                            left: 28 + '%',
                                            top: 75 + '%'
                                        }, {left: 7 + '%', top: 50 + '%'}]
                                    });
                                TweenMax.to('.head_puzzle--checked', .9,
                                    {
                                        x: 0,
                                        y: -800,
                                        rotation: 360
                                    });
                            }
                        });
                    var goto = $(this).data('goto-page');
                        //$('.page_puzzle__active').removeClass('page_puzzle__active');
                        pagePuzzlesSwitcher(goto);
                    TweenMax.to('.screen-page:visible', 1,
                        {
                            ease: Power1.easeInOut,
                            opacity: 0,
                            display: 'none',
                            onComplete: function () {
                                $('body').scrollTop(0);
                                new TimelineMax().set(goto,
                                    {display: 'block'}).fromTo(goto, 1,
                                    {ease: Power1.easeInOut, opacity: 0, y: $(window).height() + 'px'},
                                    {
                                        ease: Power1.easeInOut, opacity: 1, y: 0, onComplete: function () {
                                        scrollHead();
                                        scrolledToBottom = false;
                                    }
                                    });
                            }
                        });
                }
            })
}


    function headPuzzleGatherAll() {
            $('.head_puzzle--click').removeClass('head_puzzle--unchecked').addClass('head_puzzle--checked')
                .find('.puzzle_text').css('display', 'none');
            new TimelineMax().to('.puzzle_text_good', .5,
                {
                    display: 'none',
                    opacity: 0
                });
            TweenMax.to('.head_puzzle--unchecked', .5,
                {
                    ease: Power1.easeInOut,
                    opacity: 1,
                    x:0,
                    y:0,
                    onComplete: function () {
                        var tttttop = ($(window).height() - ($('.screen-page:visible').height() - $('.head-svg').offset().top - ($('.head-svg').height())/2)) / $(window).height() * 100;
                        var llllleft = ($('.head-svg').offset().left + $('.head-svg').width() / 2) / $('.screen-page:visible').width() * 100;
                        //console.log(llllleft, tttttop);
                        new TimelineMax().set('.head-svg',
                            {
                                position: 'fixed',
                                top: tttttop + '%',
                                left: llllleft + '%'
                            }).to('.head-svg', 1,
                            {
                                ease: Power1.easeInOut,
                                bezier: [{left: llllleft + '%', top: tttttop + '%'}, {left: 28 + '%', top: 75 + '%'}, {left: 7 + '%', top: 20 + '%'}]
                            });
                        TweenMax.to('.head_puzzle--checked', .9,
                            {
                                x: 0,
                                y: 0,
                                rotation: 360
                            });
                    }
                });
            var goto = $(this).data('goto-page');
            //pagePuzzlesSwitcher(goto);
            TweenMax.to('.screen-page:visible', 1,
                {
                    ease: Power1.easeInOut,
                    opacity: 0,
                    display: 'none',
                    onComplete: function () {
                        $('body').scrollTop(0);
                        new TimelineMax().set(goto,
                            {display: 'block'}).fromTo(goto, 1,
                            {ease: Power1.easeInOut, opacity: 0, y: $(window).height() + 'px'},
                            {ease: Power1.easeInOut, opacity: 1, y: 0, onComplete: function () {
                                scrollHead();
                                scrolledToBottom = false;
                                $('.violet-1,.red-2,.yelloow-3,.blue-4').removeClass('shadow-puzzles');
                            }});
                    }
                });
    }

});


