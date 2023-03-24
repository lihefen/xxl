"use strict";
cc._RF.push(module, 'f54a3zhS/dHHKJR7kxsLnlb', 'ice');
// newscripts/Mains/ice.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //行号
    rowNum: -1,
    //列号
    columnNum: -1,
    //类型
    type: -1,
    //目标位置
    typenum: -1
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(row, column) {
    this.rowNum = row;
    this.columnNum = column;
    this.node.setPosition(utils.rowColumnPosition(column, row)); // this.type=lvdata["Lv"+comeInfo.now_lv].ice[row][column]+10;

    this.type = lvdata.ice[row][column] + 10; // this.node.getComponent(cc.Sprite).spriteFrame=cc.ZL.sprMgr.icespr[lvdata["Lv"+comeInfo.now_lv].ice[row][column]];

    this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.icespr[lvdata.ice[row][column]]; // for(let i=0;i<lvdata["Lv"+comeInfo.now_lv].target.length;i++)

    for (var i = 0; i < lvdata.target.length; i++) {
      if (this.type == 12 || this.type == 11) {
        // if(lvdata["Lv"+comeInfo.now_lv].target[i][0]==11){
        if (lvdata.target[i][0] == 11) {
          this.typenum = i;
        }
      }
    }
  },
  clear: function clear() {
    //消除这个物体
    if (this.type == 11) {
      cc.ZL.musicMgr.PlayMusicOnly(13, false);

      if (this.typenum != -1) {
        cc.ZL.iceMgr.iceArray[this.rowNum][this.columnNum] = 0;
        cc.ZL.targetMgr.clearTarget(this.node, this.typenum);
      } else {
        if (this.node) {
          this.node.destroy();
        }
      }
    } else if (this.type = 12 && this.typenum != -1) {
      cc.ZL.musicMgr.PlayMusicOnly(13, false);
      this.type = 11;
      this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.icespr[1];
      cc.ZL.targetMgr.targetNum(this.typenum);
    }
  }
});

cc._RF.pop();