$(document).ready(function(){
    var x = 0;
    var y = 0;
    $("#button").click(function(event){
        x = event.clientX;
        y = event.clientY;  

        console.log(event.pageX) 
        
        $("ul").css("top",y);
        $("ul").css("left", x);
        $("body").append($("ul"));
        $("ul").toggle();

        if(x< event.pageX && y<event.pageY){
            $("ul").hide();
        }
    })
});