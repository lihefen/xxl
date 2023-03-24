
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/Manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e39bmNB4VE3LBnkqEzd2Ud', 'Manager');
// newscripts/Main/Manager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    music: {
      type: cc.AudioClip,
      "default": []
    },
    //设置面板
    setting: null,
    setPrefab: cc.Prefab,
    zanting: cc.Node,
    kaishi: cc.Node
  },
  onLoad: function onLoad() {
    if (cc.ZL == null) {
      cc.ZL = {};
    }

    cc.ZL.musicMgr = this;
    this.ismusic = false;
    cc.director.on('closeHome', this.onCloseNode, this);
  },
  onCloseNode: function onCloseNode() {
    this.zanting.active = true;
    this.kaishi.active = false;
    cc.ZL.animMgr.onCloseMask();
  },
  start: function start() {
    cc.ZL.cubeMgr.InitCube();
    cc.ZL.animMgr.InitAnimal();
    cc.ZL.iceMgr.InitIce();
    cc.ZL.iceMgr.InitUPAnim();
  },
  // update (dt) {},
  MyplayMusic: function MyplayMusic(num, isBool) {
    if (gamedata.music) {
      cc.audioEngine.play(this.music[num], isBool, 0.5);
    }
  },
  //打开设置面板
  OpenSetting: function OpenSetting() {
    cc.ZL.animMgr.onOpenMask();
    this.zanting.active = false;
    this.kaishi.active = true;

    if (this.setting == null) {
      this.setting = cc.instantiate(this.setPrefab);
      this.node.addChild(this.setting);
    }

    this.setting.getComponent("HomeSettign").Open();
  },
  //播放碎冰音效（限制只播放一次）
  PlayMusicOnly: function PlayMusicOnly(num, isBool) {
    if (this.ismusic) {
      return;
    }

    this.ismusic = true;

    if (gamedata.music) {
      cc.audioEngine.play(this.music[num], isBool, 0.5);
    }

    setTimeout(function () {
      this.ismusic = false;
    }.bind(this), 200);
  },
  ReturnLevel: function ReturnLevel() {
    cc.director.loadScene("newLevel");
  },
  onDisable: function onDisable() {
    cc.director.off('closeHome', this.onCloseNode, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm11c2ljIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInNldHRpbmciLCJzZXRQcmVmYWIiLCJQcmVmYWIiLCJ6YW50aW5nIiwiTm9kZSIsImthaXNoaSIsIm9uTG9hZCIsIlpMIiwibXVzaWNNZ3IiLCJpc211c2ljIiwiZGlyZWN0b3IiLCJvbiIsIm9uQ2xvc2VOb2RlIiwiYWN0aXZlIiwiYW5pbU1nciIsIm9uQ2xvc2VNYXNrIiwic3RhcnQiLCJjdWJlTWdyIiwiSW5pdEN1YmUiLCJJbml0QW5pbWFsIiwiaWNlTWdyIiwiSW5pdEljZSIsIkluaXRVUEFuaW0iLCJNeXBsYXlNdXNpYyIsIm51bSIsImlzQm9vbCIsImdhbWVkYXRhIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiT3BlblNldHRpbmciLCJvbk9wZW5NYXNrIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJPcGVuIiwiUGxheU11c2ljT25seSIsInNldFRpbWVvdXQiLCJiaW5kIiwiUmV0dXJuTGV2ZWwiLCJsb2FkU2NlbmUiLCJvbkRpc2FibGUiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUU7QUFDSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLFNBRE47QUFFSCxpQkFBUztBQUZOLEtBREM7QUFNUjtBQUNBQyxJQUFBQSxPQUFPLEVBQUUsSUFQRDtBQVFSQyxJQUFBQSxTQUFTLEVBQUVSLEVBQUUsQ0FBQ1MsTUFSTjtBQVVSQyxJQUFBQSxPQUFPLEVBQUVWLEVBQUUsQ0FBQ1csSUFWSjtBQVdSQyxJQUFBQSxNQUFN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U0F2RUssdUJBdUVPO0FBQ1JoRCxJQUFBQSxFQUFFLENBQUNpQixRQUFILENBQVlnQyxHQUFaLENBQWdCLFdBQWhCLEVBQTZCLEtBQUs5QixXQUFsQyxFQUErQyxJQUEvQztBQUNIO0FBekVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG11c2ljOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy/orr7nva7pnaLmnb9cclxuICAgICAgICBzZXR0aW5nOiBudWxsLFxyXG4gICAgICAgIHNldFByZWZhYjogY2MuUHJlZmFiLFxyXG5cclxuICAgICAgICB6YW50aW5nOiBjYy5Ob2RlLFxyXG4gICAgICAgIGthaXNoaTogY2MuTm9kZVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgaWYgKGNjLlpMID09IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuWkwgPSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5aTC5tdXNpY01nciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pc211c2ljID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub24oJ2Nsb3NlSG9tZScsIHRoaXMub25DbG9zZU5vZGUsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VOb2RlKCkge1xyXG4gICAgICAgIHRoaXMuemFudGluZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMua2Fpc2hpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLlpMLmFuaW1NZ3Iub25DbG9zZU1hc2soKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuWkwuY3ViZU1nci5Jbml0Q3ViZSgpO1xyXG4gICAgICAgIGNjLlpMLmFuaW1NZ3IuSW5pdEFuaW1hbCgpO1xyXG4gICAgICAgIGNjLlpMLmljZU1nci5Jbml0SWNlKCk7XHJcbiAgICAgICAgY2MuWkwuaWNlTWdyLkluaXRVUEFuaW0oKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICBNeXBsYXlNdXNpYyhudW0sIGlzQm9vbCkge1xyXG4gICAgICAgIGlmIChnYW1lZGF0YS5tdXNpYykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubXVzaWNbbnVtXSwgaXNCb29sLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+aJk+W8gOiuvue9rumdouadv1xyXG4gICAgT3BlblNldHRpbmcoKSB7XHJcbiAgICAgICAgY2MuWkwuYW5pbU1nci5vbk9wZW5NYXNrKCk7XHJcbiAgICAgICAgdGhpcy56YW50aW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMua2Fpc2hpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2V0UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHRoaXMuc2V0dGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0dGluZy5nZXRDb21wb25lbnQoXCJIb21lU2V0dGlnblwiKS5PcGVuKCk7XHJcbiAgICB9LFxyXG4gICAgLy/mkq3mlL7noo7lhrDpn7PmlYjvvIjpmZDliLblj6rmkq3mlL7kuIDmrKHvvIlcclxuICAgIFBsYXlNdXNpY09ubHkobnVtLCBpc0Jvb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5pc211c2ljKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc211c2ljID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZ2FtZWRhdGEubXVzaWMpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm11c2ljW251bV0sIGlzQm9vbCwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNtdXNpYyA9IGZhbHNlO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSwgMjAwKTtcclxuICAgIH0sXHJcbiAgICBSZXR1cm5MZXZlbCgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJuZXdMZXZlbFwiKTtcclxuICAgIH0sXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3Iub2ZmKCdjbG9zZUhvbWUnLCB0aGlzLm9uQ2xvc2VOb2RlLCB0aGlzKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==