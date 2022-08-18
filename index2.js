
$(".b1").on("click",function(){
    $(".b1").addClass("styleforbutton");
    window.open("games.html",'_blank');
    setTimeout(function(){
        $(".b1").removeClass("styleforbutton");
    },200);
})

    
        $(".b1").hover(function(){
            $(".b1").toggleClass("styleforbutton");
        })
        $(".b2").hover(function(){
            $(".b2").toggleClass("styleforbutton");
        })
        $(".b3").hover(function(){
            $(".b3").toggleClass("styleforbutton");
        })
        $(".b4").hover(function(){
            $(".b4").toggleClass("styleforbutton");
        })

  


