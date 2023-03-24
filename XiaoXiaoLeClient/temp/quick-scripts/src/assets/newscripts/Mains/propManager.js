"use strict";
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