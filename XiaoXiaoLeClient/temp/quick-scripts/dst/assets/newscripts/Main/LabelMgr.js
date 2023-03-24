
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/LabelMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ec3cT+cIJAaLx7r+fWgs/p', 'LabelMgr');
// newscripts/Main/LabelMgr.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    labelPrefab: cc.Prefab
  },
  onLoad: function onLoad() {
    this.LabelPools = new cc.NodePool();

    for (var i = 0; i < 5; i++) {
      var a = cc.instantiate(this.labelPrefab);
      this.LabelPools.put(a);
    }

    cc.ZL.LabelMgr = this;
  },
  start: function start() {},
  // update (dt) {},
  creatLabel: function creatLabel(pos, num) {
    var a;

    if (this.LabelPools.size() > 0) {
      a = this.LabelPools.get();
    } else {
      a = cc.instantiate(this.labelPrefab);
    }

    this.node.addChild(a);
    a.setPosition(pos.x, pos.y + 40);
    a.getComponent("Label").Init(num);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vTGFiZWxNZ3IuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbFByZWZhYiIsIlByZWZhYiIsIm9uTG9hZCIsIkxhYmVsUG9vbHMiLCJOb2RlUG9vbCIsImkiLCJhIiwiaW5zdGFudGlhdGUiLCJwdXQiLCJaTCIsIkxhYmVsTWdyIiwic3RhcnQiLCJjcmVhdExhYmVsIiwicG9zIiwibnVtIiwic2l6ZSIsImdldCIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwieCIsInkiLCJnZXRDb21wb25lbnQiLCJJbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFDSixFQUFFLENBQUNLO0FBRFAsR0FIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9LO0FBQ04sU0FBS0MsVUFBTCxHQUFnQixJQUFJUCxFQUFFLENBQUNRLFFBQVAsRUFBaEI7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsQ0FBZCxFQUFnQkEsQ0FBQyxFQUFqQixFQUFvQjtBQUNoQixVQUFJQyxDQUFDLEdBQUNWLEVBQUUsQ0FBQ1csV0FBSCxDQUFlLEtBQUtQLFdBQXBCLENBQU47QUFDQSxXQUFLRyxVQUFMLENBQWdCSyxHQUFoQixDQUFvQkYsQ0FBcEI7QUFDSDs7QUFDRFYsSUFBQUEsRUFBRSxDQUFDYSxFQUFILENBQU1DLFFBQU4sR0FBZSxJQUFmO0FBQ0gsR0FkSTtBQWdCTEMsRUFBQUEsS0FoQkssbUJBZ0JJLENBRVIsQ0FsQkk7QUFvQkw7QUFDQUMsRUFBQUEsVUFyQkssc0JBcUJNQyxHQXJCTixFQXFCVUMsR0FyQlYsRUFxQmM7QUFDZixRQUFJUixDQUFKOztBQUNBLFFBQUcsS0FBS0gsVUFBTCxDQUFnQlksSUFBaEIsS0FBdUIsQ0FBMUIsRUFBNEI7QUFDeEJULE1BQUFBLENBQUMsR0FBQyxLQUFLSCxVQUFMLENBQWdCYSxHQUFoQixFQUFGO0FBQ0gsS0FGRCxNQUVLO0FBQ0RWLE1BQUFBLENBQUMsR0FBQ1YsRUFBRSxDQUFDVyxXQUFILENBQWUsS0FBS1AsV0FBcEIsQ0FBRjtBQUNIOztBQUNELFNBQUtpQixJQUFMLENBQVVDLFFBQVYsQ0FBbUJaLENBQW5CO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ2EsV0FBRixDQUFjTixHQUFHLENBQUNPLENBQWxCLEVBQW9CUCxHQUFHLENBQUNRLENBQUosR0FBTSxFQUExQjtBQUNBZixJQUFBQSxDQUFDLENBQUNnQixZQUFGLENBQWUsT0FBZixFQUF3QkMsSUFBeEIsQ0FBNkJULEdBQTdCO0FBQ0g7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGFiZWxQcmVmYWI6Y2MuUHJlZmFiLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuTGFiZWxQb29scz1uZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDU7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGE9Y2MuaW5zdGFudGlhdGUodGhpcy5sYWJlbFByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMuTGFiZWxQb29scy5wdXQoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLlpMLkxhYmVsTWdyPXRoaXM7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBjcmVhdExhYmVsKHBvcyxudW0pe1xyXG4gICAgICAgIGxldCBhO1xyXG4gICAgICAgIGlmKHRoaXMuTGFiZWxQb29scy5zaXplKCk+MCl7XHJcbiAgICAgICAgICAgIGE9dGhpcy5MYWJlbFBvb2xzLmdldCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBhPWNjLmluc3RhbnRpYXRlKHRoaXMubGFiZWxQcmVmYWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYSk7XHJcbiAgICAgICAgYS5zZXRQb3NpdGlvbihwb3MueCxwb3MueSs0MCk7XHJcbiAgICAgICAgYS5nZXRDb21wb25lbnQoXCJMYWJlbFwiKS5Jbml0KG51bSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=