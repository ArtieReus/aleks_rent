jQuery(document).ready(function($) {
  if (!device.mobile() && !device.tablet()) {
    liteModeSwitcher = false;
  } else {
    liteModeSwitcher = true;
  }
  if ($.browser.msie && parseInt($.browser.version) < 9) {
    liteModeSwitcher = true;
  }
});