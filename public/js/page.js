// Tooltip Init
$(function() {
  $("[data-toggle='tooltip']").tooltip();
});

// make all images responsive
$(function() {
  $("img").addClass("img-responsive");
});

// responsive tables
$(document).ready(function() {
  $("table").wrap("<div class='table-responsive'></div>");
  $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function () {
  $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
  $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
  $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
$(document).ready(function() {
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.navbar-custom').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
        //if scrolling up...
          if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
          $('.navbar-custom').addClass('is-visible');
        } else {
          $('.navbar-custom').removeClass('is-visible is-fixed');
        }
      } else {
        //if scrolling down...
        $('.navbar-custom').removeClass('is-visible');
        if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
      }
      this.previousTop = currentTop;
      });
  }
});

// dumb celebrity sighting thing
var celeb_sightings = [
  'Alec Baldwin',
  'Donald Glover',
  'Hugh Jackman',
  'Ice-T',
  'James Murphy',
  'Larry King',
  'Nicole Kidman',
  'Olivia Wilde',
  'Robert Pattinson',
  'Samira Wiley'
];
$(document).ready(function() {
  function randCeleb() {
    var celeb_sightings = [
      'Alec Baldwin',
      'Donald Glover',
      'Hugh Jackman',
      'Ice-T',
      'James Murphy',
      'Larry King',
      'Nicole Kidman',
      'Olivia Wilde',
      'Robert Pattinson',
      'Samira Wiley'
    ];
    return celeb_sightings[Math.floor(Math.random() * celeb_sightings.length)];
  };

  function replaceCeleb() {
    span = $("#celeb_sighting");
  celeb = randCeleb();
  oldCeleb = span.html();
  if (celeb == oldCeleb) {
    return;
  }
  duration = 500;
  span.fadeOut(duration, function() {
    span.html(celeb);
    span.fadeIn(duration);
  });
  };

  replaceCeleb();
  var derp = setInterval(replaceCeleb, 5000);
});
