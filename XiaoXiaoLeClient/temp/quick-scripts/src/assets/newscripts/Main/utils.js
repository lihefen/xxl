"use strict";
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