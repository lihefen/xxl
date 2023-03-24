
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Level/tip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9b16RH6atDDqL2ATThfhba', 'tip');
// newscripts/Level/tip.js

"use strict";

var com = require('Common');

cc.Class({
  "extends": cc.Component,
  properties: {
    //文字显示框
    txt: cc.Label,
    //增加精力按钮
    addBnt: cc.Node
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(num) {
    //1是提示玩家已经玩到最后一关，2是精力不足
    if (num == 1) {
      this.txt.string = "你太厉害了！！！\n正在抓紧努力更新中！！！";
      this.addBnt.active = false;
    } else {
      this.txt.string = "啊哦！精力不足了，\n休息一下吧！！！";
      this.addBnt.active = true;
    }

    this.node.runAction(cc.scaleTo(0.1, 1, 1));
  },
  //分享加体力
  addEnergy: function addEnergy() {// com.WxShare();
    // setTimeout(function(){
    //     if(comeInfo.is_share){
    //         gamedata.energy +=5;
    //         comeInfo.is_share=false;
    //     }
    // }.bind(this),3500);
    // this.close();
    // Advert.VideoPlay(0,function(){
    //     gamedata.energy +=5;
    //     cc.ZL.lvMgr.showInfo();
    // }.bind(this));
  },
  close: function close() {
    this.node.runAction(cc.scaleTo(0.1, 0, 0));
    setTimeout(function () {
      this.node.destroy();
    }.bind(this), 120);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0xldmVsL3RpcC5qcyJdLCJuYW1lcyI6WyJjb20iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0eHQiLCJMYWJlbCIsImFkZEJudCIsIk5vZGUiLCJzdGFydCIsIkluaXRWaWV3IiwibnVtIiwic3RyaW5nIiwiYWN0aXZlIiwibm9kZSIsInJ1bkFjdGlvbiIsInNjYWxlVG8iLCJhZGRFbmVyZ3kiLCJjbG9zZSIsInNldFRpbWVvdXQiLCJkZXN0cm95IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxHQUFHLEdBQUNDLE9BQU8sQ0FBQyxRQUFELENBQWY7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLEdBQUcsRUFBQ0osRUFBRSxDQUFDSyxLQUZDO0FBR1I7QUFDQUMsSUFBQUEsTUFBTSxFQUFDTixFQUFFLENBQUNPO0FBSkYsR0FIUDtBQVVMO0FBRUFDLEVBQUFBLEtBWkssbUJBWUksQ0FFUixDQWRJO0FBZ0JMO0FBQ0FDLEVBQUFBLFFBakJLLG9CQWlCSUMsR0FqQkosRUFpQlE7QUFBQztBQUNWLFFBQUdBLEdBQUcsSUFBRSxDQUFSLEVBQVU7QUFDTixXQUFLTixHQUFMLENBQVNPLE1BQVQsR0FBZ0Isd0JBQWhCO0FBQ0EsV0FBS0wsTUFBTCxDQUFZTSxNQUFaLEdBQW1CLEtBQW5CO0FBQ0gsS0FIRCxNQUdLO0FBQ0QsV0FBS1IsR0FBTCxDQUFTTyxNQUFULEdBQWdCLHFCQUFoQjtBQUNBLFdBQUtMLE1BQUwsQ0FBWU0sTUFBWixHQUFtQixJQUFuQjtBQUNIOztBQUNELFNBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQmQsRUFBRSxDQUFDZSxPQUFILENBQVcsR0FBWCxFQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBcEI7QUFDSCxHQTFCSTtBQTJCTDtBQUNBQyxFQUFBQSxTQTVCSyx1QkE0Qk0sQ0FDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQTNDSTtBQTRDTEMsRUFBQUEsS0E1Q0ssbUJBNENFO0FBQ0gsU0FBS0osSUFBTCxDQUFVQyxTQUFWLENBQW9CZCxFQUFFLENBQUNlLE9BQUgsQ0FBVyxHQUFYLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFwQjtBQUNBRyxJQUFBQSxVQUFVLENBQUMsWUFBVTtBQUNqQixXQUFLTCxJQUFMLENBQVVNLE9BQVY7QUFDSCxLQUZVLENBRVRDLElBRlMsQ0FFSixJQUZJLENBQUQsRUFFRyxHQUZILENBQVY7QUFHSDtBQWpESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY29tPXJlcXVpcmUoJ0NvbW1vbicpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8v5paH5a2X5pi+56S65qGGXHJcbiAgICAgICAgdHh0OmNjLkxhYmVsLFxyXG4gICAgICAgIC8v5aKe5Yqg57K+5Yqb5oyJ6ZKuXHJcbiAgICAgICAgYWRkQm50OmNjLk5vZGUsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIEluaXRWaWV3KG51bSl7Ly8x5piv5o+Q56S6546p5a625bey57uP546p5Yiw5pyA5ZCO5LiA5YWz77yMMuaYr+eyvuWKm+S4jei2s1xyXG4gICAgICAgIGlmKG51bT09MSl7XHJcbiAgICAgICAgICAgIHRoaXMudHh0LnN0cmluZz1cIuS9oOWkquWOieWus+S6hu+8ge+8ge+8gVxcbuato+WcqOaKk+e0p+WKquWKm+abtOaWsOS4re+8ge+8ge+8gVwiXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQm50LmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50eHQuc3RyaW5nPVwi5ZWK5ZOm77yB57K+5Yqb5LiN6Laz5LqG77yMXFxu5LyR5oGv5LiA5LiL5ZCn77yB77yB77yBXCJcclxuICAgICAgICAgICAgdGhpcy5hZGRCbnQuYWN0aXZlPXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsMSwxKSk7XHJcbiAgICB9LFxyXG4gICAgLy/liIbkuqvliqDkvZPliptcclxuICAgIGFkZEVuZXJneSgpe1xyXG4gICAgICAgIC8vIGNvbS5XeFNoYXJlKCk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vICAgICBpZihjb21lSW5mby5pc19zaGFyZSl7XHJcbiAgICAgICAgLy8gICAgICAgICBnYW1lZGF0YS5lbmVyZ3kgKz01O1xyXG4gICAgICAgIC8vICAgICAgICAgY29tZUluZm8uaXNfc2hhcmU9ZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LmJpbmQodGhpcyksMzUwMCk7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBBZHZlcnQuVmlkZW9QbGF5KDAsZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyAgICAgZ2FtZWRhdGEuZW5lcmd5ICs9NTtcclxuICAgICAgICAvLyAgICAgY2MuWkwubHZNZ3Iuc2hvd0luZm8oKTtcclxuICAgICAgICAvLyB9LmJpbmQodGhpcykpO1xyXG4gICAgfSwgIFxyXG4gICAgY2xvc2UoKXtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLDAsMCkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9LmJpbmQodGhpcyksMTIwKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==