
$('.pc_btn,.pc_nav').on('click', function () {
    $('.pc_btn').toggleClass('open');
    $('.pc_nav').fadeToggle();
})


$(function(){
    var btn = $('.second_header');
    var timer;
    $(window).addEventListener('load', (event) => {
        // (1)ページ読み込み時に一度だけスクロール量を出力
        var scroll_y = window.scrollY;
        console.log(scroll_y);
        // (2)スクロールするたびにスクロール量を出力
        $(window).addEventListener('scroll', (event) => {
            var scroll_y = window.scrollY;
            console.log(scroll_y);
        });
        if( 1422 < window.scrollY ) {		
            $(window).scroll(function() {
                // スクロール開始するとボタンを非表示
                btn.removeClass('is-active');
                // スクロール中はイベントの発火をキャンセルする
                clearTimeout(timer);
                // スクロールが停止して0.2秒後にイベントを発火する
                timer = setTimeout(function() {
                // スクロール位置を判定してページ上部のときはボタンを非表示にする
                if($(this).scrollTop()) {
                    btn.addClass('is-active').fadeIn();
                }else{
                    btn.removeClass('is-active').fadeOut();
                }
                }, 200);
            });
        }
    });
});