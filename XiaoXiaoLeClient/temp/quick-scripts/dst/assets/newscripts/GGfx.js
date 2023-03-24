
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/GGfx.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d8c7823BtBR40rJfiSUmDr', 'GGfx');
// newscripts/GGfx.js

"use strict";

var com = require('./Advert');

cc.Class({
  "extends": cc.Component,
  properties: {
    fxtip: cc.Node
  },
  onLoad: function onLoad() {
    this.FXListen();
    this.fxtip.active = false;
    this.fxtip.zIndex = 99;
  },
  start: function start() {},
  update: function update(dt) {
    if (comeInfo.timer < 3000) {
      this.fxtip.active = true;
      comeInfo.timer = 6000;
      comeInfo.is_share = false;
    }
  },
  //分享监听
  FXListen: function FXListen() {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
      wx.onShow(function () {
        if (comeInfo.is_share) {
          if (this.oldtime) {
            this.newtime = Date.now();
            comeInfo.timer = this.newtime - this.oldtime; //this.SHow();

            console.log("展示界面:" + comeInfo.timer);
          }
        }
      }.bind(this));
      wx.onHide(function () {
        if (comeInfo.is_share) {
          this.oldtime = Date.now();
        }

        console.log("收回界面");
      }.bind(this));
    }
  },
  //关闭面板
  close: function close() {
    this.fxtip.active = false;
  },
  //重新分享
  shareAgain: function shareAgain() {
    this.fxtip.active = false;
    com.WxShare();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0dHZnguanMiXSwibmFtZXMiOlsiY29tIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZnh0aXAiLCJOb2RlIiwib25Mb2FkIiwiRlhMaXN0ZW4iLCJhY3RpdmUiLCJ6SW5kZXgiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiY29tZUluZm8iLCJ0aW1lciIsImlzX3NoYXJlIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwib25TaG93Iiwib2xkdGltZSIsIm5ld3RpbWUiLCJEYXRlIiwibm93IiwiY29uc29sZSIsImxvZyIsImJpbmQiLCJvbkhpZGUiLCJjbG9zZSIsInNoYXJlQWdhaW4iLCJXeFNoYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEdBQUcsR0FBQ0MsT0FBTyxDQUFDLFVBQUQsQ0FBZjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBQ0osRUFBRSxDQUFDSztBQURELEdBSFA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNSztBQUVOLFNBQUtDLFFBQUw7QUFDQSxTQUFLSCxLQUFMLENBQVdJLE1BQVgsR0FBa0IsS0FBbEI7QUFDQSxTQUFLSixLQUFMLENBQVdLLE1BQVgsR0FBa0IsRUFBbEI7QUFDSCxHQVhJO0FBYUxDLEVBQUFBLEtBYkssbUJBYUksQ0FFUixDQWZJO0FBaUJMQyxFQUFBQSxNQWpCSyxrQkFpQkdDLEVBakJILEVBaUJPO0FBQ1IsUUFBR0MsUUFBUSxDQUFDQyxLQUFULEdBQWUsSUFBbEIsRUFBdUI7QUFDbkIsV0FBS1YsS0FBTCxDQUFXSSxNQUFYLEdBQWtCLElBQWxCO0FBQ0FLLE1BQUFBLFFBQVEsQ0FBQ0MsS0FBVCxHQUFlLElBQWY7QUFDQUQsTUFBQUEsUUFBUSxDQUFDRSxRQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUFDSixHQXZCSTtBQXdCTDtBQUNBUixFQUFBQSxRQXpCSyxzQkF5Qks7QUFDTixRQUFHUCxFQUFFLENBQUNnQixHQUFILENBQU9DLFFBQVAsSUFBaUJqQixFQUFFLENBQUNnQixHQUFILENBQU9FLFdBQTNCLEVBQXVDO0FBQ25DQyxNQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxZQUFVO0FBQ2hCLFlBQUdQLFFBQVEsQ0FBQ0UsUUFBWixFQUFxQjtBQUNuQixjQUFHLEtBQUtNLE9BQVIsRUFBZ0I7QUFDYixpQkFBS0MsT0FBTCxHQUFhQyxJQUFJLENBQUNDLEdBQUwsRUFBYjtBQUNBWCxZQUFBQSxRQUFRLENBQUNDLEtBQVQsR0FBZSxLQUFLUSxPQUFMLEdBQWEsS0FBS0QsT0FBakMsQ0FGYSxDQUdkOztBQUNBSSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFRYixRQUFRLENBQUNDLEtBQTdCO0FBQ0Y7QUFDRDtBQUNKLE9BVFMsQ0FTUmEsSUFUUSxDQVNILElBVEcsQ0FBVjtBQVVBUixNQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVSxZQUFVO0FBQ2hCLFlBQUdmLFFBQVEsQ0FBQ0UsUUFBWixFQUFxQjtBQUNoQixlQUFLTSxPQUFMLEdBQWFFLElBQUksQ0FBQ0MsR0FBTCxFQUFiO0FBQ0o7O0FBQ0RDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDSCxPQUxTLENBS1JDLElBTFEsQ0FLSCxJQUxHLENBQVY7QUFNSDtBQUNKLEdBNUNJO0FBNkNMO0FBQ0FFLEVBQUFBLEtBOUNLLG1CQThDRTtBQUNILFNBQUt6QixLQUFMLENBQVdJLE1BQVgsR0FBa0IsS0FBbEI7QUFDSCxHQWhESTtBQWlETDtBQUNBc0IsRUFBQUEsVUFsREssd0JBa0RPO0FBQ1IsU0FBSzFCLEtBQUwsQ0FBV0ksTUFBWCxHQUFrQixLQUFsQjtBQUNBVixJQUFBQSxHQUFHLENBQUNpQyxPQUFKO0FBQ0g7QUFyREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbT1yZXF1aXJlKCcuL0FkdmVydCcpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZ4dGlwOmNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuRlhMaXN0ZW4oKTtcclxuICAgICAgICB0aGlzLmZ4dGlwLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB0aGlzLmZ4dGlwLnpJbmRleD05OTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKGNvbWVJbmZvLnRpbWVyPDMwMDApe1xyXG4gICAgICAgICAgICB0aGlzLmZ4dGlwLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICBjb21lSW5mby50aW1lcj02MDAwO1xyXG4gICAgICAgICAgICBjb21lSW5mby5pc19zaGFyZT1mYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liIbkuqvnm5HlkKxcclxuICAgIEZYTGlzdGVuKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtPT1jYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICB3eC5vblNob3coZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKGNvbWVJbmZvLmlzX3NoYXJlKXtcclxuICAgICAgICAgICAgICAgICAgaWYodGhpcy5vbGR0aW1lKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXd0aW1lPURhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbWVJbmZvLnRpbWVyPXRoaXMubmV3dGltZS10aGlzLm9sZHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLlNIb3coKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWxleekuueVjOmdojpcIitjb21lSW5mby50aW1lcik7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB3eC5vbkhpZGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIGlmKGNvbWVJbmZvLmlzX3NoYXJlKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGR0aW1lPURhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaUtuWbnueVjOmdolwiKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/lhbPpl63pnaLmnb9cclxuICAgIGNsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5meHRpcC5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgLy/ph43mlrDliIbkuqtcclxuICAgIHNoYXJlQWdhaW4oKXtcclxuICAgICAgICB0aGlzLmZ4dGlwLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICBjb20uV3hTaGFyZSgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19