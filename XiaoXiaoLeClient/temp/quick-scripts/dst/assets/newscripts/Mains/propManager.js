
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Mains/propManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72be67K+zZLSYUeb14OIv+D', 'propManager');
// newscripts/Mains/propManager.js

"use strict";

var targetManager = require('targetManager');

var _require = require('../UIHelp'),
    UIHelp = _require.UIHelp;

cc.Class({
  "extends": cc.Component,
  properties: {
    //道具数量显示框
    pronum_label: [cc.Label],
    //道具节点
    propnode: [cc.Node],
    //音效
    music: {
      type: cc.AudioClip,
      "default": []
    },
    //商店预制体
    shop: null,
    ShopPrefab: cc.Prefab
  },
  onLoad: function onLoad() {
    cc.ZL.PropMgr = this;
    this.showProp();
    this.num = 0;
  },
  update: function update(dt) {
    this.showProp();
  },
  //显示道具信息
  showProp: function showProp() {
    for (var i = 0; i < this.pronum_label.length; i++) {
      if (i == 5) {
        this.pronum_label[5].string = gamedata.prop[4];
      } else {
        this.pronum_label[i].string = gamedata.prop[i + 1];
      }
    }
  },
  //道具点击
  PropBtn: function PropBtn(target, event) {
    cc.ZL.musicMgr.MyplayMusic(0, false);
    event = parseInt(event);

    for (var i = 0; i < this.propnode.length; i++) {
      this.propnode[i].stopAllActions();
      this.propnode[i].scale = 0.7;
    }

    if (gamedata.prop[event] <= 0) {
      if (this.shop == null) {
        this.shop = cc.instantiate(this.ShopPrefab);
        this.node.parent.addChild(this.shop); //this.shop.setPosition(0,1000);
      }

      this.shop.getComponent('Shop').Open();
      return;
    } //this.playMusic(0);


    if (gamedata.is_prop == parseInt(event)) {
      gamedata.is_prop = 0;
      target.currentTarget.scale = 0.7;
      target.currentTarget.stopAllActions();
    } else {
      if (parseInt(event) == 4) {
        this.AddStep();
        return;
      } else if (parseInt(event) == 3) {
        this.AnimHuan(); // cc.ZL.animMgr.replaceAll();
        // this.changeData(3);
        // gamedata.is_prop = 0;

        return;
      }

      gamedata.is_prop = parseInt(event);
      this.selecteffect(target.currentTarget);
    }
  },
  AnimHuan: function AnimHuan() {
    // cc.ZL.animMgr.replaceAll();
    // this.changeData(3);
    // gamedata.is_prop = 0;
    var preas = {
      rid: gamedata.rid,
      token: gamedata.token,
      gid: 10002,
      num: 1
    }; // TODO:先注释掉
    // UIHelp.network.httpConnect_post_async('game/xiaoxiaole/consumeProp', preas, this.AnimHuanCallBack.bind(this));

    this.AnimHuanCallBack({
      code: '200',
      message: '成功'
    });
  },
  AnimHuanCallBack: function AnimHuanCallBack(msg) {
    console.log('AnimHuanCallBack===>', msg);

    if (msg.code == 200) {
      cc.ZL.animMgr.replaceAll();
      this.changeData(3);
      gamedata.is_prop = 0;
    } else {
      utils.addTips(msg.message);
    }
  },
  //加五步
  AddStep: function AddStep() {
    var preas = {
      rid: gamedata.rid,
      token: gamedata.token,
      gid: 10003,
      num: 1
    }; // TODO:先注释

    UIHelp.network.httpConnect_post_async('game/xiaoxiaole/consumeProp', preas, this.AddStepCallBack.bind(this)); // gamedata.is_prop = 0;
    // cc.ZL.UIMgr.AddFiveStep();
    // this.changeData(6);
  },
  AddStepCallBack: function AddStepCallBack(msg) {
    console.log('AddStepCallBack===>', msg);

    if (msg.code == 200) {
      gamedata.is_prop = 0;
      cc.ZL.UIMgr.AddFiveStep();
      this.changeData(6);
    } else {
      utils.addTips(msg.message);
    }
  },
  //选中特效
  selecteffect: function selecteffect(node) {
    var e1 = cc.scaleTo(0.5, 0.8, 0.8);
    var e2 = cc.scaleTo(0.5, 0.6, 0.6);
    var seq = cc.sequence([e1, e2]);
    var rep = cc.repeatForever(seq);
    node.runAction(rep);
  },
  //道具使用结束
  propFinished: function propFinished(num) {
    gamedata.is_prop = 0; //this.playMusic(0);

    for (var i = 0; i < this.propnode.length; i++) {
      this.propnode[i].stopAllActions();
      this.propnode[i].scale = 0.7;
    }

    this.changeData(num);
  },
  //更改数据
  changeData: function changeData(num) {
    num = parseInt(num);
    this.num = num;

    if (num == 6) {
      gamedata.prop[4] -= 1;
    } else {
      gamedata.prop[num] -= 1;
    }

    this.pronum_label[num - 1].string = gamedata.prop[num];
    gamedata.bc_prop(num); // let gid;
    // if (num == 1) {
    //     gid = 10001
    // } else if (num == 3) {
    //     gid = 10002
    // } else if (num == 6) {
    //     gid = 10003
    // }
  },
  //播放音效
  playMusic: function playMusic(num) {
    if (gamedata.music) {
      cc.audioEngine.play(this.music[num], false, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW5zL3Byb3BNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbInRhcmdldE1hbmFnZXIiLCJyZXF1aXJlIiwiVUlIZWxwIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwcm9udW1fbGFiZWwiLCJMYWJlbCIsInByb3Bub2RlIiwiTm9kZSIsIm11c2ljIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInNob3AiLCJTaG9wUHJlZmFiIiwiUHJlZmFiIiwib25Mb2FkIiwiWkwiLCJQcm9wTWdyIiwic2hvd1Byb3AiLCJudW0iLCJ1cGRhdGUiLCJkdCIsImkiLCJsZW5ndGgiLCJzdHJpbmciLCJnYW1lZGF0YSIsInByb3AiLCJQcm9wQnRuIiwidGFyZ2V0IiwiZXZlbnQiLCJtdXNpY01nciIsIk15cGxheU11c2ljIiwicGFyc2VJbnQiLCJzdG9wQWxsQWN0aW9ucyIsInNjYWxlIiwiaW5zdGFudGlhdGUiLCJub2RlIiwicGFyZW50IiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJPcGVuIiwiaXNfcHJvcCIsImN1cnJlbnRUYXJnZXQiLCJBZGRTdGVwIiwiQW5pbUh1YW4iLCJzZWxlY3RlZmZlY3QiLCJwcmVhcyIsInJpZCIsInRva2VuIiwiZ2lkIiwiQW5pbUh1YW5DYWxsQmFjayIsImNvZGUiLCJtZXNzYWdlIiwibXNnIiwiY29uc29sZSIsImxvZyIsImFuaW1NZ3IiLCJyZXBsYWNlQWxsIiwiY2hhbmdlRGF0YSIsInV0aWxzIiwiYWRkVGlwcyIsIm5ldHdvcmsiLCJodHRwQ29ubmVjdF9wb3N0X2FzeW5jIiwiQWRkU3RlcENhbGxCYWNrIiwiYmluZCIsIlVJTWdyIiwiQWRkRml2ZVN0ZXAiLCJlMSIsInNjYWxlVG8iLCJlMiIsInNlcSIsInNlcXVlbmNlIiwicmVwIiwicmVwZWF0Rm9yZXZlciIsInJ1bkFjdGlvbiIsInByb3BGaW5pc2hlZCIsImJjX3Byb3AiLCJwbGF5TXVzaWMiLCJhdWRpb0VuZ2luZSIsInBs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QUFjLENBQWQsS0FBb0IsQ0FBcEI7QUFDSCxLQUZELE1BRU87QUFDSEQsTUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNQLEdBQWQsS0FBc0IsQ0FBdEI7QUFDSDs7QUFDRCxTQUFLZCxZQUFMLENBQWtCYyxHQUFHLEdBQUcsQ0FBeEIsRUFBMkJLLE1BQTNCLEdBQW9DQyxRQUFRLENBQUNDLElBQVQsQ0FBY1AsR0FBZCxDQUFwQztBQUNBTSxJQUFBQSxRQUFRLENBQUNtRCxPQUFULENBQWlCekQsR0FBakIsRUFUWSxDQVVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQW5LSTtBQW9LTDtBQUNBMEQsRUFBQUEsU0FyS0sscUJBcUtLMUQsR0FyS0wsRUFxS1U7QUFDWCxRQUFJTSxRQUFRLENBQUNoQixLQUFiLEVBQW9CO0FBQ2hCUixNQUFBQSxFQUFFLENBQUM2RSxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS3RFLEtBQUwsQ0FBV1UsR0FBWCxDQUFwQixFQUFxQyxLQUFyQyxFQUE0QyxDQUE1QztBQUNIO0FBQ0o7QUF6S0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRhcmdldE1hbmFnZXIgPSByZXF1aXJlKCd0YXJnZXRNYW5hZ2VyJyk7XHJcbmNvbnN0IHsgVUlIZWxwIH0gPSByZXF1aXJlKCcuLi9VSUhlbHAnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvL+mBk+WFt+aVsOmHj+aYvuekuuahhlxyXG4gICAgICAgIHByb251bV9sYWJlbDogW2NjLkxhYmVsXSxcclxuICAgICAgICAvL+mBk+WFt+iKgueCuVxyXG4gICAgICAgIHByb3Bub2RlOiBbY2MuTm9kZV0sXHJcbiAgICAgICAgLy/pn7PmlYhcclxuICAgICAgICBtdXNpYzoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy/llYblupfpooTliLbkvZNcclxuICAgICAgICBzaG9wOiBudWxsLFxyXG4gICAgICAgIFNob3BQcmVmYWI6IGNjLlByZWZhYixcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuWkwuUHJvcE1nciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zaG93UHJvcCgpO1xyXG4gICAgICAgIHRoaXMubnVtID0gMDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLnNob3dQcm9wKCk7XHJcbiAgICB9LFxyXG4gICAgLy/mmL7npLrpgZPlhbfkv6Hmga9cclxuICAgIHNob3dQcm9wKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9udW1fbGFiZWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9udW1fbGFiZWxbNV0uc3RyaW5nID0gZ2FtZWRhdGEucHJvcFs0XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbnVtX2xhYmVsW2ldLnN0cmluZyA9IGdhbWVkYXRhLnByb3BbaSArIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6YGT5YW354K55Ye7XHJcbiAgICBQcm9wQnRuKHRhcmdldCwgZXZlbnQpIHtcclxuICAgICAgICBjYy5aTC5tdXNpY01nci5NeXBsYXlNdXNpYygwLCBmYWxzZSk7XHJcbiAgICAgICAgZXZlbnQgPSBwYXJzZUludChldmVudCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3Bub2RlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcG5vZGVbaV0uc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wbm9kZVtpXS5zY2FsZSA9IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLnByb3BbZXZlbnRdIDw9IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvcCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3AgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlNob3BQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZCh0aGlzLnNob3ApO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNob3Auc2V0UG9zaXRpb24oMCwxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNob3AuZ2V0Q29tcG9uZW50KCdTaG9wJykuT3BlbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vdGhpcy5wbGF5TXVzaWMoMCk7XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLmlzX3Byb3AgPT0gcGFyc2VJbnQoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIGdhbWVkYXRhLmlzX3Byb3AgPSAwO1xyXG4gICAgICAgICAgICB0YXJnZXQuY3VycmVudFRhcmdldC5zY2FsZSA9IDAuNztcclxuICAgICAgICAgICAgdGFyZ2V0LmN1cnJlbnRUYXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQoZXZlbnQpID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQWRkU3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KGV2ZW50KSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFuaW1IdWFuKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5aTC5hbmltTWdyLnJlcGxhY2VBbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlRGF0YSgzKTtcclxuICAgICAgICAgICAgICAgIC8vIGdhbWVkYXRhLmlzX3Byb3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWVkYXRhLmlzX3Byb3AgPSBwYXJzZUludChldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWZmZWN0KHRhcmdldC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQW5pbUh1YW4oKSB7XHJcbiAgICAgICAgLy8gY2MuWkwuYW5pbU1nci5yZXBsYWNlQWxsKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VEYXRhKDMpO1xyXG4gICAgICAgIC8vIGdhbWVkYXRhLmlzX3Byb3AgPSAwO1xyXG5cclxuICAgICAgICBsZXQgcHJlYXMgPSB7XHJcbiAgICAgICAgICAgIHJpZDogZ2FtZWRhdGEucmlkLFxyXG4gICAgICAgICAgICB0b2tlbjogZ2FtZWRhdGEudG9rZW4sXHJcbiAgICAgICAgICAgIGdpZDogMTAwMDIsXHJcbiAgICAgICAgICAgIG51bTogMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFRPRE865YWI5rOo6YeK5o6JXHJcbiAgICAgICAgLy8gVUlIZWxwLm5ldHdvcmsuaHR0cENvbm5lY3RfcG9zdF9hc3luYygnZ2FtZS94aWFveGlhb2xlL2NvbnN1bWVQcm9wJywgcHJlYXMsIHRoaXMuQW5pbUh1YW5DYWxsQmFjay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLkFuaW1IdWFuQ2FsbEJhY2soe1xyXG4gICAgICAgICAgICBjb2RlOiAnMjAwJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aIkOWKnycsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIEFuaW1IdWFuQ2FsbEJhY2sobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FuaW1IdWFuQ2FsbEJhY2s9PT0+JywgbXNnKTtcclxuICAgICAgICBpZiAobXNnLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGNjLlpMLmFuaW1NZ3IucmVwbGFjZUFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURhdGEoMyk7XHJcbiAgICAgICAgICAgIGdhbWVkYXRhLmlzX3Byb3AgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmFkZFRpcHMobXNnLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+WKoOS6lOatpVxyXG4gICAgQWRkU3RlcCgpIHtcclxuICAgICAgICBsZXQgcHJlYXMgPSB7XHJcbiAgICAgICAgICAgIHJpZDogZ2FtZWRhdGEucmlkLFxyXG4gICAgICAgICAgICB0b2tlbjogZ2FtZWRhdGEudG9rZW4sXHJcbiAgICAgICAgICAgIGdpZDogMTAwMDMsXHJcbiAgICAgICAgICAgIG51bTogMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIFRPRE865YWI5rOo6YeKXHJcbiAgICAgICAgVUlIZWxwLm5ldHdvcmsuaHR0cENvbm5lY3RfcG9zdF9hc3luYygnZ2FtZS94aWFveGlhb2xlL2NvbnN1bWVQcm9wJywgcHJlYXMsIHRoaXMuQWRkU3RlcENhbGxCYWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIGdhbWVkYXRhLmlzX3Byb3AgPSAwO1xyXG4gICAgICAgIC8vIGNjLlpMLlVJTWdyLkFkZEZpdmVTdGVwKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jaGFuZ2VEYXRhKDYpO1xyXG4gICAgfSxcclxuXHJcbiAgICBBZGRTdGVwQ2FsbEJhY2sobXNnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FkZFN0ZXBDYWxsQmFjaz09PT4nLCBtc2cpO1xyXG4gICAgICAgIGlmIChtc2cuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgZ2FtZWRhdGEuaXNfcHJvcCA9IDA7XHJcbiAgICAgICAgICAgIGNjLlpMLlVJTWdyLkFkZEZpdmVTdGVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGF0YSg2KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1dGlscy5hZGRUaXBzKG1zZy5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/pgInkuK3nibnmlYhcclxuICAgIHNlbGVjdGVmZmVjdChub2RlKSB7XHJcbiAgICAgICAgdmFyIGUxID0gY2Muc2NhbGVUbygwLjUsIDAuOCwgMC44KTtcclxuICAgICAgICB2YXIgZTIgPSBjYy5zY2FsZVRvKDAuNSwgMC42LCAwLjYpO1xyXG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShbZTEsIGUyXSk7XHJcbiAgICAgICAgdmFyIHJlcCA9IGNjLnJlcGVhdEZvcmV2ZXIoc2VxKTtcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihyZXApO1xyXG4gICAgfSxcclxuICAgIC8v6YGT5YW35L2/55So57uT5p2fXHJcbiAgICBwcm9wRmluaXNoZWQobnVtKSB7XHJcbiAgICAgICAgZ2FtZWRhdGEuaXNfcHJvcCA9IDA7XHJcbiAgICAgICAgLy90aGlzLnBsYXlNdXNpYygwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcG5vZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wbm9kZVtpXS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3Bub2RlW2ldLnNjYWxlID0gMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZURhdGEobnVtKTtcclxuICAgIH0sXHJcbiAgICAvL+abtOaUueaVsOaNrlxyXG4gICAgY2hhbmdlRGF0YShudW0pIHtcclxuICAgICAgICBudW0gPSBwYXJzZUludChudW0pO1xyXG4gICAgICAgIHRoaXMubnVtID0gbnVtO1xyXG4gICAgICAgIGlmIChudW0gPT0gNikge1xyXG4gICAgICAgICAgICBnYW1lZGF0YS5wcm9wWzRdIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2FtZWRhdGEucHJvcFtudW1dIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvbnVtX2xhYmVsW251bSAtIDFdLnN0cmluZyA9IGdhbWVkYXRhLnByb3BbbnVtXTtcclxuICAgICAgICBnYW1lZGF0YS5iY19wcm9wKG51bSk7XHJcbiAgICAgICAgLy8gbGV0IGdpZDtcclxuICAgICAgICAvLyBpZiAobnVtID09IDEpIHtcclxuICAgICAgICAvLyAgICAgZ2lkID0gMTAwMDFcclxuICAgICAgICAvLyB9IGVsc2UgaWYgKG51bSA9PSAzKSB7XHJcbiAgICAgICAgLy8gICAgIGdpZCA9IDEwMDAyXHJcbiAgICAgICAgLy8gfSBlbHNlIGlmIChudW0gPT0gNikge1xyXG4gICAgICAgIC8vICAgICBnaWQgPSAxMDAwM1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICAvL+aSreaUvumfs+aViFxyXG4gICAgcGxheU11c2ljKG51bSkge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS5tdXNpYykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubXVzaWNbbnVtXSwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=