$(document).ready(function(){
    var slidenum = $('.slide').length
    $('.btn_previous').click(function(){
        var current = $('.slide.active').data('type')
        var previous = current-1;
        var next = current+1;
        $('.slide').removeClass('active')
        if(current === 1) {
            $('.slide[data-type="'+slidenum+'"]').addClass('active')
        }
        else {
            $('.slide[data-type="'+previous+'"]').addClass('active')
        }
    })
    $('.btn_next').click(function(){
        current = $('.slide.active').data('type')
        next = current+1
        $('.slide').removeClass('active')
        if(current === slidenum) {
            $('.slide[data-type=1]').addClass('active')
        }
        else {
            $('.slide[data-type="'+next+'"]').addClass('active')
        }
    })
})