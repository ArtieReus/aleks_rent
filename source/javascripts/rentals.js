jQuery(document).ready(function($) {
  var $container = $('#rentals-grid'),
    items_count = $(".portfolio_item").size();


  $('.portfolio_item').magnificPopup({
    delegate: '.thumbnail > a',
    type: 'image',
    removalDelay: 500,
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      },
      open: function() {
        not_resizes = true;
      },
      close: function() {
        not_resizes = false;
      }
    },
    gallery: {enabled:true}
  });

  function getNumColumns(){
    var $folioWrapper = $('#rentals-grid').data('cols');

    if($folioWrapper == '2cols') {
      var winWidth = $("#rentals-grid").width(),
        column = 2;
      if (winWidth<380) column = 1;
      return column;
    }

    else if ($folioWrapper == '3cols') {
      var winWidth = $("#rentals-grid").width(),
        column = 3;
      if (winWidth<380) column = 1;
      else if(winWidth>=380 && winWidth<788) column = 2;
      else if(winWidth>=788 && winWidth<1160) column = 3;
      else if(winWidth>=1160) column = 3;
      return column;
    }

    else if ($folioWrapper == '4cols') {
      var winWidth = $("#rentals-grid").width(),
        column = 4;
      if (winWidth<380) column = 1;
      else if(winWidth>=380 && winWidth<788) column = 2;
      else if(winWidth>=788 && winWidth<1160) column = 3;
      else if(winWidth>=1160) column = 4;
      return column;
    }
  }

  function setColumnWidth(){
    var columns = getNumColumns(),
      containerWidth = $("#rentals-grid").width(),
      postWidth = containerWidth/columns;
    postWidth = Math.floor(postWidth);

    $(".portfolio_item").each(function(index){
      $(this).css({"width":postWidth+"px"});
    });
  }

  function arrange(){
    setColumnWidth();
    $container.isotope('reLayout');
  }

  // Filter projects
  $('.filter a').click(function(){
    var $this = $(this).parent('li');
    // don't proceed if already active
    if ( $this.hasClass('active') ) {
      return;
    }


    var $optionSet = $this.parents('.filter');
    // change active class
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector });
    change_hash(selector)

    var hiddenItems = 0,
      showenItems = 0;
    $(".portfolio_item").each(function(){
      if ( $(this).hasClass('portfolio_hidden') ) {
        hiddenItems++;
      };
    });

    showenItems = items_count - hiddenItems;
    if ( ($(this).attr('data-count')) > showenItems ) {
      $(".pagination__posts").css({"display" : "block"});
    } else {
      $(".pagination__posts").css({"display" : "none"});
    }
    return false;
  });
  function change_hash(hash){
    hash = hash.replace( /^.term/, 'category' );
    window.location.href = '#'+hash;

    $('.pagination a').each(function(){
      var item = $(this),
        href = item.attr('href'),
        end_slice = href.indexOf('#')==-1 ? href.length : href.indexOf('#') ;

      href = href.slice(0, end_slice);
      item.attr({'href':href+'#'+hash})
    })
  }
});