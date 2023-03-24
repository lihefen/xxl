cc.Class({
    extends: cc.Component,

    properties: {
        //列号
        columnNum: -1,
        //行号
        rowNum: -1,
        //管理器
        animalMgr: null,
        //动物的类型
        animType: 0, //0障碍物，1狗,2猴子，3鸟，4猫，5羊  6魔力鸟
        //消除类型 0普通1横向2纵向3范围4魔力鸟
        clearType: 0,
        can_move: true,
        //是否已经被消除
        is_clear: false,
    },

    // onLoad () {},

    start() {},

    update(dt) {},
    initAnimal(columnnum, rownum, animalMgr) {
        this.clearType = 0;
        this.pos = [];
        this.node.sacle = 1;
        this.is_clear = false;
        if (rownum == -1) {
            this.animType = Math.floor(Math.random() * 5) + 1;
        } else {
            // if(lvdata["Lv"+comeInfo.now_lv].Anim[rownum][columnnum]==0){//填补使用
            //     this.animType=Math.floor(Math.random()*5)+1;
            // }else{
            //     this.animType=lvdata["Lv"+comeInfo.now_lv].Anim[rownum][columnnum];
            // }
            if (lvdata.Anim[rownum][columnnum] == 0) {
                //填补使用
                this.animType = Math.floor(Math.random() * 5) + 1;
            } else {
                this.animType = lvdata.Anim[rownum][columnnum];
            }
        }
        //设置是否可移动
        if (this.animType >= 6) {
            this.node.width = 74;
            this.node.height = 74;
            this.can_move = false;
        } else {
            this.node.width = 74;
            this.node.height = 74;
            this.can_move = true;
        }
        this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.spr[this.animType];
        this.columnNum = columnnum;
        this.rowNum = rownum;
        this.animalMgr = animalMgr;
        this.node.setPosition(utils.rowColumnPosition_Anim(columnnum, rownum));
    },
    //把要移动到的点加入数组
    AddPos(columnnum, rownum) {
        this.columnNum = columnnum;
        this.rowNum = rownum;
        this.animalMgr.animalArray[this.rowNum][this.columnNum] = this;
        let p = [columnnum, rownum];
        this.pos.push(p);
    },
    //填充移动
    FilledMove() {
        let action = [];
        if (this.pos.length > 1) {
            this.node.stopAllActions();
            for (let i = 0; i < this.pos.length; i++) {
                if (i == this.pos.length - 1) {
                    //如果是最后一个就加上缓动系统
                    let fn1 = cc
                        .moveTo(comeInfo.animalMoveTime, utils.rowColumnPosition_Anim(this.pos[i][0], this.pos[i][1]))
                        .easing(cc.easeElasticOut(0.9));
                    let fn2 = cc.scaleTo(0.2, 0.8, 0.8);
                    let fn3 = cc.scaleTo(0.4, 1, 1).easing(cc.easeElasticOut(0.5));
                    let fn = cc.spawn(fn1, cc.sequence(fn2, fn3));
                    action.push(fn);
                } else {
                    action.push(
                        cc.moveTo(comeInfo.animalMoveTime, utils.rowColumnPosition_Anim(this.pos[i][0], this.pos[i][1]))
                    );
                }
            }
            this.node.runAction(cc.sequence(action));
        } else if (this.pos.length == 1) {
            this.node.stopAllActions();
            let fn1 = cc
                .moveTo(comeInfo.animalMoveTime, utils.rowColumnPosition_Anim(this.pos[0][0], this.pos[0][1]))
                .easing(cc.easeElasticOut(0.9));
            let fn2 = cc.scaleTo(0.2, 0.8, 0.8);
            let fn3 = cc.scaleTo(0.4, 1, 1).easing(cc.easeElasticOut(0.5));
            let fn = cc.spawn(fn1, cc.sequence(fn2, fn3));
            this.node.runAction(fn);
        }
        this.pos = [];
    },
    //动物移动
    AnimMove(columnnum, rownum) {
        if (this.can_move) {
            this.node.stopAllActions();
            this.columnNum = columnnum;
            this.rowNum = rownum;
            this.animalMgr.animalArray[this.rowNum][this.columnNum] = this;
            let fn1 = cc.moveTo(comeInfo.animalMoveTime, utils.rowColumnPosition_Anim(columnnum, rownum));
            let fn2 = cc.scaleTo(0.05, 0.5, 0.5);
            let fn3 = cc.scaleTo(0.1, 1, 1).easing(cc.easeElasticOut(0.9));
            this.node.runAction(cc.sequence(fn1, fn2, fn3));
        }
    },
    //消除
    clear() {
        if (this.is_clear) {
            //防止被重复消除
            return;
        }
        cc.ZL.UIMgr.AddScore(cc.ZL.UIMgr.add_score);
        //如果是障碍物就用障碍物消除
        if (this.animType > 6) {
            this.clearObstacle(this, this.rowNum, this.columnNum, 'clear');
            return;
        }
        //先查看该动物上方是否有需要消除的障碍（比如被冰冻，被草困住）
        if (this.FindUP()) {
            //没有需要消除的上层障碍才向下执行
            this.is_clear = true;
            //查看是否有特殊消除效果
            switch (this.clearType) {
                case 1: //消除一行
                    cc.ZL.effMgr.CreatRowEff(this.node.getPosition(), 'row');
                    this.animalMgr.RowClear(this.rowNum, this.columnNum);
                    break;
                case 2: //消除一列
                    cc.ZL.effMgr.CreatRowEff(this.node.getPosition(), 'cloumn');
                    this.animalMgr.ColumnClear(this.rowNum, this.columnNum);
                    break;
                case 3: //范围消除
                    cc.ZL.effMgr.CreatBoomEff(this.node.getPosition());
                    this.animalMgr.RangeClear(this.rowNum, this.columnNum);
                    break;
                case 4: //魔力鸟消除
                    if (this.animType == 6) {
                        this.animType = Math.floor(Math.random() * 5) + 1;
                        //console.log("消除类型是"+randomType);
                        this.animalMgr.TypeClear(this.animType);
                    } else {
                        this.animalMgr.TypeClear(this.animType);
                    }
                    break;
            }
            this.ClearSelf();
        }
    },
    //查看该动物上方是否有需要消除的障碍（比如被冰冻，被草困住）
    FindUP() {
        if (!this.can_move) {
            //不能移动才有可能有障碍
            if (this.animType > 0 && this.animType <= 6) {
                //只有动物上方才有障碍
                if (cc.ZL.iceMgr.UpArray[this.rowNum][this.columnNum] != 0) {
                    cc.ZL.iceMgr.UpArray[this.rowNum][this.columnNum].clear();
                    return false;
                }
            }
        }
        return true;
    },
    ClearSelf() {
        //先去除子物体(附加特效什么的)
        let Mchilds = this.node.children;
        for (let i = 0; i < Mchilds.length; i++) {
            Mchilds[i].destroy();
        }
        //查看该格子有没有需要消除的冰块等物体
        if (cc.ZL.iceMgr.iceArray[this.rowNum][this.columnNum] != 0) {
            cc.ZL.iceMgr.iceArray[this.rowNum][this.columnNum].clear();
        }
        //产看周围是否有可以消除的
        setTimeout(() => {
            this.FindAround();
        }, 100);
        //该位置设为空
        this.animalMgr.animalArray[this.rowNum][this.columnNum] = 0;
        let targetnum = this.isTarget();
        if (targetnum == -1) {
            //特效动画
            cc.ZL.effMgr.CreatClearEff(this.node.getPosition());
            cc.ZL.LabelMgr.creatLabel(this.node.getPosition(), 500);
            let fn1 = cc.scaleTo(0.1, 1.2, 1.2);
            let fn2 = cc.scaleTo(comeInfo.animalClearTime, 0, 0);
            let fn3 = cc.sequence([fn1, fn2]);
            this.node.runAction(fn3);
            setTimeout(
                function () {
                    this.animalMgr.animalPool.put(this.node);
                }.bind(this),
                (comeInfo.animalClearTime + 0.1) * 1000
            );
        } else {
            cc.ZL.LabelMgr.creatLabel(this.node.getPosition(), 500);
            cc.ZL.targetMgr.clearTarget(this.node, targetnum);
        }
    },
    deleteMuBiao() {
        let targetnum = this.isTarget();
        if (targetnum != -1) {
            // cc.ZL.LabelMgr.creatLabel(this.node.getPosition(), 500);
            cc.ZL.targetMgr.targetNum(targetnum);
        }
    },
    //产看周围是否有可以消除的
    FindAround() {
        //本身是障碍物就不消除周围了
        if (this.animType > 6) {
            return;
        }
        //上
        if (this.rowNum - 1 >= 0) {
            let anim = this.animalMgr.animalArray[this.rowNum - 1][this.columnNum];
            if (anim != 0 && anim != -1) {
                this.clearObstacle(anim, this.rowNum - 1, this.columnNum, 'FindAround上');
            }
        }
        //下
        if (this.rowNum + 1 < comeInfo.column) {
            let anim = this.animalMgr.animalArray[this.rowNum + 1][this.columnNum];
            if (anim != 0 && anim != -1) {
                this.clearObstacle(anim, this.rowNum + 1, this.columnNum, 'FindAround下');
            }
        }
        //左
        if (this.columnNum - 1 >= 0) {
            let anim = this.animalMgr.animalArray[this.rowNum][this.columnNum - 1];
            if (anim != 0 && anim != -1) {
                this.clearObstacle(anim, this.rowNum, this.columnNum - 1, 'FindAround左');
            }
        }
        //右
        if (this.columnNum + 1 < comeInfo.row) {
            let anim = this.animalMgr.animalArray[this.rowNum][this.columnNum + 1];
            if (anim != 0 && anim != -1) {
                this.clearObstacle(anim, this.rowNum, this.columnNum + 1, 'FindAround右');
            }
        }
    },
    //消除障碍物
    clearObstacle(anim, row, column, name = null) {
        if (anim.animType == 7) {
            //单层冰
            this.animalMgr.animalArray[row][column] = 0;
            cc.ZL.musicMgr.PlayMusicOnly(14, false);
            anim.node.runAction(cc.scaleTo(comeInfo.animalClearTime, 0, 0));
            let animtargetnum = anim.isTarget();
            if (animtargetnum != -1) {
                //查看是否是目标
                // console.log('funcName', name)
                cc.ZL.targetMgr.clearTarget(anim.node, animtargetnum);
            } else {
                setTimeout(
                    function () {
                        this.animalMgr.animalPool.put(anim.node);
                    }.bind(this),
                    comeInfo.animalClearTime * 1000 + 100
                );
            }
        } else if (anim.animType == 8) {
            cc.ZL.musicMgr.PlayMusicOnly(14, false);
            anim.animType = 7;
            anim.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.spr[anim.animType];
        } else if (anim.animType == 9) {
            cc.ZL.musicMgr.PlayMusicOnly(14, false);
            anim.animType = 8;
            anim.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.spr[anim.animType];
        }
    },

    //查看是不是目标物
    isTarget() {
        //  let lvtarget=lvdata["Lv"+comeInfo.now_lv].target;
        let lvtarget = lvdata.target;
        for (let i = 0; i < lvtarget.length; i++) {
            if (this.animType == lvtarget[i][0]) {
                return i;
            }
        }
        return -1;
    },
    //产生横向消除特效
    creatRowEff(bol) {
        this.clearType = 1;
        cc.ZL.effMgr.dirEff(this.node, 'Row');
        this.playAnim(2);
        if (!bol) {
            return;
        }
        cc.ZL.musicMgr.MyplayMusic(10, false);
    },
    //产生纵向消除特效
    creatColnumEff(bol) {
        this.clearType = 2;
        cc.ZL.effMgr.dirEff(this.node, 'Column');
        this.playAnim(1);
        if (!bol) {
            return;
        }
        //cc.ZL.musicMgr.MyplayMusic(10,false);
    },
    //产生T型特效
    CreatTEff() {
        this.clearType = 3;
        this.playAnim(3);
        cc.ZL.effMgr.TEff(this.node);
    },
    //产生魔力鸟特效
    CreatFiveEff() {
        cc.ZL.effMgr.CratNiao(this.node);
        this.clearType = 4;
        this.animType = 6;
        this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.spr[this.animType];
    },

    //播放动画
    playAnim(type) {
        if (type == 1) {
            this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.Animspr[this.animType];
            this.node.getComponent(cc.Animation).play('zhong');
        } else if (type == 2) {
            this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.Animspr[this.animType];
            this.node.getComponent(cc.Animation).play('heng');
        } else if (type == 3) {
            this.node.getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.Animspr[this.animType];
            this.node.getComponent(cc.Animation).play('fanwei');
        }
    },
    //停止播放动画
    stopAnim() {
        this.node.getComponent(cc.Animation).stop();
    },
});
