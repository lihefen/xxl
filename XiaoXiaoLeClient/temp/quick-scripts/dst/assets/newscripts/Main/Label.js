
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/Label.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '687cfuzx5VGmqXazSLIJgM7', 'Label');
// newscripts/Main/Label.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {},
  Init: function Init(num) {
    this.node.stopAllActions();
    this.node.opacity = 255;
    this.node.getComponent(cc.Label).string = num;
    this.node.runAction(cc.sequence(cc.moveBy(0.5, 0, 50), cc.fadeOut(1)));
    setTimeout(function () {
      if (cc.ZL.LabelMgr.LabelPools) {
        cc.ZL.LabelMgr.LabelPools.put(this.node);
      }
    }.bind(this), 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vTGFiZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIkluaXQiLCJudW0iLCJub2RlIiwic3RvcEFsbEFjdGlvbnMiLCJvcGFjaXR5IiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsIm1vdmVCeSIsImZhZGVPdXQiLCJzZXRUaW1lb3V0IiwiWkwiLCJMYWJlbE1nciIsIkxhYmVsUG9vbHMiLCJwdXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxLQVBLLG1CQU9JLENBRVIsQ0FUSTtBQVVMQyxFQUFBQSxJQVZLLGdCQVVBQyxHQVZBLEVBVUk7QUFDTCxTQUFLQyxJQUFMLENBQVVDLGNBQVY7QUFDQSxTQUFLRCxJQUFMLENBQVVFLE9BQVYsR0FBa0IsR0FBbEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLFlBQVYsQ0FBdUJWLEVBQUUsQ0FBQ1csS0FBMUIsRUFBaUNDLE1BQWpDLEdBQXdDTixHQUF4QztBQUNBLFNBQUtDLElBQUwsQ0FBVU0sU0FBVixDQUFvQmIsRUFBRSxDQUFDYyxRQUFILENBQVlkLEVBQUUsQ0FBQ2UsTUFBSCxDQUFVLEdBQVYsRUFBYyxDQUFkLEVBQWdCLEVBQWhCLENBQVosRUFBZ0NmLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBVyxDQUFYLENBQWhDLENBQXBCO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQyxZQUFVO0FBQ2pCLFVBQUdqQixFQUFFLENBQUNrQixFQUFILENBQU1DLFFBQU4sQ0FBZUMsVUFBbEIsRUFBNkI7QUFDekJwQixRQUFBQSxFQUFFLENBQUNrQixFQUFILENBQU1DLFFBQU4sQ0FBZUMsVUFBZixDQUEwQkMsR0FBMUIsQ0FBOEIsS0FBS2QsSUFBbkM7QUFDSDtBQUNKLEtBSlUsQ0FJVGUsSUFKUyxDQUlKLElBSkksQ0FBRCxFQUlHLElBSkgsQ0FBVjtBQUtIO0FBcEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBJbml0KG51bSl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHk9MjU1O1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1udW07XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC41LDAsNTApLGNjLmZhZGVPdXQoMSkpKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ICAgIFxyXG4gICAgICAgICAgICBpZihjYy5aTC5MYWJlbE1nci5MYWJlbFBvb2xzKXtcclxuICAgICAgICAgICAgICAgIGNjLlpMLkxhYmVsTWdyLkxhYmVsUG9vbHMucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcyksMTAwMCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=