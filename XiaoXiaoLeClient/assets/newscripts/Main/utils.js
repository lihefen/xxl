window.utils = {
    //根据列号，行号设置位置
    //根据列号，行号设置位置
    loading: null,
    rowColumnPosition(column, row) {
        return cc.v2(-300 + column * 74 + 5, 300 - 74 * row - 5);
    },
    //根据列号，行号设置位置
    rowColumnPosition_Anim(column, row) {
        return cc.v2(-300 + column * 74 + 5, 260 - 74 * row - 5);
    },

    //获得查询字符串
    getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },

    addTips(str) {
        cc.loader.loadRes('texture/Prefab/Tips', cc.Prefab, (err, msg) => {
            if(err) {
                return;
            }
            var node = cc.instantiate(msg);
            node.active = false;
            node.parent = cc.find('Canvas');
            node.getComponent('tipsitem').onStartInfo(str);
        })
    },

    ShowLoading() {
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

    HideLoading() {
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
       localConvertWorldPointAR(node) {
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
    localConvertWorldPoint(node) {
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
    worldConvertLocalPointAR(node, worldPoint) {
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
    worldConvertLocalPoint(node, worldPoint) {
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
    convetOtherNodeSpace(node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        //先转成世界坐标
        let worldPoint = this.localConvertWorldPoint(node);
        return this.worldConvertLocalPoint(targetNode, worldPoint);
    },

    /**
     *  * 把一个节点的本地坐标转到另一个节点的本地坐标下
     * @param {*} node 
     * @param {*} targetNode 
     */
    convetOtherNodeSpaceAR(node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        //先转成世界坐标
        let worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
    },

}