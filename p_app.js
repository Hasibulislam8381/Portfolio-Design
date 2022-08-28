$(document).ready(function(){
    //For the navbar to appear on scroll
    $(window).scroll(function(){
        if(this.scrollY > 200)
        {
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        //scorlling button
        if(this.scrollY>500)
        {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    var typed=new Typed(".typing-1",{
        strings:[
            "Youtuber","Developer","Designer","Freelancer","Video Editor","Thumbnail Maker"
        ],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });
    var typed=new Typed(".typing-2",{
        strings:[
            "Youtuber","Developer","Designer","Freelancer","Video Editor","Thumbnail Maker"
        ],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });
    //owl Carousel styling
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        navigation:true,
        autoplay:true,
        autoplayTimeOut:1000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
});