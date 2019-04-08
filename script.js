// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    $("h1").on("mouseenter", function() {
        $("h1").text("Hello! :)");
    });
    $("h1").on("mouseleave", function() {
        $("h1").text("See ya later!");
    });
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.parallax');
        var instances = M.Parallax.init(elems);
    });
});
