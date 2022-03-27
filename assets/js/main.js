$(document).ready(function() {

    AOS.init();

    /* Range Sliders */
    $("#uf").slider({ min: 1700, 
                      max: 30000, 
                      value: 0, 
                      focus: true
                    });

    $("#uf").on("slide", function(slideEvt) {
        $("#uf-numer").val(slideEvt.value);
    });

    $("#bathroom").slider({ id: "bathroom", 
                            min: 1,
                            max: 5, 
                            range: true, 
                            value: [1, 5],
                            ticks: [1, 2, 3, 4, 5],
                            ticks_labels: ['1', '2', '3', '4', '5+']
                         });

    $("#bathroom-2").slider({ id: "bathroom-2", 
                            min: 1,
                            max: 5, 
                            value: 1,
                            ticks: [1, 2, 3, 4, 5],
                            ticks_labels: ['1', '2', '3', '4', '5+']
    });

    $("#room").slider({ id: "room",
                        min: 1,
                        max: 5, 
                        range: true, 
                        value: [1, 5],
                        ticks: [1, 2, 3, 4, 5],
                        ticks_labels: ['1', '2', '3', '4', '5+']
                    });

    $("#room-2").slider({ id: "room-2",
                        min: 1,
                        max: 5, 
                        value: 1,
                        ticks: [1, 2, 3, 4, 5],
                        ticks_labels: ['1', '2', '3', '4', '5+']
                    });

    $("#percent").slider({  ticks: [10, 20, 30],
                            ticks_labels: ['10%', '20%', '30%'],
                            ticks_snap_bounds: 10
                        });


    $("#time").slider({ ticks: [10, 15, 20, 25, 30 ],
                        ticks_labels: ['10', '15', '20', '25', '30'],
                        ticks_snap_bounds: 10
                    });


    /* Slick */
    $('#houseSlide-1').slick({
        arrows: true,
        prevArrow: $('#houseSlide-1-left'),
        nextArrow: $('#houseSlide-1-right')
    });

    $('#houseSlide-2').slick({
        arrows: true,
        prevArrow: $('#houseSlide-2-left'),
        nextArrow: $('#houseSlide-2-right')
    });

    $('#houseSlide-3').slick({
        arrows: true,
        prevArrow: $('#houseSlide-3-left'),
        nextArrow: $('#houseSlide-3-right')
    });

    $('#houseSlide-4').slick({
        arrows: true,
        prevArrow: $('#houseSlide-4-left'),
        nextArrow: $('#houseSlide-4-right')
    });

    $('#fichaSlide').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        prevArrow: $('#fichaSlide-left'),
        nextArrow: $('#fichaSlide-right')
    });

    $('#loginSlide').slick({
        arrows: true,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        prevArrow: $('#loginSlide-left'),
        nextArrow: $('#loginSlide-right')
    });







    $(".navbarToggle").on("click", function () {
	    $(this).toggleClass("active");
        $(".header__nav").toggleClass("active");
        $(".rrss").toggleClass("active");
    });

    $('.form__item__input, .form__item__textarea').blur(function(e) {
        $(this)[($(this).val() === '' ? 'removeClass':'addClass')]('hasText');
    });

    $('.slider .btn--expand').on("click", function (e) {
        e.preventDefault();
	    $(this).toggleClass("active");
        $(this).parent('.slider').toggleClass("fullscreen")
    });

    $('.form__item__select').change(function(){
        if($(this).val() == 'empty'){ 
            $(this).removeClass('hasText');
        } else{
            $(this).addClass('hasText'); 
        }
    });

    $("a").on('click', function(event) {
        if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top -60
        }, 1000, function(){
            window.location.hash = hash;
        });
        } 
    });

    $('.sliderHome').slick({
        slidesToShow: 3,
 	    slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.sliderImage.nro-1').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        arrows: false,
        asNavFor: $('.sliderInfo__block__caption.nro-1'),
    });
    
    $('.sliderInfo__block__caption.nro-1').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        fade: true,
        dots: true,
        asNavFor: $('.sliderImage.nro-1'),
        prevArrow: $('.sliderInfo__block__arrows__prev.nro-1'),
        nextArrow: $('.sliderInfo__block__arrows__next.nro-1'),
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i].innerHTML).find('article[data-title]').data('title');
            return '<a class="sliderInfo__block__dots__item"> '+title+' </a>';
        },
        appendDots: $('.sliderInfo__block__dots.nro-1'),
    });

    $('.sliderImage.nro-2').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        arrows: false,
        asNavFor: $('.sliderInfo__block__caption.nro-2'),
    });
    
    $('.sliderInfo__block__caption.nro-2').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        fade: true,
        dots: true,
        asNavFor: $('.sliderImage.nro-2'),
        prevArrow: $('.sliderInfo__block__arrows__prev.nro-2'),
        nextArrow: $('.sliderInfo__block__arrows__next.nro-2'),
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i].innerHTML).find('article[data-title]').data('title');
            return '<a class="sliderInfo__block__dots__item"> '+title+' </a>';
        },
        appendDots: $('.sliderInfo__block__dots.nro-2'),
    });

    $('.sliderImage.nro-3').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        arrows: false,
        asNavFor: $('.sliderInfo__block__caption.nro-3'),
    });
    
    $('.sliderInfo__block__caption.nro-3').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        fade: true,
        dots: true,
        asNavFor: $('.sliderImage.nro-3'),
        prevArrow: $('.sliderInfo__block__arrows__prev.nro-3'),
        nextArrow: $('.sliderInfo__block__arrows__next.nro-3'),
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i].innerHTML).find('article[data-title]').data('title');
            return '<a class="sliderInfo__block__dots__item"> '+title+' </a>';
        },
        appendDots: $('.sliderInfo__block__dots.nro-3'),
    });

    $('.sliderImage.nro-4').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        arrows: false,
        asNavFor: $('.sliderInfo__block__caption.nro-4'),
    });
    
    $('.sliderInfo__block__caption.nro-4').slick({
        slidesToShow: 1,
 	    slidesToScroll: 1,
        fade: true,
        dots: true,
        asNavFor: $('.sliderImage.nro-4'),
        prevArrow: $('.sliderInfo__block__arrows__prev.nro-4'),
        nextArrow: $('.sliderInfo__block__arrows__next.nro-4'),
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i].innerHTML).find('article[data-title]').data('title');
            return '<a class="sliderInfo__block__dots__item"> '+title+' </a>';
        },
        appendDots: $('.sliderInfo__block__dots.nro-4'),
    });


});

Fancybox.bind('[data-fancybox="gallery"]', {
    animated: false,
    dragToClose: false,

    showClass: false,
    hideClass: false,

    closeButton: "top",

    Image: {
        click: "close",
        wheel: "slide",
        zoom: false,
        fit: "cover",
    },
});


