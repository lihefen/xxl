
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Advert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c6d9kTgcJA/LeAsKHw3TRh', 'Advert');
// newscripts/Advert.js

"use strict";

window.Advert = {
  VideoUrl: "adunit-a357bf07ab218042",
  Video: null,
  VideoNum: 0,
  //1加体力  2 加精力
  handlers: {},
  //创建视频广告
  InitVideoAdvert: function InitVideoAdvert() {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) {
      return;
    }

    var self = this;

    if (self.Video == null) {
      self.Video = wx.createRewardedVideoAd({
        adUnitId: self.VideoUrl
      });
      self.Video.onError(function (err) {
        console.log("video play err：" + err);
      });
      self.Video.onClose(function (res) {
        if (res && res.isEnded || res === undefined) {
          //正常播放结束，可以下发游戏奖励
          if (self.handlers[self.VideoNum] != null) {
            self.handlers[self.VideoNum]();
          }
        } else {
          // 播放中途退出，不下发游戏奖励
          console.log("see no all Video time ");
        }
      });
    }
  },
  //播放广告
  VideoPlay: function VideoPlay(videonum, fn) {
    if (this.Video != null) {
      this.addHandlers(videonum, fn);
      this.VideoNum = videonum;
      this.Video.show();
    }
  },
  addHandlers: function addHandlers(event, fn) {
    this.handlers[event] = fn;
  },
  //bananer广告地址
  BananerUrl: "adunit-b23f524044082380",
  bannerAd: null,
  //创建bananer广告
  InitBananerAdvert: function InitBananerAdvert() {
    if (cc.sys.platform != cc.sys.WECHAT_GAME) {
      return;
    }

    var Mwidth; //获取屏幕宽度

    var Mheight; //获取屏幕高度

    var winSize = wx.getSystemInfoSync({
      success: function success(res) {
        Mwidth = res.windowWidth;
        Mheight = res.windowHeight;
      }
    });
    var targetBannerAdWidth = Math.min(Mwidth, 300); //最大宽度300
    // 创建 Banner 广告实例，提前初始化

    this.bannerAd = wx.createBannerAd({
      adUnitId: 'adunit-b23f524044082380',
      style: {
        left: 0,
        top: 650,
        width: parseInt(targetBannerAdWidth)
      }
    });
    var self = this; // 在banner广告首次显示的时候会触发

    this.bannerAd.onResize(function (size) {
      console.log("onResize", Mwidth - size.width, Mheight - size.height); // 如果一开始设置的 banner 宽度超过了系统限制，可以在此处加以调整

      self.bannerAd.style.left = (Mwidth - size.width) / 2;
      self.bannerAd.style.top = Mheight - size.height; //这行是为了在QQ小游戏中能正确显示位置.如果是微信则不需要这句
      // setTimeout(function () {
      //     slef.bannerAd.style.left = (windowWidth - size.width)/2;
      //     self.bannerAd.style.top = windowHeight - size.height;
      // }, 0.5);
    });
    this.bannerAd.onLoad(function () {
      console.log('banner广告加载成功!!!!');
    });
    this.bannerAd.onError(function (errMsg, errCode) {
      console.log('banner广告加载失败!!!!', errMsg, errCode);
    }); // 在适合的场景显示 Banner 广告
    //this.bannerAd.show()
  },
  //-------分享--------------------------------------------------------------------------
  shares: //分享语
  ["给你几张图，你能猜到我的意思吗？", "智商150的人才能玩的懂的游戏，你要来挑战自己吗？", "百因必有果，你的报应就是找我", "最解压的游戏，还不来放松一下？", "好友@你并且送了你神秘礼物，点击查看！"],
  ids: [//分享图片id
  "IJ8K-FU4Q7GAB5PSmSSp7w", "VxCAcv-kQKm7XBJAhYV_Pw"],
  urls: [//分享图片地址
  "https://mmocgame.qpic.cn/wechatgame/2hicsK0eD9ib3RibqpPs4hoPLnNlCdmlPiaq4bn0IJLwQaKVkYNCNFBDSGVz2zvx5HyT/0", "https://mmocgame.qpic.cn/wechatgame/5VJ9SqQdMn4cPK8EV69iaxjCGHeYz9ne2gMgx4pm8BPtfGr3YXozyB4GcjXMSV5HI/0"],
  WxShare: function WxShare() {
    //comeInfo.is_share=true;
    if (CC_WECHATGAME) {
      var idx1 = Math.floor(Math.random() * 5); //向下取整

      var str = this.shares[idx1];
      var idx = Math.floor(Math.random() * 2); //向下取整

      var id = this.ids[idx]; // 通过 MP 系统审核的图片编号

      var url = this.urls[idx]; // 通过 MP 系统审核的图片地址

      wx.shareAppMessage({
        title: str,
        imageUrlId: id,
        imageUrl: url,
        success: function success(res) {
          console.log("成功");
        },
        fail: function fail(res) {
          console.log("失败");
        }
      });
    }
  }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0FkdmVydC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJBZHZlcnQiLCJWaWRlb1VybCIsIlZpZGVvIiwiVmlkZW9OdW0iLCJoYW5kbGVycyIsIkluaXRWaWRlb0FkdmVydCIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInNlbGYiLCJ3eCIsImNyZWF0ZVJld2FyZGVkVmlkZW9BZCIsImFkVW5pdElkIiwib25FcnJvciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsb3NlIiwicmVzIiwiaXNFbmRlZCIsInVuZGVmaW5lZCIsIlZpZGVvUGxheSIsInZpZGVvbnVtIiwiZm4iLCJhZGRIYW5kbGVycyIsInNob3ciLCJldmVudCIsIkJhbmFuZXJVcmwiLCJiYW5uZXJBZCIsIkluaXRCYW5hbmVyQWR2ZXJ0IiwiTXdpZHRoIiwiTWhlaWdodCIsIndpblNpemUiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInN1Y2Nlc3MiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInRhcmdldEJhbm5lckFkV2lkdGgiLCJNYXRoIiwibWluIiwiY3JlYXRlQmFubmVyQWQiLCJzdHlsZSIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsInBhcnNlSW50Iiwib25SZXNpemUiLCJzaXplIiwiaGVpZ2h0Iiwib25Mb2FkIiwiZXJyTXNnIiwiZXJyQ29kZSIsInNoYXJlcyIsImlkcyIsInVybHMiLCJXeFNoYXJlIiwiQ0NfV0VDSEFUR0FNRSIsImlkeDEiLCJmbG9vciIsInJhbmRvbSIsInN0ciIsImlkeCIsImlkIiwidXJsIiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJpbWFnZVVybElkIiwiaW1hZ2VVcmwiLCJmYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsR0FBYztBQUNWQyxFQUFBQSxRQUFRLEVBQUMseUJBREM7QUFFVkMsRUFBQUEsS0FBSyxFQUFDLElBRkk7QUFHVkMs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LEdBQUcsRUFBQyxDQUFDO0FBQ0wsMEJBREksRUFFSix3QkFGSSxDQXRHTTtBQTBHVkMsRUFBQUEsSUFBSSxFQUFDLENBQUM7QUFDTiw4R0FESyxFQUVMLHlHQUZLLENBMUdLO0FBOEdWQyxFQUFBQSxPQTlHVSxxQkE4R0Q7QUFDTDtBQUNBLFFBQUdDLGFBQUgsRUFBaUI7QUFDYixVQUFJQyxJQUFJLEdBQUduQixJQUFJLENBQUNvQixLQUFMLENBQVdwQixJQUFJLENBQUNxQixNQUFMLEtBQWMsQ0FBekIsQ0FBWCxDQURhLENBQzBCOztBQUN2QyxVQUFJQyxHQUFHLEdBQUcsS0FBS1IsTUFBTCxDQUFZSyxJQUFaLENBQVY7QUFDQSxVQUFJSSxHQUFHLEdBQUd2QixJQUFJLENBQUNvQixLQUFMLENBQVdwQixJQUFJLENBQUNxQixNQUFMLEtBQWMsQ0FBekIsQ0FBVixDQUhhLENBR3lCOztBQUN0QyxVQUFJRyxFQUFFLEdBQUcsS0FBS1QsR0FBTCxDQUFTUSxHQUFULENBQVQsQ0FKYSxDQUlXOztBQUN4QixVQUFJRSxHQUFHLEdBQUcsS0FBS1QsSUFBTCxDQUFVTyxHQUFWLENBQVYsQ0FMYSxDQUthOztBQUMxQm5ELE1BQUFBLEVBQUUsQ0FBQ3NELGVBQUgsQ0FBbUI7QUFDZkMsUUFBQUEsS0FBSyxFQUFDTCxHQURTO0FBRWZNLFFBQUFBLFVBQVUsRUFBQ0osRUFGSTtBQUdmSyxRQUFBQSxRQUFRLEVBQUVKLEdBSEs7QUFJZjdCLFFBQUFBLE9BSmUsbUJBSVBoQixHQUpPLEVBSUY7QUFDVEgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNILFNBTmM7QUFPZm9ELFFBQUFBLElBUGUsZ0JBT1ZsRCxHQVBVLEVBT0w7QUFDTkgsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNIO0FBVGMsT0FBbkI7QUFXSDtBQUNKO0FBbElTLENBQWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5BZHZlcnQ9e1xyXG4gICAgVmlkZW9Vcmw6XCJhZHVuaXQtYTM1N2JmMDdhYjIxODA0MlwiLFxyXG4gICAgVmlkZW86bnVsbCwgICAgXHJcbiAgICBWaWRlb051bTowLCAgLy8x5Yqg5L2T5YqbICAyIOWKoOeyvuWKm1xyXG4gICAgaGFuZGxlcnM6e30sXHJcbiAgICAvL+WIm+W7uuinhumikeW5v+WRilxyXG4gICAgSW5pdFZpZGVvQWR2ZXJ0KCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtIT1jYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmPXRoaXM7XHJcbiAgICAgICAgaWYoc2VsZi5WaWRlbz09bnVsbCl7XHJcbiAgICAgICAgICAgIHNlbGYuVmlkZW89d3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiBzZWxmLlZpZGVvVXJsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLlZpZGVvLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlkZW8gcGxheSBlcnLvvJpcIitlcnIpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZWxmLlZpZGVvLm9uQ2xvc2UoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmlzRW5kZWQgfHwgcmVzID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuaGFuZGxlcnNbc2VsZi5WaWRlb051bV0hPW51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhhbmRsZXJzW3NlbGYuVmlkZW9OdW1dKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pKt5pS+5Lit6YCU6YCA5Ye677yM5LiN5LiL5Y+R5ri45oiP5aWW5YqxXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWUgbm8gYWxsIFZpZGVvIHRpbWUgXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/mkq3mlL7lub/lkYpcclxuICAgIFZpZGVvUGxheSh2aWRlb251bSxmbil7XHJcbiAgICAgICAgaWYodGhpcy5WaWRlbyE9bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkSGFuZGxlcnModmlkZW9udW0sZm4pO1xyXG4gICAgICAgICAgICB0aGlzLlZpZGVvTnVtPXZpZGVvbnVtO1xyXG4gICAgICAgICAgICB0aGlzLlZpZGVvLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkSGFuZGxlcnMoZXZlbnQsZm4pe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnNbZXZlbnRdPWZuO1xyXG4gICAgfSxcclxuICAgIC8vYmFuYW5lcuW5v+WRiuWcsOWdgFxyXG4gICAgQmFuYW5lclVybDpcImFkdW5pdC1iMjNmNTI0MDQ0MDgyMzgwXCIsXHJcbiAgICBiYW5uZXJBZDpudWxsLFxyXG4gICAgLy/liJvlu7piYW5hbmVy5bm/5ZGKXHJcbiAgICBJbml0QmFuYW5lckFkdmVydCgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSE9Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgTXdpZHRoOy8v6I635Y+W5bGP5bmV5a695bqmXHJcbiAgICAgICAgdmFyIE1oZWlnaHQ7Ly/ojrflj5blsY/luZXpq5jluqZcclxuICAgICAgICBsZXQgd2luU2l6ZSA9IHd4LmdldFN5c3RlbUluZm9TeW5jKHtcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIE13aWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuICAgICAgICAgICAgICAgIE1oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHRhcmdldEJhbm5lckFkV2lkdGggPSBNYXRoLm1pbihNd2lkdGgsMzAwKTsvL+acgOWkp+WuveW6pjMwMFxyXG4gICAgICAgIC8vIOWIm+W7uiBCYW5uZXIg5bm/5ZGK5a6e5L6L77yM5o+Q5YmN5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6ICdhZHVuaXQtYjIzZjUyNDA0NDA4MjM4MCcsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG9wOjY1MCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOnBhcnNlSW50KHRhcmdldEJhbm5lckFkV2lkdGgpLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgc2VsZj10aGlzO1xyXG4gICAgICAgIC8vIOWcqGJhbm5lcuW5v+WRiummluasoeaYvuekuueahOaXtuWAmeS8muinpuWPkVxyXG4gICAgICAgIHRoaXMuYmFubmVyQWQub25SZXNpemUoc2l6ZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib25SZXNpemVcIiwgTXdpZHRoIC0gc2l6ZS53aWR0aCwgTWhlaWdodCAtIHNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5LiA5byA5aeL6K6+572u55qEIGJhbm5lciDlrr3luqbotoXov4fkuobns7vnu5/pmZDliLbvvIzlj6/ku6XlnKjmraTlpITliqDku6XosIPmlbRcclxuICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKE13aWR0aCAtIHNpemUud2lkdGgpLzI7XHJcbiAgICAgICAgICAgIHNlbGYuYmFubmVyQWQuc3R5bGUudG9wID0gTWhlaWdodCAtIHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvL+i/meihjOaYr+S4uuS6huWcqFFR5bCP5ri45oiP5Lit6IO95q2j56Gu5pi+56S65L2N572uLuWmguaenOaYr+W+ruS/oeWImeS4jemcgOimgei/meWPpVxyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIHNsZWYuYmFubmVyQWQuc3R5bGUubGVmdCA9ICh3aW5kb3dXaWR0aCAtIHNpemUud2lkdGgpLzI7XHJcbiAgICAgICAgICAgIC8vICAgICBzZWxmLmJhbm5lckFkLnN0eWxlLnRvcCA9IHdpbmRvd0hlaWdodCAtIHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyB9LCAwLjUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQub25Mb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Jhbm5lcuW5v+WRiuWKoOi9veaIkOWKnyEhISEnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcigoZXJyTXNnLCBlcnJDb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYW5uZXLlub/lkYrliqDovb3lpLHotKUhISEhJywgZXJyTXNnLCBlcnJDb2RlKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyDlnKjpgILlkIjnmoTlnLrmma/mmL7npLogQmFubmVyIOW5v+WRilxyXG4gICAgICAgIC8vdGhpcy5iYW5uZXJBZC5zaG93KClcclxuICAgIH0sXHJcbiAgICAvLy0tLS0tLS3liIbkuqstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgc2hhcmVzOi8v5YiG5Lqr6K+tXHJcbiAgICBbXHJcbiAgICBcIue7meS9oOWHoOW8oOWbvu+8jOS9oOiDveeMnOWIsOaIkeeahOaEj+aAneWQl++8n1wiLFxyXG4gICAgXCLmmbrllYYxNTDnmoTkurrmiY3og73njqnnmoTmh4LnmoTmuLjmiI/vvIzkvaDopoHmnaXmjJHmiJjoh6rlt7HlkJfvvJ9cIixcclxuICAgIFwi55m+5Zug5b+F5pyJ5p6c77yM5L2g55qE5oql5bqU5bCx5piv5om+5oiRXCIsXHJcbiAgICBcIuacgOino+WOi+eahOa4uOaIj++8jOi/mOS4jeadpeaUvuadvuS4gOS4i++8n1wiLFxyXG4gICAgXCLlpb3lj4tA5L2g5bm25LiU6YCB5LqG5L2g56We56eY56S854mp77yM54K55Ye75p+l55yL77yBXCIsXHJcbiAgICBdLFxyXG4gICAgaWRzOlsvL+WIhuS6q+WbvueJh2lkXHJcbiAgICBcIklKOEstRlU0UTdHQUI1UFNtU1NwN3dcIixcclxuICAgIFwiVnhDQWN2LWtRS203WEJKQWhZVl9Qd1wiLFxyXG4gICAgXSxcclxuICAgIHVybHM6Wy8v5YiG5Lqr5Zu+54mH5Zyw5Z2AXHJcbiAgICBcImh0dHBzOi8vbW1vY2dhbWUucXBpYy5jbi93ZWNoYXRnYW1lLzJoaWNzSzBlRDlpYjNSaWJxcFBzNGhvUExuTmxDZG1sUGlhcTRibjBJSkx3UWFLVmtZTkNORkJEU0dWejJ6dng1SHlULzBcIixcclxuICAgIFwiaHR0cHM6Ly9tbW9jZ2FtZS5xcGljLmNuL3dlY2hhdGdhbWUvNVZKOVNxUWRNbjRjUEs4RVY2OWlheGpDR0hlWXo5bmUyZ01neDRwbThCUHRmR3IzWVhvenlCNEdjalhNU1Y1SEkvMFwiLFxyXG4gICAgXSxcclxuICAgIFd4U2hhcmUoKXtcclxuICAgICAgICAvL2NvbWVJbmZvLmlzX3NoYXJlPXRydWU7XHJcbiAgICAgICAgaWYoQ0NfV0VDSEFUR0FNRSl7XHJcbiAgICAgICAgICAgIGxldCBpZHgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjUpOy8v5ZCR5LiL5Y+W5pW0XHJcbiAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLnNoYXJlc1tpZHgxXTtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTsvL+WQkeS4i+WPluaVtFxyXG4gICAgICAgICAgICB2YXIgaWQgPSB0aGlzLmlkc1tpZHhdOyAvLyDpgJrov4cgTVAg57O757uf5a6h5qC455qE5Zu+54mH57yW5Y+3XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLnVybHNbaWR4XTsgLy8g6YCa6L+HIE1QIOezu+e7n+WuoeaguOeahOWbvueJh+WcsOWdgFxyXG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6c3RyLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmxJZDppZCxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==