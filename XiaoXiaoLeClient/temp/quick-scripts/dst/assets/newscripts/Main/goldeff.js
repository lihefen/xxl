
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/goldeff.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '573242R9BRFCJBTam3/+q5Y', 'goldeff');
// newscripts/Main/goldeff.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// music:{
    //     type:cc.AudioClip,
    //     default:null,
    // }
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  //敌人死亡后的方块移动
  cube_move: function cube_move(speed, pos, manager) {
    this.node.stopAllActions();
    var x = (Math.floor(Math.random() * 100) + 10) * 20;
    var y = (Math.floor(Math.random() * 100) + 10) * 20;
    var num = Math.floor(Math.random() * 4);
    var dir = cc.v2(x, y);
    var len = dir.mag();
    var t = len / (speed * 0.2); //this.is_rot=true;

    if (num == 0) {
      this.node.runAction(cc.moveTo(t, x, y));
    } else if (num == 1) {
      this.node.runAction(cc.moveTo(t, -x, y));
    } else if (num == 2) {
      this.node.runAction(cc.moveTo(t, x, -y));
    } else if (num == 3) {
      this.node.runAction(cc.moveTo(t, -x, -y));
    }

    setTimeout(function () {
      if (this.node) {
        this.node.stopAllActions();
        var dir2 = pos.sub(this.node.getPosition());
        var len2 = dir2.mag();
        var t2 = len2 / speed;
        this.node.runAction(cc.moveTo(t2, pos));
        setTimeout(function () {
          if (this.node) {
            manager.clearEffPool.put(this.node);
          }
        }.bind(this), t2 * 1000);
      }
    }.bind(this), 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vZ29sZGVmZi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiY3ViZV9tb3ZlIiwic3BlZWQiLCJwb3MiLCJtYW5hZ2VyIiwibm9kZSIsInN0b3BBbGxBY3Rpb25zIiwieCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJudW0iLCJkaXIiLCJ2MiIsImxlbiIsIm1hZyIsInQiLCJydW5BY3Rpb24iLCJtb3ZlVG8iLCJzZXRUaW1lb3V0IiwiZGlyMiIsInN1YiIsImdldFBvc2l0aW9uIiwibGVuMiIsInQyIiwiY2xlYXJFZmZQb29sIiwicHV0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLENBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFKUSxHQUhQO0FBU0w7QUFFQUMsRUFBQUEsS0FYSyxtQkFXSSxDQUVSLENBYkk7QUFlTDtBQUNBO0FBQ0FDLEVBQUFBLFNBakJLLHFCQWlCS0MsS0FqQkwsRUFpQldDLEdBakJYLEVBaUJlQyxPQWpCZixFQWlCdUI7QUFDeEIsU0FBS0MsSUFBTCxDQUFVQyxjQUFWO0FBQ0EsUUFBSUMsQ0FBQyxHQUFDLENBQUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxHQUF6QixJQUE4QixFQUEvQixJQUFtQyxFQUF6QztBQUNBLFFBQUlDLENBQUMsR0FBQyxDQUFDSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsR0FBekIsSUFBOEIsRUFBL0IsSUFBbUMsRUFBekM7QUFDQSxRQUFJRSxHQUFHLEdBQUNKLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBYyxDQUF6QixDQUFSO0FBQ0EsUUFBSUcsR0FBRyxHQUFDakIsRUFBRSxDQUFDa0IsRUFBSCxDQUFNUCxDQUFOLEVBQVFJLENBQVIsQ0FBUjtBQUNBLFFBQUlJLEdBQUcsR0FBQ0YsR0FBRyxDQUFDRyxHQUFKLEVBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUNGLEdBQUcsSUFBRWIsS0FBSyxHQUFDLEdBQVIsQ0FBVCxDQVB3QixDQVF4Qjs7QUFDQSxRQUFHVSxHQUFHLElBQUUsQ0FBUixFQUFVO0FBQ04sV0FBS1AsSUFBTCxDQUFVYSxTQUFWLENBQW9CdEIsRUFBRSxDQUFDdUIsTUFBSCxDQUFVRixDQUFWLEVBQVlWLENBQVosRUFBY0ksQ0FBZCxDQUFwQjtBQUNILEtBRkQsTUFFTSxJQUFHQyxHQUFHLElBQUUsQ0FBUixFQUFVO0FBQ1osV0FBS1AsSUFBTCxDQUFVYSxTQUFWLENBQW9CdEIsRUFBRSxDQUFDdUIsTUFBSCxDQUFVRixDQUFWLEVBQVksQ0FBQ1YsQ0FBYixFQUFlSSxDQUFmLENBQXBCO0FBQ0gsS0FGSyxNQUVBLElBQUdDLEdBQUcsSUFBRSxDQUFSLEVBQVU7QUFDWixXQUFLUCxJQUFMLENBQVVhLFNBQVYsQ0FBb0J0QixFQUFFLENBQUN1QixNQUFILENBQVVGLENBQVYsRUFBWVYsQ0FBWixFQUFjLENBQUNJLENBQWYsQ0FBcEI7QUFDSCxLQUZLLE1BRUEsSUFBR0MsR0FBRyxJQUFFLENBQVIsRUFBVTtBQUNaLFdBQUtQLElBQUwsQ0FBVWEsU0FBVixDQUFvQnRCLEVBQUUsQ0FBQ3VCLE1BQUgsQ0FBVUYsQ0FBVixFQUFZLENBQUNWLENBQWIsRUFBZSxDQUFDSSxDQUFoQixDQUFwQjtBQUNIOztBQUNEUyxJQUFBQSxVQUFVLENBQUMsWUFBVTtBQUNqQixVQUFHLEtBQUtmLElBQVIsRUFBYTtBQUNULGFBQUtBLElBQUwsQ0FBVUMsY0FBVjtBQUNBLFlBQUllLElBQUksR0FBQ2xCLEdBQUcsQ0FBQ21CLEdBQUosQ0FBUSxLQUFLakIsSUFBTCxDQUFVa0IsV0FBVixFQUFSLENBQVQ7QUFDQSxZQUFJQyxJQUFJLEdBQUNILElBQUksQ0FBQ0wsR0FBTCxFQUFUO0FBQ0EsWUFBSVMsRUFBRSxHQUFDRCxJQUFJLEdBQUN0QixLQUFaO0FBQ0EsYUFBS0csSUFBTCxDQUFVYSxTQUFWLENBQW9CdEIsRUFBRSxDQUFDdUIsTUFBSCxDQUFVTSxFQUFWLEVBQWF0QixHQUFiLENBQXBCO0FBQ0FpQixRQUFBQSxVQUFVLENBQUMsWUFBVTtBQUNqQixjQUFHLEtBQUtmLElBQVIsRUFBYTtBQUNURCxZQUFBQSxPQUFPLENBQUNzQixZQUFSLENBQXFCQyxHQUFyQixDQUF5QixLQUFLdEIsSUFBOUI7QUFDSDtBQUNKLFNBSlUsQ0FJVHVCLElBSlMsQ0FJSixJQUpJLENBQUQsRUFJR0gsRUFBRSxHQUFDLElBSk4sQ0FBVjtBQUtIO0FBQ0osS0FiVSxDQWFURyxJQWJTLENBYUosSUFiSSxDQUFELEVBYUcsR0FiSCxDQUFWO0FBY0g7QUFqREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gbXVzaWM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICAvL+aVjOS6uuatu+S6oeWQjueahOaWueWdl+enu+WKqFxyXG4gICAgY3ViZV9tb3ZlKHNwZWVkLHBvcyxtYW5hZ2VyKXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgeD0oTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCkrMTApKjIwO1xyXG4gICAgICAgIHZhciB5PShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKSsxMCkqMjA7XHJcbiAgICAgICAgdmFyIG51bT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNCk7XHJcbiAgICAgICAgdmFyIGRpcj1jYy52Mih4LHkpO1xyXG4gICAgICAgIHZhciBsZW49ZGlyLm1hZygpO1xyXG4gICAgICAgIHZhciB0PWxlbi8oc3BlZWQqMC4yKTtcclxuICAgICAgICAvL3RoaXMuaXNfcm90PXRydWU7XHJcbiAgICAgICAgaWYobnVtPT0wKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5tb3ZlVG8odCx4LHkpKTtcclxuICAgICAgICB9ZWxzZSBpZihudW09PTEpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbyh0LC14LHkpKTtcclxuICAgICAgICB9ZWxzZSBpZihudW09PTIpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbyh0LHgsLXkpKTtcclxuICAgICAgICB9ZWxzZSBpZihudW09PTMpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbyh0LC14LC15KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub2RlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpcjI9cG9zLnN1Yih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGVuMj1kaXIyLm1hZygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQyPWxlbjIvc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbyh0Mixwb3MpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm5vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyLmNsZWFyRWZmUG9vbC5wdXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksdDIqMTAwMClcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9LmJpbmQodGhpcyksMjAwKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=