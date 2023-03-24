"use strict";
cc._RF.push(module, 'cfdd6kzs+xMzZl9ecIgNfLR', 'Begin');
// newscripts/Loading/Begin.js

"use strict";

var _require = require('../UIHelp'),
    UIHelp = _require.UIHelp;

cc.Class({
  "extends": cc.Component,
  properties: {
    music: {
      type: cc.AudioClip,
      "default": null
    },
    //文字提示框
    tipLabel: [cc.Label],
    //进度条
    pro_loading: cc.ProgressBar,
    //骨骼动画
    Logo: cc.Node
  },
  onLoad: function onLoad() {
    UIHelp.init();

    if (cc.ZL = null) {
      cc.ZL = {};
    } //wx.clearStorage();
    // gamedata.GetData();


    cc.audioEngine.play(this.music, true, 0.3);
    this.LogoAnim(); // this.LoadingChild();
  },
  start: function start() {},
  //播放出场动画
  LogoAnim: function LogoAnim() {
    var anim = this.Logo.getComponent(sp.Skeleton);
    anim.clearTracks();
    anim.addAnimation(0, 'start', false, 0);
    anim.addAnimation(0, 'play', false, 0);
    anim.addAnimation(0, 'end', false, 0);
    anim.setEndListener(function (res) {
      if (res.animation.name == 'play') {
        this.LoadingChild();
      }
    }.bind(this));
  },
  //加载子包
  LoadingChild: function LoadingChild() {
    var self = this;

    try {
      var data = {
        roomID: '1',
        token: '2'
      };

      if (data.roomID) {
        gamedata.rid = data.roomID;
      }

      if (data.token) {
        gamedata.token = data.token;
      }

      cc.director.loadScene('newLevel');

      if (!gamedata.rid || !gamedata.token) {
        utils.addTips('参数错误');
        return;
      } // winOcx.getUserData((data) => {
      //     if (data.roomID) {
      //         gamedata.rid = data.roomID;
      //     }
      //     if (data.token) {
      //         gamedata.token = data.token;
      //     }
      //     if (!gamedata.rid || !gamedata.token) {
      //         utils.addTips('参数错误');
      //         return;
      //     }
      // });

    } catch (error) {
      gamedata.rid = utils.getQueryString('rid');
      gamedata.token = utils.getQueryString('token');

      if (!gamedata.rid || !gamedata.token) {
        utils.addTips('参数错误');
        return;
      }

      this.login();
    }
  },
  login: function login() {
    var preas = {
      rid: gamedata.rid,
      token: gamedata.token
    };
    UIHelp.network.httpSend('game/xiaoxiaole/getGameInfo', preas, this.loginCall.bind(this));
  },
  loginCall: function loginCall(msg) {
    console.log('login==>', msg);

    if (msg.code == 200) {
      gamedata.Lv_star = Number(msg.data.current_level); // gamedata.Lv_star = 74;

      gamedata.level_stars = msg.data.level_stars; //当前金币数量

      gamedata.gold = Number(msg.data.coin); //当前精力

      gamedata.energy = Number(msg.data.energy);
      var preas = {
        rid: gamedata.rid,
        token: gamedata.token
      };
      UIHelp.network.httpConnect_post_async('game/xiaoxiaole/getMyPropList', preas, this.getMyPropListCallBack.bind(this));
    } else {
      utils.addTips(msg.message);
    }
  },
  getMyPropListCallBack: function getMyPropListCallBack(msg) {
    console.log('getmyPrropList====>', msg);

    if (msg.code == 200) {
      if (msg.data.length > 0) {
        for (var a = 0; a < msg.data.length; a++) {
          if (msg.data[a].gid == 10001) {
            gamedata.prop[1] = Number(msg.data[a].num);
          } else if (msg.data[a].gid == 10002) {
            gamedata.prop[3] = Number(msg.data[a].num);
          } else if (msg.data[a].gid == 10003) {
            gamedata.prop[4] = Number(msg.data[a].num);
          }
        }
      }

      this.preLoading();
    } else {
      utils.addTips(msg.message);
    }
  },
  //预先加载资源
  preLoading: function preLoading() {
    var _this = this;

    var self = this; // self.tipLabel[1].string = "正在加载资源......";

    self.is_Loading = true;

    var onProcess = function onProcess(completecount, totalcount, item) {
      if (self.is_Loading) {
        var progress = completecount / totalcount * 0.5;
        self.tipLabel[0].string = Math.floor(progress * 100) + '%'; //console.log(progress);

        self.pro_loading.progress = progress;
      }
    };

    var onProcess1 = function onProcess1(completecount, totalcount, item) {
      if (self.is_Loading) {
        var progress = completecount / totalcount * 0.5 + 0.5;
        self.tipLabel[0].string = Math.floor(progress * 100) + '%'; //console.log(progress);

        self.pro_loading.progress = progress;
      }
    };

    cc.director.preloadScene('newLevel', onProcess, function () {
      cc.director.preloadScene('NewMain', onProcess1, function () {
        self.is_Loading = false;
        setTimeout(function () {
          cc.director.loadScene('newLevel');
        }.bind(_this), 1000);
      });
    }); // cc.loader.loadResDir("texture", onProcess, function (err, assets) {
    //     if (err) {
    //         self.tipLabel[1].string = "加载资源错误";
    //     } else {
    //         self.is_Loading = false;
    //         setTimeout(function () {
    //             cc.director.loadScene("newLevel");
    //         }.bind(this), 1000);
    //         // self.tipLabel[1].string = "加载关卡资源.......";
    //         // cc.loader.loadResDir('levels', cc.TextAsset, (err, res) => {
    //         //     if (err) {
    //         //         console.log("load res error=" + err);
    //         //     } else {
    //         //         // gamedata.Lv_star = res.length - 1;
    //         //         // console.log('sdafsdfa', gamedata.Lv_star)
    //         //         self.tipLabel[1].string = "加载资源成功，正在进入游戏";
    //         //         setTimeout(function () {
    //         //             cc.director.loadScene("newLevel");
    //         //         }.bind(this), 1000);
    //         //     }
    //         // })
    //     }
    // })
  }
});

cc._RF.pop();