
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Mains/select.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'acaceuzGR5MGqH/uZLZ8XI0', 'select');
// newscripts/Mains/select.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var fn = cc.fadeTo(0.5, 100);
    var fn1 = cc.fadeTo(0.5, 255);
    var seq = cc.sequence([fn, fn1]); //顺序执行

    var rep = cc.repeatForever(seq); //一直重复执行seq

    this.node.runAction(rep);
    this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW5zL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiZm4iLCJmYWRlVG8iLCJmbjEiLCJzZXEiLCJzZXF1ZW5jZSIsInJlcCIsInJlcGVhdEZvcmV2ZXIiLCJub2RlIiwicnVuQWN0aW9uIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxLQU5LLG1CQU1JO0FBQ0wsUUFBSUMsRUFBRSxHQUFDTCxFQUFFLENBQUNNLE1BQUgsQ0FBVSxHQUFWLEVBQWMsR0FBZCxDQUFQO0FBQ0EsUUFBSUMsR0FBRyxHQUFDUCxFQUFFLENBQUNNLE1BQUgsQ0FBVSxHQUFWLEVBQWMsR0FBZCxDQUFSO0FBQ0EsUUFBSUUsR0FBRyxHQUFDUixFQUFFLENBQUNTLFFBQUgsQ0FBWSxDQUFDSixFQUFELEVBQUlFLEdBQUosQ0FBWixDQUFSLENBSEssQ0FHeUI7O0FBQzlCLFFBQUlHLEdBQUcsR0FBQ1YsRUFBRSxDQUFDVyxhQUFILENBQWlCSCxHQUFqQixDQUFSLENBSkssQ0FJeUI7O0FBQzlCLFNBQUtJLElBQUwsQ0FBVUMsU0FBVixDQUFvQkgsR0FBcEI7QUFDQSxTQUFLRSxJQUFMLENBQVVFLE1BQVYsR0FBaUIsS0FBakI7QUFDSDtBQWJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdmFyIGZuPWNjLmZhZGVUbygwLjUsMTAwKTtcclxuICAgICAgICB2YXIgZm4xPWNjLmZhZGVUbygwLjUsMjU1KTtcclxuICAgICAgICB2YXIgc2VxPWNjLnNlcXVlbmNlKFtmbixmbjFdKTsvL+mhuuW6j+aJp+ihjFxyXG4gICAgICAgIHZhciByZXA9Y2MucmVwZWF0Rm9yZXZlcihzZXEpOy8v5LiA55u06YeN5aSN5omn6KGMc2VxXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihyZXApO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmU9ZmFsc2U7XHJcbiAgICB9LFxyXG59KTtcclxuIl19