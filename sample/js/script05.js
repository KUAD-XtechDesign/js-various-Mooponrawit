
$(function(){

    $("#intro p").hide().fadeIn(1000)
    setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
    //$("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行
  
    function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
      $("#intro").fadeOut(1000,contentAnime);
    }
  
    function contentAnime(){
      setTimeout(backAnime,300);//0.3秒後backAnime実行
    }
    
    $(".single-item").slick({
        accessibility: true,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
        fade: true,
      });

   
    
  
  })