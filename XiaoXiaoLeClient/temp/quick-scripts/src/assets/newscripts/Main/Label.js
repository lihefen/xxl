"use strict";
cc._RF.push(module, '687cfuzx5VGmqXazSLIJgM7', 'Label');
// newscripts/Main/Label.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {},
  Init: function Init(num) {
    this.node.stopAllActions();
    this.node.opacity = 255;
    this.node.getComponent(cc.Label).string = num;
    this.node.runAction(cc.sequence(cc.moveBy(0.5, 0, 50), cc.fadeOut(1)));
    setTimeout(function () {
      if (cc.ZL.LabelMgr.LabelPools) {
        cc.ZL.LabelMgr.LabelPools.put(this.node);
      }
    }.bind(this), 1000);
  }
});

cc._RF.pop();