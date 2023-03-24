"use strict";
cc._RF.push(module, '1b19e5BnRtNAbD8mmt8Vt/l', 'Scuess');
// newscripts/Main/Scuess.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //旋转的背景
    circlebg: cc.Node,
    //分数
    scoreLabel: cc.Label,
    goldLabel: cc.Label,
    //三组星星
    Stars: [cc.Node]
  },
  onLoad: function onLoad() {},
  start: function start() {},
  update: function update(dt) {
    this.circlebg.angle += 60 * dt;
  },
  InitView: function InitView() {
    cc.ZL.musicMgr.MyplayMusic(26, false);
    this.node.runAction(cc.scaleTo(0.2, 1, 1));
    this.scoreLabel.string = cc.ZL.UIMgr._score;
    this.goldLabel.string = Math.floor(cc.ZL.UIMgr._score / 1000);
    this.showstars();
  },
  showstars: function showstars() {
    var num = cc.ZL.UIMgr.GetStarNum(); // let num=3;

    if (num == 1) {
      cc.ZL.musicMgr.MyplayMusic(17, false);
      this.BigSmall(this.Stars[0]);
    } else if (num == 2) {
      cc.ZL.musicMgr.MyplayMusic(17, false);
      this.BigSmall(this.Stars[0]);
      setTimeout(function () {
        cc.ZL.musicMgr.MyplayMusic(18, false);
        this.BigSmall(this.Stars[1]);
      }.bind(this), 300);
    } else if (num == 3) {
      cc.ZL.musicMgr.MyplayMusic(17, false);
      this.BigSmall(this.Stars[0]);
      setTimeout(function () {
        cc.ZL.musicMgr.MyplayMusic(18, false);
        this.BigSmall(this.Stars[1]);
        setTimeout(function () {
          cc.ZL.musicMgr.MyplayMusic(19, false);
          this.BigSmall(this.Stars[2]);
        }.bind(this), 300);
      }.bind(this), 300);
    } //gamedata.Lv_star[comeInfo.now_lv]=num;


    if (comeInfo.now_lv >= gamedata.Lv_star) {
      gamedata.Lv_star = comeInfo.now_lv;
      gamedata.bc_Star();
    }
  },
  //星星变大缩小
  BigSmall: function BigSmall(node) {
    var fn1 = cc.scaleTo(0.2, 1.5, 1.5);
    var fn2 = cc.scaleTo(0.1, 1, 1);
    var sqn = cc.sequence(fn1, fn2);
    node.runAction(sqn);
  },
  //双倍领取
  DoubleGold: function DoubleGold() {
    cc.ZL.musicMgr.MyplayMusic(0, false);
    gamedata.gold += Math.floor(cc.ZL.UIMgr._score / 1000) * 2;
    gamedata.bc_gold();
    cc.director.loadScene("newLevel");
  },
  //普通领取
  NormalGold: function NormalGold() {
    this.node.getChildByName('normalGold').getComponent(cc.Button).interactable = false;
    this.node.getChildByName('next').getComponent(cc.Button).interactable = false;
    cc.ZL.musicMgr.MyplayMusic(0, false);
    gamedata.gold += Math.floor(cc.ZL.UIMgr._score / 1000);
    gamedata.bc_gold();
    cc.director.loadScene("newLevel");
  },
  NextHall: function NextHall(event) {
    var _this = this;

    if (Number(comeInfo.now_lv) == 500) {
      utils.addTips('已经是最后一关啦！');
      return;
    }

    this.node.getChildByName('normalGold').getComponent(cc.Button).interactable = false;
    this.node.getChildByName('next').getComponent(cc.Button).interactable = false;
    cc.ZL.musicMgr.MyplayMusic(0, false);
    gamedata.gold += Math.floor(cc.ZL.UIMgr._score / 1000);
    gamedata.bc_gold();
    utils.ShowLoading();
    cc.director.loadScene("newLevel", function () {
      cc.ZL.Level.OpenMask();
      console.log('OpenMask');
      cc.loader.loadRes('levels/' + (Number(comeInfo.now_lv) + 1), function (err, res) {
        if (err) {
          _this.node.getChildByName('normalGold').getComponent(cc.Button).interactable = true;
          _this.node.getChildByName('next').getComponent(cc.Button).interactable = true;
          console.log("load res error=" + err);
        } else {
          // console.log(lvdata['Lv1'])
          // setTimeout(function () {
          lvdata = JSON.parse(res.text); // console.log('=====>',lvdatacc)

          cc.ZL.Target.InitView(Number(comeInfo.now_lv) + 1); // }, 1000);
        }
      });
    });
  }
});

cc._RF.pop();