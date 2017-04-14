$(document).ready(function(){
    var x = 0;
    var y = 0;
    $("#button").click(function(event){
        x = event.clientX;
        y = event.clientY;        
        $("ul").css("top",y);
        $("ul").css("left", x);
        $("body").append($("ul"));
        $("ul").toggle();     
    })

    $("li").click(function(){
        if($(this).attr("disabled")){
            $("ul").hide();
        }
        else{
            alert("Item clicked!");
        }
    })

    $(window).click(function(event){
           if(event.pageX > x && event.pageY > y){
                $("ul").hide();
           } 
    });
});