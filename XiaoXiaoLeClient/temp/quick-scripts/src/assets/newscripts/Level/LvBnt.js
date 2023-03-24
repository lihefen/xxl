"use strict";
cc._RF.push(module, '777fbavwuxH9aCnNNl2N0Kp', 'LvBnt');
// newscripts/Level/LvBnt.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    lv: 0,
    //第几关
    lvLabel: cc.Label
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(lv) {
    this.lv = lv;
    this.lvLabel.string = this.lv; // console.log(gamedata, 'gamedata');

    if (this.lv <= gamedata.Lv_star) {
      //说明已经通关这一关
      //获取到星星数量
      //let starnum=gamedata.Lv_star[this.lv];
      if (!gamedata.level_stars[this.lv - 1]) {
        this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[5];
      } else {
        this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[gamedata.level_stars[this.lv - 1] + 1];
      }
    } else if (this.lv == gamedata.Lv_star + 1) {
      //可以玩的一关
      this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[1];
    } else {
      //未通关的
      // this.node.getComponent(cc.Button).interactable=false;
      this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[0];
    } // if(lv>comeInfo.totallv){
    //     this.node.getComponent(cc.Button).interactable=false;
    // }

  },
  //监听点击按钮
  Bnt: function Bnt() {
    var _this = this;

    console.log('Btn111');

    if (this.lv <= gamedata.Lv_star + 1) {
      cc.ZL.Level.mask.active = true;
      cc.loader.loadRes('levels/' + this.lv, function (err, res) {
        cc.ZL.Level.mask.active = false;

        if (err) {
          console.log('load res error=' + err);
        } else {
          // console.log(lvdata['Lv1'])
          lvdata = JSON.parse(res.text);
          lvdata['lvl'] = _this.lv; // console.log('=====>',lvdatacc)

          cc.ZL.Target.InitView(_this.lv);
          console.log(_this.lv, 'this.lv');
        }
      });
    } else {
      utils.addTips('不可以越级游戏');
    }
  }
});

cc._RF.pop();