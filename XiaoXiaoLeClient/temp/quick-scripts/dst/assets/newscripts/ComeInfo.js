
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/ComeInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08d02b3WVNEIaGikh1IRfX+', 'ComeInfo');
// newscripts/ComeInfo.js

"use strict";

window.comeInfo = {
  //是否分享中
  is_share: false,
  timer: 6000,
  //总精力大小
  totalenergy: 30,
  //道具的价格
  prop_price: [0, 100, 200, 300, 400, 500, 500],
  //总关卡数量
  totallv: 500,
  //当前关卡
  now_lv: 1,
  //行数量
  row: 9,
  //列
  column: 9,
  //动物移动时间
  animalMoveTime: 0.05,
  //动物移动完开始消除的间隔时间
  delay_clear: 0.2,
  //动物消除动画的时间
  animalClearTime: 0.2,
  //毛球移动的时间
  qqmoveTime: 0.1,
  //动物的类型
  animalType: {
    none: -1,
    //空格子
    noOpen: 0,
    //未启用
    yellow: 1,
    //黄鸟
    purple: 2,
    //紫鸟
    blue: 3,
    //蓝鸟
    pink: 4,
    //粉鸟
    white: 5,
    //白鸟
    red: 6 //魔力鸟

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL0NvbWVJbmZvLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImNvbWVJbmZvIiwiaXNfc2hhcmUiLCJ0aW1lciIsInRvdGFsZW5lcmd5IiwicHJvcF9wcmljZSIsInRvdGFsbHYiLCJub3dfbHYiLCJyb3ciLCJjb2x1bW4iLCJhbmltYWxNb3ZlVGltZSIsImRlbGF5X2NsZWFyIiwiYW5pbWFsQ2xlYXJUaW1lIiwicXFtb3ZlVGltZSIsImFuaW1hbFR5cGUiLCJub25lIiwibm9PcGVuIiwieWVsbG93IiwicHVycGxlIiwiYmx1ZSIsInBpbmsiLCJ3aGl0ZSIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxRQUFQLEdBQWdCO0FBQ1o7QUFDQUMsRUFBQUEsUUFBUSxFQUFDLEtBRkc7QUFHWkMsRUFBQUEsS0FBSyxFQUFDLElBSE07QUFPWjtBQUNBQyxFQUFBQSxXQUFXLEVBQUMsRUFSQTtBQVNaO0FBQ0FDLEVBQUFBLFVBQVUsRUFBQyxDQUFDLENBQUQsRUFBRyxHQUFILEVBQU8sR0FBUCxFQUFXLEdBQVgsRUFBZSxHQUFmLEVBQW1CLEdBQW5CLEVBQXVCLEdBQXZCLENBVkM7QUFXWjtBQUNBQyxFQUFBQSxPQUFPLEVBQUMsR0FaSTtBQWFaO0FBQ0FDLEVBQUFBLE1BQU0sRUFBQyxDQWRLO0FBZVo7QUFDQUMsRUFBQUEsR0FBRyxFQUFDLENBaEJRO0FBaUJaO0FBQ0FDLEVBQUFBLE1BQU0sRUFBQyxDQWxCSztBQW9CWjtBQUNBQyxFQUFBQSxjQUFjLEVBQUMsSUFyQkg7QUFzQlo7QUFDQUMsRUFBQUEsV0FBVyxFQUFDLEdBdkJBO0FBd0JaO0FBQ0FDLEVBQUFBLGVBQWUsRUFBQyxHQXpCSjtBQTBCWjtBQUNBQyxFQUFBQSxVQUFVLEVBQUMsR0EzQkM7QUE0Qlo7QUFDQUMsRUFBQUEsVUFBVSxFQUFDO0FBQ1BDLElBQUFBLElBQUksRUFBQyxDQUFDLENBREM7QUFDQztBQUNSQyxJQUFBQSxNQUFNLEVBQUMsQ0FGQTtBQUVFO0FBQ1RDLElBQUFBLE1BQU0sRUFBQyxDQUhBO0FBR0U7QUFDVEMsSUFBQUEsTUFBTSxFQUFDLENBSkE7QUFJRTtBQUNUQyxJQUFBQSxJQUFJLEVBQUMsQ0FMRTtBQUtBO0FBQ1BDLElBQUFBLElBQUksRUFBQyxDQU5FO0FBTUE7QUFDUEMsSUFBQUEsS0FBSyxFQUFDLENBUEM7QUFPQztBQUNSQyxJQUFBQSxHQUFHLEVBQUMsQ0FSRyxDQVFEOztBQVJDO0FBN0JDLENBQWhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuY29tZUluZm89e1xyXG4gICAgLy/mmK/lkKbliIbkuqvkuK1cclxuICAgIGlzX3NoYXJlOmZhbHNlLFxyXG4gICAgdGltZXI6NjAwMCxcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC8v5oC757K+5Yqb5aSn5bCPXHJcbiAgICB0b3RhbGVuZXJneTozMCxcclxuICAgIC8v6YGT5YW355qE5Lu35qC8XHJcbiAgICBwcm9wX3ByaWNlOlswLDEwMCwyMDAsMzAwLDQwMCw1MDAsNTAwXSxcclxuICAgIC8v5oC75YWz5Y2h5pWw6YePXHJcbiAgICB0b3RhbGx2OjUwMCxcclxuICAgIC8v5b2T5YmN5YWz5Y2hXHJcbiAgICBub3dfbHY6MSxcclxuICAgIC8v6KGM5pWw6YePXHJcbiAgICByb3c6OSxcclxuICAgIC8v5YiXXHJcbiAgICBjb2x1bW46OSxcclxuXHJcbiAgICAvL+WKqOeJqeenu+WKqOaXtumXtFxyXG4gICAgYW5pbWFsTW92ZVRpbWU6MC4wNSxcclxuICAgIC8v5Yqo54mp56e75Yqo5a6M5byA5aeL5raI6Zmk55qE6Ze06ZqU5pe26Ze0XHJcbiAgICBkZWxheV9jbGVhcjowLjIsXHJcbiAgICAvL+WKqOeJqea2iOmZpOWKqOeUu+eahOaXtumXtFxyXG4gICAgYW5pbWFsQ2xlYXJUaW1lOjAuMixcclxuICAgIC8v5q+b55CD56e75Yqo55qE5pe26Ze0XHJcbiAgICBxcW1vdmVUaW1lOjAuMSxcclxuICAgIC8v5Yqo54mp55qE57G75Z6LXHJcbiAgICBhbmltYWxUeXBlOntcclxuICAgICAgICBub25lOi0xLC8v56m65qC85a2QXHJcbiAgICAgICAgbm9PcGVuOjAsLy/mnKrlkK/nlKhcclxuICAgICAgICB5ZWxsb3c6MSwvL+m7hOm4n1xyXG4gICAgICAgIHB1cnBsZToyLC8v57Sr6bifXHJcbiAgICAgICAgYmx1ZTozLC8v6JOd6bifXHJcbiAgICAgICAgcGluazo0LC8v57KJ6bifXHJcbiAgICAgICAgd2hpdGU6NSwvL+eZvem4n1xyXG4gICAgICAgIHJlZDo2LC8v6a2U5Yqb6bifXHJcbiAgICB9LFxyXG59Il19