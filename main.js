
$(document).ready(function(){
    // Activate the Carousel, but pause it from the start
    $("#myCarousel").carousel("pause");
    $("#myCarousel3").carousel({interval: 3000 }); //Slider interval speed 3 sec


    // Click on the button to start sliding
    $("#myBtn5").click(function(){
        $("#myCarousel3").carousel("cycle"); //Start(cycle) of slides Button don't use the slide to not have the slide move
    });

    

});