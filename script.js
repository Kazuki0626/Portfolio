// TOP PAGE START
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
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