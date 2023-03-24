
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30a17qu4wJA9LJLa5v68VwI', 'utils');
// newscripts/Main/utils.js

"use strict";

window.utils = {
  //根据列号，行号设置位置
  //根据列号，行号设置位置
  loading: null,
  rowColumnPosition: function rowColumnPosition(column, row) {
    return cc.v2(-300 + column * 74 + 5, 300 - 74 * row - 5);
  },
  //根据列号，行号设置位置
  rowColumnPosition_Anim: function rowColumnPosition_Anim(column, row) {
    return cc.v2(-300 + column * 74 + 5, 260 - 74 * row - 5);
  },
  //获得查询字符串
  getQueryString: function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  addTips: function addTips(str) {
    cc.loader.loadRes('texture/Prefab/Tips', cc.Prefab, function (err, msg) {
      if (err) {
        return;
      }

      var node = cc.instantiate(msg);
      node.active = false;
      node.parent = cc.find('Canvas');
      node.getComponent('tipsitem').onStartInfo(str);
    });
  },
  ShowLoading: function ShowLoading() {
    // if(this.loading) {
    //     return;
    // }
    // cc.loader.loadRes('texture/Prefab/loading', cc.Prefab, (err, msg) => {
    //     if(err) {
    //         return;
    //     }
    //     var node = cc.instantiate(msg);
    //     this.loading = node;
    //     node.parent = cc.find('Canvas');
    // })
    cc.find('loading').active = true;
  },
  HideLoading: function HideLoading() {
    // if(this.loading && cc.isValid(this.loading,true)) {
    //     this.loading.destroy();
    //     this.loading = null;
    // }else{
    //     return;
    // }
    cc.find('loading').active = false;
  },

  /**
  * 得到一个节点的世界坐标
  * node的原点在中心
  * @param {*} node 
  */
  localConvertWorldPointAR: function localConvertWorldPointAR(node) {
    if (node) {
      return node.convertToWorldSpaceAR(cc.v2(0, 0));
    }

    return null;
  },

  /**
   * 得到一个节点的世界坐标
   * node的原点在左下边
   * @param {*} node 
   */
  localConvertWorldPoint: function localConvertWorldPoint(node) {
    if (node) {
      return node.convertToWorldSpace(cc.v2(0, 0));
    }

    return null;
  },

  /**
   * 把一个世界坐标的点，转换到某个节点下的坐标
   * 原点在node中心
   * @param {*} node 
   * @param {*} worldPoint 
   */
  worldConvertLocalPointAR: function worldConvertLocalPointAR(node, worldPoint) {
    if (node) {
      return node.convertToNodeSpaceAR(worldPoint);
    }

    return null;
  },

  /**
   * 把一个世界坐标的点，转换到某个节点下的坐标
   * 原点在node左下角
   * @param {*} node 
   * @param {*} worldPoint 
   */
  worldConvertLocalPoint: function worldConvertLocalPoint(node, worldPoint) {
    if (node) {
      return node.convertToNodeSpace(worldPoint);
    }

    return null;
  },

  /**
   *  * 把一个节点的本地坐标转到另一个节点的本地坐标下
   * @param {*} node 
   * @param {*} targetNode 
   */
  convetOtherNodeSpace: function convetOtherNodeSpace(node, targetNode) {
    if (!node || !targetNode) {
      return null;
    } //先转成世界坐标


    var worldPoint = this.localConvertWorldPoint(node);
    return this.worldConvertLocalPoint(targetNode, worldPoint);
  },

  /**
   *  * 把一个节点的本地坐标转到另一个节点的本地坐标下
   * @param {*} node 
   * @param {*} targetNode 
   */
  convetOtherNodeSpaceAR: function convetOtherNodeSpaceAR(node, targetNode) {
    if (!node || !targetNode) {
      return null;
    } //先转成世界坐标


    var worldPoint = this.localConvertWorldPointAR(node);
    return this.worldConvertLocalPointAR(targetNode, worldPoint);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vdXRpbHMuanMiXSwibmFtZXMiOlsid2luZG93IiwidXRpbHMiLCJsb2FkaW5nIiwicm93Q29sdW1uUG9zaXRpb24iLCJjb2x1bW4iLCJyb3ciLCJjYyIsInYyIiwicm93Q29sdW1uUG9zaXRpb25fQW5pbSIsImdldFF1ZXJ5U3RyaW5nIiwibmFtZSIsInJlZyIsIlJlZ0V4cCIsInIiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN1YnN0ciIsIm1hdGNoIiwidW5lc2NhcGUiLCJhZGRUaXBzIiwic3RyIiwibG9hZGVyIiwibG9hZFJlcyIsIlByZWZhYiIsImVyciIsIm1zZyIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsImFjdGl2ZSIsInBhcmVudCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJvblN0YXJ0SW5mbyIsIlNob3dMb2FkaW5nIiwiSGlkZUxvYWRpbmciLCJsb2NhbENvbnZlcnRXb3JsZFBvaW50QVIiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJsb2NhbENvbnZlcnRXb3JsZFBvaW50IiwiY29udmVydFRvV29ybGRTcGFjZSIsIndvcmxkQ29udmVydExvY2FsUG9pbnRBUiIsIndvcmxkUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsIndvcmxkQ29udmVydExvY2FsUG9pbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2UiLCJjb252ZXRPdGhlck5vZGVTcGFjZSIsInRhcmdldE5vZGUiLCJjb252ZXRPdGhlck5vZGVTcGFjZUFSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLEtBQVAsR0FBZTtBQUNYO0FBQ0E7QUFDQUMsRUFBQUEsT0FBTyxFQUFFLElBSEU7QUFJWEMsRUFBQUEsaUJBSlcsNkJBSU9DLE1BSlAsRUFJZUMsR0FKZixFQUlvQjtBQUMzQixXQUFPQyxFQUFFLENBQUNDLEVBQUgsQ0FBTSxDQUFDLEdBQUQsR0FBT0gsTUFBTSxHQUFHLEVBQWhCLEdBQXFCLENBQTNC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5YiX5Y+377yM6KGM5Y+36K6+572u5L2N572uXHJcbiAgICAvL+agueaNruWIl+WPt++8jOihjOWPt+iuvue9ruS9jee9rlxyXG4gICAgbG9hZGluZzogbnVsbCxcclxuICAgIHJvd0NvbHVtblBvc2l0aW9uKGNvbHVtbiwgcm93KSB7XHJcbiAgICAgICAgcmV0dXJuIGNjLnYyKC0zMDAgKyBjb2x1bW4gKiA3NCArIDUsIDMwMCAtIDc0ICogcm93IC0gNSk7XHJcbiAgICB9LFxyXG4gICAgLy/moLnmja7liJflj7fvvIzooYzlj7forr7nva7kvY3nva5cclxuICAgIHJvd0NvbHVtblBvc2l0aW9uX0FuaW0oY29sdW1uLCByb3cpIHtcclxuICAgICAgICByZXR1cm4gY2MudjIoLTMwMCArIGNvbHVtbiAqIDc0ICsgNSwgMjYwIC0gNzQgKiByb3cgLSA1KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/ojrflvpfmn6Xor6LlrZfnrKbkuLJcclxuICAgIGdldFF1ZXJ5U3RyaW5nKG5hbWUpIHtcclxuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIsIFwiaVwiKTtcclxuICAgICAgICB2YXIgciA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyKDEpLm1hdGNoKHJlZyk7XHJcbiAgICAgICAgaWYgKHIgIT0gbnVsbCkgcmV0dXJuIHVuZXNjYXBlKHJbMl0pOyByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVGlwcyhzdHIpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygndGV4dHVyZS9QcmVmYWIvVGlwcycsIGNjLlByZWZhYiwgKGVyciwgbXNnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUobXNnKTtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ3RpcHNpdGVtJykub25TdGFydEluZm8oc3RyKTtcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBTaG93TG9hZGluZygpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmxvYWRpbmcpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcygndGV4dHVyZS9QcmVmYWIvbG9hZGluZycsIGNjLlByZWZhYiwgKGVyciwgbXNnKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmKGVycikge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUobXNnKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2FkaW5nID0gbm9kZTtcclxuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIGNjLmZpbmQoJ2xvYWRpbmcnKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBIaWRlTG9hZGluZygpIHtcclxuICAgICAgICAvLyBpZih0aGlzLmxvYWRpbmcgJiYgY2MuaXNWYWxpZCh0aGlzLmxvYWRpbmcsdHJ1ZSkpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2FkaW5nLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5sb2FkaW5nID0gbnVsbDtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjYy5maW5kKCdsb2FkaW5nJykuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgICAgLyoqXHJcbiAqIOW+l+WIsOS4gOS4quiKgueCueeahOS4lueVjOWdkOagh1xyXG4gKiBub2Rl55qE5Y6f54K55Zyo5Lit5b+DXHJcbiAqIEBwYXJhbSB7Kn0gbm9kZSBcclxuICovXHJcbiAgICAgICBsb2NhbENvbnZlcnRXb3JsZFBvaW50QVIobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW+l+WIsOS4gOS4quiKgueCueeahOS4lueVjOWdkOagh1xyXG4gICAgICogbm9kZeeahOWOn+eCueWcqOW3puS4i+i+uVxyXG4gICAgICogQHBhcmFtIHsqfSBub2RlIFxyXG4gICAgICovXHJcbiAgICBsb2NhbENvbnZlcnRXb3JsZFBvaW50KG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlKGNjLnYyKDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oqK5LiA5Liq5LiW55WM5Z2Q5qCH55qE54K577yM6L2s5o2i5Yiw5p+Q5Liq6IqC54K55LiL55qE5Z2Q5qCHXHJcbiAgICAgKiDljp/ngrnlnKhub2Rl5Lit5b+DXHJcbiAgICAgKiBAcGFyYW0geyp9IG5vZGUgXHJcbiAgICAgKiBAcGFyYW0geyp9IHdvcmxkUG9pbnQgXHJcbiAgICAgKi9cclxuICAgIHdvcmxkQ29udmVydExvY2FsUG9pbnRBUihub2RlLCB3b3JsZFBvaW50KSB7XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaKiuS4gOS4quS4lueVjOWdkOagh+eahOeCue+8jOi9rOaNouWIsOafkOS4quiKgueCueS4i+eahOWdkOagh1xyXG4gICAgICog5Y6f54K55Zyobm9kZeW3puS4i+inklxyXG4gICAgICogQHBhcmFtIHsqfSBub2RlIFxyXG4gICAgICogQHBhcmFtIHsqfSB3b3JsZFBvaW50IFxyXG4gICAgICovXHJcbiAgICB3b3JsZENvbnZlcnRMb2NhbFBvaW50KG5vZGUsIHdvcmxkUG9pbnQpIHtcclxuICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2Uod29ybGRQb2ludCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogICog5oqK5LiA5Liq6IqC54K555qE5pys5Zyw5Z2Q5qCH6L2s5Yiw5Y+m5LiA5Liq6IqC54K555qE5pys5Zyw5Z2Q5qCH5LiLXHJcbiAgICAgKiBAcGFyYW0geyp9IG5vZGUgXHJcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldE5vZGUgXHJcbiAgICAgKi9cclxuICAgIGNvbnZldE90aGVyTm9kZVNwYWNlKG5vZGUsIHRhcmdldE5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUgfHwgIXRhcmdldE5vZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5YWI6L2s5oiQ5LiW55WM5Z2Q5qCHXHJcbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSB0aGlzLmxvY2FsQ29udmVydFdvcmxkUG9pbnQobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRDb252ZXJ0TG9jYWxQb2ludCh0YXJnZXROb2RlLCB3b3JsZFBvaW50KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgKiDmiorkuIDkuKroioLngrnnmoTmnKzlnLDlnZDmoIfovazliLDlj6bkuIDkuKroioLngrnnmoTmnKzlnLDlnZDmoIfkuItcclxuICAgICAqIEBwYXJhbSB7Kn0gbm9kZSBcclxuICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0Tm9kZSBcclxuICAgICAqL1xyXG4gICAgY29udmV0T3RoZXJOb2RlU3BhY2VBUihub2RlLCB0YXJnZXROb2RlKSB7XHJcbiAgICAgICAgaWYgKCFub2RlIHx8ICF0YXJnZXROb2RlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WFiOi9rOaIkOS4lueVjOWdkOagh1xyXG4gICAgICAgIGxldCB3b3JsZFBvaW50ID0gdGhpcy5sb2NhbENvbnZlcnRXb3JsZFBvaW50QVIobm9kZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ybGRDb252ZXJ0TG9jYWxQb2ludEFSKHRhcmdldE5vZGUsIHdvcmxkUG9pbnQpO1xyXG4gICAgfSxcclxuXHJcbn0iXX0=