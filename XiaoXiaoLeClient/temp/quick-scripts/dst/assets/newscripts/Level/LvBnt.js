
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Level/LvBnt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '777fbavwuxH9aCnNNl2N0Kp', 'LvBnt');
// newscripts/Level/LvBnt.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    lv: 0,
    //第几关
    lvLabel: cc.Label
  },
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(lv) {
    this.lv = lv;
    this.lvLabel.string = this.lv; // console.log(gamedata, 'gamedata');

    if (this.lv <= gamedata.Lv_star) {
      //说明已经通关这一关
      //获取到星星数量
      //let starnum=gamedata.Lv_star[this.lv];
      if (!gamedata.level_stars[this.lv - 1]) {
        this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[5];
      } else {
        this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[gamedata.level_stars[this.lv - 1] + 1];
      }
    } else if (this.lv == gamedata.Lv_star + 1) {
      //可以玩的一关
      this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[1];
    } else {
      //未通关的
      // this.node.getComponent(cc.Button).interactable=false;
      this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.lvMgr.lvSpr[0];
    } // if(lv>comeInfo.totallv){
    //     this.node.getComponent(cc.Button).interactable=false;
    // }

  },
  //监听点击按钮
  Bnt: function Bnt() {
    var _this = this;

    console.log('Btn111');

    if (this.lv <= gamedata.Lv_star + 1) {
      cc.ZL.Level.mask.active = true;
      cc.loader.loadRes('levels/' + this.lv, function (err, res) {
        cc.ZL.Level.mask.active = false;

        if (err) {
          console.log('load res error=' + err);
        } else {
          // console.log(lvdata['Lv1'])
          lvdata = JSON.parse(res.text);
          lvdata['lvl'] = _this.lv; // console.log('=====>',lvdatacc)

          cc.ZL.Target.InitView(_this.lv);
          console.log(_this.lv, 'this.lv');
        }
      });
    } else {
      utils.addTips('不可以越级游戏');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0xldmVsL0x2Qm50LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibHYiLCJsdkxhYmVsIiwiTGFiZWwiLCJzdGFydCIsIkluaXRWaWV3Iiwic3RyaW5nIiwiZ2FtZWRhdGEiLCJMdl9zdGFyIiwibGV2ZWxfc3RhcnMiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJaTCIsImx2TWdyIiwibHZTcHIiLCJCbnQiLCJjb25zb2xlIiwibG9nIiwiTGV2ZWwiLCJtYXNrIiwiYWN0aXZlIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInJlcyIsImx2ZGF0YSIsIkpTT04iLCJwYXJzZSIsInRleHQiLCJUYXJnZXQiLCJ1dGlscyIsImFkZFRpcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxFQUFFLEVBQUUsQ0FESTtBQUNEO0FBQ1BDLElBQUFBLE9BQU8sRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEdBSFA7QUFPTDtBQUNBQyxFQUFBQSxLQVJLLG1CQVFHLENBQUUsQ0FSTDtBQVNMO0FBQ0FDLEVBQUFBLFFBVkssb0JBVUlKLEVBVkosRUFVUTtBQUNULFNBQUtBLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLE9BQUwsQ0FBYUksTUFBYixHQUFzQixLQUFLTCxFQUEzQixDQUZTLENBR1Q7O0FBQ0EsUUFBSSxLQUFLQSxFQUFMLElBQVdNLFFBQVEsQ0FBQ0MsT0FBeEIsRUFBaUM7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsVUFBSSxDQUFDRCxRQUFRLENBQUNFLFdBQVQsQ0FBcUIsS0FBS1IsRUFBTCxHQUFVLENBQS9CLENBQUwsRUFBd0M7QUFDcEMsYUFBS1MsSUFBTCxDQUFVQyxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUFnRGhCLEVBQUUsQ0FBQ2lCLEVBQUgsQ0FBTUMsS0FBTixDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQWhEO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS04sSUFBTCxDQUFVQyxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUNJaEIsRUFBRSxDQUFDaUIsRUFBSCxDQUFNQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JULFFBQVEsQ0FBQ0UsV0FBVCxDQUFxQixLQUFLUixFQUFMLEdBQVUsQ0FBL0IsSUFBb0MsQ0FBdEQsQ0FESjtBQUVIO0FBQ0osS0FWRCxNQVVPLElBQUksS0FBS0EsRUFBTCxJQUFXTSxRQUFRLENBQUNDLE9BQVQsR0FBbUIsQ0FBbEMsRUFBcUM7QUFDeEM7QUFDQSxXQUFLRSxJQUFMLENBQVVDLFlBQVYsQ0FBdUJkLEVBQUUsQ0FBQ2UsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdEaEIsRUFBRSxDQUFDaUIsRUFBSCxDQUFNQyxLQUFOLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsQ0FBaEQ7QUFDSCxLQUhNLE1BR0E7QUFDSDtBQUNBO0FBQ0EsV0FBS04sSUFBTCxDQUFVQyxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUFnRGhCLEVBQUUsQ0FBQ2lCLEVBQUgsQ0FBTUMsS0FBTixDQUFZQyxLQUFaLENBQWtCLENBQWxCLENBQWhEO0FBQ0gsS0FyQlEsQ0FzQlQ7QUFDQTtBQUNBOztBQUNILEdBbkNJO0FBcUNMO0FBQ0FDLEVBQUFBLEdBdENLLGlCQXNDQztBQUFBOztBQUNGQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaOztBQUNBLFFBQUksS0FBS2xCLEVBQUwsSUFBV00sUUFBUSxDQUFDQyxPQUFULEdBQW1CLENBQWxDLEVBQXFDO0FBQ2pDWCxNQUFBQSxFQUFFLENBQUNpQixFQUFILENBQU1NLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQXpCLE1BQUFBLEVBQUUsQ0FBQzBCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixZQUFZLEtBQUt2QixFQUFuQyxFQUF1QyxVQUFDd0IsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakQ3QixRQUFBQSxFQUFFLENBQUNpQixFQUFILENBQU1NLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsS0FBMUI7O0FBQ0EsWUFBSUcsR0FBSixFQUFTO0FBQ0xQLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFvQk0sR0FBaEM7QUFDSCxTQUZELE1BRU87QUFDSDtBQUNBRSxVQUFBQSxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxHQUFHLENBQUNJLElBQWYsQ0FBVDtBQUNBSCxVQUFBQSxNQUFNLENBQUMsS0FBRCxDQUFOLEdBQWdCLEtBQUksQ0FBQzFCLEVBQXJCLENBSEcsQ0FJSDs7QUFDQUosVUFBQUEsRUFBRSxDQUFDaUIsRUFBSCxDQUFNaUIsTUFBTixDQUFhMUIsUUFBYixDQUFzQixLQUFJLENBQUNKLEVBQTNCO0FBQ0FpQixVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFJLENBQUNsQixFQUFqQixFQUFxQixTQUFyQjtBQUNIO0FBQ0osT0FaRDtBQWFILEtBZkQsTUFlTztBQUNIK0IsTUFBQUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsU0FBZDtBQUNIO0FBQ0o7QUExREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsdjogMCwgLy/nrKzlh6DlhbNcclxuICAgICAgICBsdkxhYmVsOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcbiAgICBzdGFydCgpIHt9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBJbml0Vmlldyhsdikge1xyXG4gICAgICAgIHRoaXMubHYgPSBsdjtcclxuICAgICAgICB0aGlzLmx2TGFiZWwuc3RyaW5nID0gdGhpcy5sdjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhnYW1lZGF0YSwgJ2dhbWVkYXRhJyk7XHJcbiAgICAgICAgaWYgKHRoaXMubHYgPD0gZ2FtZWRhdGEuTHZfc3Rhcikge1xyXG4gICAgICAgICAgICAvL+ivtOaYjuW3sue7j+mAmuWFs+i/meS4gOWFs1xyXG4gICAgICAgICAgICAvL+iOt+WPluWIsOaYn+aYn+aVsOmHj1xyXG4gICAgICAgICAgICAvL2xldCBzdGFybnVtPWdhbWVkYXRhLkx2X3N0YXJbdGhpcy5sdl07XHJcbiAgICAgICAgICAgIGlmICghZ2FtZWRhdGEubGV2ZWxfc3RhcnNbdGhpcy5sdiAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjYy5aTC5sdk1nci5sdlNwcls1XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuWkwubHZNZ3IubHZTcHJbZ2FtZWRhdGEubGV2ZWxfc3RhcnNbdGhpcy5sdiAtIDFdICsgMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubHYgPT0gZ2FtZWRhdGEuTHZfc3RhciArIDEpIHtcclxuICAgICAgICAgICAgLy/lj6/ku6XnjqnnmoTkuIDlhbNcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY2MuWkwubHZNZ3IubHZTcHJbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/mnKrpgJrlhbPnmoRcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZT1mYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY2MuWkwubHZNZ3IubHZTcHJbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKGx2PmNvbWVJbmZvLnRvdGFsbHYpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlPWZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy/nm5HlkKzngrnlh7vmjInpkq5cclxuICAgIEJudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQnRuMTExJyk7XHJcbiAgICAgICAgaWYgKHRoaXMubHYgPD0gZ2FtZWRhdGEuTHZfc3RhciArIDEpIHtcclxuICAgICAgICAgICAgY2MuWkwuTGV2ZWwubWFzay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbGV2ZWxzLycgKyB0aGlzLmx2LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLlpMLkxldmVsLm1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWQgcmVzIGVycm9yPScgKyBlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsdmRhdGFbJ0x2MSddKVxyXG4gICAgICAgICAgICAgICAgICAgIGx2ZGF0YSA9IEpTT04ucGFyc2UocmVzLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGx2ZGF0YVsnbHZsJ10gPSB0aGlzLmx2O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT4nLGx2ZGF0YWNjKVxyXG4gICAgICAgICAgICAgICAgICAgIGNjLlpMLlRhcmdldC5Jbml0Vmlldyh0aGlzLmx2KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmx2LCAndGhpcy5sdicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5hZGRUaXBzKCfkuI3lj6/ku6XotornuqfmuLjmiI8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19