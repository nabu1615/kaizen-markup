$(function() {
    var pull = $('.action_mobile'),
        nav = $('.nav'),
        homeIcon = $('.home-icon'),
        windowWidth = $(window).width(),
        active = 'active',
        featuredWorkitem = ".featured-works .item .image",
        featuredWorkimageBox = ".featured-works .item .image img",
        wrapper = $('.wrapper'),
        contactAction = $("#contact"),
        contactClose = $(".form-close"),
        check = (".check"),
        checkInput = (".check input"),
        contactBox = $(".contact"),
        bxsliderServices = null;


   $(pull).on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass(active);
        $(nav).fadeToggle();
        $(wrapper).fadeToggle();
    });

    $(window).resize(function(){
        windowWidth = $(window).width();
        $(wrapper).show();
        if(windowWidth < 868){
           $(pull).on('click', function(e) {
                e.preventDefault();
                $(wrapper).show();
            });
        }
    });

   $(contactAction).on('click', function(e) {
    e.preventDefault();
    $(contactBox).fadeIn();
    $(nav).fadeOut();
    $(pull).toggleClass(active);
    });

   $(contactClose).on('click', function() {
        $(contactBox).fadeOut();
        $(wrapper).fadeIn();
   });

    $(window).scroll(function() {
        if ($(this).scrollTop()>0 && windowWidth < 868)
        {
            $(homeIcon).fadeIn();
            $('body').addClass("scrolling");
        }
        else if ($(this).scrollTop() === 0 && windowWidth > 868)
        {
            $(homeIcon).fadeIn();
            $('body').removeClass("scrolling");
        }
        else if ($(this).scrollTop()>0 && windowWidth > 868) {
            $('body').addClass("scrolling");
        }
        else
        {
            $(homeIcon).fadeOut();
            $('body').removeClass("scrolling");
        }
    });

    $(check).on('click', function(){
        $(this).toggleClass("active");
    });

    $(window).on("resize", function(){
        windowWidth = $(window).width();
        if(windowWidth > 768 && $(nav).is(':hidden')) {
            $(nav).removeAttr('style');
        };

        if(windowWidth < 868){
            bxsliderServices.reloadSlider({
                minSlides: 1,
                maxSlides: 1
            });
        }

        if(windowWidth > 868){
            bxsliderServices.destroySlider();
            setTimeout(function(){
                $("#services li").removeAttr('style');
                $("#services").removeAttr('style');
            }, 10);
            }
        });

    $(featuredWorkitem).each(function(){
        var bgImg = $(this).find('img').attr("src");
        $(this).css("background-image", "url('" + bgImg + "')");
        $(this).find('img').remove();
    });

    $('.bx-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    bxsliderServices = $('#services').bxSlider({
        minSlides: 1,
        maxSlides: 1
    });

    if(windowWidth > 868){
        bxsliderServices.destroySlider();
    }

    if(windowWidth > 868){
        $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top - 78;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
        });
    }

});


$('.works-slide').bxSlider({
    controls: true,
    minSlides: 1,
    maxSlides: 1
});