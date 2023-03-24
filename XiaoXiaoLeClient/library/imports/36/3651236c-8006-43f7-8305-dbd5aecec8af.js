"use strict";
cc._RF.push(module, '36512NsgAZD94MF29Wuzsiv', 'GameData');
// newscripts/GameData.js

"use strict";

window.gamedata = {
  //道具数量  无作用，小木槌，爆弹，交换位置，横向消，纵向消,加5步
  prop: [0, 0, 0, 0, 0, 0, 0],
  //已通关的关卡星星数量
  //Lv_star:[0,1,2,2,2,1,2,3,2,3,3,2,2,3,2,3,1,2,3,2,3,3,3,2,2,3,1,1,2,2,1,1,3,2,3,2,3,3],
  Lv_star: 0,
  level_stars: [],
  //是否在使用道具0没有使用道具1小木槌，2魔法棒，3交换位置，4横向，5纵向
  is_prop: 0,
  //当前金币数量
  gold: 500,
  //当前钻石数量
  diamond: 10,
  //当前精力
  energy: 30,
  //最后登陆的时间
  timer: 0,
  //音量
  bg_music: true,
  //音效
  music: true,
  rid: 0,
  token: null,
  game_code: null,
  GetData: function GetData() {
    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
      var g = wx.getStorageSync('gold');

      if (g) {
        this.gold = g;
      } else {
        this.bc_gold();
      }

      var d = wx.getStorageSync('diamond');

      if (d) {
        this.diamond = d;
      } else {
        this.bc_diamond();
      }

      var e = wx.getStorageSync('energy');

      if (e) {
        this.energy = e;
      } else {
        this.bc_energy();
      }

      var t = wx.getStorageSync('timer');

      if (t) {
        this.timer = t;
      } else {
        this.timer = Date.now();
        this.bc_timer();
      }

      var bg = wx.getStorageSync('bg');

      if (bg) {
        this.bg_music = bg;
      } else {
        this.bc_music();
      }

      var m = wx.getStorageSync('music');

      if (m) {
        this.music = m;
      } else {
        this.bc_music();
      }

      var s = wx.getStorageSync('star');

      if (s) {
        this.Lv_star = s; //console.log(this.Lv_star);
      } else {
        this.bc_Star();
      } // let p1=wx.getStorageSync('prop1');
      // if(p1){
      //     this.prop[0]=p1;
      // }else{
      //     this.bc_prop();
      // }  
      // let p2=wx.getStorageSync('prop2');
      // console.log(p2);
      // if(p2){
      //     this.prop[1]=p2;
      // } 
      // let p3=wx.getStorageSync('prop3');
      // console.log(p3);
      // if(p3){
      //     this.prop[2]=p3;
      // }   
      // let p4=wx.getStorageSync('prop4');
      // console.log(p4);
      // if(p4){
      //     this.prop[3]=p4;
      // }  
      // let p5=wx.getStorageSync('prop5');
      // console.log(p5);
      // if(p5){
      //     this.prop[4]=p5;
      // }  
      // let p6=wx.getStorageSync('prop6');
      // console.log(p6);
      // if(p6){
      //     this.prop[5]=p6;
      // }  
      // let p7=wx.getStorageSync('prop7');
      // console.log(p7);
      // if(p7){
      //     this.prop[6]=p7;
      // } 
      // console.log(this.prop);

    }
  },
  //保存金币数量
  bc_gold: function bc_gold() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('gold', this.gold);
    }
  },
  //保存钻石数量
  bc_diamond: function bc_diamond() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('diamond', this.diamond);
    }
  },
  //保存精力
  bc_energy: function bc_energy() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('energy', this.energy);
    }
  },
  //保存时间
  bc_timer: function bc_timer() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('timer', this.timer);
    }
  },
  //保存道具数量
  bc_prop: function bc_prop(num) {// if(cc.sys.platform===cc.sys.WECHAT_GAME){
    //     if(num==1){
    //         wx.setStorageSync('prop2',this.prop[1]);
    //     }else if(num==2){
    //         wx.setStorageSync('prop3',this.prop[2]);
    //     }else if(num==3){
    //         wx.setStorageSync('prop4',this.prop[3]);
    //     }else if(num==4){
    //         wx.setStorageSync('prop5',this.prop[4]);
    //     }else if(num==5){
    //         wx.setStorageSync('prop6',this.prop[5]);
    //     }else if(num==6){
    //         wx.setStorageSync('prop7',this.prop[6]);
    //     }
    //     console.log("保存道具数量:"+num);
    //     console.log(this.prop);
    // }
  },
  //保存音效
  bc_music: function bc_music() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('bg', this.bg_music);
    }

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('music', this.music);
    }
  },
  //保存星星数组
  bc_Star: function bc_Star() {
    //console.log("保存星星");
    //console.log(this.Lv_star);
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.setStorageSync('star', this.Lv_star);
    }
  }
};

cc._RF.pop();