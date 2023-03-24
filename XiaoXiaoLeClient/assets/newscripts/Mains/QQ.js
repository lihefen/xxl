
cc.Class({
    extends: cc.Component,

    properties: {
        rowNum: -1,
        columnNum: -1,
        type: -1,
        typenum: -1,
    },

    // onLoad () {},
    start() {

    },

    // update (dt) {},
    InitQQ(row, column, type) {
        this.rowNum = row;
        this.columnNum = column;
        this.type = type;
        this.node.setPosition(utils.rowColumnPosition(column, row));
        cc.ZL.animMgr.animalArray[this.rowNum][this.columnNum].can_move = false;
        // for(let i=0;i<lvdata["Lv"+comeInfo.now_lv].target.length;i++){
        //     if(lvdata["Lv"+comeInfo.now_lv].target[i][0]==this.type){
        for (let i = 0; i < lvdata.target.length; i++) {
            if (lvdata.target[i][0] == this.type) {
                this.typenum = i;
            }
        }
    },
    QQMove() {
        //有可能连续两次移动
        this.node.stopAllActions();
        let nextanim = this.RandAnim();
        if (nextanim != null) {
            //获取要移动到的位置
            let arow = nextanim.rowNum;
            let acolumn = nextanim.columnNum;

            //先清空在旧数组中的位置
            cc.ZL.iceMgr.UpArray[this.rowNum][this.columnNum] = 0;
            //将那个位置的动物设为可移动
            cc.ZL.animMgr.animalArray[this.rowNum][this.columnNum].can_move = true;
            //将要移动到下个位置设为这个对象
            cc.ZL.iceMgr.UpArray[arow][acolumn] = this;
            //将要移动到下个位置的动物设为不可移动
            cc.ZL.animMgr.animalArray[arow][acolumn].can_move = false;
            this.node.runAction(cc.jumpTo(comeInfo.qqmoveTime, utils.rowColumnPosition(acolumn, arow), 50, 1));
            this.rowNum = arow;
            this.columnNum = acolumn;
        } else {
            //console.log("不可移动");
        }
    },
    //随机选择周围的一个动物
    RandAnim() {
        let around = new Array();
        //上
        if (this.rowNum - 1 >= 0) {
            let anim = cc.ZL.animMgr.animalArray[this.rowNum - 1][this.columnNum];
            if (anim != 0 && anim != -1) {
                if (anim.animType > 0 && anim.animType <= 6 && anim.can_move) {
                    around.push(anim);
                }
            }
        }
        //下
        if (this.rowNum + 1 < comeInfo.column) {
            let anim = cc.ZL.animMgr.animalArray[this.rowNum + 1][this.columnNum];
            if (anim != 0 && anim != -1) {
                if (anim.animType > 0 && anim.animType <= 6 && anim.can_move) {
                    around.push(anim);
                }
            }
        }
        //左
        if (this.columnNum - 1 >= 0) {
            let anim = cc.ZL.animMgr.animalArray[this.rowNum][this.columnNum - 1];
            if (anim != 0 && anim != -1) {
                if (anim.animType > 0 && anim.animType <= 6 && anim.can_move) {
                    around.push(anim);
                }
            }
        }
        //右
        if (this.columnNum + 1 < comeInfo.row) {
            let anim = cc.ZL.animMgr.animalArray[this.rowNum][this.columnNum + 1];
            if (anim != 0 && anim != -1) {
                if (anim.animType > 0 && anim.animType <= 6 && anim.can_move) {
                    around.push(anim);
                }
            }
        }
        //如果周围有可以移动的
        if (around.length > 0) {
            let Toanim = around[Math.floor(Math.random() * around.length)];
            return Toanim;
        } else {
            return null;
        }
    },
    clear() {
        if (this.type == 13) {
            cc.ZL.iceMgr.qqmoveNum -= 1;
            cc.ZL.animMgr.animalArray[this.rowNum][this.columnNum].can_move = true;
            cc.ZL.iceMgr.UpArray[this.rowNum][this.columnNum] = 0;
            if (this.typenum != -1) {
                cc.ZL.targetMgr.clearTarget(this.node, this.typenum);
            } else {
                this.node.destroy();
            }
        }
    }
});
