/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {
  // Check if we're on mobile/small screen (below 768px)
  var isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // On mobile: move all navigation items except the site title to hidden links
    $vlinks.children().not(':first-child').prependTo($hlinks);
    $btn.removeClass('hidden');
    $btn.attr("count", $hlinks.children().length);
    return;
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children().last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
  
  // Prevent body scroll when menu is open on mobile
  if (window.innerWidth <= 768) {
    if ($hlinks.hasClass('hidden')) {
      $('body').css('overflow', 'auto');
    } else {
      $('body').css('overflow', 'hidden');
    }
  }
});

// Add click handler for close button (X) in mobile menu
$(document).on('click', '.mobile-close-btn', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $hlinks.addClass('hidden');
  $btn.removeClass('close');
  $('body').css('overflow', 'auto');
});

// Close menu when clicking outside
$(document).on('click', function(e) {
  if (!$(e.target).closest('.greedy-nav').length && !$hlinks.hasClass('hidden')) {
    $hlinks.addClass('hidden');
    $btn.removeClass('close');
    $('body').css('overflow', 'auto');
  }
});

updateNav();