document.addEventListener("DOMContentLoaded", function() {
    var i = 0;
    var images = [];
    var time = 2000; 

    images[0] = "Image/EnjoyCoffee.webp";
    images[1] = "Image/people-enjoy-coffee.1.jpg";
    images[2] = "Image/Brewing1.jpg";

    function changeImg() {
        var slideElement = document.getElementById("history");
        console.log(slideElement); 

        slideElement.src = images[i]; 

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    changeImg();
});