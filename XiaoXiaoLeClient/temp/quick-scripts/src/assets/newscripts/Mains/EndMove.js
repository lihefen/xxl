"use strict";
cc._RF.push(module, 'bcc2dTAmQdOgI6o7Yl4mod9', 'EndMove');
// newscripts/Mains/EndMove.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  Move: function Move(anim, num) {
    if (anim && anim.node) {
      var pos = anim.node.getPosition();
      this.node.runAction(cc.moveTo(0.2, pos.x, pos.y + 60));
      setTimeout(function () {
        this.node.destroy(); // let num=Math.random()*2;

        if (num < 1) {
          anim.creatRowEff(false);
        } else {
          anim.creatColnumEff(false);
        }
      }.bind(this), 200);
    }
  }
});

cc._RF.pop();