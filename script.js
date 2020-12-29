// TOP PAGE START

var startPos = 0,winScrollTop = 0;
$(window).on('onload',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 500) {
        $('.page-top-main').addClass('hide');
    } else {
        $('.page-top-main').removeClass('hide');
    }
    startPos = winScrollTop;

  });
  
  $(function() {
    setTimeout(function(){
      $('.page-top-main_title').fadeOut(1800);
    },2000); 
  });



// TOP PAGE END

// SECOND=SECTION START

$('.second-section_main_title, .second-section_sub_title_list').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.second-section_main_title, .second-section_sub_title_list').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass("second-section_fadeInDown");
  }
});
});

// SECOND SECTION END

// VIEW SECTION START

$('.view-first-left, .experience-section-sub, .view-second-right, .view-third-left, .view-section_title, .view-first-right, .first-description, .view-second_left, .second-description, .view-third-right, .third-description, .view-third-sub').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.view-first-left, .experience-section-sub, .view-second-right, .view-third-left, .view-section_title, .view-first-right, .first-description, .view-second_left, .second-description, .view-third-right, .third-description, .view-third-sub').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass("view-section_fadeInDown");
  }
});
});

// VIEW SECTION END

// EXPERIENCE SECTION START

$('.experience-section-main, .experience-first-left, .experience-first-right, .experience-second-left, .experience-second-right, .experience-third-left, .experience-third-right').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.experience-section-main, .experience-first-left, .experience-first-right, .experience-second-left, .experience-second-right, .experience-third-left, .experience-third-right').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 150){
  $(this).addClass("experience-section_fadeInDown");
  }
});
});

// EXPERIENCE SECTION END

// ENJOYMENT SECTION START

$('.enjoyment-section_main_layout, .enjoyment-section_sub, .enjoyment-section_first_left, .enjoyment-section_first_right, .enjoyment-section_second_left, .enjoyment-section_second_right, .enjoyment-section_third_left, .enjoyment-section_third_right, .enjoyment-section_fourth_left, .enjoyment-section_fourth_right').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.enjoyment-section_main_layout, .enjoyment-section_sub, .enjoyment-section_first_left, .enjoyment-section_first_right, .enjoyment-section_second_left, .enjoyment-section_second_right, .enjoyment-section_third_left, .enjoyment-section_third_right, .enjoyment-section_fourth_left, .enjoyment-section_fourth_right').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass("second-section_fadeInDown");
  }
});
});

// ENJOYMENT SECTION END

// PICTURE SECTION START

$(document).ready(function() {
  $('.trigger').click(function() {
    var value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.filter').show('1000');
    } else {
      $('.filter').not('.'+value).hide('1000');
      $('.filter').filter('.'+value).show('1000');
    }
    $(document).on('click', '.trigger', function () {
      $('.trigger').removeClass('active');
      $(this).addClass('active');
    });
  })
})

// PICTURE SECTION END

// SPOT SECTION START

$('.spot-section_main, .spot-section_sub, .spot-section_first_left, .spot-section_first_right, .spot-section_second_left, .spot-section_second_right, .spot-section_third_left, .spot-section_third_right, .spot-section_fourth_left, .spot-section_fourth_right, .spot-section_fifth_left, .spot-section_fifth_right, .spot-section_six_left, .spot-section_six_right').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.spot-section_main, .spot-section_sub, .spot-section_first_left, .spot-section_first_right, .spot-section_second_left, .spot-section_second_right, .spot-section_third_left, .spot-section_third_right, .spot-section_fourth_left, .spot-section_fourth_right, .spot-section_fifth_left, .spot-section_fifth_right, .spot-section_six_left, .spot-section_six_right').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass("spot-section_fadeInDown");
  }
});
});

// SPOT SECTIONEND