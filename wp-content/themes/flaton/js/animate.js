jQuery(document).ready(function($) {
  /* Animation */
  $(document).scroll(function() {

      if( $('.widget_skill-widget').length ) {
        var divPos =  $('.widget_skill-widget').offset().top;
      } else {
        var divPos =  0;
      }

        var topOfWindow = $(document).scrollTop();
        if( divPos < topOfWindow+500) {
          $(document).unbind('scroll');
          $('.skill-content .count').each(function () {
            var $this = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.ceil(this.Counter));
              }
            });
          });        
        }
  });

  /* Animation */
  $(window).scroll(function() {

      $('.home .site-main .circle-icon-wrapper').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("ab-animation-slide-top");
          $(this).addClass("animated");
        }
      });

      $('.home .site-main .circle-icon-box h4, .home .site-main .circle-icon-box p, .home .site-main .circle-icon-box a').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("ab-animation-slide-bottom");
          $(this).addClass("animated");
        }
      }); 

      $('.home .site-main .widget_list-widget h3, .home .site-main .widget_testimonial-widget h3, .home .site-main .widget_skill-widget h3, .home .site-main .widget_text h3').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) {
          $(this).addClass("ab-animation-slide-top");
          $(this).addClass("animated");
        }
      });   

      $('.home .site-main .widget_list-widget li').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
          $(this).addClass("ab-animation-slide-fade");
          $(this).addClass("animated");
        }
      });    

      $('.home .site-main .testimonials').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
          $(this).addClass("ab-animation-scale-up");
          $(this).addClass("animated");
        }
      });  

      $('.home .site-main .skill-container').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
          $(this).addClass("ab-animation-slide-bottom");
          $(this).addClass("animated");
        }
      });

      $('.home .content-area .widget_text').each(function(){
      var imagePos = $(this).offset().top;

      var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+600) {
          $(this).addClass("flipInX");
          $(this).addClass("animated");
        }
      });

      /* #1 Animation */
      $('.bigEntrance-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("bigEntrance");
            $(this).addClass("animated");
          }
      });
      /* #2 Animation */
      $('.boingInUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("boingInUp");
            $(this).addClass("animated");
          }
      });
      /* #3 Animation */
      $('.bounce-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("bounce");
            $(this).addClass("animated");
          }
      }); 
      /* #4 Animation */
      $('.bounceInLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("bounceInLeft");
            $(this).addClass("animated");
          }
      });
      /* #5 Animation */   
      $('.bounceInRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("bounceInRight");
            $(this).addClass("animated");
          }
      });        
      /* #6 Animation */
      $('.bounceInUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("bounceInUp");
            $(this).addClass("animated");
          }
      });      
      /* #7 Animation */
      $('.expandUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("expandUp");
            $(this).addClass("animated");
          }
      });      
      /* #8 Animation */
      $('.fade-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fade");
            $(this).addClass("animated");
          }
      });      
      /* #9 Animation */
      $('.fadeIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeIn");
            $(this).addClass("animated");
          }
      });      
      /* #10 Animation */
      $('.fadeInDown-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInDown");
            $(this).addClass("animated");
          }
      });  
      /* #11 Animation */    
      $('.fadeInDownBig-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInDownBig");
            $(this).addClass("animated");
          }
      });
      /* #12 Animation */
      $('.fadeInLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInLeft");
            $(this).addClass("animated");
          }
      });
      /* #13 Animation */
      $('.fadeInLeftBig-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInLeftBig");
            $(this).addClass("animated");
          }
      });      
      /* #14 Animation */
      $('.fadeInRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInRight");
            $(this).addClass("animated");
          }
      });      
      /* #15 Animation */
      $('.fadeInRightBig-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInRightBig");
            $(this).addClass("animated");
          }
      });      
      /* #16 Animation */
      $('.fadeInUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInUp");
            $(this).addClass("animated");
          }
      });      
      /* #17 Animation */
      $('.fadeInUpBig-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("fadeInUpBig");
            $(this).addClass("animated");
          }
      });      
      /* #18 Animation */
      $('.flip-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("flip");
            $(this).addClass("animated");
          }
      });      
      /* #19 Animation */
      $('.flipInX-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("flipInX");
            $(this).addClass("animated");
          }
      });      
      /* #20 Animation */
      $('.flipInY-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("flipInY");
            $(this).addClass("animated");
          }
      });      
      /* #21 Animation */
      $('.floating-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("floating");
            $(this).addClass("animated");
          }
      });      
      /* #22 Animation */
      $('.foolishIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("foolishIn");
            $(this).addClass("animated");
          }
      });      
      /* #23 Animation */
      $('.hatch-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("hatch");
            $(this).addClass("animated");
          }
      });      
      /* #24 Animation */   
      $('.lightSpeedIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("lightSpeedIn");
            $(this).addClass("animated");
          }
      });               
      /* #25 Animation */
      $('.puffIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("puffIn");
            $(this).addClass("animated");
          }
      });
      /* #26 Animation */
      $('.pullDown-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("pullDown");
            $(this).addClass("animated");
          }
      });
      /* #27 Animation */
      $('.pullUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("pullUp");
            $(this).addClass("animated");
          }
      });      
      /* #28 Animation */
      $('.pulse-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("pulse");
            $(this).addClass("animated");
          }
      });      
      /* #29 Animation */
      $('.rollInLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rollInLeft");
            $(this).addClass("animated");
          }
      });
      /* #30 Animation */
      $('.rollInRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rollInRight");
            $(this).addClass("animated");
          }
      });      
      /* #31 Animation */
      $('.rotateIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rotateIn");
            $(this).addClass("animated");
          }
      });      
      /* #32 Animation */
      $('.rotateInDownLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rotateInDownLeft");
            $(this).addClass("animated");
          }
      });      
      /* #33 Animation */
      $('.rotateInDownRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rotateInDownRight");
            $(this).addClass("animated");
          }
      });      
      /* #34 Animation */
      $('.rotateInUpLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rotateInUpLeft");
            $(this).addClass("animated");
          }
      });      
      /* #35 Animation */
      $('.rotateInUpRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("rotateInUpRight");
            $(this).addClass("animated");
          }
      });      
      /* #36 Animation */
      $('.scale-down-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("scale-down");
            $(this).addClass("animated");
          }
      });      
      /* #37 Animation */
      $('.scale-up-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("scale-up");
            $(this).addClass("animated");
          }
      });      
      /* #38 Animation */     
      $('.slide-bottom-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slide-bottom");
            $(this).addClass("animated clearfix");
          }
      });      
      /* #39 Animation */
      $('.slide-left-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slide-left");
            $(this).addClass("animated");
          }
      });      
      /* #40 Animation */
      $('.slide-right-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slide-right");
            $(this).addClass("animated");
          }
      });      
      /* #41 Animation */
      $('.slide-top-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slide-top");
            $(this).addClass("animated clearfix");
          }
      });
      /* #42 Animation */
      $('.slideDown-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideDown");
            $(this).addClass("animated");
          }
      });      
      /* #43 Animation */
      $('.slideExpandUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideExpandUp");
            $(this).addClass("animated");
          }
      });      
      /* #44 Animation */
      $('.slideInDown-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideInDown");
            $(this).addClass("animated");
          }
      });      
      /* #45 Animation */
      $('.slideInLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideInLeft");
            $(this).addClass("animated");
          }
      });      
      /* #46 Animation */
      $('.slideInRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideInRight");
            $(this).addClass("animated");
          }
      });      
      /* #47 Animation */
      $('.slideLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideLeft");
            $(this).addClass("animated");
          }
      });      
      /* #48 Animation */
      $('.slideRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideRight");
            $(this).addClass("animated");
          }
      });      
      /* #49 Animation */
      $('.slideUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("slideUp");
            $(this).addClass("animated");
          }
      });      
      /* #50 Animation */
      $('.spaceInDown-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("spaceInDown");
            $(this).addClass("animated");
          }
      });      
      /* #51 Animation */
      $('.spaceInLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("spaceInLeft");
            $(this).addClass("animated");
          }
      });  
      /* #52 Animation */    
      $('.spaceInRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("spaceInRight");
            $(this).addClass("animated");
          }
      });
      /* #53 Animation */
      $('.spaceInUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("spaceInUp");
            $(this).addClass("animated");
          }
      });
      /* #54 Animation */
      $('.stretchLeft-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("stretchLeft");
            $(this).addClass("animated");
          }
      });      
      /* #55 Animation */
      $('.stretchRight-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("stretchRight");
            $(this).addClass("animated");
          }
      });      
      /* #56 Animation */
      $('.swap-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("swap");
            $(this).addClass("animated");
          }
      });      
      /* #57 Animation */
      $('.swashIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("swashIn");
            $(this).addClass("animated");
          }
      });      
      /* #58 Animation */
      $('.swing-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("swing");
            $(this).addClass("animated");
          }
      });      
      /* #59 Animation */
      $('.tinDownIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("tinDownIn");
            $(this).addClass("animated");
          }
      });      
      /* #60 Animation */
      $('.tinRightIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("tinRightIn");
            $(this).addClass("animated");
          }
      });      
      /* #61 Animation */
      $('.tinUpIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("tinUpIn");
            $(this).addClass("animated");
          }
      });        
      /* #62 Animation */
      $('.tossing-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("tossing");
            $(this).addClass("animated");
          }
      });      
      /* #63 Animation */
      $('.twisterInDown-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("twisterInDown");
            $(this).addClass("animated");
          }
      });
      /* #64 Animation */
      $('.twisterInUp-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("twisterInUp");
            $(this).addClass("animated");
          }
      });      
      /* #65 Animation */
      $('.wobble-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("wobble");
            $(this).addClass("animated");
          }
      });
      /* #66 Animation */
      $('.zoomIn-animation').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+500) {
            $(this).addClass("zoomIn");
            $(this).addClass("animated");
          }
      });          

  });
});
