"use strict";
cc._RF.push(module, '3ddbeWoI99LXbVq2NTzR/VE', 'cube');
// newscripts/Main/cube.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //数字显示框
    //numlabel:cc.Label,
    //列号
    columnNum: -1,
    //行号
    rowNum: -1
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  initCube: function initCube(columnnum, rownum) {
    this.columnNum = columnnum;
    this.rowNum = rownum;
    this.node.setPosition(utils.rowColumnPosition(columnnum, rownum));
  }
});

cc._RF.pop();