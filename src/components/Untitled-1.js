
 jQuery(document).ready(function($){

$('.tp-mask-wrap > a').addClass('fh-button-red fh-icon--cal');
$('.tp-loop-wrap').css('width','400px');
$('.fh-button-red').attr('href','https://fareharbor.com/embeds/book/southtours/?full-items=yes');
$('#slide-2-layer-6').replaceWith(function() {
    return $('<a/>', {
        html: this.innerHTML
    });
});
  });

