
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Level/LvMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57c5egeBF5Ny7G0mWSniflP', 'LvMgr');
// newscripts/Level/LvMgr.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //星星纹理
    starSpr: [cc.SpriteFrame],
    //关卡背景
    lvSpr: [cc.SpriteFrame],
    //第一节树
    tree: cc.Node,
    //关卡预制体
    TreePrefab: cc.Prefab,
    //当前生成了几关
    nowLv: 1,
    //云彩（结尾过度用）
    cloud: cc.Prefab
  },
  onLoad: function onLoad() {
    if (cc.ZL == null) {
      cc.ZL = {};
    }

    cc.ZL.lvMgr = this; //初始化第一课树的数据

    this.tree.getComponent("Tree").InitView(this.nowLv);
    this.nowLv = 17;
  },
  start: function start() {
    this.CreatLv();
  },
  // update (dt) {},
  //生成关卡
  CreatLv: function CreatLv() {
    while (true) {
      if (this.nowLv > comeInfo.totallv) {
        break;
      }

      this.creatNewTree();
    }

    var y = cc.instantiate(this.cloud);
    this.node.addChild(y); //查看玩了多少关

    var num = Math.floor(gamedata.Lv_star / 3);
    this.node.y = -(num * 180 - 300);
  },
  //生成一个新树
  creatNewTree: function creatNewTree() {
    var t = cc.instantiate(this.TreePrefab);
    this.node.addChild(t);
    t.getComponent("Tree").InitView(this.nowLv);
    this.nowLv = this.nowLv + 15;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0xldmVsL0x2TWdyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhclNwciIsIlNwcml0ZUZyYW1lIiwibHZTcHIiLCJ0cmVlIiwiTm9kZSIsIlRyZWVQcmVmYWIiLCJQcmVmYWIiLCJub3dMdiIsImNsb3VkIiwib25Mb2FkIiwiWkwiLCJsdk1nciIsImdldENvbXBvbmVudCIsIkluaXRWaWV3Iiwic3RhcnQiLCJDcmVhdEx2IiwiY29tZUluZm8iLCJ0b3RhbGx2IiwiY3JlYXROZXdUcmVlIiwieSIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwibnVtIiwiTWF0aCIsImZsb29yIiwiZ2FtZWRhdGEiLCJMdl9zdGFyIiwidCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsT0FBTyxFQUFDLENBQUNKLEVBQUUsQ0FBQ0ssV0FBSixDQUZBO0FBR1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFDLENBQUNOLEVBQUUsQ0FBQ0ssV0FBSixDQUpFO0FBS1I7QUFDQUUsSUFBQUEsSUFBSSxFQUFDUCxFQUFFLENBQUNRLElBTkE7QUFPUjtBQUNBQyxJQUFBQSxVQUFVLEVBQUNULEVBQUUsQ0FBQ1UsTUFSTjtBQVNSO0FBQ0FDLElBQUFBLEtBQUssRUFBQyxDQVZFO0FBYVI7QUFDQUMsSUFBQUEsS0FBSyxFQUFDWixFQUFFLENBQUNVO0FBZEQsR0FIUDtBQW9CTEcsRUFBQUEsTUFwQkssb0JBb0JLO0FBQ04sUUFBR2IsRUFBRSxDQUFDYyxFQUFILElBQU8sSUFBVixFQUFlO0FBQ1hkLE1BQUFBLEVBQUUsQ0FBQ2MsRUFBSCxHQUFNLEVBQU47QUFDSDs7QUFDRGQsSUFBQUEsRUFBRSxDQUFDYyxFQUFILENBQU1DLEtBQU4sR0FBWSxJQUFaLENBSk0sQ0FLTjs7QUFDQSxTQUFLUixJQUFMLENBQVVTLFlBQVYsQ0FBdUIsTUFBdkIsRUFBK0JDLFFBQS9CLENBQXdDLEtBQUtOLEtBQTdDO0FBQ0EsU0FBS0EsS0FBTCxHQUFZLEVBQVo7QUFDSCxHQTVCSTtBQThCTE8sRUFBQUEsS0E5QkssbUJBOEJJO0FBQ0wsU0FBS0MsT0FBTDtBQUNILEdBaENJO0FBbUNMO0FBQ0E7QUFDQUEsRUFBQUEsT0FyQ0sscUJBcUNJO0FBQ0wsV0FBTSxJQUFOLEVBQVc7QUFDUCxVQUFHLEtBQUtSLEtBQUwsR0FBV1MsUUFBUSxDQUFDQyxPQUF2QixFQUErQjtBQUMzQjtBQUNIOztBQUNELFdBQUtDLFlBQUw7QUFDSDs7QUFDRCxRQUFJQyxDQUFDLEdBQUN2QixFQUFFLENBQUN3QixXQUFILENBQWUsS0FBS1osS0FBcEIsQ0FBTjtBQUNBLFNBQUthLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsQ0FBbkIsRUFSSyxDQVNMOztBQUNBLFFBQUlJLEdBQUcsR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEsQ0FBQ0MsT0FBVCxHQUFpQixDQUE1QixDQUFSO0FBQ0EsU0FBS04sSUFBTCxDQUFVRixDQUFWLEdBQVksRUFBRUksR0FBRyxHQUFDLEdBQUosR0FBUSxHQUFWLENBQVo7QUFDSCxHQWpESTtBQWtETDtBQUNBTCxFQUFBQSxZQW5ESywwQkFtRFM7QUFDVixRQUFJVSxDQUFDLEdBQUNoQyxFQUFFLENBQUN3QixXQUFILENBQWUsS0FBS2YsVUFBcEIsQ0FBTjtBQUNBLFNBQUtnQixJQUFMLENBQVVDLFFBQVYsQ0FBbUJNLENBQW5CO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ2hCLFlBQUYsQ0FBZSxNQUFmLEVBQXVCQyxRQUF2QixDQUFnQyxLQUFLTixLQUFyQztBQUNBLFNBQUtBLEtBQUwsR0FBWSxLQUFLQSxLQUFMLEdBQVcsRUFBdkI7QUFDSDtBQXhESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+aYn+aYn+e6ueeQhlxyXG4gICAgICAgIHN0YXJTcHI6W2NjLlNwcml0ZUZyYW1lXSxcclxuICAgICAgICAvL+WFs+WNoeiDjOaZr1xyXG4gICAgICAgIGx2U3ByOltjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgLy/nrKzkuIDoioLmoJFcclxuICAgICAgICB0cmVlOmNjLk5vZGUsXHJcbiAgICAgICAgLy/lhbPljaHpooTliLbkvZNcclxuICAgICAgICBUcmVlUHJlZmFiOmNjLlByZWZhYixcclxuICAgICAgICAvL+W9k+WJjeeUn+aIkOS6huWHoOWFs1xyXG4gICAgICAgIG5vd0x2OjEsXHJcblxyXG5cclxuICAgICAgICAvL+S6keW9qe+8iOe7k+Wwvui/h+W6pueUqO+8iVxyXG4gICAgICAgIGNsb3VkOmNjLlByZWZhYixcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBpZihjYy5aTD09bnVsbCl7XHJcbiAgICAgICAgICAgIGNjLlpMPXt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5aTC5sdk1ncj10aGlzO1xyXG4gICAgICAgIC8v5Yid5aeL5YyW56ys5LiA6K++5qCR55qE5pWw5o2uXHJcbiAgICAgICAgdGhpcy50cmVlLmdldENvbXBvbmVudChcIlRyZWVcIikuSW5pdFZpZXcodGhpcy5ub3dMdik7XHJcbiAgICAgICAgdGhpcy5ub3dMdiA9MTc7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLkNyZWF0THYoKTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG4gICAgLy/nlJ/miJDlhbPljaFcclxuICAgIENyZWF0THYoKXtcclxuICAgICAgICB3aGlsZSh0cnVlKXtcclxuICAgICAgICAgICAgaWYodGhpcy5ub3dMdj5jb21lSW5mby50b3RhbGx2KXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXROZXdUcmVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB5PWNjLmluc3RhbnRpYXRlKHRoaXMuY2xvdWQpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh5KTtcclxuICAgICAgICAvL+afpeeci+eOqeS6huWkmuWwkeWFs1xyXG4gICAgICAgIGxldCBudW09TWF0aC5mbG9vcihnYW1lZGF0YS5Mdl9zdGFyLzMpO1xyXG4gICAgICAgIHRoaXMubm9kZS55PS0obnVtKjE4MC0zMDApO1xyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5LiA5Liq5paw5qCRXHJcbiAgICBjcmVhdE5ld1RyZWUoKXtcclxuICAgICAgICBsZXQgdD1jYy5pbnN0YW50aWF0ZSh0aGlzLlRyZWVQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0KTtcclxuICAgICAgICB0LmdldENvbXBvbmVudChcIlRyZWVcIikuSW5pdFZpZXcodGhpcy5ub3dMdik7XHJcbiAgICAgICAgdGhpcy5ub3dMdiA9dGhpcy5ub3dMdisxNTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=