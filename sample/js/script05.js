
$(function(){

    $("#intro p").hide().fadeIn(1000)
    setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
    //$("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行
  
    function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
      $("#intro").fadeOut(1000);
    }
    
    var swiper = new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        },
      });
    
  
  })