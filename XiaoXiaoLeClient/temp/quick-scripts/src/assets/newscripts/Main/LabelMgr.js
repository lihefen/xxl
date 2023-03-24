"use strict";
cc._RF.push(module, '3ec3cT+cIJAaLx7r+fWgs/p', 'LabelMgr');
// newscripts/Main/LabelMgr.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    labelPrefab: cc.Prefab
  },
  onLoad: function onLoad() {
    this.LabelPools = new cc.NodePool();

    for (var i = 0; i < 5; i++) {
      var a = cc.instantiate(this.labelPrefab);
      this.LabelPools.put(a);
    }

    cc.ZL.LabelMgr = this;
  },
  start: function start() {},
  // update (dt) {},
  creatLabel: function creatLabel(pos, num) {
    var a;

    if (this.LabelPools.size() > 0) {
      a = this.LabelPools.get();
    } else {
      a = cc.instantiate(this.labelPrefab);
    }

    this.node.addChild(a);
    a.setPosition(pos.x, pos.y + 40);
    a.getComponent("Label").Init(num);
  }
});

cc._RF.pop();