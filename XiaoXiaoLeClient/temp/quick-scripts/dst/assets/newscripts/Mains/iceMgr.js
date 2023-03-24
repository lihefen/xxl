
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Mains/iceMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51f2fnab71ImK65tUMpfPHT', 'iceMgr');
// newscripts/Mains/iceMgr.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    //ice父物体
    icePrefab: cc.Prefab,
    //ice容器
    iceParent: cc.Node,
    iceArray: null,
    //上层父物体
    UpParent: cc.Node,
    //毛球预制体
    qqAnim: cc.Prefab,
    UpArray: null,
    //需要移动的毛球的数量
    qqmoveNum: 0
  },
  onLoad: function onLoad() {
    cc.ZL.iceMgr = this;
    this.iceArray = new Array();
    this.UpArray = new Array();
  },
  start: function start() {},
  // update (dt) {},
  //实例化下层障碍
  InitIce: function InitIce() {
    for (var row = 0; row < comeInfo.row; row++) {
      var rowArray = new Array();

      for (var column = 0; column < comeInfo.column; column++) {
        // if(lvdata["Lv"+comeInfo.now_lv].ice[row][column]!=0){
        if (lvdata.ice[row][column] != 0) {
          var ice = cc.instantiate(this.icePrefab);
          this.iceParent.addChild(ice);
          ice.getComponent("ice").InitView(row, column);
          rowArray.push(ice.getComponent("ice"));
        } else {
          rowArray.push(0);
        }
      }

      this.iceArray.push(rowArray);
    }
  },
  //实例化上层障碍
  InitUPAnim: function InitUPAnim() {
    for (var row = 0; row < comeInfo.row; row++) {
      var rowArray = new Array();

      for (var column = 0; column < comeInfo.column; column++) {
        // if(lvdata["Lv"+comeInfo.now_lv].eff[row][column]==13){//实例化小毛球
        if (lvdata.eff[row][column] == 13) {
          //实例化小毛球
          var qq = cc.instantiate(this.qqAnim);
          this.UpParent.addChild(qq);
          qq.getComponent("QQ").InitQQ(row, column, 13);
          rowArray.push(qq.getComponent("QQ"));
          this.qqmoveNum += 1;
        } else {
          rowArray.push(0);
        }
      }

      this.UpArray.push(rowArray);
    }
  },
  //上层可移动的全部移动一下
  UPAllMove: function UPAllMove() {
    var list = new Array();

    for (var row = 0; row < comeInfo.row; row++) {
      for (var column = 0; column < comeInfo.column; column++) {
        if (this.UpArray[row][column].type == 13) {
          //就是有东西
          list.push(this.UpArray[row][column]);
        }
      }
    }

    var qry = list.length;

    if (qry == 0) {
      return;
    }

    var n = 0;
    this.schedule(function () {
      list[n].QQMove();
      n++;
    }.bind(this), 0.1, qry - 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW5zL2ljZU1nci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImljZVByZWZhYiIsIlByZWZhYiIsImljZVBhcmVudCIsIk5vZGUiLCJpY2VBcnJheSIsIlVwUGFyZW50IiwicXFBbmltIiwiVXBBcnJheSIsInFxbW92ZU51bSIsIm9uTG9hZCIsIlpMIiwiaWNlTWdyIiwiQXJyYXkiLCJzdGFydCIsIkluaXRJY2UiLCJyb3ciLCJjb21lSW5mbyIsInJvd0FycmF5IiwiY29sdW1uIiwibHZkYXRhIiwiaWNlIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIkluaXRWaWV3IiwicHVzaCIsIkluaXRVUEFuaW0iLCJlZmYiLCJxcSIsIkluaXRRUSIsIlVQQWxsTW92ZSIsImxpc3QiLCJ0eXBlIiwicXJ5IiwibGVuZ3RoIiwibiIsInNjaGVkdWxlIiwiUVFNb3ZlIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsU0FBUyxFQUFFSixFQUFFLENBQUNLLE1BRk47QUFHUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUVOLEVBQUUsQ0FBQ08sSUFKTjtBQUtSQyxJQUFBQSxRQUFRLEVBQUUsSUFMRjtBQU1SO0FBQ0FDLElBQUFBLFFBQVEsRUFBRVQsRUFBRSxDQUFDTyxJQVBMO0FBUVI7QUFDQUcsSUFBQUEsTUFBTSxFQUFFVixFQUFFLENBQUNLLE1BVEg7QUFVUk0sSUFBQUEsT0FBTyxFQUFFLElBVkQ7QUFXUjtBQUNBQyxJQUFBQSxTQUFTLEVBQUU7QUFaSCxHQUhQO0FBaUJMQyxFQUFBQSxNQWpCSyxvQkFpQkk7QUFDTGIsSUFBQUEsRUFBRSxDQUFDYyxFQUFILENBQU1DLE1B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Q0FBQ0UsTUFBdkMsRUFBK0NBLE1BQU0sRUFBckQsRUFBeUQ7QUFDckQsWUFBSSxLQUFLWCxPQUFMLENBQWFRLEdBQWIsRUFBa0JHLE1BQWxCLEVBQTBCYyxJQUExQixJQUFrQyxFQUF0QyxFQUEwQztBQUFDO0FBQ3ZDRCxVQUFBQSxJQUFJLENBQUNOLElBQUwsQ0FBVSxLQUFLbEIsT0FBTCxDQUFhUSxHQUFiLEVBQWtCRyxNQUFsQixDQUFWO0FBQ0g7QUFDSjtBQUNKOztBQUNELFFBQUllLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxNQUFmOztBQUNBLFFBQUlELEdBQUcsSUFBSSxDQUFYLEVBQWM7QUFDVjtBQUNIOztBQUNELFFBQUlFLENBQUMsR0FBRyxDQUFSO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLFlBQVk7QUFDdEJMLE1BQUFBLElBQUksQ0FBQ0ksQ0FBRCxDQUFKLENBQVFFLE1BQVI7QUFDQUYsTUFBQUEsQ0FBQztBQUNKLEtBSGEsQ0FHWkcsSUFIWSxDQUdQLElBSE8sQ0FBZCxFQUdjLEdBSGQsRUFHbUJMLEdBQUcsR0FBRyxDQUh6QjtBQUtIO0FBckZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vaWNl54i254mp5L2TXHJcbiAgICAgICAgaWNlUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgLy9pY2XlrrnlmahcclxuICAgICAgICBpY2VQYXJlbnQ6IGNjLk5vZGUsXHJcbiAgICAgICAgaWNlQXJyYXk6IG51bGwsXHJcbiAgICAgICAgLy/kuIrlsYLniLbniankvZNcclxuICAgICAgICBVcFBhcmVudDogY2MuTm9kZSxcclxuICAgICAgICAvL+avm+eQg+mihOWItuS9k1xyXG4gICAgICAgIHFxQW5pbTogY2MuUHJlZmFiLFxyXG4gICAgICAgIFVwQXJyYXk6IG51bGwsXHJcbiAgICAgICAgLy/pnIDopoHnp7vliqjnmoTmr5vnkIPnmoTmlbDph49cclxuICAgICAgICBxcW1vdmVOdW06IDAsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLlpMLmljZU1nciA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pY2VBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuVXBBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG4gICAgLy/lrp7kvovljJbkuIvlsYLpmpznoo1cclxuICAgIEluaXRJY2UoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgY29tZUluZm8ucm93OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgY29tZUluZm8uY29sdW1uOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYobHZkYXRhW1wiTHZcIitjb21lSW5mby5ub3dfbHZdLmljZVtyb3ddW2NvbHVtbl0hPTApe1xyXG4gICAgICAgICAgICAgICAgaWYgKGx2ZGF0YS5pY2Vbcm93XVtjb2x1bW5dICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5pY2VQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaWNlUGFyZW50LmFkZENoaWxkKGljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWNlLmdldENvbXBvbmVudChcImljZVwiKS5Jbml0Vmlldyhyb3csIGNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaChpY2UuZ2V0Q29tcG9uZW50KFwiaWNlXCIpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmljZUFycmF5LnB1c2gocm93QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+WunuS+i+WMluS4iuWxgumanOeijVxyXG4gICAgSW5pdFVQQW5pbSgpIHtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBjb21lSW5mby5yb3c7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCByb3dBcnJheSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb21lSW5mby5jb2x1bW47IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihsdmRhdGFbXCJMdlwiK2NvbWVJbmZvLm5vd19sdl0uZWZmW3Jvd11bY29sdW1uXT09MTMpey8v5a6e5L6L5YyW5bCP5q+b55CDXHJcbiAgICAgICAgICAgICAgICBpZiAobHZkYXRhLmVmZltyb3ddW2NvbHVtbl0gPT0gMTMpIHsvL+WunuS+i+WMluWwj+avm+eQg1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBxcSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucXFBbmltKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlVwUGFyZW50LmFkZENoaWxkKHFxKTtcclxuICAgICAgICAgICAgICAgICAgICBxcS5nZXRDb21wb25lbnQoXCJRUVwiKS5Jbml0UVEocm93LCBjb2x1bW4sIDEzKTtcclxuICAgICAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKHFxLmdldENvbXBvbmVudChcIlFRXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnFxbW92ZU51bSArPSAxO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuVXBBcnJheS5wdXNoKHJvd0FycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/kuIrlsYLlj6/np7vliqjnmoTlhajpg6jnp7vliqjkuIDkuItcclxuICAgIFVQQWxsTW92ZSgpIHtcclxuICAgICAgICBsZXQgbGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGNvbWVJbmZvLnJvdzsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgY29tZUluZm8uY29sdW1uOyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVXBBcnJheVtyb3ddW2NvbHVtbl0udHlwZSA9PSAxMykgey8v5bCx5piv5pyJ5Lic6KW/XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRoaXMuVXBBcnJheVtyb3ddW2NvbHVtbl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBxcnkgPSBsaXN0Lmxlbmd0aDtcclxuICAgICAgICBpZiAocXJ5ID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpc3Rbbl0uUVFNb3ZlKCk7XHJcbiAgICAgICAgICAgIG4rKztcclxuICAgICAgICB9LmJpbmQodGhpcyksIDAuMSwgcXJ5IC0gMSk7XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19