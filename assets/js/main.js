// partner slider
    $(document).ready(function(){
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3200,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    });



    $(window).scroll(function() {
    if($(this).scrollTop()>5) {
        $( ".__navbar-fixed" ).addClass("__fixed-nav");
    } else {
        $( ".__navbar-fixed" ).removeClass("__fixed-nav");
    }
});