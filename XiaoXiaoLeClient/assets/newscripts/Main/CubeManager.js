
cc.Class({
    extends: cc.Component,

    properties: {
        //方块预制体
        cubePrefab: cc.Prefab,
        //方块的容器(父物体)
        cubePanel: cc.Node,
        //方块管理器
        cubeArray: null,

        //指示标识
        Reminder: [cc.Node],
    },

    onLoad() {
        cc.ZL.cubeMgr = this;
        this.Reminder[0].active = false;
    },

    start() {

    },

    // update (dt) {},
    //实例化方块
    InitCube() {
        // let info=lvdata["Lv"+comeInfo.now_lv].Anim;//获取到这一关的信息
        let info = lvdata.Anim;//获取到这一关的信息v
        this.cubeArray = new Array();
        for (let row = 0; row < info.length; row++) {//产生几行
            let rowArray = new Array();
            for (let column = 0; column < info[row].length; column++) {//产生几列
                // if(lvdata["Lv"+comeInfo.now_lv].Anim[row][column]==0){
                if (lvdata.Anim[row][column] == 0) {
                    rowArray.push(-1);
                } else {
                    let cube = cc.instantiate(this.cubePrefab);
                    this.cubePanel.addChild(cube);
                    cube.getComponent("cube").initCube(column, row);
                    rowArray.push(cube);
                }

            }
            this.cubeArray.push(rowArray);
        }
    },
    //第一关开启提示
    BeginReminder() {
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
