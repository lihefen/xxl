
cc.Class({
    extends: cc.Component,

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
        qqmoveNum: 0,
    },
    onLoad() {
        cc.ZL.iceMgr = this;
        this.iceArray = new Array();
        this.UpArray = new Array();
    },

    start() {

    },

    // update (dt) {},
    //实例化下层障碍
    InitIce() {
        for (let row = 0; row < comeInfo.row; row++) {
            let rowArray = new Array();
            for (let column = 0; column < comeInfo.column; column++) {
                // if(lvdata["Lv"+comeInfo.now_lv].ice[row][column]!=0){
                if (lvdata.ice[row][column] != 0) {
                    let ice = cc.instantiate(this.icePrefab);
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
    InitUPAnim() {
        for (let row = 0; row < comeInfo.row; row++) {
            let rowArray = new Array();
            for (let column = 0; column < comeInfo.column; column++) {
                // if(lvdata["Lv"+comeInfo.now_lv].eff[row][column]==13){//实例化小毛球
                if (lvdata.eff[row][column] == 13) {//实例化小毛球
                    let qq = cc.instantiate(this.qqAnim);
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
    UPAllMove() {
        let list = new Array();
        for (let row = 0; row < comeInfo.row; row++) {
            for (let column = 0; column < comeInfo.column; column++) {
                if (this.UpArray[row][column].type == 13) {//就是有东西
                    list.push(this.UpArray[row][column]);
                }
            }
        }
        let qry = list.length;
        if (qry == 0) {
            return;
        }
        let n = 0;
        this.schedule(function () {
            list[n].QQMove();
            n++;
        }.bind(this), 0.1, qry - 1);

    }
});
