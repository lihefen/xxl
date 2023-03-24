"use strict";
cc._RF.push(module, 'acaceuzGR5MGqH/uZLZ8XI0', 'select');
// newscripts/Mains/select.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    var fn = cc.fadeTo(0.5, 100);
    var fn1 = cc.fadeTo(0.5, 255);
    var seq = cc.sequence([fn, fn1]); //顺序执行

    var rep = cc.repeatForever(seq); //一直重复执行seq

    this.node.runAction(rep);
    this.node.active = false;
  }
});

cc._RF.pop();