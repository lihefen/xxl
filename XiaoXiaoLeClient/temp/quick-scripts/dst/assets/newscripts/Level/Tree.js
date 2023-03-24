
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Level/Tree.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa248yxSORF/78FpFGHRZtR', 'Tree');
// newscripts/Level/Tree.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //当前节点最小关卡
    lv: 0,
    //关卡节点
    lvBnt: [cc.Node],
    lvlab: [cc.Node]
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(lv) {
    this.lv = lv;

    for (var i = 0; i < this.lvBnt.length; i++) {
      if (this.lv + i > 500) {
        console.log('123123123', this.lv + i);
        this.lvBnt[i].destroy();
        this.lvlab[i].destroy();
      } else {
        this.lvBnt[i].getComponent("LvBnt").InitView(this.lv + i);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0xldmVsL1RyZWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsdiIsImx2Qm50IiwiTm9kZSIsImx2bGFiIiwic3RhcnQiLCJJbml0VmlldyIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZGVzdHJveSIsImdldENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsRUFBRSxFQUFDLENBRks7QUFHUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUMsQ0FBQ0wsRUFBRSxDQUFDTSxJQUFKLENBSkU7QUFLUkMsSUFBQUEsS0FBSyxFQUFDLENBQUNQLEVBQUUsQ0FBQ00sSUFBSjtBQUxFLEdBSFA7QUFXTDtBQUVBRSxFQUFBQSxLQWJLLG1CQWFJLENBQ1IsQ0FkSTtBQWdCTDtBQUNBQyxFQUFBQSxRQWpCSyxvQkFpQklMLEVBakJKLEVBaUJPO0FBQ1IsU0FBS0EsRUFBTCxHQUFRQSxFQUFSOztBQUNBLFNBQUksSUFBSU0sQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtMLEtBQUwsQ0FBV00sTUFBekIsRUFBZ0NELENBQUMsRUFBakMsRUFBb0M7QUFDaEMsVUFBRyxLQUFLTixFQUFMLEdBQVFNLENBQVIsR0FBWSxHQUFmLEVBQW9CO0FBQ3hCRSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXdCLEtBQUtULEVBQUwsR0FBUU0sQ0FBaEM7QUFDUSxhQUFLTCxLQUFMLENBQVdLLENBQVgsRUFBY0ksT0FBZDtBQUNBLGFBQUtQLEtBQUwsQ0FBV0csQ0FBWCxFQUFjSSxPQUFkO0FBQ0gsT0FKRCxNQUlLO0FBQ0wsYUFBS1QsS0FBTCxDQUFXSyxDQUFYLEVBQWNLLFlBQWQsQ0FBMkIsT0FBM0IsRUFBb0NOLFFBQXBDLENBQTZDLEtBQUtMLEVBQUwsR0FBUU0sQ0FBckQ7QUFDQztBQUNKO0FBQ0o7QUE1QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+W9k+WJjeiKgueCueacgOWwj+WFs+WNoVxyXG4gICAgICAgIGx2OjAsXHJcbiAgICAgICAgLy/lhbPljaHoioLngrlcclxuICAgICAgICBsdkJudDpbY2MuTm9kZV0sXHJcbiAgICAgICAgbHZsYWI6W2NjLk5vZGVdLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIEluaXRWaWV3KGx2KXtcclxuICAgICAgICB0aGlzLmx2PWx2O1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5sdkJudC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5sditpID4gNTAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEyMzEyMzEyMycsdGhpcy5sditpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sdkJudFtpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmx2bGFiW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubHZCbnRbaV0uZ2V0Q29tcG9uZW50KFwiTHZCbnRcIikuSW5pdFZpZXcodGhpcy5sditpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==