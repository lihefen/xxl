
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/effectMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26e05nwcKRJgaJQq9ORs1In', 'effectMgr');
// newscripts/Main/effectMgr.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //方向特效的预制体
    dirPrefab: cc.Prefab,
    //T型特效
    TPrefab: cc.Prefab,
    //特效的父物体
    effParent: cc.Node,
    //物体消除的特效
    clearPrefab: cc.Prefab,
    //消除的特效要飞向的目标
    clearTarget: cc.Node,
    //横纵向消除动画
    roweffPrefab: cc.Prefab,
    //爆炸动画
    boomPrefab: cc.Prefab,
    //魔力鸟特效
    niao: cc.Prefab
  },
  onLoad: function onLoad() {
    cc.ZL.effMgr = this;
    this.clearEffPool = new cc.NodePool();

    for (var i = 0; i < 100; i++) {
      var a = cc.instantiate(this.clearPrefab);
      this.clearEffPool.put(a);
    }

    this.clearRowEffPool = new cc.NodePool(); // for(let i=0;i<20;i++){
    //     let b=cc.instantiate(this.roweffPrefab);
    //     this.clearRowEffPool.put(b);
    // }
  },
  start: function start() {},
  // update (dt) {},
  //生成方向特效 R横向C纵向
  dirEff: function dirEff(node, dir) {
    var a = cc.instantiate(this.dirPrefab);

    if (dir == "Row") {
      a.angle = 90;
    } else if (dir == "Column") {
      a.angle = 0;
    }

    a.getComponent(cc.Animation).play();
    node.addChild(a);
    a.setPosition(0, 30);
  },
  //T型特效
  TEff: function TEff(node) {
    cc.ZL.musicMgr.MyplayMusic(10, false);
    var T = cc.instantiate(this.TPrefab);
    node.addChild(T);
    T.setPosition(0, 30);
    T.getComponent(cc.Animation).play();
  },
  //生成消除特效
  CreatClearEff: function CreatClearEff(pos) {
    //生成10个小星星
    var pos1 = this.clearTarget.getPosition();
    var pos_word = this.clearTarget.parent.convertToWorldSpaceAR(pos1);
    var pos_node = this.effParent.convertToNodeSpaceAR(pos_word);

    for (var i = 0; i < 5; i++) {
      var e = void 0;

      if (this.clearEffPool.size() > 0) {
        e = this.clearEffPool.get();
      } else {
        e = cc.instantiate(this.clearPrefab);
      }

      this.effParent.addChild(e);
      e.setPosition(pos.x, pos.y + 30);
      var spd = Math.random() * 600 + 1200;
      e.getComponent("goldeff").cube_move(spd, pos_node, this);
    }
  },
  //横纵向动画特效
  CreatRowEff: function CreatRowEff(pos, dir) {
    cc.ZL.musicMgr.PlayMusicOnly(11, false);
    var r;

    if (this.clearRowEffPool.size() > 0) {
      r = this.clearRowEffPool.get();
    } else {
      r = cc.instantiate(this.roweffPrefab);
    }

    this.effParent.addChild(r);
    r.setPosition(pos.x, pos.y + 30);
    var anim = r.getComponent(sp.Skeleton);
    anim.clearTracks();

    if (dir == "row") {
      //纵
      anim.addAnimation(0, "width", false, 0);
    } else {
      //横
      anim.addAnimation(0, "length", false, 0);
    } //r.runAction(cc.scaleTo(0.2,1,1.5));


    anim.setCompleteListener(function () {
      if (r) {
        this.clearRowEffPool.put(r);
      }
    }.bind(this));
  },
  //生成爆炸特效
  CreatBoomEff: function CreatBoomEff(pos) {
    cc.ZL.musicMgr.MyplayMusic(12, false);
    var b = cc.instantiate(this.boomPrefab);
    this.effParent.addChild(b);
    b.setPosition(pos.x, pos.y + 30);
    b.runAction(cc.scaleTo(0.2, 2, 2));
    setTimeout(function () {
      if (b) {
        b.destroy();
      }
    }.bind(this), 300);
  },
  CratNiao: function CratNiao(node) {
    var a = cc.instantiate(this.niao); //a.getComponent(cc.Animation).play();

    node.addChild(a);
    a.setPosition(0, 30);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vZWZmZWN0TWdyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGlyUHJlZmFiIiwiUHJlZmFiIiwiVFByZWZhYiIsImVmZlBhcmVudCIsIk5vZGUiLCJjbGVhclByZWZhYiIsImNsZWFyVGFyZ2V0Iiwicm93ZWZmUHJlZmFiIiwiYm9vbVByZWZhYiIsIm5pYW8iLCJvbkxvYWQiLCJaTCIsImVmZk1nciIsImNsZWFyRWZmUG9vbCIsIk5vZGVQb29sIiwiaSIsImEiLCJpbnN0YW50aWF0ZSIsInB1dCIsImNsZWFyUm93RWZmUG9vbCIsInN0YXJ0IiwiZGlyRWZmIiwibm9kZSIsImRpciIsImFuZ2xlIiwiZ2V0Q29tcG9uZW50IiwiQW5pbWF0aW9uIiwicGxheSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJURWZmIiwibXVzaWNNZ3IiLCJNeXBsYXlNdXNpYyIsIlQiLCJDcmVhdENsZWFyRWZmIiwicG9zIiwicG9zMSIsImdldFBvc2l0aW9uIiwicG9zX3dvcmQiLCJwYXJlbnQiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3Nfbm9kZSIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZSIsInNpemUiLCJnZXQiLCJ4IiwieSIsInNwZCIsIk1hdGgiLCJyYW5kb20iLCJjdWJlX21vdmUiLCJDcmVhdFJvd0VmZiIsIlBsYXlNdXNpY09ubHkiLCJyIiwiYW5pbSIsInNwIiwiU2tlbGV0b24iLCJjbGVhclRyYWNrcyIsImFkZEFuaW1hdGlvbiIsInNldENvbXBsZXRlTGlzdGVuZXIiLCJiaW5kIiwiQ3JlYXRCb29tRWZmIiwiYiIsInJ1bkFjdGlvbiIsInNjYWxlVG8iLCJzZXRUaW1lb3V0IiwiZGVzdHJveSIsIkNyYXROaWFvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0Us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TjtBQUNBLFNBQUtMLFNBQUwsQ0FBZXlCLFFBQWYsQ0FBd0JtQyxDQUF4QjtBQUNBQSxJQUFBQSxDQUFDLENBQUNsQyxXQUFGLENBQWNNLEdBQUcsQ0FBQ1csQ0FBbEIsRUFBb0JYLEdBQUcsQ0FBQ1ksQ0FBSixHQUFNLEVBQTFCO0FBQ0FnQixJQUFBQSxDQUFDLENBQUNDLFNBQUYsQ0FBWXBFLEVBQUUsQ0FBQ3FFLE9BQUgsQ0FBVyxHQUFYLEVBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFaO0FBQ0FDLElBQUFBLFVBQVUsQ0FBQyxZQUFVO0FBQ2pCLFVBQUdILENBQUgsRUFBSztBQUNEQSxRQUFBQSxDQUFDLENBQUNJLE9BQUY7QUFDSDtBQUNKLEtBSlUsQ0FJVE4sSUFKUyxDQUlKLElBSkksQ0FBRCxFQUlHLEdBSkgsQ0FBVjtBQUtILEdBdEhJO0FBd0hMTyxFQUFBQSxRQXhISyxvQkF3SEk5QyxJQXhISixFQXdIUztBQUNWLFFBQUlOLENBQUMsR0FBQ3BCLEVBQUUsQ0FBQ3FCLFdBQUgsQ0FBZSxLQUFLUixJQUFwQixDQUFOLENBRFUsQ0FFVjs7QUFDQWEsSUFBQUEsSUFBSSxDQUFDTSxRQUFMLENBQWNaLENBQWQ7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDYSxXQUFGLENBQWMsQ0FBZCxFQUFnQixFQUFoQjtBQUNIO0FBN0hJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/mlrnlkJHnibnmlYjnmoTpooTliLbkvZNcclxuICAgICAgICBkaXJQcmVmYWI6Y2MuUHJlZmFiLFxyXG4gICAgICAgIC8vVOWei+eJueaViFxyXG4gICAgICAgIFRQcmVmYWI6Y2MuUHJlZmFiLFxyXG4gICAgICAgIC8v54m55pWI55qE54i254mp5L2TXHJcbiAgICAgICAgZWZmUGFyZW50OmNjLk5vZGUsXHJcbiAgICAgICAgLy/niankvZPmtojpmaTnmoTnibnmlYhcclxuICAgICAgICBjbGVhclByZWZhYjpjYy5QcmVmYWIsXHJcbiAgICAgICAgLy/mtojpmaTnmoTnibnmlYjopoHpo57lkJHnmoTnm67moIdcclxuICAgICAgICBjbGVhclRhcmdldDpjYy5Ob2RlLFxyXG4gICAgICAgIC8v5qiq57q15ZCR5raI6Zmk5Yqo55S7XHJcbiAgICAgICAgcm93ZWZmUHJlZmFiOmNjLlByZWZhYixcclxuICAgICAgICAvL+eIhueCuOWKqOeUu1xyXG4gICAgICAgIGJvb21QcmVmYWI6Y2MuUHJlZmFiLFxyXG4gICAgICAgIC8v6a2U5Yqb6bif54m55pWIXHJcbiAgICAgICAgbmlhbzpjYy5QcmVmYWIsXHJcblxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgY2MuWkwuZWZmTWdyPXRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckVmZlBvb2w9bmV3IGNjLk5vZGVQb29sKCk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTwxMDA7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGEgPWNjLmluc3RhbnRpYXRlKHRoaXMuY2xlYXJQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRWZmUG9vbC5wdXQoYSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsZWFyUm93RWZmUG9vbD1uZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICAvLyBmb3IobGV0IGk9MDtpPDIwO2krKyl7XHJcbiAgICAgICAgLy8gICAgIGxldCBiPWNjLmluc3RhbnRpYXRlKHRoaXMucm93ZWZmUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jbGVhclJvd0VmZlBvb2wucHV0KGIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbiAgICAvL+eUn+aIkOaWueWQkeeJueaViCBS5qiq5ZCRQ+e6teWQkVxyXG4gICAgZGlyRWZmKG5vZGUsZGlyKXtcclxuICAgICAgICBsZXQgYT1jYy5pbnN0YW50aWF0ZSh0aGlzLmRpclByZWZhYik7XHJcbiAgICAgICAgaWYoZGlyPT1cIlJvd1wiKXtcclxuICAgICAgICAgICAgYS5hbmdsZT05MDtcclxuICAgICAgICB9ZWxzZSBpZihkaXI9PVwiQ29sdW1uXCIpe1xyXG4gICAgICAgICAgICBhLmFuZ2xlPTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgIG5vZGUuYWRkQ2hpbGQoYSk7XHJcbiAgICAgICAgYS5zZXRQb3NpdGlvbigwLDMwKTtcclxuICAgIH0sXHJcbiAgICAvL1TlnovnibnmlYhcclxuICAgIFRFZmYobm9kZSl7XHJcbiAgICAgICAgY2MuWkwubXVzaWNNZ3IuTXlwbGF5TXVzaWMoMTAsZmFsc2UpO1xyXG4gICAgICAgIGxldCBUPWNjLmluc3RhbnRpYXRlKHRoaXMuVFByZWZhYik7XHJcbiAgICAgICAgbm9kZS5hZGRDaGlsZChUKTtcclxuICAgICAgICBULnNldFBvc2l0aW9uKDAsMzApO1xyXG4gICAgICAgIFQuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5raI6Zmk54m55pWIXHJcbiAgICBDcmVhdENsZWFyRWZmKHBvcyl7XHJcbiAgICAgICAgLy/nlJ/miJAxMOS4quWwj+aYn+aYn1xyXG4gICAgICAgIGxldCBwb3MxPXRoaXMuY2xlYXJUYXJnZXQuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICBsZXQgcG9zX3dvcmQ9dGhpcy5jbGVhclRhcmdldC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBvczEpO1xyXG4gICAgICAgIGxldCBwb3Nfbm9kZT10aGlzLmVmZlBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3Nfd29yZCk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw1O2krKyl7XHJcbiAgICAgICAgICAgIGxldCBlO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNsZWFyRWZmUG9vbC5zaXplKCk+MCl7XHJcbiAgICAgICAgICAgICAgICBlPXRoaXMuY2xlYXJFZmZQb29sLmdldCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGU9Y2MuaW5zdGFudGlhdGUodGhpcy5jbGVhclByZWZhYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5lZmZQYXJlbnQuYWRkQ2hpbGQoZSk7XHJcbiAgICAgICAgICAgIGUuc2V0UG9zaXRpb24ocG9zLngscG9zLnkrMzApO1xyXG4gICAgICAgICAgICBsZXQgc3BkPU1hdGgucmFuZG9tKCkqNjAwKzEyMDA7XHJcbiAgICAgICAgICAgIGUuZ2V0Q29tcG9uZW50KFwiZ29sZGVmZlwiKS5jdWJlX21vdmUoc3BkLHBvc19ub2RlLHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+aoque6teWQkeWKqOeUu+eJueaViFxyXG4gICAgQ3JlYXRSb3dFZmYocG9zLGRpcil7XHJcbiAgICAgICAgY2MuWkwubXVzaWNNZ3IuUGxheU11c2ljT25seSgxMSxmYWxzZSk7XHJcbiAgICAgICAgbGV0IHI7XHJcbiAgICAgICAgaWYodGhpcy5jbGVhclJvd0VmZlBvb2wuc2l6ZSgpPjApe1xyXG4gICAgICAgICAgICByPXRoaXMuY2xlYXJSb3dFZmZQb29sLmdldCgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByPWNjLmluc3RhbnRpYXRlKHRoaXMucm93ZWZmUHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZmZQYXJlbnQuYWRkQ2hpbGQocik7XHJcbiAgICAgICAgci5zZXRQb3NpdGlvbihwb3MueCxwb3MueSszMCk7XHJcbiAgICAgICAgbGV0IGFuaW09ci5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgIGFuaW0uY2xlYXJUcmFja3MoKTtcclxuICAgICAgICBpZihkaXI9PVwicm93XCIpey8v57q1XHJcbiAgICAgICAgICAgIGFuaW0uYWRkQW5pbWF0aW9uKDAsXCJ3aWR0aFwiLGZhbHNlLDApO1xyXG4gICAgICAgIH1lbHNley8v5qiqXHJcbiAgICAgICAgICAgIGFuaW0uYWRkQW5pbWF0aW9uKDAsXCJsZW5ndGhcIixmYWxzZSwwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9yLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMiwxLDEuNSkpO1xyXG4gICAgICAgIGFuaW0uc2V0Q29tcGxldGVMaXN0ZW5lcihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZihyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJSb3dFZmZQb29sLnB1dChyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDniIbngrjnibnmlYhcclxuICAgIENyZWF0Qm9vbUVmZihwb3Mpe1xyXG4gICAgICAgIGNjLlpMLm11c2ljTWdyLk15cGxheU11c2ljKDEyLGZhbHNlKTtcclxuICAgICAgICBsZXQgYj1jYy5pbnN0YW50aWF0ZSh0aGlzLmJvb21QcmVmYWIpO1xyXG4gICAgICAgIHRoaXMuZWZmUGFyZW50LmFkZENoaWxkKGIpO1xyXG4gICAgICAgIGIuc2V0UG9zaXRpb24ocG9zLngscG9zLnkrMzApO1xyXG4gICAgICAgIGIucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLDIsMikpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoYil7XHJcbiAgICAgICAgICAgICAgICBiLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSwzMDApO1xyXG4gICAgfSxcclxuXHJcbiAgICBDcmF0Tmlhbyhub2RlKXtcclxuICAgICAgICBsZXQgYT1jYy5pbnN0YW50aWF0ZSh0aGlzLm5pYW8pO1xyXG4gICAgICAgIC8vYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcbiAgICAgICAgbm9kZS5hZGRDaGlsZChhKTtcclxuICAgICAgICBhLnNldFBvc2l0aW9uKDAsMzApO1xyXG4gICAgfVxyXG59KTtcclxuIl19