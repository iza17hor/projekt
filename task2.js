(function injection() {

  var injectionPosition = 5; // position for desktop

  if (window.matchMedia("(max-width: 991px)").matches) injectionPosition = 2; // position for mobile


  $("#epoq_resultrows > div > div:nth-child(1)").clone().insertAfter($(`#epoq_resultrows > div > div:nth-child(${injectionPosition - 1})`));


  $(`#epoq_resultrows > div > div:nth-child(${injectionPosition}) > div > div > div > div.product-image-wrapper > a > img`).attr('src', 'https://static.trbo.com/img/13499/DDW_KW43_345x345_Slider_01_201013.jpg');


  $(`#epoq_resultrows > div > div:nth-child(${injectionPosition}) > div > div > div > div.product-image-wrapper > a`).attr('href', 'https://www.fackelmann.de/sparen/deals-der-woche');

  
})();

