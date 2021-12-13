/*
$(document).ready(function () {
    alert('Deu certo');
});
*/

// TEM QUE ZERA A POSCAO DO PONTEIRO E DA BARRA
$(function () {
    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0;

    $('.pointer-barra').mousedown(function () {
        // console.log('precionou');
        isDrag = true;
    })

    $(document).mouseup(function () {
        //  console.log('largou')
        isDrag = false;
        enableTEXTselect();
    })

    $('.barra-preco').mousemove(function (e) {
        if (isDrag) {
            disableTEXTselect();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            //console.log('mouse ' + mouseX);

            if (mouseX < 0)
                mouseX = 0;
            if (mouseX > elBase.width())
                mouseX = elBase.width();

            var percent = (mouseX / elBase.width()) * 100;
            //console.log(percent);
            $('.barra-preco-fill').css('width', percent + '%');
            $('.pointer-barra').css('left', (mouseX - 9));

            preco_atual = percent / 100 * preco_maximo;
            preco_atual = formatPreco(preco_atual);
            $('.preco_pesquisa').html('R$' + preco_atual);


        }
    })

    function formatPreco(preco_atual) {
        preco_atual = preco_atual.toFixed(2);
        var preco_arr = preco_atual.split('.');

        var preco_atual = formataTotal(preco_arr);

        return preco_atual;
    }

    function formataTotal(preco_arr) {
        if (preco_arr[0] < 1000) {
            return preco_arr[0] + ',' + preco_arr[1];
        }else if (preco_arr[0] < 10000) {
            return preco_arr[0][0] + '.' + preco_arr[0].substr(1, preco_arr[0].length) + ',' + preco_arr[1];
        }else{
            return preco_arr[0][0]  + preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length) + ',' + preco_arr[1];
        }
    }

    function disableTEXTselect() {
        $("body").css("-webkit-user-select", "none");
        $("body").css("-moz-user-select", "none");
        $("body").css("-ms-user-select", "none");
        $("body").css("-o-user-select", "none");
        $("body").css("user-select", "none");
    }

    function enableTEXTselect() {
        $("body").css("-webkit-user-select", "auto");
        $("body").css("-moz-user-select", "auto");
        $("body").css("-ms-user-select", "auto");
        $("body").css("-o-user-select", "auto");
        $("body").css("user-select", "auto");
    }
})