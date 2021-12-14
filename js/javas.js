/*$(window).on('load', function(){
    alert("Carregou!!");
})
*/
$(document).ready(function () {

    $('.mobile').click(function () {
        $(this).find('ul').slideToggle();
    })
    // alert('Deu certo');
    iniciarDepoimentos();
    navDepoimentos();
    var curIndex = 0;
    var amtDepoimento = $('.depoimento-single p').length;
    function iniciarDepoimentos() {
        $('.depoimento-single p').hide();
        $('.depoimento-single p').eq(0).show();
    }

    function navDepoimentos() {
        $('[next]').click(function () {
            // console.log('next');
            curIndex++;
            if (curIndex >= amtDepoimento)
                curIndex = 0;
            $('.depoimento-single p').hide();
            $('.depoimento-single p').eq(curIndex).show();
        })
        $('[prev]').click(function () {
           // console.log('prev');
           curIndex--;
           if (curIndex < 0)
               curIndex = amtDepoimento - 1;
           $('.depoimento-single p').hide();
           $('.depoimento-single p').eq(curIndex).show();
        })


    }

});

