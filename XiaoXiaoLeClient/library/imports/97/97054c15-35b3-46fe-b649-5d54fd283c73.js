"use strict";
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