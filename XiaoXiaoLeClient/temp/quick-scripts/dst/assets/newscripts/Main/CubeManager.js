
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/CubeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aed3esHXGdJ7ZaJ9LZhpUt8', 'CubeManager');
// newscripts/Main/CubeManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //方块预制体
    cubePrefab: cc.Prefab,
    //方块的容器(父物体)
    cubePanel: cc.Node,
    //方块管理器
    cubeArray: null,
    //指示标识
    Reminder: [cc.Node]
  },
  onLoad: function onLoad() {
    cc.ZL.cubeMgr = this;
    this.Reminder[0].active = false;
  },
  start: function start() {},
  // update (dt) {},
  //实例化方块
  InitCube: function InitCube() {
    // let info=lvdata["Lv"+comeInfo.now_lv].Anim;//获取到这一关的信息
    var info = lvdata.Anim; //获取到这一关的信息v

    this.cubeArray = new Array();

    for (var row = 0; row < info.length; row++) {
      //产生几行
      var rowArray = new Array();

      for (var column = 0; column < info[row].length; column++) {
        //产生几列
        // if(lvdata["Lv"+comeInfo.now_lv].Anim[row][column]==0){
        if (lvdata.Anim[row][column] == 0) {
          rowArray.push(-1);
        } else {
          var cube = cc.instantiate(this.cubePrefab);
          this.cubePanel.addChild(cube);
          cube.getComponent("cube").initCube(column, row);
          rowArray.push(cube);
        }
      }

      this.cubeArray.push(rowArray);
    }
  },
  //第一关开启提示
  BeginReminder: function BeginReminder() {
    if (comeInfo.now_lv == 1) {
      this.Reminder[0].active = true;
      this.Reminder[1].active = true;
      this.Reminder[1].getComponent(cc.Animation).play();
      setTimeout(function () {
        if (this.node) {
          this.Reminder[0].destroy();
        }
      }.bind(this), 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vQ3ViZU1hbmFnZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjdWJlUHJlZmFiIiwiUHJlZmFiIiwiY3ViZVBhbmVsIiwiTm9kZSIsImN1YmVBcnJheSIsIlJlbWluZGVyIiwib25Mb2FkIiwiWkwiLCJjdWJlTWdyIiwiYWN0aXZlIiwic3RhcnQiLCJJbml0Q3ViZSIsImluZm8iLCJsdmRhdGEiLCJBbmltIiwiQXJyYXkiLCJyb3ciLCJsZW5ndGgiLCJyb3dBcnJheSIsImNvbHVtbiIsInB1c2giLCJjdWJlIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImluaXRDdWJlIiwiQmVnaW5SZW1pbmRlciIsImNvbWVJbmZvIiwibm93X2x2IiwiQW5pbWF0aW9uIiwicGxheSIsInNldFRpbWVvdXQiLCJub2RlIiwiZGVzdHJveSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxNQUZQO0FBR1I7QUFDQUMsSUFBQUEsU0FBUyxFQUFFTixFQUFFLENBQUNPLElBSk47QUFLUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUUsSUFOSDtBQVFSO0FBQ0FDLElBQUFBLFFBQVEsRUFBRSxDQUFDVCxFQUFFLENBQUNPLElBQUo7QUFURixHQUhQO0FBZUxHLEVBQUFBLE1BZkssb0JBZUk7QUFDTFYsSUFBQUEsRUFBRSxDQUFDVyxFQUFILENBQU1DLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQSxTQUFLSCxRQUFMLENBQWMsQ0FBZCxFQUFpQkksTUFBakIsR0FBMEIsS0FBMUI7QUFDSCxHQWxCSTtBQW9CTEMsRUFBQUEsS0FwQkssbUJBb0JHLENBRVAsQ0F0Qkk7QUF3Qkw7QUFDQTtBQUNBQyxFQUFBQSxRQTFCSyxzQkEwQk07QUFDUDtBQUNBLFFBQUlDLElBQUksR0FBR0MsTUFBTSxDQUFDQyxJQUFsQixDQUZPLENBRWdCOztBQUN2QixTQUFLVixTQUFMLEdBQWlCLElBQUlXLEtBQUosRUFBakI7O0FBQ0EsU0FBSyxJQUFJQyxHQUFHLEdBQUcsQ0FBZixFQUFrQkEsR0FBRyxHQUFHSixJQUFJLENBQUNLLE1BQTdCLEVBQXFDRCxHQUFHLEVBQXhDLEVBQTRDO0FBQUM7QUFDekMsVUFBSUUsUUFBUSxHQUFHLElBQUlILEtBQUosRUFBZjs7QUFDQSxXQUFLLElBQUlJLE1BQU0sR0FBRyxDQUFsQixFQUFxQkEsTUFBTSxHQUFHUCxJQUFJLENBQUNJLEdBQUQsQ0FBSixDQUFVQyxNQUF4QyxFQUFnREUsTUFBTSxFQUF0RCxFQUEwRDtBQUFDO0FBQ3ZEO0FBQ0EsWUFBSU4sTUFBTSxDQUFDQyxJQUFQLENBQVlFLEdBQVosRUFBaUJHLE1BQWpCLEtBQTRCLENBQWhDLEVBQW1DO0FBQy9CRCxVQUFBQSxRQUFRLENBQUNFLElBQVQsQ0FBYyxDQUFDLENBQWY7QUFDSCxTQUZELE1BRU87QUFDSCxjQUFJQyxJQUFJLEdBQUd6QixFQUFFLENBQUMwQixXQUFILENBQWUsS0FBS3RCLFVBQXBCLENBQVg7QUFDQSxlQUFLRSxTQUFMLENBQWVxQixRQUFmLENBQXdCRixJQUF4QjtBQUNBQSxVQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJDLFFBQTFCLENBQW1DTixNQUFuQyxFQUEyQ0gsR0FBM0M7QUFDQUUsVUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWNDLElBQWQ7QUFDSDtBQUVKOztBQUNELFdBQUtqQixTQUFMLENBQWVnQixJQUFmLENBQW9CRixRQUFwQjtBQUNIO0FBQ0osR0E5Q0k7QUErQ0w7QUFDQVEsRUFBQUEsYUFoREssMkJBZ0RXO0FBQ1osUUFBSUMsUUFBUSxDQUFDQyxNQUFULElBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLFdBQUt2QixRQUFMLENBQWMsQ0FBZCxFQUFpQkksTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxXQUFLSixRQUFMLENBQWMsQ0FBZCxFQUFpQkksTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxXQUFLSixRQUFMLENBQWMsQ0FBZCxFQUFpQm1CLFlBQWpCLENBQThCNUIsRUFBRSxDQUFDaUMsU0FBakMsRUFBNENDLElBQTVDO0FBQ0FDLE1BQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CLFlBQUksS0FBS0MsSUFBVCxFQUFlO0FBQ1gsZUFBSzNCLFFBQUwsQ0FBYyxDQUFkLEVBQWlCNEIsT0FBakI7QUFDSDtBQUNKLE9BSlUsQ0FJVEMsSUFKUyxDQUlKLElBSkksQ0FBRCxFQUlJLElBSkosQ0FBVjtBQUtIO0FBRUo7QUE1REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy/mlrnlnZfpooTliLbkvZNcclxuICAgICAgICBjdWJlUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgLy/mlrnlnZfnmoTlrrnlmago54i254mp5L2TKVxyXG4gICAgICAgIGN1YmVQYW5lbDogY2MuTm9kZSxcclxuICAgICAgICAvL+aWueWdl+euoeeQhuWZqFxyXG4gICAgICAgIGN1YmVBcnJheTogbnVsbCxcclxuXHJcbiAgICAgICAgLy/mjIfnpLrmoIfor4ZcclxuICAgICAgICBSZW1pbmRlcjogW2NjLk5vZGVdLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuWkwuY3ViZU1nciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5SZW1pbmRlclswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIC8v5a6e5L6L5YyW5pa55Z2XXHJcbiAgICBJbml0Q3ViZSgpIHtcclxuICAgICAgICAvLyBsZXQgaW5mbz1sdmRhdGFbXCJMdlwiK2NvbWVJbmZvLm5vd19sdl0uQW5pbTsvL+iOt+WPluWIsOi/meS4gOWFs+eahOS/oeaBr1xyXG4gICAgICAgIGxldCBpbmZvID0gbHZkYXRhLkFuaW07Ly/ojrflj5bliLDov5nkuIDlhbPnmoTkv6Hmga92XHJcbiAgICAgICAgdGhpcy5jdWJlQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBpbmZvLmxlbmd0aDsgcm93KyspIHsvL+S6p+eUn+WHoOihjFxyXG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgaW5mb1tyb3ddLmxlbmd0aDsgY29sdW1uKyspIHsvL+S6p+eUn+WHoOWIl1xyXG4gICAgICAgICAgICAgICAgLy8gaWYobHZkYXRhW1wiTHZcIitjb21lSW5mby5ub3dfbHZdLkFuaW1bcm93XVtjb2x1bW5dPT0wKXtcclxuICAgICAgICAgICAgICAgIGlmIChsdmRhdGEuQW5pbVtyb3ddW2NvbHVtbl0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goLTEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3ViZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3ViZVByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdWJlUGFuZWwuYWRkQ2hpbGQoY3ViZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ViZS5nZXRDb21wb25lbnQoXCJjdWJlXCIpLmluaXRDdWJlKGNvbHVtbiwgcm93KTtcclxuICAgICAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKGN1YmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmN1YmVBcnJheS5wdXNoKHJvd0FycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/nrKzkuIDlhbPlvIDlkK/mj5DnpLpcclxuICAgIEJlZ2luUmVtaW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKGNvbWVJbmZvLm5vd19sdiA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuUmVtaW5kZXJbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5SZW1pbmRlclsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLlJlbWluZGVyWzFdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW1pbmRlclswXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMzAwMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==