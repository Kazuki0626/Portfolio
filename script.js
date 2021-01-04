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

$('.view-first_left, .experience-section_sub, .view-second_right, .view-third_left, .view-section_title, .view-first_right, .first-description, .view-second_left, .second-description, .view-third_right, .third-description, .view-third_sub').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.view-first_left, .experience-section_sub, .view-second_right, .view-third_left, .view-section_title, .view-first_right, .first-description, .view-second_left, .second-description, .view-third_right, .third-description, .view-third_sub').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass("view-section_fadeInDown");
  }
});
});

// VIEW SECTION END

// EXPERIENCE SECTION START

$('.experience-section_main, .experience-first_left, .experience-first_right, .experience-second_left, .experience-second_right, .experience-third_left, .experience-third_right').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.experience-section_main, .experience-first_left, .experience-first_right, .experience-second_left, .experience-second_right, .experience-third_left, .experience-third_right').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 150){
  $(this).addClass("experience-section_fadeInDown");
  }
});
});

// EXPERIENCE SECTION END

// ENJOYMENT SECTION START

$('.enjoyment-section_main, .enjoyment-section_sub, .enjoyment-section_first_left, .enjoyment-section_first_right, .enjoyment-section_second_left, .enjoyment-section_second_right, .enjoyment-section_third_left, .enjoyment-section_third_right, .enjoyment-section_fourth_left, .enjoyment-section_fourth_right').css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$('.enjoyment-section_main, .enjoyment-section_sub, .enjoyment-section_first_left, .enjoyment-section_first_right, .enjoyment-section_second_left, .enjoyment-section_second_right, .enjoyment-section_third_left, .enjoyment-section_third_right, .enjoyment-section_fourth_left, .enjoyment-section_fourth_right').each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass("enjoyment-section_fadeInDown");
  }
});
});

// ENJOYMENT SECTION END

// PICTURE SECTION START

$(document).ready(function() {
  $('.trigger').click(function() {
    var value = $(this).attr('data-filter');
    if (value == 'all') {
      $('.filter').show('2000');
    } else {
      $('.filter').not('.'+value).hide('2000');
      $('.filter').filter('.'+value).show('2000');
    }
    $(document).on('click', '.trigger', function () {
      $('.trigger').removeClass('active');
      $(this).addClass('active');
    });
  })
})

// PICTURE SECTION END

// SPOT SECTION START

// SPOT SECTIONEND