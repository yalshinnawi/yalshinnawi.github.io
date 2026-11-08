/*-----------------------------------------------------------------------------------
/*
/* Init Projects JS
/* Yousef Al-Shinnawi Portfolio
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function($) {

   /*----------------------------------------------------*/
   /* FitText Settings
   ------------------------------------------------------ */
   if ($.fn.fitText) {
       setTimeout(function() {
          $('h1.responsive-headline').fitText(1, { minFontSize: '36px', maxFontSize: '80px' });
       }, 100);
   }

   /*----------------------------------------------------*/
   /* Smooth Scrolling
   ------------------------------------------------------ */
   $('.smoothscroll').on('click', function (e) {
       e.preventDefault();

       var target = this.hash;
       var $target = $(target);

       if ($target.length) {
           $('html, body').stop().animate({
               'scrollTop': $target.offset().top
           }, 800, 'swing', function () {
               window.location.hash = target;
           });
       }
   });

   /*----------------------------------------------------*/
   /* Dynamic Hero Height
   ------------------------------------------------------ */
   function setHeroHeight() {
       var winH = $(window).height();
       $('#projects-hero').css({ 'height': winH });
   }
   setHeroHeight();
   $(window).on('resize', setHeroHeight);

   /*----------------------------------------------------*/
   /* Navbar Fade In/Out on Scroll
   ------------------------------------------------------ */
   $(window).on('scroll', function() {
       var h = $('#projects-hero').height() || 600;
       var y = $(window).scrollTop();
       var nav = $('#nav-wrap');

       if ((y > h * 0.20) && (y < h) && ($(window).outerWidth() > 768)) {
           nav.fadeOut('fast');
       } else {
           if (y < h * 0.20) {
               nav.removeClass('opaque').fadeIn('fast');
           } else {
               nav.addClass('opaque').fadeIn('fast');
           }
       }
   });

   /*----------------------------------------------------*/
   /* Filter Buttons (All, Web, Game Dev, Systems)
   ------------------------------------------------------ */
   $('.filter-btn').on('click', function() {
       var filter = $(this).attr('data-filter');

       $('.filter-btn').removeClass('active');
       $(this).addClass('active');

       if (filter === 'all') {
           $('.category-divider').fadeIn(250);
           $('.project-card').fadeIn(250);
       } else {
           $('.category-divider').hide();
           $('.project-card').each(function() {
               var cat = $(this).attr('data-category');
               if (cat === filter) {
                   $(this).fadeIn(250);
               } else {
                   $(this).hide();
               }
           });
       }
   });

   /*----------------------------------------------------*/
   /* Accordion Expand / Collapse
   ------------------------------------------------------ */
   $('.project-accordion-toggle').on('click', function(e) {
       e.preventDefault();
       var $btn = $(this);
       var $content = $btn.next('.project-accordion-content');

       $btn.toggleClass('active');
       $content.stop().slideToggle(300);
   });

   /*----------------------------------------------------*/
   /* Deep-linking for internal anchor buttons
   ------------------------------------------------------ */
   $('a[href^="#"]').not('.smoothscroll').on('click', function(e) {
       var target = this.hash;
       if (!target || target === '#') return;

       var $target = $(target);
       if ($target.length && $target.hasClass('project-accordion-toggle')) {
           e.preventDefault();
           if (!$target.hasClass('active')) {
               $target.trigger('click');
           }
           $('html, body').stop().animate({
               'scrollTop': $target.offset().top - 80
           }, 600);
       }
   });

});
