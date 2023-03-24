"use strict";
cc._RF.push(module, 'c9b16RH6atDDqL2ATThfhba', 'tip');
// newscripts/Level/tip.js

"use strict";

var com = require('Common');

cc.Class({
  "extends": cc.Component,
  properties: {
    //文字显示框
    txt: cc.Label,
    //增加精力按钮
    addBnt: cc.Node
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(num) {
    //1是提示玩家已经玩到最后一关，2是精力不足
    if (num == 1) {
      this.txt.string = "你太厉害了！！！\n正在抓紧努力更新中！！！";
      this.addBnt.active = false;
    } else {
      this.txt.string = "啊哦！精力不足了，\n休息一下吧！！！";
      this.addBnt.active = true;
    }

    this.node.runAction(cc.scaleTo(0.1, 1, 1));
  },
  //分享加体力
  addEnergy: function addEnergy() {// com.WxShare();
    // setTimeout(function(){
    //     if(comeInfo.is_share){
    //         gamedata.energy +=5;
    //         comeInfo.is_share=false;
    //     }
    // }.bind(this),3500);
    // this.close();
    // Advert.VideoPlay(0,function(){
    //     gamedata.energy +=5;
    //     cc.ZL.lvMgr.showInfo();
    // }.bind(this));
  },
  close: function close() {
    this.node.runAction(cc.scaleTo(0.1, 0, 0));
    setTimeout(function () {
      this.node.destroy();
    }.bind(this), 120);
  }
});

cc._RF.pop();