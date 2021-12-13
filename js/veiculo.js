/*
min img style="background-color:rgb(210,210,210);" 

foto-destaque -> style="background-image:url('images/carro1.jpg');"
*/
/*
console.log('conectou');
$(document).ready(function () {
    alert('Deu certo');
});
*/
$(function () {
    var imgShow = 3;
    var minIndex = imgShow - 1;
    var maxIndex = Math.ceil($('.mini-img-wraper').length / 3) - 1;
    //ceil arredonda a conta para cima
    var curIndex = 0;

    initSlider();
    navigateSlider();
    clickMinImage();
    function initSlider() {
        var amt = $('.mini-img-wraper').length * 33.3;
        console.log('mini img ' + $('.mini-img-wraper').length);
        var elScroll = $('.nav-galeria-wraper');
        //console.log('1');
        var elSingle = $('.mini-img-wraper');
        //console.log('2');
        elScroll.css('width', amt + '%');
        elSingle.css('width', 33.3 * (100 / amt) + '%');
        // elSingle.css('width', '100px');
        console.log('elsingle -> ' + elSingle.css('width'));

    }

    function navigateSlider() {
        $('.arrow-right-nav').click(function () {
            if (curIndex < maxIndex) {
                curIndex++;
                // console.log('test 1 '+ curIndex );
                // var el1 = $('.nav-galeria').eq(curIndex*3).offset();
                // console.log(el1);
                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                console.log('elosff ' + elOff);
                $('.nav-galeria').animate({ 'scrollLeft': elOff + 'px' });
                console.log('right');
            } else {
                console.log('chegou ate o final dir');
            }
        })

        $('.arrow-left-nav').click(function () {
            if (curIndex > 0) {
                curIndex--;
                console.log('test left ' + curIndex);
                // var el1 = $('.nav-galeria').eq(curIndex*3).offset();
                // console.log(el1);
                var elOff = $('.mini-img-wraper').eq(curIndex * 3).offset().left - $('.nav-galeria-wraper').offset().left;
                console.log('elosff ' + elOff);
                $('.nav-galeria').animate({ 'scrollLeft': elOff + 'px' });
                console.log('left');
            } else {
                console.log('chegou ate o final esq');
            }
        })


    }

    function clickMinImage() {

        $('.mini-img-wraper').click(function () {
            $('.mini-img-wraper').css('background-color', 'transparent');
            $(this).css('background-color', 'rgb(200,200,200)');
            var imag = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image', imag);
        })
        $('.mini-img-wraper').eq(0).click();


    }
})