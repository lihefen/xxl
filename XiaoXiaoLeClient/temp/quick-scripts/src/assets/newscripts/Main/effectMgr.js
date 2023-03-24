"use strict";
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