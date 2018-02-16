$("[animate]").on('click', function(){
    var divId = $(this).attr("target-id");
    $('html, body').animate({
        scrollTop: $(divId).offset().top
    }, 1500);
});