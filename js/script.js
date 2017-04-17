$(document).ready(function () {
    var x = 0;
    var y = 0;
    var buttons = $(".buttons");
    buttons.css("height", window.innerHeight);

    $(".btn").click(function (event) {
        x = event.clientX;
        y = event.clientY;
        ul_height = $("ul").height();
        ul_width = $("ul").width();
        if(y >= window.innerHeight/2){
            console.log("y "+y);
            y -= ul_height;
        }

        if(x >= window.innerWidth/2){
            console.log("x "+x);
            x -= ul_width;
        }
        $("ul").css("top", y).css("left", x); 
        $("body").append($("ul"));
        $("ul").toggle();
    })

    $("li").click(function () {
        if ($(this).attr("disabled")) {
            $("ul").hide();
        }
        else {
            alert("Item clicked!");
        }
    })

    $(window).click(function (event) {
        if (event.pageX > x && event.pageY > y) {
            $("ul").hide();
        }
    });

    $(window).resize(function () {
        var newHeight = this.innerHeight;
        buttons.css("height", newHeight);
    });
});