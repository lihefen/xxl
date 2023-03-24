"use strict";
cc._RF.push(module, 'aa248yxSORF/78FpFGHRZtR', 'Tree');
// newscripts/Level/Tree.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //当前节点最小关卡
    lv: 0,
    //关卡节点
    lvBnt: [cc.Node],
    lvlab: [cc.Node]
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(lv) {
    this.lv = lv;

    for (var i = 0; i < this.lvBnt.length; i++) {
      if (this.lv + i > 500) {
        console.log('123123123', this.lv + i);
        this.lvBnt[i].destroy();
        this.lvlab[i].destroy();
      } else {
        this.lvBnt[i].getComponent("LvBnt").InitView(this.lv + i);
      }
    }
  }
});

cc._RF.pop();