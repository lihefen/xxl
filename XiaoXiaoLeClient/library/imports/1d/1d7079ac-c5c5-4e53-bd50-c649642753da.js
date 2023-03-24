"use strict";
cc._RF.push(module, '1d707msxcVOU71QxklkJ1Pa', 'Level');
// newscripts/Level/Level.js

"use strict";

var com = require('Common');

cc.Class({
  "extends": cc.Component,
  properties: {
    //精力条
    energyprogress: cc.ProgressBar,
    energyLabel: cc.Label,
    //金币框
    goldLabel: cc.Label,
    //星星框
    //starLabel:cc.Label,
    //遮罩
    mask: cc.Node,
    //商店预制体
    shopPrefab: cc.Prefab,
    shop: null,
    rank: cc.Prefab
  },
  onLoad: function onLoad() {
    if (cc.ZL == null) {
      cc.ZL = {};
    }

    cc.ZL.Level = this;

    if (gamedata.bg_music) {
      cc.audioEngine.resumeAll();
    }
  },
  start: function start() {
    // this.closeMask();
    //查看可以回复多少体力
    // let num=Date.now();
    // if(gamedata.energy<30){
    //     //查看回复体力的时间差(5分钟回复一体力)
    //     //console.log(num-gamedata.timer);
    //     let scend=Math.floor((num-gamedata.timer)/100000);
    //     //console.log(scend);
    //     if(scend>1){
    //         gamedata.energy +=scend;
    //         if(gamedata.energy>30){
    //             gamedata.energy=30;
    //         }
    //         gamedata.timer=Date.now();
    //         gamedata.bc_energy();
    //         gamedata.bc_timer();
    //     }
    // }else{
    //     gamedata.timer=Date.now();
    //     gamedata.bc_energy();
    //     gamedata.bc_timer(); 
    // }
    // console.log('123123123123', gamedata.energy)
    this.energyLabel.string = gamedata.energy;
    this.energyprogress.progress = gamedata.energy / 30;
  },
  update: function update(dt) {
    this.goldLabel.string = gamedata.gold;
    this.energyLabel.string = gamedata.energy;
    this.energyprogress.progress = gamedata.energy / 30;
  },
  //打开商店
  openShop: function openShop() {
    if (this.shop == null) {
      this.shop = cc.instantiate(this.shopPrefab);
      this.node.addChild(this.shop);
      this.shop.setPosition(0, 2000);
    }

    this.shop.getComponent("Shop").Open();
    this.OpenMask();
  },
  //打开遮罩
  OpenMask: function OpenMask() {
    this.mask.active = true; // this.mask.runAction(cc.fadeTo(0.2,200));
  },
  //关闭遮罩
  closeMask: function closeMask() {
    console.log('closeMask');
    this.mask.active = false; // this.mask.opacity=0;
  },
  onDestroy: function onDestroy() {
    cc.ZL.Level = null;
  },
  share: function share() {
    com.WxShare();
  },
  onOpenRank: function onOpenRank() {
    var node = cc.instantiate(this.rank);
    this.node.addChild(node);
    this.OpenMask();
  }
});

cc._RF.pop();