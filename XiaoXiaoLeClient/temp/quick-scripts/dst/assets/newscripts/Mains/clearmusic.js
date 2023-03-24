
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Mains/clearmusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efcf24DAk5O/a+4vb1k5O1U', 'clearmusic');
// newscripts/Mains/clearmusic.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //音效
    music: {
      type: cc.AudioClip,
      "default": []
    },
    //纹理
    SPR: [cc.SpriteFrame]
  },
  onLoad: function onLoad() {
    this.node.scale = 0;
    cc.ZL.CM = this;
  },
  start: function start() {},
  // update (dt) {},
  InitView: function InitView(num) {
    if (gamedata.music) {
      if (num <= 2) {
        return;
      }

      if (num > 2 && num <= 4) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[0];
        cc.audioEngine.play(this.music[0], false, 1);
      } else if (num > 4 && num < 6) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[1];
        cc.audioEngine.play(this.music[1], false, 1);
      } else if (num > 6 && num < 8) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[2];
        cc.audioEngine.play(this.music[2], false, 1);
      } else if (num > 8 && num < 10) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[3];
        cc.audioEngine.play(this.music[3], false, 1);
      } else if (num > 10) {
        this.node.getComponent(cc.Sprite).spriteFrame = this.SPR[4];
        cc.audioEngine.play(this.music[4], false, 1);
      }

      this.node.runAction(cc.scaleTo(0.2, 1));
      setTimeout(function () {
        if (this.node) {
          this.node.runAction(cc.scaleTo(0.2, 0));
        }
      }.bind(this), 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW5zL2NsZWFybXVzaWMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtdXNpYyIsInR5cGUiLCJBdWRpb0NsaXAiLCJTUFIiLCJTcHJpdGVGcmFtZSIsIm9uTG9hZCIsIm5vZGUiLCJzY2FsZSIsIlpMIiwiQ00iLCJzdGFydCIsIkluaXRWaWV3IiwibnVtIiwiZ2FtZWRhdGEiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImF1ZGlvRW5naW5lIiwicGxheSIsInJ1bkFjdGlvbiIsInNjYWxlVG8iLCJzZXRUaW1lb3V0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxTQUROO0FBRUgsaUJBQVM7QUFGTixLQUZDO0FBTVI7QUFDQUMsSUFBQUEsR0FBRyxFQUFFLENBQUNQLEVBQUUsQ0FBQ1EsV0FBSjtBQVBHLEdBSFA7QUFhTEMsRUFBQUEsTUFiSyxvQkFhSTtBQUNMLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFrQixDQUFsQjtBQUNBWCxJQUFBQSxFQUFFLENBQUNZLEVBQUgsQ0FBTUMsRUFBTixHQUFXLElBQVg7QUFDSCxHQWhCSTtBQWtCTEMsRUFBQUEsS0FsQkssbUJBa0JHLENBRVAsQ0FwQkk7QUFzQkw7QUFDQUMsRUFBQUEsUUF2Qkssb0JBdUJJQyxHQXZCSixFQXVCUztBQUNWLFFBQUlDLFFBQVEsQ0FBQ2IsS0FBYixFQUFvQjtBQUNoQixVQUFJWSxHQUFHLElBQUksQ0FBWCxFQUFjO0FBQ1Y7QUFDSDs7QUFDRCxVQUFJQSxHQUFHLEdBQUcsQ0FBTixJQUFXQSxHQUFHLElBQUksQ0FBdEIsRUFBeUI7QUFDckIsYUFBS04sSUFBTCxDQUFVUSxZQUFWLENBQXVCbEIsRUFBRSxDQUFDbUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdELEtBQUtiLEdBQUwsQ0FBUyxDQUFULENBQWhEO0FBQ0FQLFFBQUFBLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLbEIsS0FBTCxDQUFXLENBQVgsQ0FBcEIsRUFBbUMsS0FBbkMsRUFBMEMsQ0FBMUM7QUFDSCxPQUhELE1BR08sSUFBSVksR0FBRyxHQUFHLENBQU4sSUFBV0EsR0FBRyxHQUFHLENBQXJCLEVBQXdCO0FBQzNCLGFBQUtOLElBQUwsQ0FBVVEsWUFBVixDQUF1QmxCLEVBQUUsQ0FBQ21CLE1BQTFCLEVBQWtDQyxXQUFsQyxHQUFnRCxLQUFLYixHQUFMLENBQVMsQ0FBVCxDQUFoRDtBQUNBUCxRQUFBQSxFQUFFLENBQUNxQixXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS2xCLEtBQUwsQ0FBVyxDQUFYLENBQXBCLEVBQW1DLEtBQW5DLEVBQTBDLENBQTFDO0FBQ0gsT0FITSxNQUdBLElBQUlZLEdBQUcsR0FBRyxDQUFOLElBQVdBLEdBQUcsR0FBRyxDQUFyQixFQUF3QjtBQUMzQixhQUFLTixJQUFMLENBQVVRLFlBQVYsQ0FBdUJsQixFQUFFLENBQUNtQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0QsS0FBS2IsR0FBTCxDQUFTLENBQVQsQ0FBaEQ7QUFDQVAsUUFBQUEsRUFBRSxDQUFDcUIsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtsQixLQUFMLENBQVcsQ0FBWCxDQUFwQixFQUFtQyxLQUFuQyxFQUEwQyxDQUExQztBQUNILE9BSE0sTUFHQSxJQUFJWSxHQUFHLEdBQUcsQ0FBTixJQUFXQSxHQUFHLEdBQUcsRUFBckIsRUFBeUI7QUFDNUIsYUFBS04sSUFBTCxDQUFVUSxZQUFWLENBQXVCbEIsRUFBRSxDQUFDbUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdELEtBQUtiLEdBQUwsQ0FBUyxDQUFULENBQWhEO0FBQ0FQLFFBQUFBLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLbEIsS0FBTCxDQUFXLENBQVgsQ0FBcEIsRUFBbUMsS0FBbkMsRUFBMEMsQ0FBMUM7QUFDSCxPQUhNLE1BR0EsSUFBSVksR0FBRyxHQUFHLEVBQVYsRUFBYztBQUNqQixhQUFLTixJQUFMLENBQVVRLFlBQVYsQ0FBdUJsQixFQUFFLENBQUNtQixNQUExQixFQUFrQ0MsV0FBbEMsR0FBZ0QsS0FBS2IsR0FBTCxDQUFTLENBQVQsQ0FBaEQ7QUFDQVAsUUFBQUEsRUFBRSxDQUFDcUIsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtsQixLQUFMLENBQVcsQ0FBWCxDQUFwQixFQUFtQyxLQUFuQyxFQUEwQyxDQUExQztBQUNIOztBQUNELFdBQUtNLElBQUwsQ0FBVWEsU0FBVixDQUFvQnZCLEVBQUUsQ0FBQ3dCLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQXBCO0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CLFlBQUksS0FBS2YsSUFBVCxFQUFlO0FBQ1gsZUFBS0EsSUFBTCxDQUFVYSxTQUFWLENBQW9CdkIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBcEI7QUFDSDtBQUNKLE9BSlUsQ0FJVEUsSUFKUyxDQUlKLElBSkksQ0FBRCxFQUlJLEdBSkosQ0FBVjtBQUtIO0FBQ0o7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/pn7PmlYhcclxuICAgICAgICBtdXNpYzoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+e6ueeQhlxyXG4gICAgICAgIFNQUjogW2NjLlNwcml0ZUZyYW1lXSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgY2MuWkwuQ00gPSB0aGlzO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG4gICAgSW5pdFZpZXcobnVtKSB7XHJcbiAgICAgICAgaWYgKGdhbWVkYXRhLm11c2ljKSB7XHJcbiAgICAgICAgICAgIGlmIChudW0gPD0gMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChudW0gPiAyICYmIG51bSA8PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLlNQUlswXTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tdXNpY1swXSwgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bSA+IDQgJiYgbnVtIDwgNikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5TUFJbMV07XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubXVzaWNbMV0sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPiA2ICYmIG51bSA8IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuU1BSWzJdO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm11c2ljWzJdLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtID4gOCAmJiBudW0gPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5TUFJbM107XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubXVzaWNbM10sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW0gPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5TUFJbNF07XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubXVzaWNbNF0sIGZhbHNlLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLCAxKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIDApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19