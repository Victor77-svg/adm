jQuery(document).ready(function ($) {
  $('.money').mask('000.000.000.000.000,00', {reverse: true});

  $('.percent').mask('##0,00', {reverse: true});

  $('.time').mask('00000', {reverse: true});

  $('input').keydown(function (e) {
  	if(((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58) || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 188)) {
        $(this).removeClass('not-valid');
        $(this).parent().parent().find('.error-message').text('Este campo não pode ser vazio').hide();
  	}
  });

  window.formSimuladorValidator = function () {
  	let simulador = $('.c-form-simulador__simulador');
    let required = simulador.find('input[required]');
    let formValid = true;

    required.each(function(i) {
    	if ($(this).is(':visible') && $(this).val() === "") {
    		$(this).addClass('not-valid');
    		$(this).parent().parent().find('.error-message').text('Este campo não pode ser vazio').show();
    		formValid = false;
    	}
    });

    return formValid;
  }

  Number.prototype.formatMoney = function(c, d, t){
    var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
    j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };

});