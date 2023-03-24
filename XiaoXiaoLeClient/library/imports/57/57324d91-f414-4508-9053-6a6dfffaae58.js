"use strict";
cc._RF.push(module, '573242R9BRFCJBTam3/+q5Y', 'goldeff');
// newscripts/Main/goldeff.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// music:{
    //     type:cc.AudioClip,
    //     default:null,
    // }
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  //敌人死亡后的方块移动
  cube_move: function cube_move(speed, pos, manager) {
    this.node.stopAllActions();
    var x = (Math.floor(Math.random() * 100) + 10) * 20;
    var y = (Math.floor(Math.random() * 100) + 10) * 20;
    var num = Math.floor(Math.random() * 4);
    var dir = cc.v2(x, y);
    var len = dir.mag();
    var t = len / (speed * 0.2); //this.is_rot=true;

    if (num == 0) {
      this.node.runAction(cc.moveTo(t, x, y));
    } else if (num == 1) {
      this.node.runAction(cc.moveTo(t, -x, y));
    } else if (num == 2) {
      this.node.runAction(cc.moveTo(t, x, -y));
    } else if (num == 3) {
      this.node.runAction(cc.moveTo(t, -x, -y));
    }

    setTimeout(function () {
      if (this.node) {
        this.node.stopAllActions();
        var dir2 = pos.sub(this.node.getPosition());
        var len2 = dir2.mag();
        var t2 = len2 / speed;
        this.node.runAction(cc.moveTo(t2, pos));
        setTimeout(function () {
          if (this.node) {
            manager.clearEffPool.put(this.node);
          }
        }.bind(this), t2 * 1000);
      }
    }.bind(this), 200);
  }
});

cc._RF.pop();