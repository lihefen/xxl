
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Level/sprManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f2152SLPgdCS5hj/9udZTIO', 'sprManager');
// newscripts/Level/sprManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //图片纹理
    spr: [cc.SpriteFrame],
    //ICE对应纹理
    icespr: [cc.SpriteFrame],
    //特效纹理
    Animspr: [cc.SpriteFrame]
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (cc.ZL == null) {
      cc.ZL = {};
    }

    cc.ZL.sprMgr = this;
  },
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0xldmVsL3Nwck1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcHIiLCJTcHJpdGVGcmFtZSIsImljZXNwciIsIkFuaW1zcHIiLCJvbkxvYWQiLCJaTCIsInNwck1nciIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxHQUFHLEVBQUMsQ0FBQ0osRUFBRSxDQUFDSyxXQUFKLENBRkk7QUFHUjtBQUNBQyxJQUFBQSxNQUFNLEVBQUMsQ0FBQ04sRUFBRSxDQUFDSyxXQUFKLENBSkM7QUFLUjtBQUNBRSxJQUFBQSxPQUFPLEVBQUMsQ0FBQ1AsRUFBRSxDQUFDSyxXQUFKO0FBTkEsR0FIUDtBQVlMO0FBRUFHLEVBQUFBLE1BZEssb0JBY0s7QUFDTixRQUFHUixFQUFFLENBQUNTLEVBQUgsSUFBTyxJQUFWLEVBQWU7QUFDWFQsTUFBQUEsRUFBRSxDQUFDUyxFQUFILEdBQU0sRUFBTjtBQUNIOztBQUNEVCxJQUFBQSxFQUFFLENBQUNTLEVBQUgsQ0FBTUMsTUFBTixHQUFhLElBQWI7QUFDSCxHQW5CSTtBQXFCTEMsRUFBQUEsS0FyQkssbUJBcUJJLENBRVIsQ0F2QkksQ0F5Qkw7O0FBekJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/lm77niYfnurnnkIZcclxuICAgICAgICBzcHI6W2NjLlNwcml0ZUZyYW1lXSxcclxuICAgICAgICAvL0lDReWvueW6lOe6ueeQhlxyXG4gICAgICAgIGljZXNwcjpbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIC8v54m55pWI57q555CGXHJcbiAgICAgICAgQW5pbXNwcjpbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmKGNjLlpMPT1udWxsKXtcclxuICAgICAgICAgICAgY2MuWkw9e307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLlpMLnNwck1ncj10aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==