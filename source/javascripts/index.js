jQuery(function(){
  jQuery('.sf-menu').mobileMenu({defaultText: "Navigate to..."});
});


jQuery(document).ready(function($) {
  if(!device.mobile() && !device.tablet()){
    liteModeSwitcher = false;
  }else{
    liteModeSwitcher = true;
  }
  if($.browser.msie && parseInt($.browser.version) < 9){
    liteModeSwitcher = true;
  }

  jQuery('#parallax-slider-5722e3cc6fd95').parallaxSlider({
    parallaxEffect: "parallax_effect_high"
    ,	parallaxInvert: false			,	animateLayout: "simple-fade-eff"
    ,	duration: 1500			,	autoSwitcher: true			,	autoSwitcherDelay: 10000			,	scrolling_description: true			,	slider_navs: true			,	slider_pagination: "none_pagination"
    ,	liteMode :liteModeSwitcher
  });

});