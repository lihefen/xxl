
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Mains/EndMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcc2dTAmQdOgI6o7Yl4mod9', 'EndMove');
// newscripts/Mains/EndMove.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  Move: function Move(anim, num) {
    if (anim && anim.node) {
      var pos = anim.node.getPosition();
      this.node.runAction(cc.moveTo(0.2, pos.x, pos.y + 60));
      setTimeout(function () {
        this.node.destroy(); // let num=Math.random()*2;

        if (num < 1) {
          anim.creatRowEff(false);
        } else {
          anim.creatColnumEff(false);
        }
      }.bind(this), 200);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW5zL0VuZE1vdmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIk1vdmUiLCJhbmltIiwibnVtIiwibm9kZSIsInBvcyIsImdldFBvc2l0aW9uIiwicnVuQWN0aW9uIiwibW92ZVRvIiwieCIsInkiLCJzZXRUaW1lb3V0IiwiZGVzdHJveSIsImNyZWF0Um93RWZmIiwiY3JlYXRDb2xudW1FZmYiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUFDLEVBQUFBLEtBUkssbUJBUUksQ0FFUixDQVZJO0FBWUw7QUFDQUMsRUFBQUEsSUFiSyxnQkFhQUMsSUFiQSxFQWFNQyxHQWJOLEVBYVU7QUFDWCxRQUFHRCxJQUFJLElBQUVBLElBQUksQ0FBQ0UsSUFBZCxFQUFtQjtBQUNmLFVBQUlDLEdBQUcsR0FBQ0gsSUFBSSxDQUFDRSxJQUFMLENBQVVFLFdBQVYsRUFBUjtBQUNBLFdBQUtGLElBQUwsQ0FBVUcsU0FBVixDQUFvQlgsRUFBRSxDQUFDWSxNQUFILENBQVUsR0FBVixFQUFjSCxHQUFHLENBQUNJLENBQWxCLEVBQW9CSixHQUFHLENBQUNLLENBQUosR0FBTSxFQUExQixDQUFwQjtBQUNBQyxNQUFBQSxVQUFVLENBQUMsWUFBVTtBQUNqQixhQUFLUCxJQUFMLENBQVVRLE9BQVYsR0FEaUIsQ0FFakI7O0FBQ0EsWUFBR1QsR0FBRyxHQUFDLENBQVAsRUFBUztBQUNMRCxVQUFBQSxJQUFJLENBQUNXLFdBQUwsQ0FBaUIsS0FBakI7QUFDSCxTQUZELE1BRUs7QUFDRFgsVUFBQUEsSUFBSSxDQUFDWSxjQUFMLENBQW9CLEtBQXBCO0FBQ0g7QUFDSixPQVJVLENBUVRDLElBUlMsQ0FRSixJQVJJLENBQUQsRUFRRyxHQVJILENBQVY7QUFTSDtBQUVKO0FBNUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgIFxyXG4gICAgfSxcclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIE1vdmUoYW5pbSwgbnVtKXtcclxuICAgICAgICBpZihhbmltJiZhbmltLm5vZGUpe1xyXG4gICAgICAgICAgICBsZXQgcG9zPWFuaW0ubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbygwLjIscG9zLngscG9zLnkrNjApKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBudW09TWF0aC5yYW5kb20oKSoyO1xyXG4gICAgICAgICAgICAgICAgaWYobnVtPDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW0uY3JlYXRSb3dFZmYoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbS5jcmVhdENvbG51bUVmZihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59KTtcclxuIl19