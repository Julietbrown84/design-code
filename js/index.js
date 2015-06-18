$(document).ready(function(){
  var cbpAnimatedHeader = (function() {

  var docElem = document.documentElement,
    header = document.querySelector( '.cbp-af-header' ),
    didScroll = false,
    changeHeaderOn = 300;

  function init() {
    window.addEventListener( 'scroll', function( event ) {
      if( !didScroll ) {
        didScroll = true;
        setTimeout( scrollPage, 250 );
      }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      classie.add( header, 'cbp-af-header-shrink' );
    }
    else {
      classie.remove( header, 'cbp-af-header-shrink' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();


   
//   var current_h = null;
//   var current_w = null;

//   $('.expand').hover(
//       function(){
//           current_h = $(this, 'img')[0].height;
//           current_w = $(this, 'img')[0].width;
//           $(this).stop(true, false).animate({width: (current_w * 1), height: (current_h * 1.3)}, 300);
//       },
//       function(){
//           $(this).stop(true, false).animate({width: current_w + 'px', height: current_h + 'px'}, 300);
//       }
//   );
// });