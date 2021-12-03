$(document).ready(function() {
  //
  $(document).on("click", "li.price_low_to_high", function() {
    var result = $('.all_products .item').sort(function (a, b) {

     var contentA =parseInt( $(a).attr('data-cost'));
     var contentB =parseInt( $(b).attr('data-cost'));
     return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
    });
    $('.all_products .row').html(result);
    $('.grid').jcsabfix();
  });
  //
  $(document).on("click", "li.price_high_to_low", function() {
    var result = $('.all_products .item').sort(function (a, b) {

     var contentA =parseInt( $(a).attr('data-cost'));
     var contentB =parseInt( $(b).attr('data-cost'));
     return (contentB < contentA) ? -1 : (contentB > contentA) ? 1 : 0;
    });
    $('.all_products .row').html(result);
    $('.grid').jcsabfix();
  });
  //
  $(document).on("click", "li.sorting_by_popularity", function() {
    var result = $('.all_products .item').sort(function (a, b) {

     var contentA =parseInt( $(a).attr('data-popularity'));
     var contentB =parseInt( $(b).attr('data-popularity'));
     return (contentB < contentA) ? -1 : (contentB > contentA) ? 1 : 0;
    });
    $('.all_products .row').html(result);
    $('.grid').jcsabfix();
  });
  //
  $(document).on("click", "li.by_date", function() {
    var result = $('.all_products .item').sort(function (a, b) {

     var contentA =parseInt( $(a).attr('data-date'));
     var contentB =parseInt( $(b).attr('data-date'));
     return (contentB < contentA) ? -1 : (contentB > contentA) ? 1 : 0;
    });
    $('.all_products .row').html(result);
    $('.grid').jcsabfix();
  });

  //
  $(document).on("click", "#filter_sorting li", function() {
    var currentFilterType = $('#filter_sorting').attr('data-filtertype');
    if (currentFilterType == 1) {
      $('<li class="price_low_to_high" data-filtertype="1"> <span>Price: Low to High</span> </li>').prependTo('#filter_sorting ul');
    }
    if (currentFilterType == 2) {
      $('<li class="price_high_to_low" data-filtertype="2"> <span>Price: High to Low</span> </li>').prependTo('#filter_sorting ul');
    }
    if (currentFilterType == 3) {
      $('<li class="by_date" data-filtertype="3"> <span>Date: Newest</span> </li>').prependTo('#filter_sorting ul');
    }
    if (currentFilterType == 4) {
      $('<li class="by_popularity" data-filtertype="4"> <span>Popularity</span> </li>').prependTo('#filter_sorting ul');
    }

    $('#filter_sorting').removeClass();
    var targetFilterType = $(this).attr('data-filtertype');
    $(this).detach();
    if (targetFilterType == 1) {
      $('#filter_sorting').addClass('price_low_to_high');
      $('.filter_sorting_current span').html('Sorted by Price');
    }
    if (targetFilterType == 2) {
      $('#filter_sorting').addClass('price_high_to_low');
      $('.filter_sorting_current span').html('Sorted by Price');
    }
    if (targetFilterType == 3) {
      $('#filter_sorting').addClass('by_date');
      $('.filter_sorting_current span').html('Sorted by Date');
    }
    if (targetFilterType == 4) {
      $('#filter_sorting').addClass('by_popularity');
      $('.filter_sorting_current span').html('Sorted by Popularity');
    }
    $('#filter_sorting').attr('data-filtertype', targetFilterType);
    $('.grid').jcsabfix();
  });

  //
  $(document).on("click", ".filters li", function() {
    $('.filters li span').removeClass('current');
    $(this).find('span').addClass('current');
    var chosenCategory = $(this).attr('data-categorytype');
    var chosenCategoryTitle = $(this).find('span').html();

    $('.all_products .item').each(function(i,elem) {
      var str = $(this).attr('data-category');
      var temp = new Array();
      temp = str.split(",");

      if(temp.indexOf( chosenCategory ) != -1) {
        $(this).removeClass('item_hidden');
        $(this).addClass('item_visible');
      } else {
        $(this).removeClass('item_visible');
        $(this).addClass('item_hidden');
      }
    });

    var itemsCounter = $('.item_visible').length;
    $('.kits_block_title span').html(itemsCounter);
    $('.kits_block_title i').html(chosenCategoryTitle);
  });

  //
  $('.grid').jcsabfix();
  $(window).smartresize(function(){
    $('.grid').jcsabfix();
  });
});
