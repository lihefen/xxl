"use strict";
cc._RF.push(module, 'f2152SLPgdCS5hj/9udZTIO', 'sprManager');
// newscripts/Level/sprManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //图片纹理
    spr: [cc.SpriteFrame],
    //ICE对应纹理
    icespr: [cc.SpriteFrame],
    //特效纹理
    Animspr: [cc.SpriteFrame]
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (cc.ZL == null) {
      cc.ZL = {};
    }

    cc.ZL.sprMgr = this;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();