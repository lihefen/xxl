
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Mains/ice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f54a3zhS/dHHKJR7kxsLnlb', 'ice');
// newscripts/Mains/ice.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //行号
    rowNum: -1,
    //列号
    columnNum: -1,
    //类型
    type: -1,
    //目标位置
    typenum: -1
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(row, column) {
    this.rowNum = row;
    this.columnNum = column;
    this.node.setPosition(utils.rowColumnPosition(column, row)); // this.type=lvdata["Lv"+comeInfo.now_lv].ice[row][column]+10;

    this.type = lvdata.ice[row][column] + 10; // this.node.getComponent(cc.Sprite).spriteFrame=cc.ZL.sprMgr.icespr[lvdata["Lv"+comeInfo.now_lv].ice[row][column]];

    this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.icespr[lvdata.ice[row][column]]; // for(let i=0;i<lvdata["Lv"+comeInfo.now_lv].target.length;i++)

    for (var i = 0; i < lvdata.target.length; i++) {
      if (this.type == 12 || this.type == 11) {
        // if(lvdata["Lv"+comeInfo.now_lv].target[i][0]==11){
        if (lvdata.target[i][0] == 11) {
          this.typenum = i;
        }
      }
    }
  },
  clear: function clear() {
    //消除这个物体
    if (this.type == 11) {
      cc.ZL.musicMgr.PlayMusicOnly(13, false);

      if (this.typenum != -1) {
        cc.ZL.iceMgr.iceArray[this.rowNum][this.columnNum] = 0;
        cc.ZL.targetMgr.clearTarget(this.node, this.typenum);
      } else {
        if (this.node) {
          this.node.destroy();
        }
      }
    } else if (this.type = 12 && this.typenum != -1) {
      cc.ZL.musicMgr.PlayMusicOnly(13, false);
      this.type = 11;
      this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.icespr[1];
      cc.ZL.targetMgr.targetNum(this.typenum);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW5zL2ljZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJvd051bSIsImNvbHVtbk51bSIsInR5cGUiLCJ0eXBlbnVtIiwic3RhcnQiLCJJbml0VmlldyIsInJvdyIsImNvbHVtbiIsIm5vZGUiLCJzZXRQb3NpdGlvbiIsInV0aWxzIiwicm93Q29sdW1uUG9zaXRpb24iLCJsdmRhdGEiLCJpY2UiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlpMIiwic3ByTWdyIiwiaWNlc3ByIiwiaSIsInRhcmdldCIsImxlbmd0aCIsImNsZWFyIiwibXVzaWNNZ3IiLCJQbGF5TXVzaWNPbmx5IiwiaWNlTWdyIiwiaWNlQXJyYXkiLCJ0YXJnZXRNZ3IiLCJjbGVhclRhcmdldCIsImRlc3Ryb3kiLCJ0YXJnZXROdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLE1BQU0sRUFBRSxDQUFDLENBRkQ7QUFHUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQyxDQUpKO0FBS1I7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLENBQUMsQ0FOQztBQU9SO0FBQ0FDLElBQUFBLE9BQU8sRUFBRSxDQUFDO0FBUkYsR0FIUDtBQWNMO0FBRUFDLEVBQUFBLEtBaEJLLG1CQWdCRyxDQUVQLENBbEJJO0FBb0JMO0FBQ0FDLEVBQUFBLFFBckJLLG9CQXFCSUMsR0FyQkosRUFxQlNDLE1BckJULEVBcUJpQjtBQUNsQixTQUFLUCxNQUFMLEdBQWNNLEdBQWQ7QUFDQSxTQUFLTCxTQUFMLEdBQWlCTSxNQUFqQjtBQUNBLFNBQUtDLElBQUwsQ0FBVUMsV0FBVixDQUFzQkMsS0FBSyxDQUFDQyxpQkFBTixDQUF3QkosTUFBeEIsRUFBZ0NELEdBQWhDLENBQXRCLEVBSGtCLENBSWxCOztBQUNBLFNBQUtKLElBQUwsR0FBWVUsTUFBTSxDQUFDQyxHQUFQLENBQVdQLEdBQVgsRUFBZ0JDLE1BQWhCLElBQTBCLEVBQXRDLENBTGtCLENBTWxCOztBQUNBLFNBQUtDLElBQUwsQ0FBVU0sWUFBVixDQUF1QmxCLEVBQUUsQ0FBQ21CLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUFnRHBCLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTUMsTUFBTixDQUFhQyxNQUFiLENBQW9CUCxNQUFNLENBQUNDLEdBQVAsQ0FBV1AsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBcEIsQ0FBaEQsQ0FQa0IsQ0FRbEI7O0FBQ0EsU0FBSyxJQUFJYSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUixNQUFNLENBQUNTLE1BQVAsQ0FBY0MsTUFBbEMsRUFBMENGLENBQUMsRUFBM0MsRUFBK0M7QUFDM0MsVUFBSSxLQUFLbEIsSUFBTCxJQUFhLEVBQWIsSUFBbUIsS0FBS0EsSUFBTCxJQUFhLEVBQXBDLEVBQXdDO0FBQ3BDO0FBQ0EsWUFBSVUsTUFBTSxDQUFDUyxNQUFQLENBQWNELENBQWQsRUFBaUIsQ0FBakIsS0FBdUIsRUFBM0IsRUFBK0I7QUFDM0IsZUFBS2pCLE9BQUwsR0FBZWlCLENBQWY7QUFDSDtBQUNKO0FBQ0o7QUFDSixHQXRDSTtBQXVDTEcsRUFBQUEsS0F2Q0ssbUJBdUNHO0FBQUM7QUFFTCxRQUFJLEtBQUtyQixJQUFMLElBQWEsRUFBakIsRUFBcUI7QUFDakJOLE1BQUFBLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTU8sUUFBTixDQUFlQyxhQUFmLENBQTZCLEVBQTdCLEVBQWlDLEtBQWpDOztBQUNBLFVBQUksS0FBS3RCLE9BQUwsSUFBZ0IsQ0FBQyxDQUFyQixFQUF3QjtBQUNwQlAsUUFBQUEsRUFBRSxDQUFDcUIsRUFBSCxDQUFNUyxNQUFOLENBQWFDLFFBQWIsQ0FBc0IsS0FBSzNCLE1BQTNCLEVBQW1DLEtBQUtDLFNBQXhDLElBQXFELENBQXJEO0FBQ0FMLFFBQUFBLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTVcsU0FBTixDQUFnQkMsV0FBaEIsQ0FBNEIsS0FBS3JCLElBQWpDLEVBQXVDLEtBQUtMLE9BQTVDO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsWUFBSSxLQUFLSyxJQUFULEVBQWU7QUFDWCxlQUFLQSxJQUFMLENBQVVzQixPQUFWO0FBQ0g7QUFFSjtBQUVKLEtBWkQsTUFZTyxJQUFJLEtBQUs1QixJQUFMLEdBQVksTUFBTSxLQUFLQyxPQUFMLElBQWdCLENBQUMsQ0FBdkMsRUFBMEM7QUFDN0NQLE1BQUFBLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTU8sUUFBTixDQUFlQyxhQUFmLENBQTZCLEVBQTdCLEVBQWlDLEtBQWpDO0FBQ0EsV0FBS3ZCLElBQUwsR0FBWSxFQUFaO0FBQ0EsV0FBS00sSUFBTCxDQUFVTSxZQUFWLENBQXVCbEIsRUFBRSxDQUFDbUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdEcEIsRUFBRSxDQUFDcUIsRUFBSCxDQUFNQyxNQUFOLENBQWFDLE1BQWIsQ0FBb0IsQ0FBcEIsQ0FBaEQ7QUFDQXZCLE1BQUFBLEVBQUUsQ0FBQ3FCLEVBQUgsQ0FBTVcsU0FBTixDQUFnQkcsU0FBaEIsQ0FBMEIsS0FBSzVCLE9BQS9CO0FBQ0g7QUFFSjtBQTVESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+ihjOWPt1xyXG4gICAgICAgIHJvd051bTogLTEsXHJcbiAgICAgICAgLy/liJflj7dcclxuICAgICAgICBjb2x1bW5OdW06IC0xLFxyXG4gICAgICAgIC8v57G75Z6LXHJcbiAgICAgICAgdHlwZTogLTEsXHJcbiAgICAgICAgLy/nm67moIfkvY3nva5cclxuICAgICAgICB0eXBlbnVtOiAtMSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBJbml0Vmlldyhyb3csIGNvbHVtbikge1xyXG4gICAgICAgIHRoaXMucm93TnVtID0gcm93O1xyXG4gICAgICAgIHRoaXMuY29sdW1uTnVtID0gY29sdW1uO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih1dGlscy5yb3dDb2x1bW5Qb3NpdGlvbihjb2x1bW4sIHJvdykpO1xyXG4gICAgICAgIC8vIHRoaXMudHlwZT1sdmRhdGFbXCJMdlwiK2NvbWVJbmZvLm5vd19sdl0uaWNlW3Jvd11bY29sdW1uXSsxMDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBsdmRhdGEuaWNlW3Jvd11bY29sdW1uXSArIDEwO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZT1jYy5aTC5zcHJNZ3IuaWNlc3ByW2x2ZGF0YVtcIkx2XCIrY29tZUluZm8ubm93X2x2XS5pY2Vbcm93XVtjb2x1bW5dXTtcclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjYy5aTC5zcHJNZ3IuaWNlc3ByW2x2ZGF0YS5pY2Vbcm93XVtjb2x1bW5dXTtcclxuICAgICAgICAvLyBmb3IobGV0IGk9MDtpPGx2ZGF0YVtcIkx2XCIrY29tZUluZm8ubm93X2x2XS50YXJnZXQubGVuZ3RoO2krKylcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGx2ZGF0YS50YXJnZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PSAxMiB8fCB0aGlzLnR5cGUgPT0gMTEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKGx2ZGF0YVtcIkx2XCIrY29tZUluZm8ubm93X2x2XS50YXJnZXRbaV1bMF09PTExKXtcclxuICAgICAgICAgICAgICAgIGlmIChsdmRhdGEudGFyZ2V0W2ldWzBdID09IDExKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlbnVtID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGVhcigpIHsvL+a2iOmZpOi/meS4queJqeS9k1xyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IDExKSB7XHJcbiAgICAgICAgICAgIGNjLlpMLm11c2ljTWdyLlBsYXlNdXNpY09ubHkoMTMsIGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZW51bSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2MuWkwuaWNlTWdyLmljZUFycmF5W3RoaXMucm93TnVtXVt0aGlzLmNvbHVtbk51bV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgY2MuWkwudGFyZ2V0TWdyLmNsZWFyVGFyZ2V0KHRoaXMubm9kZSwgdGhpcy50eXBlbnVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9IDEyICYmIHRoaXMudHlwZW51bSAhPSAtMSkge1xyXG4gICAgICAgICAgICBjYy5aTC5tdXNpY01nci5QbGF5TXVzaWNPbmx5KDEzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IDExO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjYy5aTC5zcHJNZ3IuaWNlc3ByWzFdO1xyXG4gICAgICAgICAgICBjYy5aTC50YXJnZXRNZ3IudGFyZ2V0TnVtKHRoaXMudHlwZW51bSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==