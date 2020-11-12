
$(function(){

    $("#intro p").hide().fadeIn(1000)
    setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
    //$("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行
  
    function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
      $("#intro").fadeOut(1000);
    }
  
      $("#slide").slick({dots:true});
    
      // $(".btn").on("click",()=>{
      //   $("#slide").slideToggle();
      // })
    
    
  
  })