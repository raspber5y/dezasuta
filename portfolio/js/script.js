
// ヘッダーメニュー
$('.pc_btn,.pc_nav,.second_header .second_header .emiuno_logo,.second_header .header_img, .second_header .header_img_sp').on('click', function () {
    $('.pc_btn').toggleClass('open');
    $('.pc_nav').fadeToggle();
    $('.second_header .emiuno_logo').toggleClass('open');
    $('.second_header .header_img').toggleClass('open');
    $('.second_header .header_img_sp').toggleClass('open');

})

// スクロール後のヘッダー表示
$(function(){
    let btn = $('.second_header');
    let timer;
    let fv_height = $('#header').height();
    $(window).scroll(function() {
        var scroll_y = window.scrollY;
        // スクロール開始するとボタンを非表示
        btn.removeClass('is_active');
        if( scroll_y > fv_height ) {		
            // スクロール中はイベントの発火をキャンセルする
            clearTimeout(timer);
            // スクロールが停止して1秒後にイベントを発火する
            timer = setTimeout(function() {
                btn.addClass('is_active');
            },1000);
        } else{
            btn.removeClass('is_active');
            }
        }
    )
});

// clamp自動計算
let userAgent = window.navigator.userAgent.toUpperCase(); //ユーザーエージェント取得
    if (userAgent.indexOf('MSIE') === -1 && userAgent.indexOf('TRIDENT') === -1) { //ieじゃなかったら
      let fz = document.querySelectorAll('.u-fz'); //u-fzの要素を取得
      fz.forEach(element => { //u-fzに対して処理をかけていく
        let max = window.getComputedStyle(element).getPropertyValue('font-size'); //u-fzのfont-size = 最大値を取得
        let vp = window.innerWidth / 100; //画面幅の1/100 = 1vwを取得
        let vw = (max.replace(/px/g , "" ) / vp) + "vw"; //最大値 / 1vwで推奨値を取得
        let min = (max.replace(/px/g , "" ) / 1.7) + "px"; //最大値 / 1.4で最小値を取得
        let clamp = [min,vw,max] //clampを適用しやすいように配列化
        element.style.fontSize = 'clamp(' + clamp.join(',') + ')'; //styleにclampを適用
    });
}
