
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7155ehy5HRL+IcLPSLlWlzu', 'Common');
// newscripts/Common.js

"use strict";

module.exports = {
  shares: ["给你几张图，你能猜到我的意思吗？", "智商150的人才能玩的懂的游戏，你要来挑战自己吗？", "百因必有果，你的报应就是找我", "最解压的游戏，还不来放松一下？", "好友@你并且送了你神秘礼物，点击查看！"],
  ids: ["IJ8K-FU4Q7GAB5PSmSSp7w", "VxCAcv-kQKm7XBJAhYV_Pw"],
  urls: ["https://mmocgame.qpic.cn/wechatgame/2hicsK0eD9ib3RibqpPs4hoPLnNlCdmlPiaq4bn0IJLwQaKVkYNCNFBDSGVz2zvx5HyT/0", "https://mmocgame.qpic.cn/wechatgame/5VJ9SqQdMn4cPK8EV69iaxjCGHeYz9ne2gMgx4pm8BPtfGr3YXozyB4GcjXMSV5HI/0"],
  //微信分享
  wechatShare: function wechatShare() {
    if (CC_WECHATGAME) {
      var idx = Math.floor(Math.random() * this.shares.length); //向下取整

      var str = this.shares[idx];
      wx.shareAppMessage({
        title: str,
        imageUrl: wxDownloader.REMOTE_SERVER_ROOT + cc.url.raw('resources/1.png'),
        success: function success(res) {
          console.log("成功");
        },
        fail: function fail(res) {
          console.log("失败");
        }
      });
    }

    console.log("分享成功");
  },
  //微信群分享
  wechatGroupShare: function wechatGroupShare() {
    var self = this;
    return new Promise(function (resolve, reject) {
      if (CC_WECHATGAME) {
        var flag = false;
        var idx = Math.floor(Math.random() * self.shares.length); //向下取整

        var str = self.shares[idx];
        wx.shareAppMessage({
          title: str,
          imageUrl: canvas.toTempFilePathSync({
            destWidth: 500,
            destHeight: 400
          }),
          success: function success(res) {
            if (res.shareTickets != undefined && res.shareTickets.length > 0) {
              resolve();
            }

            console.log("成功");
          },
          fail: function fail(e) {
            reject();
            console.log("失败");
          },
          complete: function complete() {
            flag = true;
          }
        });

        if (self.isHightVersion) {
          setTimeout(function () {
            if (!flag) {
              resolve();
            }
          }, 2300);
        }
      } else {
        resolve();
      }
    });
  },
  WxShare: function WxShare() {
    comeInfo.is_share = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0NvbW1vbi5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2hhcmVzIiwiaWRzIiwidXJscyIsIndlY2hhdFNoYXJlIiwiQ0NfV0VDSEFUR0FNRSIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInN0ciIsInd4Iiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJpbWFnZVVybCIsInd4RG93bmxvYWRlciIsIlJFTU9URV9TRVJWRVJfUk9PVCIsImNjIiwidXJsIiwicmF3Iiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwid2VjaGF0R3JvdXBTaGFyZSIsInNlbGYiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZsYWciLCJjYW52YXMiLCJ0b1RlbXBGaWxlUGF0aFN5bmMiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0Iiwic2hhcmVUaWNrZXRzIiwidW5kZWZpbmVkIiwiZSIsImNvbXBsZXRlIiwiaXNIaWdodFZlcnNpb24iLCJzZXRUaW1lb3V0IiwiV3hTaGFyZSIsImNvbWVJbmZvIiwiaXNfc2hhcmUiLCJpZHgxIiwiaWQiLCJpbWFnZVVybElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsRUFBQUEsTUFBTSxFQUNFLENBQ0Esa0JBREEsRUFFQSwyQkFGQSxFQUdBLGdCQUhBLEVBSUEsaUJBSkEsRUFLQSxxQkFMQSxDQUZLO0FBU2JDLEVBQUFBLEdBQUcsRUFBQyxDQUNJLHdCQURKLEVBRUksd0JBRkosQ0FUUztBQWFiQyxFQUFBQSxJQUFJLEVBQUMsQ0FDRyw0R0FESCxFQUVHLHlHQUZILENBYlE7QUFrQmI7QUFDSUMsRUFBQUEsV0FuQlMseUJBbUJLO0FBQ1YsUUFBSUMsYUFBSixFQUFtQjtBQUNmLFVBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUks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SUFBWixDQUFWO0FBQ0EsVUFBSXZDLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFjLENBQXpCLENBQVYsQ0FIYSxDQUd5Qjs7QUFDdEMsVUFBSXFDLEVBQUUsR0FBRyxLQUFLNUMsR0FBTCxDQUFTSSxHQUFULENBQVQsQ0FKYSxDQUlXOztBQUN4QixVQUFJYSxHQUFHLEdBQUcsS0FBS2hCLElBQUwsQ0FBVUcsR0FBVixDQUFWLENBTGEsQ0FLYTs7QUFDMUJNLE1BQUFBLEVBQUUsQ0FBQ0MsZUFBSCxDQUFtQjtBQUNmQyxRQUFBQSxLQUFLLEVBQUNILEdBRFM7QUFFZm9DLFFBQUFBLFVBQVUsRUFBQ0QsRUFGSTtBQUdmL0IsUUFBQUEsUUFBUSxFQUFFSSxHQUhLO0FBSWZFLFFBQUFBLE9BSmUsbUJBSVBDLEdBSk8sRUFJRjtBQUNUQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0gsU0FOYztBQU9mQyxRQUFBQSxJQVBlLGdCQU9WSCxHQVBVLEVBT0w7QUFDTkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNIO0FBVGMsT0FBbkI7QUFXSDtBQUNKO0FBbEdRLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNoYXJlczpcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICBcIue7meS9oOWHoOW8oOWbvu+8jOS9oOiDveeMnOWIsOaIkeeahOaEj+aAneWQl++8n1wiLFxyXG4gICAgICAgICAgICBcIuaZuuWVhjE1MOeahOS6uuaJjeiDveeOqeeahOaHgueahOa4uOaIj++8jOS9oOimgeadpeaMkeaImOiHquW3seWQl++8n1wiLFxyXG4gICAgICAgICAgICBcIueZvuWboOW/heacieaenO+8jOS9oOeahOaKpeW6lOWwseaYr+aJvuaIkVwiLFxyXG4gICAgICAgICAgICBcIuacgOino+WOi+eahOa4uOaIj++8jOi/mOS4jeadpeaUvuadvuS4gOS4i++8n1wiLFxyXG4gICAgICAgICAgICBcIuWlveWPi0DkvaDlubbkuJTpgIHkuobkvaDnpZ7np5jnpLznianvvIzngrnlh7vmn6XnnIvvvIFcIixcclxuICAgICAgICAgICAgXSxcclxuICAgIGlkczpbXHJcbiAgICAgICAgICAgIFwiSUo4Sy1GVTRRN0dBQjVQU21TU3A3d1wiLFxyXG4gICAgICAgICAgICBcIlZ4Q0Fjdi1rUUttN1hCSkFoWVZfUHdcIixcclxuICAgICAgICBdLFxyXG4gICAgdXJsczpbXHJcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9tbW9jZ2FtZS5xcGljLmNuL3dlY2hhdGdhbWUvMmhpY3NLMGVEOWliM1JpYnFwUHM0aG9QTG5ObENkbWxQaWFxNGJuMElKTHdRYUtWa1lOQ05GQkRTR1Z6Mnp2eDVIeVQvMFwiLFxyXG4gICAgICAgICAgICBcImh0dHBzOi8vbW1vY2dhbWUucXBpYy5jbi93ZWNoYXRnYW1lLzVWSjlTcVFkTW40Y1BLOEVWNjlpYXhqQ0dIZVl6OW5lMmdNZ3g0cG04QlB0ZkdyM1lYb3p5QjRHY2pYTVNWNUhJLzBcIixcclxuICAgICAgICBdLFxyXG4gICAgXHJcbiAgICAvL+W+ruS/oeWIhuS6q1xyXG4gICAgICAgIHdlY2hhdFNoYXJlKCkge1xyXG4gICAgICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuc2hhcmVzLmxlbmd0aCk7Ly/lkJHkuIvlj5bmlbRcclxuICAgICAgICAgICAgICAgIGxldCBzdHIgPSB0aGlzLnNoYXJlc1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc3RyLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiB3eERvd25sb2FkZXIuUkVNT1RFX1NFUlZFUl9ST09UICsgY2MudXJsLnJhdygncmVzb3VyY2VzLzEucG5nJyksXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIhuS6q+aIkOWKn1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgLy/lvq7kv6HnvqTliIbkuqtcclxuICAgICAgICB3ZWNoYXRHcm91cFNoYXJlKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ0NfV0VDSEFUR0FNRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNlbGYuc2hhcmVzLmxlbmd0aCk7Ly/lkJHkuIvlj5bmlbRcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RyID0gc2VsZi5zaGFyZXNbaWR4XTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzdHIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOmNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdFdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiA0MDB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc2hhcmVUaWNrZXRzICE9IHVuZGVmaW5lZCAmJiByZXMuc2hhcmVUaWNrZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzSGlnaHRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMzAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIFd4U2hhcmUoKXtcclxuICAgICAgICAgICAgY29tZUluZm8uaXNfc2hhcmU9dHJ1ZTtcclxuICAgICAgICAgICAgaWYoQ0NfV0VDSEFUR0FNRSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWR4MSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1KTsvL+WQkeS4i+WPluaVtFxyXG4gICAgICAgICAgICAgICAgbGV0IHN0ciA9IHRoaXMuc2hhcmVzW2lkeDFdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoyKTsvL+WQkeS4i+WPluaVtFxyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gdGhpcy5pZHNbaWR4XTsgLy8g6YCa6L+HIE1QIOezu+e7n+WuoeaguOeahOWbvueJh+e8luWPt1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMudXJsc1tpZHhdOyAvLyDpgJrov4cgTVAg57O757uf5a6h5qC455qE5Zu+54mH5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOnN0cixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVVybElkOmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0iXX0=