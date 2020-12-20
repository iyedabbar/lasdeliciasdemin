$(document).ready(function () {
  
 $('.navbar-toggler').click(function () {   
     $('.navbar-toggler').toggleClass('change')
 })   

$(window).scroll(function(){
    let position = $(this).scrollTop();
            
     if(position>= 718){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');    
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }     
    })
    $(window).scroll(function(){
    let position = $(this).scrollTop();
            
     if(position>= 718){
            $('#back-to-top').addClass('scrollTop');   
        }
        else{
            $('#back-to-top').removeClass('scrollTop');
            
        }     
    })
    $('.nav-item a, .header-link, #back-to-top').click(function(link){
        link.preventDefault();
        
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
        
    });
    
    
    
    
    //ripples
                
 //magnific papup
    $('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
        enabled: true
    }    
  // other options
});
 $('.parent-galerie').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
        enabled: true
    }    
  // other options
});
    $('.polaroid').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
    gallery:{
        enabled: true
    }    
  // other options
});
$('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        dots:false,
        responsive:{    
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
                 }
            }
        });
 
$('#testimonial-carousa').owlCarousel({     
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        responsive:{    
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            
                 }
            }
        });
 $('#testimonial-galerie').owlCarousel({     
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        dots:false,
        responsive:{    
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            
                 }
            }
        });     
});
$(function() {
  $('#WAButton').floatingWhatsApp({
    phone: '+593994176845', //WhatsApp Business phone number International format-
    //Get it with Toky at https://toky.co/en/features/whatsapp.
    headerTitle: 'Las Delicias De Mi Na', //Popup Title
    popupMessage: 'Hola!', //Popup Message
    showPopup: true, //Enables popup display
    buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
    //headerColor: 'crimson', //Custom header color
    //backgroundColor: 'crimson', //Custom background button color
    position: "right"    
  });
});
