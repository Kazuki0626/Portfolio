// TOP PAGE START
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 500) {
        $('.page-top').addClass('hide');
    } else {
        $('.page-top').removeClass('hide');
    }
    startPos = winScrollTop;
});

$(function() {
	setTimeout(function(){
		$('.page-top-title h1').fadeOut(1800);
	},2000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});

// TOP PAGE END