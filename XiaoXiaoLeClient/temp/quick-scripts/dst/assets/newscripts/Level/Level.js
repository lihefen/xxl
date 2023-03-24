
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Level/Level.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d707msxcVOU71QxklkJ1Pa', 'Level');
// newscripts/Level/Level.js

"use strict";

var com = require('Common');

cc.Class({
  "extends": cc.Component,
  properties: {
    //精力条
    energyprogress: cc.ProgressBar,
    energyLabel: cc.Label,
    //金币框
    goldLabel: cc.Label,
    //星星框
    //starLabel:cc.Label,
    //遮罩
    mask: cc.Node,
    //商店预制体
    shopPrefab: cc.Prefab,
    shop: null,
    rank: cc.Prefab
  },
  onLoad: function onLoad() {
    if (cc.ZL == null) {
      cc.ZL = {};
    }

    cc.ZL.Level = this;

    if (gamedata.bg_music) {
      cc.audioEngine.resumeAll();
    }
  },
  start: function start() {
    // this.closeMask();
    //查看可以回复多少体力
    // let num=Date.now();
    // if(gamedata.energy<30){
    //     //查看回复体力的时间差(5分钟回复一体力)
    //     //console.log(num-gamedata.timer);
    //     let scend=Math.floor((num-gamedata.timer)/100000);
    //     //console.log(scend);
    //     if(scend>1){
    //         gamedata.energy +=scend;
    //         if(gamedata.energy>30){
    //             gamedata.energy=30;
    //         }
    //         gamedata.timer=Date.now();
    //         gamedata.bc_energy();
    //         gamedata.bc_timer();
    //     }
    // }else{
    //     gamedata.timer=Date.now();
    //     gamedata.bc_energy();
    //     gamedata.bc_timer(); 
    // }
    // console.log('123123123123', gamedata.energy)
    this.energyLabel.string = gamedata.energy;
    this.energyprogress.progress = gamedata.energy / 30;
  },
  update: function update(dt) {
    this.goldLabel.string = gamedata.gold;
    this.energyLabel.string = gamedata.energy;
    this.energyprogress.progress = gamedata.energy / 30;
  },
  //打开商店
  openShop: function openShop() {
    if (this.shop == null) {
      this.shop = cc.instantiate(this.shopPrefab);
      this.node.addChild(this.shop);
      this.shop.setPosition(0, 2000);
    }

    this.shop.getComponent("Shop").Open();
    this.OpenMask();
  },
  //打开遮罩
  OpenMask: function OpenMask() {
    this.mask.active = true; // this.mask.runAction(cc.fadeTo(0.2,200));
  },
  //关闭遮罩
  closeMask: function closeMask() {
    console.log('closeMask');
    this.mask.active = false; // this.mask.opacity=0;
  },
  onDestroy: function onDestroy() {
    cc.ZL.Level = null;
  },
  share: function share() {
    com.WxShare();
  },
  onOpenRank: function onOpenRank() {
    var node = cc.instantiate(this.rank);
    this.node.addChild(node);
    this.OpenMask();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0xldmVsL0xldmVsLmpzIl0sIm5hbWVzIjpbImNvbSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImVuZXJneXByb2dyZXNzIiwiUHJvZ3Jlc3NCYXIiLCJlbmVyZ3lMYWJlbCIsIkxhYmVsIiwiZ29sZExhYmVsIiwibWFzayIsIk5vZGUiLCJzaG9wUHJlZmFiIiwiUHJlZmFiIiwic2hvcCIsInJhbmsiLCJvbkxvYWQiLCJaTCIsIkxldmVsIiwiZ2FtZWRhdGEiLCJiZ19tdXNpYyIsImF1ZGlvRW5naW5lIiwicmVzdW1lQWxsIiwic3RhcnQiLCJzdHJpbmciLCJlbmVyZ3kiLCJwcm9ncmVzcyIsInVwZGF0ZSIsImR0IiwiZ29sZCIsIm9wZW5TaG9wIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsIk9wZW4iLCJPcGVuTWFzayIsImFjdGl2ZSIsImNsb3NlTWFzayIsImNvbnNvbGUiLCJsb2ciLCJvbkRlc3Ryb3kiLCJzaGFyZSIsIld4U2hhcmUiLCJvbk9wZW5SYW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLEdBQUcsR0FBQ0MsT0FBTyxDQUFDLFFBQUQsQ0FBZjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ0o7QUFDQUMsSUFBQUEsY0FBYyxFQUFDSixFQUFFLENBQUNLLFdBRmQ7QUFHSkMsSUFBQUEsV0FBVyxFQUFDTixFQUFFLENBQUNPLEtBSFg7QUFJSjtBQUNBQyxJQUFBQSxTQUFTLEVBQUNSLEVBQUUsQ0FBQ08sS0FMVDtBQU1KO0FBQ0E7QUFFQTtBQUNBRSxJQUFBQSxJQUFJLEVBQUNULEVBQUUsQ0FBQ1UsSUFWSjtBQVdKO0FBQ0FDLElBQUFBLFVBQVUsRUFBQ1gsRUFBRSxDQUFDWSxNQVpWO0FBYUpDLElBQUFBLElBQUksRUFBQyxJQWJEO0FBY0pDLElBQUFBLElBQUksRUFBRWQsRUFBRSxDQUFDWTtBQWRMLEdBSFA7QUFvQkxHLEVBQUFBLE1BcEJLLG9CQW9CSztBQUNOLFFBQUdmLEVBQUUsQ0FBQ2dCLEVBQUgsSUFBTyxJQUFWLEVBQWU7QUFDWGhCLE1BQUFBLEVBQUUsQ0FBQ2dCLEVBQUgsR0FBTSxFQUFOO0FBQ0g7O0FBQ0RoQixJQUFBQSxFQUFFLENBQUNnQixFQUFILENBQU1DLEtBQU4sR0FBWSxJQUFaOztBQUNBLFFBQUdDLFFBQVEsQ0FBQ0MsUUFBWixFQUFxQjtBQUNqQm5CLE1BQUFBLEVBQUUsQ0FBQ29CLFdBQUgsQ0FBZUMsU0FBZjtBQUNIO0FBQ0osR0E1Qkk7QUE4QkxDLEVBQUFBLEtBOUJLLG1CQThCSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFLaEIsV0FBTCxDQUFpQmlCLE1BQWpCLEdBQXdCTCxRQUFRLENBQUNNLE1BQWpDO0FBQ0EsU0FBS3BCLGNBQUwsQ0FBb0JxQixRQUFwQixHQUE2QlAsUUFBUSxDQUFDTSxNQUFULEdBQWdCLEVBQTdDO0FBQ0gsR0F6REk7QUEyRExFLEVBQUFBLE1BM0RLLGtCQTJER0MsRUEzREgsRUEyRE87QUFDUixTQUFLbkIsU0FBTCxDQUFlZSxNQUFmLEdBQXNCTCxRQUFRLENBQUNVLElBQS9CO0FBQ0EsU0FBS3RCLFdBQUwsQ0FBaUJpQixNQUFqQixHQUF3QkwsUUFBUSxDQUFDTSxNQUFqQztBQUNBLFNBQUtwQixjQUFMLENBQW9CcUIsUUFBcEIsR0FBNkJQLFFBQVEsQ0FBQ00sTUFBVCxHQUFnQixFQUE3QztBQUVILEdBaEVJO0FBaUVMO0FBQ0FLLEVBQUFBLFFBbEVLLHNCQWtFSztBQUNOLFFBQUcsS0FBS2hCLElBQUwsSUFBVyxJQUFkLEVBQW1CO0FBQ2YsV0FBS0EsSUFBTCxHQUFVYixFQUFFLENBQUM4QixXQUFILENBQWUsS0FBS25CLFVBQXBCLENBQVY7QUFDQSxXQUFLb0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CLEtBQUtuQixJQUF4QjtBQUNBLFdBQUtBLElBQUwsQ0FBVW9CLFdBQVYsQ0FBc0IsQ0FBdEIsRUFBd0IsSUFBeEI7QUFDSDs7QUFDRCxTQUFLcEIsSUFBTCxDQUFVcUIsWUFBVixDQUF1QixNQUF2QixFQUErQkMsSUFBL0I7QUFDQSxTQUFLQyxRQUFMO0FBQ0gsR0ExRUk7QUEyRUw7QUFDQUEsRUFBQUEsUUE1RUssc0JBNEVLO0FBQ04sU0FBSzNCLElBQUwsQ0FBVTRCLE1BQVYsR0FBaUIsSUFBakIsQ0FETSxDQUVOO0FBQ0gsR0EvRUk7QUFnRkw7QUFDQUMsRUFBQUEsU0FqRkssdUJBaUZNO0FBQ1BDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQSxTQUFLL0IsSUFBTCxDQUFVNEIsTUFBVixHQUFpQixLQUFqQixDQUZPLENBR1A7QUFDSCxHQXJGSTtBQXNGTEksRUFBQUEsU0F0RkssdUJBc0ZNO0FBQ1B6QyxJQUFBQSxFQUFFLENBQUNnQixFQUFILENBQU1DLEtBQU4sR0FBWSxJQUFaO0FBQ0gsR0F4Rkk7QUEwRkx5QixFQUFBQSxLQTFGSyxtQkEwRkU7QUFDSDVDLElBQUFBLEdBQUcsQ0FBQzZDLE9BQUo7QUFDSCxHQTVGSTtBQThGTEMsRUFBQUEsVUE5Rkssd0JBOEZRO0FBQ1QsUUFBSWIsSUFBSSxHQUFFL0IsRUFBRSxDQUFDOEIsV0FBSCxDQUFlLEtBQUtoQixJQUFwQixDQUFWO0FBQ0EsU0FBS2lCLElBQUwsQ0FBVUMsUUFBVixDQUFtQkQsSUFBbkI7QUFDQSxTQUFLSyxRQUFMO0FBQ0g7QUFsR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbT1yZXF1aXJlKCdDb21tb24nKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgLy/nsr7lipvmnaFcclxuICAgICAgICAgICAgZW5lcmd5cHJvZ3Jlc3M6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIGVuZXJneUxhYmVsOmNjLkxhYmVsLFxyXG4gICAgICAgICAgICAvL+mHkeW4geahhlxyXG4gICAgICAgICAgICBnb2xkTGFiZWw6Y2MuTGFiZWwsXHJcbiAgICAgICAgICAgIC8v5pif5pif5qGGXHJcbiAgICAgICAgICAgIC8vc3RhckxhYmVsOmNjLkxhYmVsLFxyXG5cclxuICAgICAgICAgICAgLy/pga7nvalcclxuICAgICAgICAgICAgbWFzazpjYy5Ob2RlLFxyXG4gICAgICAgICAgICAvL+WVhuW6l+mihOWItuS9k1xyXG4gICAgICAgICAgICBzaG9wUHJlZmFiOmNjLlByZWZhYixcclxuICAgICAgICAgICAgc2hvcDpudWxsLFxyXG4gICAgICAgICAgICByYW5rOiBjYy5QcmVmYWIsXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgaWYoY2MuWkw9PW51bGwpe1xyXG4gICAgICAgICAgICBjYy5aTD17fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuWkwuTGV2ZWw9dGhpcztcclxuICAgICAgICBpZihnYW1lZGF0YS5iZ19tdXNpYyl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgLy/mn6XnnIvlj6/ku6Xlm57lpI3lpJrlsJHkvZPliptcclxuICAgICAgICAvLyBsZXQgbnVtPURhdGUubm93KCk7XHJcbiAgICAgICAgLy8gaWYoZ2FtZWRhdGEuZW5lcmd5PDMwKXtcclxuICAgICAgICAvLyAgICAgLy/mn6XnnIvlm57lpI3kvZPlipvnmoTml7bpl7Tlt64oNeWIhumSn+WbnuWkjeS4gOS9k+WKmylcclxuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhudW0tZ2FtZWRhdGEudGltZXIpO1xyXG4gICAgICAgIC8vICAgICBsZXQgc2NlbmQ9TWF0aC5mbG9vcigobnVtLWdhbWVkYXRhLnRpbWVyKS8xMDAwMDApO1xyXG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHNjZW5kKTtcclxuICAgICAgICAvLyAgICAgaWYoc2NlbmQ+MSl7XHJcbiAgICAgICAgLy8gICAgICAgICBnYW1lZGF0YS5lbmVyZ3kgKz1zY2VuZDtcclxuICAgICAgICAvLyAgICAgICAgIGlmKGdhbWVkYXRhLmVuZXJneT4zMCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ2FtZWRhdGEuZW5lcmd5PTMwO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZ2FtZWRhdGEudGltZXI9RGF0ZS5ub3coKTtcclxuICAgICAgICAvLyAgICAgICAgIGdhbWVkYXRhLmJjX2VuZXJneSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2FtZWRhdGEuYmNfdGltZXIoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgIC8vICAgICBnYW1lZGF0YS50aW1lcj1EYXRlLm5vdygpO1xyXG4gICAgICAgIC8vICAgICBnYW1lZGF0YS5iY19lbmVyZ3koKTtcclxuICAgICAgICAvLyAgICAgZ2FtZWRhdGEuYmNfdGltZXIoKTsgXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcxMjMxMjMxMjMxMjMnLCBnYW1lZGF0YS5lbmVyZ3kpXHJcbiAgICAgICAgdGhpcy5lbmVyZ3lMYWJlbC5zdHJpbmc9Z2FtZWRhdGEuZW5lcmd5O1xyXG4gICAgICAgIHRoaXMuZW5lcmd5cHJvZ3Jlc3MucHJvZ3Jlc3M9Z2FtZWRhdGEuZW5lcmd5LzMwO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5nb2xkTGFiZWwuc3RyaW5nPWdhbWVkYXRhLmdvbGQ7XHJcbiAgICAgICAgdGhpcy5lbmVyZ3lMYWJlbC5zdHJpbmc9Z2FtZWRhdGEuZW5lcmd5O1xyXG4gICAgICAgIHRoaXMuZW5lcmd5cHJvZ3Jlc3MucHJvZ3Jlc3M9Z2FtZWRhdGEuZW5lcmd5LzMwO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIC8v5omT5byA5ZWG5bqXXHJcbiAgICBvcGVuU2hvcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuc2hvcD09bnVsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcD1jYy5pbnN0YW50aWF0ZSh0aGlzLnNob3BQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5zaG9wKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wLnNldFBvc2l0aW9uKDAsMjAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvcC5nZXRDb21wb25lbnQoXCJTaG9wXCIpLk9wZW4oKTtcclxuICAgICAgICB0aGlzLk9wZW5NYXNrKCk7XHJcbiAgICB9LFxyXG4gICAgLy/miZPlvIDpga7nvalcclxuICAgIE9wZW5NYXNrKCl7XHJcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIC8vIHRoaXMubWFzay5ydW5BY3Rpb24oY2MuZmFkZVRvKDAuMiwyMDApKTtcclxuICAgIH0sXHJcbiAgICAvL+WFs+mXremBrue9qVxyXG4gICAgY2xvc2VNYXNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlTWFzaycpXHJcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZT1mYWxzZTtcclxuICAgICAgICAvLyB0aGlzLm1hc2sub3BhY2l0eT0wO1xyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIGNjLlpMLkxldmVsPW51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIHNoYXJlKCl7XHJcbiAgICAgICAgY29tLld4U2hhcmUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuUmFuaygpIHtcclxuICAgICAgICBsZXQgbm9kZSA9Y2MuaW5zdGFudGlhdGUodGhpcy5yYW5rKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgdGhpcy5PcGVuTWFzaygpO1xyXG4gICAgfVxyXG59KTtcclxuIl19