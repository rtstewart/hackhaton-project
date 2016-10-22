window.onload = function(){

    // Fetching the elements with className "image"
    var image = document.getElementsByClassName("image");
    var preview = document.getElementById("preview");
    var close = document.getElementById("close");

    // Writing function for opening large Image
    var openLargeImage = function() {


     // On the clicked element, adding a class "open" wich we defined in the CSS and creates the scale              transition
     this.className += " open";

     preview.className = "";
     preview.className = "show";

     // Take care of the fact that the fixed element we get isn't vertically centered
     var windowHeight = window.innerHeight;
     var contentHeight = this.offsetHeight;
     this.style.top = ((windowHeight / 2) - (contentHeight / 2)) + 'px';

    };


    var closePreview = function() {

        for (var i = 0; i < image.length; i++) {
            image[i].className = "image";
        }

        preview.className = "hide";

    };

    // Add an eventListener on the  element
    for (var i = 0; i < image.length; i++) {
        image[i].addEventListener('click', openLargeImage, false);
    }

    close.addEventListener('click', closePreview, false);

};