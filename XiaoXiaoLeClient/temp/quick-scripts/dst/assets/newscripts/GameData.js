
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/GameData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0dhbWVEYXRhLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdhbWVkYXRhIiwicHJvcCIsIkx2X3N0YXIiLCJsZXZlbF9zdGFycyIsImlzX3Byb3AiLCJnb2xkIiwiZGlhbW9uZCIsImVuZXJneSIsInRpbWVyIiwiYmdfbXVzaWMiLCJtdXNpYyIsInJpZCIsInRva2VuIiwiZ2FtZV9jb2RlIiwiR2V0RGF0YSIsImNjIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsImciLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiYmNfZ29sZCIsImQiLCJiY19kaWFtb25kIiwiZSIsImJjX2VuZXJneSIsInQiLCJEYXRlIiwibm93IiwiYmNfdGltZXIiLCJiZyIsImJjX211c2ljIiwibSIsInMiLCJiY19TdGFyIiwic2V0U3RvcmFnZVN5bmMiLCJiY19wcm9wIiwibnVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLFFBQVAsR0FBZ0I7QUFDWjtBQUNBQyxFQUFBQSxJQUFJLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLENBRk87QUFHWjtBQUNBO0FBQ0FDLEVBQUFBLE9BQU8sRUFBQyxDQUxJO0FBTVpDLEVBQUFBLFdBQVcsRUFBQyxFQU5BO0FBT1o7QUFDQUMsRUFBQUEsT0FBTyxFQUFDLENBUkk7QUFTWjtBQUNBQyxFQUFBQSxJQUFJLEVBQUMsR0FWTztBQVdaO0FBQ0FDLEVBQUFBLE9BQU8sRUFBQyxFQVpJO0FBYVo7QUFDQUMsRUFBQUEsTUFBTSxFQUFDLEVBZEs7QUFlWjtBQUNBQyxFQUFBQSxLQUFLLEVBQUMsQ0FoQk07QUFpQlo7QUFDQUMsRUFBQUEsUUFBUSxFQUFDLElBbEJHO0FBbUJaO0FBQ0FDLEVBQUFBLEtBQUssRUFBQyxJQXBCTTtBQXFCWkMsRUFBQUEsR0FBRyxFQUFDLENBckJRO0FB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QUFHcEIsRUFBRSxDQUFDQyxHQUFILENBQU9DLFFBQVAsS0FBa0JGLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPRSxXQUE1QixFQUF3QztBQUN0Q0UsTUFBQUEsRUFBRSxDQUFDZ0IsY0FBSCxDQUFrQixNQUFsQixFQUF5QixLQUFLbEMsT0FBOUI7QUFDRDtBQUNKO0FBN0tXLENBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuZ2FtZWRhdGE9e1xyXG4gICAgLy/pgZPlhbfmlbDph48gIOaXoOS9nOeUqO+8jOWwj+acqOanjO+8jOeIhuW8ue+8jOS6pOaNouS9jee9ru+8jOaoquWQkea2iO+8jOe6teWQkea2iCzliqA15q2lXHJcbiAgICBwcm9wOlswLDAsMCwwLDAsMCwwXSxcclxuICAgIC8v5bey6YCa5YWz55qE5YWz5Y2h5pif5pif5pWw6YePXHJcbiAgICAvL0x2X3N0YXI6WzAsMSwyLDIsMiwxLDIsMywyLDMsMywyLDIsMywyLDMsMSwyLDMsMiwzLDMsMywyLDIsMywxLDEsMiwyLDEsMSwzLDIsMywyLDMsM10sXHJcbiAgICBMdl9zdGFyOjAsXHJcbiAgICBsZXZlbF9zdGFyczpbXSxcclxuICAgIC8v5piv5ZCm5Zyo5L2/55So6YGT5YW3MOayoeacieS9v+eUqOmBk+WFtzHlsI/mnKjmp4zvvIwy6a2U5rOV5qOS77yMM+S6pOaNouS9jee9ru+8jDTmqKrlkJHvvIw157q15ZCRXHJcbiAgICBpc19wcm9wOjAsXHJcbiAgICAvL+W9k+WJjemHkeW4geaVsOmHj1xyXG4gICAgZ29sZDo1MDAsXHJcbiAgICAvL+W9k+WJjemSu+efs+aVsOmHj1xyXG4gICAgZGlhbW9uZDoxMCxcclxuICAgIC8v5b2T5YmN57K+5YqbXHJcbiAgICBlbmVyZ3k6MzAsXHJcbiAgICAvL+acgOWQjueZu+mZhueahOaXtumXtFxyXG4gICAgdGltZXI6MCxcclxuICAgIC8v6Z+z6YePXHJcbiAgICBiZ19tdXNpYzp0cnVlLFxyXG4gICAgLy/pn7PmlYhcclxuICAgIG11c2ljOnRydWUsXHJcbiAgICByaWQ6MCxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgZ2FtZV9jb2RlOiBudWxsLFxyXG4gICAgR2V0RGF0YSgpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybT09Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgbGV0IGc9d3guZ2V0U3RvcmFnZVN5bmMoJ2dvbGQnKTtcclxuICAgICAgICAgICAgaWYoZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvbGQ9ZztcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJjX2dvbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZD13eC5nZXRTdG9yYWdlU3luYygnZGlhbW9uZCcpO1xyXG4gICAgICAgICAgICBpZihkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbW9uZD1kO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmNfZGlhbW9uZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBlPXd4LmdldFN0b3JhZ2VTeW5jKCdlbmVyZ3knKTtcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJneT1lO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmNfZW5lcmd5KCk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICBsZXQgdD13eC5nZXRTdG9yYWdlU3luYygndGltZXInKTtcclxuICAgICAgICAgICAgaWYodCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyPXQ7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lcj1EYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iY190aW1lcigpO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBsZXQgYmc9d3guZ2V0U3RvcmFnZVN5bmMoJ2JnJyk7XHJcbiAgICAgICAgICAgIGlmKGJnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmdfbXVzaWM9Ymc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iY19tdXNpYygpO1xyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICBsZXQgbT13eC5nZXRTdG9yYWdlU3luYygnbXVzaWMnKTtcclxuICAgICAgICAgICAgaWYobSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11c2ljPW07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iY19tdXNpYygpO1xyXG4gICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgbGV0IHM9d3guZ2V0U3RvcmFnZVN5bmMoJ3N0YXInKTtcclxuICAgICAgICAgICAgaWYocyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkx2X3N0YXI9cztcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5Mdl9zdGFyKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJjX1N0YXIoKTtcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGxldCBwMT13eC5nZXRTdG9yYWdlU3luYygncHJvcDEnKTtcclxuICAgICAgICAgICAgLy8gaWYocDEpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wWzBdPXAxO1xyXG4gICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuYmNfcHJvcCgpO1xyXG4gICAgICAgICAgICAvLyB9ICBcclxuICAgICAgICAgICAgLy8gbGV0IHAyPXd4LmdldFN0b3JhZ2VTeW5jKCdwcm9wMicpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwMik7XHJcbiAgICAgICAgICAgIC8vIGlmKHAyKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcFsxXT1wMjtcclxuICAgICAgICAgICAgLy8gfSBcclxuICAgICAgICAgICAgLy8gbGV0IHAzPXd4LmdldFN0b3JhZ2VTeW5jKCdwcm9wMycpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwMyk7XHJcbiAgICAgICAgICAgIC8vIGlmKHAzKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcFsyXT1wMztcclxuICAgICAgICAgICAgLy8gfSAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gbGV0IHA0PXd4LmdldFN0b3JhZ2VTeW5jKCdwcm9wNCcpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwNCk7XHJcbiAgICAgICAgICAgIC8vIGlmKHA0KXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcFszXT1wNDtcclxuICAgICAgICAgICAgLy8gfSAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBsZXQgcDU9d3guZ2V0U3RvcmFnZVN5bmMoJ3Byb3A1Jyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHA1KTtcclxuICAgICAgICAgICAgLy8gaWYocDUpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wWzRdPXA1O1xyXG4gICAgICAgICAgICAvLyB9ICBcclxuICAgICAgICAgICAgLy8gbGV0IHA2PXd4LmdldFN0b3JhZ2VTeW5jKCdwcm9wNicpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwNik7XHJcbiAgICAgICAgICAgIC8vIGlmKHA2KXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcFs1XT1wNjtcclxuICAgICAgICAgICAgLy8gfSAgXHJcbiAgICAgICAgICAgIC8vIGxldCBwNz13eC5nZXRTdG9yYWdlU3luYygncHJvcDcnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocDcpO1xyXG4gICAgICAgICAgICAvLyBpZihwNyl7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnByb3BbNl09cDc7XHJcbiAgICAgICAgICAgIC8vIH0gXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5L+d5a2Y6YeR5biB5pWw6YePXHJcbiAgICBiY19nb2xkKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtPT09Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2dvbGQnLHRoaXMuZ29sZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5L+d5a2Y6ZK755+z5pWw6YePXHJcbiAgICBiY19kaWFtb25kKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtPT09Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2RpYW1vbmQnLHRoaXMuZGlhbW9uZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5L+d5a2Y57K+5YqbXHJcbiAgICBiY19lbmVyZ3koKXtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm09PT1jYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnZW5lcmd5Jyx0aGlzLmVuZXJneSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5L+d5a2Y5pe26Ze0XHJcbiAgICBiY190aW1lcigpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybT09PWNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0aW1lcicsdGhpcy50aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5L+d5a2Y6YGT5YW35pWw6YePXHJcbiAgICBiY19wcm9wKG51bSl7XHJcbiAgICAgICAgLy8gaWYoY2Muc3lzLnBsYXRmb3JtPT09Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAvLyAgICAgaWYobnVtPT0xKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncHJvcDInLHRoaXMucHJvcFsxXSk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNlIGlmKG51bT09Mil7XHJcbiAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncHJvcDMnLHRoaXMucHJvcFsyXSk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNlIGlmKG51bT09Myl7XHJcbiAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncHJvcDQnLHRoaXMucHJvcFszXSk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNlIGlmKG51bT09NCl7XHJcbiAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncHJvcDUnLHRoaXMucHJvcFs0XSk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNlIGlmKG51bT09NSl7XHJcbiAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncHJvcDYnLHRoaXMucHJvcFs1XSk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNlIGlmKG51bT09Nil7XHJcbiAgICAgICAgLy8gICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygncHJvcDcnLHRoaXMucHJvcFs2XSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCLkv53lrZjpgZPlhbfmlbDph486XCIrbnVtKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5wcm9wKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgLy/kv53lrZjpn7PmlYhcclxuICAgIGJjX211c2ljKCl7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtPT09Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2JnJyx0aGlzLmJnX211c2ljKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtPT09Y2Muc3lzLldFQ0hBVF9HQU1FKXtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ211c2ljJyx0aGlzLm11c2ljKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/kv53lrZjmmJ/mmJ/mlbDnu4RcclxuICAgIGJjX1N0YXIoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5L+d5a2Y5pif5pifXCIpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5Mdl9zdGFyKTtcclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm09PT1jYy5zeXMuV0VDSEFUX0dBTUUpe1xyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3N0YXInLHRoaXMuTHZfc3Rhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSJdfQ==