'use strict'

// PageTopボタン

$(function() {
  var pagetop = $('.pagetop');
  pagetop.hide();

  $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
});

// PageTopボタン

// header fixed

$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.nav-wrapper').fadeToggle(500);
  $('body').toggleClass('noscroll');
 });

// header fixed



// header change-color PC 

window.addEventListener("scroll", function () {
  var header = document.querySelector(".site-header");
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});


// header change-color PC


// SECOND=SECTION START

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 0);
});

const secondText = 'second-section';

$(`.${secondText}_main_title, .${secondText}_sub_title_list`).css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$(`.${secondText}_main_title, .${secondText}_sub_title_list`).each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass(`${secondText}_fadeInDown`);
  }
});
});

// SECOND SECTION END

// VIEW SECTION START

const viewText = 'view';

$(`.${viewText}-first_left, .experience-section_sub, .${viewText}-second_right, .${viewText}-third_left, .${viewText}-section_title, .${viewText}-first_right, .first-description, .${viewText}-second_left, .second-description, .${viewText}-third_right, .third-description, .${viewText}-third_sub`).css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$(`.${viewText}-first_left, .experience-section_sub, .${viewText}-second_right, .${viewText}-third_left, .${viewText}-section_title, .${viewText}-first_right, .first-description, .${viewText}-second_left, .second-description, .${viewText}-third_right, .third-description, .${viewText}-third_sub`).each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass(`${viewText}-section_fadeInDown`);
  }
});
});

// VIEW SECTION END

// EXPERIENCE SECTION START

const experienceText = 'experience';

$(`.${experienceText}-section_main, .${experienceText}-first_left, .${experienceText}-first_right, .${experienceText}-second_left, .${experienceText}-second_right, .${experienceText}-third_left, .${experienceText}-third_right`).css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$(`.${experienceText}-section_main, .${experienceText}-first_left, .${experienceText}-first_right, .${experienceText}-second_left, .${experienceText}-second_right, .${experienceText}-third_left, .${experienceText}-third_right`).each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 150){
  $(this).addClass(`${experienceText}-section_fadeInDown`);
  }
});
});

// EXPERIENCE SECTION END

// ENJOYMENT SECTION START

const enjoymentText = 'enjoyment-section';

$(`.${enjoymentText}_main, .${enjoymentText}_sub, .${enjoymentText}_first_left, .${enjoymentText}_first_right, .${enjoymentText}_second_left, .${enjoymentText}_second_right, .${enjoymentText}_third_left, .${enjoymentText}_third_right, .${enjoymentText}_fourth_left, .${enjoymentText}_fourth_right`).css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
$(`.${enjoymentText}_main, .${enjoymentText}_sub, .${enjoymentText}_first_left, .${enjoymentText}_first_right, .${enjoymentText}_second_left, .${enjoymentText}_second_right, .${enjoymentText}_third_left, .${enjoymentText}_third_right, .${enjoymentText}_fourth_left, .${enjoymentText}_fourth_right`).each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass(`${enjoymentText}_fadeInDown`);
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

const spotText = 'spot-section';

// SPOT SECTION START
$(`.${spotText}_1_main, .${spotText}_sub, .${spotText}_first, .${spotText}_first_left, .${spotText}_first_right, .${spotText}_first_description, .${spotText}_main, .${spotText}_second_left, .${spotText}_second_right, .${spotText}_second_description, .${spotText}_third_main, .${spotText}_third_left, .${spotText}_third_right, .${spotText}_third_description, .${spotText}_fourth_main, .${spotText}_fourth_left, .${spotText}_fourth_right, .${spotText}_fourth_description`).css('visibility','hidden');
$(window).scroll(function(){
var windowHeight = $(window).height(),
  topWindow = $(window).scrollTop();
$(`.${spotText}_1_main, .${spotText}_sub, .${spotText}_first, .${spotText}_first_left, .${spotText}_first_right, .${spotText}_first_description, .${spotText}_main, .${spotText}_second_left, .${spotText}_second_right, .${spotText}_second_description, .${spotText}_third_main, .${spotText}_third_left, .${spotText}_third_right, .${spotText}_third_description, .${spotText}_fourth_main, .${spotText}_fourth_left, .${spotText}_fourth_right, .${spotText}_fourth_description`).each(function(){
  var targetPosition = $(this).offset().top;
  if(topWindow > targetPosition - windowHeight + 100){
  $(this).addClass(`${spotText}_fadeInDown`);
    }
  });
});
// SPOT SECTIONEND

// FOOTER SECTION

