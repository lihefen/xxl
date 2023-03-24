"use strict";
cc._RF.push(module, 'efcf24DAk5O/a+4vb1k5O1U', 'clearmusic');
// newscripts/Mains/clearmusic.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //音效
    music: {
      type: cc.AudioClip,
      "default": []
    },
    //纹理
    SPR: [cc.SpriteFrame]
  },
  onLoad: function onLoad() {
    this.node.scale = 0;
    cc.ZL.CM = this;
  },
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(num) {
    if (gamedata.music) {
      if (num <= 2) {
        return;
      }

      if (num > 2 && num <= 4) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[0];
        cc.audioEngine.play(this.music[0], false, 1);
      } else if (num > 4 && num < 6) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[1];
        cc.audioEngine.play(this.music[1], false, 1);
      } else if (num > 6 && num < 8) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[2];
        cc.audioEngine.play(this.music[2], false, 1);
      } else if (num > 8 && num < 10) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[3];
        cc.audioEngine.play(this.music[3], false, 1);
      } else if (num > 10) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[4];
        cc.audioEngine.play(this.music[4], false, 1);
      }

      this.node.runAction(cc.scaleTo(0.2, 1));
      setTimeout(function () {
        if (this.node) {
          this.node.runAction(cc.scaleTo(0.2, 0));
        }
      }.bind(this), 500);
    }
  }
});

cc._RF.pop();