
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/cube.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vY3ViZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvbHVtbk51bSIsInJvd051bSIsInN0YXJ0IiwiaW5pdEN1YmUiLCJjb2x1bW5udW0iLCJyb3dudW0iLCJub2RlIiwic2V0UG9zaXRpb24iLCJ1dGlscyIsInJvd0NvbHVtblBvc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsU0FBUyxFQUFDLENBQUMsQ0FKSDtBQUtSO0FBQ0FDLElBQUFBLE1BQU0sRUFBQyxDQUFDO0FBTkEsR0FIUDtBQVdMO0FBQ0FDLEVBQUFBLEtBWkssbUJBWUksQ0FDUixDQWJJO0FBY0w7QUFDQUMsRUFBQUEsUUFmSyxvQkFlSUMsU0FmSixFQWVjQyxNQWZkLEVBZXFCO0FBQ3RCLFNBQUtMLFNBQUwsR0FBZUksU0FBZjtBQUNBLFNBQUtILE1BQUwsR0FBWUksTUFBWjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUFzQkMsS0FBSyxDQUFDQyxpQkFBTixDQUF3QkwsU0FBeEIsRUFBa0NDLE1BQWxDLENBQXRCO0FBQ0g7QUFuQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+aVsOWtl+aYvuekuuahhlxyXG4gICAgICAgIC8vbnVtbGFiZWw6Y2MuTGFiZWwsXHJcbiAgICAgICAgLy/liJflj7dcclxuICAgICAgICBjb2x1bW5OdW06LTEsXHJcbiAgICAgICAgLy/ooYzlj7dcclxuICAgICAgICByb3dOdW06LTEsXHJcbiAgICB9LFxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG4gICAgaW5pdEN1YmUoY29sdW1ubnVtLHJvd251bSl7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5OdW09Y29sdW1ubnVtO1xyXG4gICAgICAgIHRoaXMucm93TnVtPXJvd251bTtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odXRpbHMucm93Q29sdW1uUG9zaXRpb24oY29sdW1ubnVtLHJvd251bSkpO1xyXG4gICAgfVxyXG59KTtcclxuIl19