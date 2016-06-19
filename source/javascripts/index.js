//= require_tree ./parallax

jQuery(document).ready(function($) {
  jQuery('#parallax-slider-index').parallaxSlider({
    parallaxEffect: "parallax_effect_high"
    ,	parallaxInvert: false			,	animateLayout: "simple-fade-eff"
    ,	duration: 1500			,	autoSwitcher: true			,	autoSwitcherDelay: 10000			,	scrolling_description: true			,	slider_navs: true			,	slider_pagination: "none_pagination"
    ,	liteMode :liteModeSwitcher
  });

});
