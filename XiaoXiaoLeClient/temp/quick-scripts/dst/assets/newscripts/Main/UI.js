
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97054wVNbNG/rZJXVT9KDxz', 'UI');
// newscripts/Main/UI.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //关卡显示框
    lvLabel: cc.Label,
    stepnum: -1,
    //步数显示框
    stepLabel: cc.Label,
    //分数
    _score: 0,
    //分数进度条
    socreProcess: cc.ProgressBar,
    //分数显示框
    scoreLabel: cc.Label,
    //蝴蝶Logo
    logo: cc.Node,
    add_score: 150,
    //失败预制体
    end: cc.Prefab,
    xing1: cc.Node,
    xing2: cc.Node,
    xing3: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.ZL.animMgr.mask.active = true;
    cc.ZL.UIMgr = this;
    this.showInfo();
  },
  start: function start() {},
  // update (dt) {},
  showInfo: function showInfo() {
    this.lvLabel.string = '第' + comeInfo.now_lv + '关'; // this.stepnum=lvdata["Lv"+comeInfo.now_lv].step;

    this.stepnum = lvdata.step;
    this.stepLabel.string = this.stepnum;
    this.AddScore(0);
  },
  //更新分数显示
  AddScore: function AddScore(num) {
    this._score += num;
    this.scoreLabel.string = this._score; // let bar=this._score/(lvdata["Lv"+comeInfo.now_lv].one_star*3);

    var bar = this._score / (lvdata.one_star * 3);
    this.socreProcess.progress = bar;
    var sum = this.GetStarNum();

    switch (sum) {
      case 3:
        this.xing3.active = true;
        this.xing2.active = true;
        this.xing1.active = true;
        break;

      case 2:
        this.xing3.active = false;
        this.xing2.active = true;
        this.xing1.active = true;
        break;

      case 1:
        this.xing3.active = false;
        this.xing2.active = false;
        this.xing1.active = true;
        break;

      case 0:
        this.xing3.active = false;
        this.xing2.active = false;
        this.xing1.active = false;
        break;

      default:
        break;
    }

    if (bar >= 1) {
      bar = 1;
    }

    this.logo.x = bar * 700;
  },
  //减步数
  MinusStep: function MinusStep() {
    this.stepnum -= 1;

    if (this.stepnum <= 0) {
      this.stepnum = 0; //this.EndOver();
    }

    this.stepLabel.string = this.stepnum;
  },
  //加5步
  AddFiveStep: function AddFiveStep() {
    this.stepnum += 5;
    this.stepLabel.string = this.stepnum;
  },
  AddTwoStep: function AddTwoStep() {
    this.stepnum += 2;
    this.stepLabel.string = this.stepnum;
  },
  //计算显示几颗星
  GetStarNum: function GetStarNum() {
    // if(this._score>(lvdata["Lv"+comeInfo.now_lv].one_star*3)){
    //     return 3;
    // }else if(this._score>(lvdata["Lv"+comeInfo.now_lv].one_star*2)){
    //     return 2;
    // }else if(this._score>(lvdata["Lv"+comeInfo.now_lv].one_star)){
    //     return 1;
    // }else {
    //     return 0;
    // }
    if (this._score > lvdata.one_star * 3) {
      return 3;
    } else if (this._score > lvdata.one_star * 2) {
      return 2;
    } else if (this._score > lvdata.one_star) {
      return 1;
    } else {
      return 0;
    }
  },
  //失败
  EndOver: function EndOver() {
    var e = cc.instantiate(this.end);
    this.node.addChild(e);
    e.setPosition(0, 0);
    e.getComponent("End").InitView();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vVUkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsdkxhYmVsIiwiTGFiZWwiLCJzdGVwbnVtIiwic3RlcExhYmVsIiwiX3Njb3JlIiwic29jcmVQcm9jZXNzIiwiUHJvZ3Jlc3NCYXIiLCJzY29yZUxhYmVsIiwibG9nbyIsIk5vZGUiLCJhZGRfc2NvcmUiLCJlbmQiLCJQcmVmYWIiLCJ4aW5nMSIsInhpbmcyIiwieGluZzMiLCJvbkxvYWQiLCJaTCIsImFuaW1NZ3IiLCJtYXNrIiwiYWN0aXZlIiwiVUlNZ3IiLCJzaG93SW5mbyIsInN0YXJ0Iiwic3RyaW5nIiwiY29tZUluZm8iLCJub3dfbHYiLCJsdmRhdGEiLCJzdGVwIiwiQWRkU2NvcmUiLCJudW0iLCJiYXIiLCJvbmVfc3RhciIsInByb2dyZXNzIiwic3VtIiwiR2V0U3Rhck51bSIsIngiLCJNaW51c1N0ZXAiLCJBZGRGaXZlU3RlcCIsIkFkZFR3b1N0ZXAiLCJFbmRPdmVyIiwiZSIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZXRDb21wb25lbnQiLCJJbml0VmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsT0FBTyxFQUFFSixFQUFFLENBQUNLLEtBRko7QUFHUkMsSUFBQUEsT0FBTyxFQUFFLENBQUMsQ0FIRjtBQUlSO0FBQ0FDLElBQUFBLFNBQVMsRUFBRVAsRUFBRSxDQUFDSyxLQUxOO0FBTVI7QUFDQUcsSUFBQUEsTUFBTSxFQUFFLENBUEE7QUFRUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUVULEVBQUUsQ0FBQ1UsV0FUVDtBQVVSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRVgsRUFBRSxD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LEVBQWlCLENBQWpCO0FBQ0FKLElBQUFBLENBQUMsQ0FBQ0ssWUFBRixDQUFlLEtBQWYsRUFBc0JDLFFBQXRCO0FBQ0g7QUFuSUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/lhbPljaHmmL7npLrmoYZcclxuICAgICAgICBsdkxhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBzdGVwbnVtOiAtMSxcclxuICAgICAgICAvL+atpeaVsOaYvuekuuahhlxyXG4gICAgICAgIHN0ZXBMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgLy/liIbmlbBcclxuICAgICAgICBfc2NvcmU6IDAsXHJcbiAgICAgICAgLy/liIbmlbDov5vluqbmnaFcclxuICAgICAgICBzb2NyZVByb2Nlc3M6IGNjLlByb2dyZXNzQmFyLFxyXG4gICAgICAgIC8v5YiG5pWw5pi+56S65qGGXHJcbiAgICAgICAgc2NvcmVMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgLy/onbTonbZMb2dvXHJcbiAgICAgICAgbG9nbzogY2MuTm9kZSxcclxuXHJcbiAgICAgICAgYWRkX3Njb3JlOiAxNTAsXHJcblxyXG4gICAgICAgIC8v5aSx6LSl6aKE5Yi25L2TXHJcbiAgICAgICAgZW5kOiBjYy5QcmVmYWIsXHJcblxyXG4gICAgICAgIHhpbmcxOiBjYy5Ob2RlLFxyXG4gICAgICAgIHhpbmcyOiBjYy5Ob2RlLFxyXG4gICAgICAgIHhpbmczOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgY2MuWkwuYW5pbU1nci5tYXNrLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgY2MuWkwuVUlNZ3IgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2hvd0luZm8oKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIHNob3dJbmZvKCkge1xyXG4gICAgICAgIHRoaXMubHZMYWJlbC5zdHJpbmcgPSAn56ysJyArIGNvbWVJbmZvLm5vd19sdiArICflhbMnO1xyXG4gICAgICAgIC8vIHRoaXMuc3RlcG51bT1sdmRhdGFbXCJMdlwiK2NvbWVJbmZvLm5vd19sdl0uc3RlcDtcclxuICAgICAgICB0aGlzLnN0ZXBudW0gPSBsdmRhdGEuc3RlcDtcclxuICAgICAgICB0aGlzLnN0ZXBMYWJlbC5zdHJpbmcgPSB0aGlzLnN0ZXBudW07XHJcbiAgICAgICAgdGhpcy5BZGRTY29yZSgwKTtcclxuICAgIH0sXHJcbiAgICAvL+abtOaWsOWIhuaVsOaYvuekulxyXG4gICAgQWRkU2NvcmUobnVtKSB7XHJcbiAgICAgICAgdGhpcy5fc2NvcmUgKz0gbnVtO1xyXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLl9zY29yZTtcclxuICAgICAgICAvLyBsZXQgYmFyPXRoaXMuX3Njb3JlLyhsdmRhdGFbXCJMdlwiK2NvbWVJbmZvLm5vd19sdl0ub25lX3N0YXIqMyk7XHJcbiAgICAgICAgbGV0IGJhciA9IHRoaXMuX3Njb3JlIC8gKGx2ZGF0YS5vbmVfc3RhciAqIDMpO1xyXG4gICAgICAgIHRoaXMuc29jcmVQcm9jZXNzLnByb2dyZXNzID0gYmFyO1xyXG4gICAgICAgIGxldCBzdW0gPSB0aGlzLkdldFN0YXJOdW0oKTtcclxuICAgICAgICBzd2l0Y2ggKHN1bSkge1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhpbmczLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhpbmcyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhpbmcxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54aW5nMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGluZzIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGluZzEuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54aW5nMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGluZzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhpbmcxLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy54aW5nMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueGluZzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhpbmcxLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhciA+PSAxKSB7XHJcbiAgICAgICAgICAgIGJhciA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9nby54ID0gYmFyICogNzAwO1xyXG4gICAgfSxcclxuICAgIC8v5YeP5q2l5pWwXHJcbiAgICBNaW51c1N0ZXAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGVwbnVtIC09IDE7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RlcG51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RlcG51bSA9IDA7XHJcbiAgICAgICAgICAgIC8vdGhpcy5FbmRPdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RlcExhYmVsLnN0cmluZyA9IHRoaXMuc3RlcG51bTtcclxuICAgIH0sXHJcbiAgICAvL+WKoDXmraVcclxuICAgIEFkZEZpdmVTdGVwKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcG51bSArPSA1O1xyXG4gICAgICAgIHRoaXMuc3RlcExhYmVsLnN0cmluZyA9IHRoaXMuc3RlcG51bTtcclxuICAgIH0sXHJcbiAgICBBZGRUd29TdGVwKCkge1xyXG4gICAgICAgIHRoaXMuc3RlcG51bSArPSAyO1xyXG4gICAgICAgIHRoaXMuc3RlcExhYmVsLnN0cmluZyA9IHRoaXMuc3RlcG51bTtcclxuICAgIH0sXHJcbiAgICAvL+iuoeeul+aYvuekuuWHoOmil+aYn1xyXG4gICAgR2V0U3Rhck51bSgpIHtcclxuICAgICAgICAvLyBpZih0aGlzLl9zY29yZT4obHZkYXRhW1wiTHZcIitjb21lSW5mby5ub3dfbHZdLm9uZV9zdGFyKjMpKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgLy8gfWVsc2UgaWYodGhpcy5fc2NvcmU+KGx2ZGF0YVtcIkx2XCIrY29tZUluZm8ubm93X2x2XS5vbmVfc3RhcioyKSl7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiAyO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKHRoaXMuX3Njb3JlPihsdmRhdGFbXCJMdlwiK2NvbWVJbmZvLm5vd19sdl0ub25lX3N0YXIpKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgLy8gfWVsc2Uge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gMDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njb3JlID4gKGx2ZGF0YS5vbmVfc3RhciAqIDMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2NvcmUgPiAobHZkYXRhLm9uZV9zdGFyICogMikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zY29yZSA+IChsdmRhdGEub25lX3N0YXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+Wksei0pVxyXG4gICAgRW5kT3ZlcigpIHtcclxuICAgICAgICBsZXQgZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZW5kKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZSk7XHJcbiAgICAgICAgZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICBlLmdldENvbXBvbmVudChcIkVuZFwiKS5Jbml0VmlldygpO1xyXG4gICAgfVxyXG59KTtcclxuIl19