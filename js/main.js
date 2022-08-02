$(document).ready(function(){
    
    let swiper = new Swiper(".swiperLogos", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".slider_logos .swiper-button-next",
            prevEl: ".slider_logos .swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
            slidesPerView: 2,
            spaceBetween: 10
            },
            480: {
            slidesPerView: 3,
            spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
            slidesPerView: 4,
            spaceBetween: 10
            },
            1050: {
            slidesPerView: 5,
            spaceBetween: 10
            },
            // when window width is >= 640px
            1200: {
            slidesPerView: 7,
            spaceBetween: 20
            }
        }
    });

    /* FUNCION MODAL FORMULARIO */

    $('#formModal').click(function(){
        $('.modal_form').fadeToggle();
        $('body').css('overflow', 'hidden');
    })
    
    $('.dark_bg').click(function(){
        $('.modal_form').fadeOut();
        $('body').css('overflow', 'scroll');
    })

    /* FIN MODAL FORMULARIO */

    

    function mail(){


        let line1 = $('#env-line-1');
        let line2 = $('#env-line-2');
        let line3 = $('#env-line-3');
        let mailIcon = $('#submit_form');
        let envLid = $('#env-lid');
        let envPaper = $('#env-paper');



        let tl = new TimelineLite({
            paused:true,
        });

        TweenLite.defaultEase = Back.easeOut;
        
        tl 
            .to(envLid, 0.3, {
                scaleY:-1,
                y: 1.5,
                }
            )
            .fromTo(envPaper, 0.4, {
                transformOrigin: "50% 100%",
                scaleY:0,
            },{
                scaleY: 1,
            }, "=-0.25")
            .staggerFromTo([line1, line2, line3], 0.3, {
                transformOrigin: "50% 50%",
                scaleX: 0
            },{
                scaleX: 1,
            },	-0.09)



        $(mailIcon).click(function(){
            
            if ( $(this).hasClass('toggled') ) {
                /* tl.reverse(); */
            } 
            
            else {
                tl.play();
            }
            
            $(this).toggleClass('toggled');
            
        });

    }


    mail();


    /* prevent default button form */
    
    document.getElementById("submit_form").addEventListener("click", function(event){
        event.preventDefault()
    });

})