$(document).ready(function() {
    $('.headers .header').click(function(){
        $('.header').removeClass('active')
        $(this).addClass('active')

       var selected = $(this).data('type');
        $('.tab').hide()
        $('.tab[data-type="'+selected+'"]').show()

    })
})