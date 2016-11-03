/**
 * Created by Huhy on 2016/1/25.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            (clientWidth > 750) && (clientWidth = 750);
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

    // 解决移动端的click延迟
    if ('addEventListener' in doc) {
      doc.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(doc.body)
        }, false);
    }

    // 微信配置
    // win.wx.config({
    //   debug: true,
    //   appId: 'wx50b4b2487c716fa0', // 必填，公众号的唯一标识
    //   timestamp: '', // 必填，生成签名的时间戳
    //   nonceStr: '', // 必填，生成签名的随机串
    //   signature: '',// 必填，签名，见附录1
    //   jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    // });
    // win.wx.ready(function(){
	//
    //   // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    // });
})(document, window);

