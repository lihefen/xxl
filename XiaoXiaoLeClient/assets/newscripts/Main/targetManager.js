const { UIHelp } = require('../UIHelp');
cc.Class({
    extends: cc.Component,

    properties: {
        targetList: [cc.Node],
        animList: [cc.Node],
        //胜利面板
        scuessPrefab: cc.Prefab,
        //失败面板
        EndPrefab: cc.Prefab,
        ScuLogo: cc.Prefab,
        //移动的预制体
        movePrefab: cc.Prefab,
        //要设置的位置
        MoveStartPos: cc.Node,

        //开始目标动画
        targetAnim: cc.Node,
        maskNode: cc.Node,
        layout: cc.Node,
    },

    onLoad() {
        cc.ZL.targetMgr = this;
        this.ShowTarget();
        this.maskNode.active = true;
        this.IsScuessed = false;
    },

    start() {
        this.BeginAnim();
    },

    // update (dt) {},
    //显示目标信息
    ShowTarget() {
        // let lvtarget=lvdata["Lv"+comeInfo.now_lv].target;
        let lvtarget = lvdata.target;
        for (let i = 0; i < 4; i++) {
            if (i < lvtarget.length) {
                this.targetList[i].active = true;
                if (lvtarget[i][0] < 10) {
                    this.animList[i].getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.spr[lvtarget[i][0]];
                } else {
                    this.animList[i].getComponent(cc.Sprite).spriteFrame = cc.ZL.sprMgr.icespr[lvtarget[i][0] - 10];
                }

                this.targetList[i].getChildByName('num').getComponent(cc.Label).string = lvtarget[i][1];
            } else {
                this.targetList[i].active = false;
                this.animList[i].active = false;
            }
        }
    },
    clearTarget(node, num) {
        //算出动物的坐标
        this.targetNum(num);
        var pos = node.parent.convertToWorldSpaceAR(node.getPosition());
        var pos1 = this.targetList[num].convertToNodeSpaceAR(pos);
        node.parent = this.targetList[num];
        node.setPosition(pos1);
        node.runAction(cc.moveTo(0.5, 0, 0));
        node.runAction(cc.scaleTo(0.5, 0.2, 0.2));
        setTimeout(
            function () {
                node.runAction(cc.scaleTo(0.2, 1.4, 1.4));
                setTimeout(
                    function () {
                        node.destroy();
                    }.bind(this),
                    200
                );
            }.bind(this),
            500
        );
    },
    //有效目标数减1
    targetNum(num) {
        console.log('目标数------');
        if (this.targetList[num].getChildByName('num').getComponent(cc.Label).string > 0) {
            this.targetList[num].getChildByName('num').getComponent(cc.Label).string -= 1;
            //this.num_arry[num] -=1;
        } else {
            //this.num_arry[num] =0;
            this.targetList[num].getChildByName('num').getComponent(cc.Label).string = 0;
        }
    },
    //判断是否成功
    IsScuess() {
        let sc = true;
        for (let i = 0; i < this.targetList.length; i++) {
            if (this.targetList[i].active) {
                if (this.targetList[i].getChildByName('num').getComponent(cc.Label).string > 0) {
                    sc = false;
                    break;
                }
            }
        }
        if (cc.ZL.UIMgr.stepnum <= 0 && sc == false) {
            this.onGetData();
            return true;
        }
        if (sc) {
            cc.ZL.animMgr.mask.active = true;
            cc.audioEngine.pauseAll();
            cc.ZL.musicMgr.MyplayMusic(16, false);
            this.scueff();
            return true;
        } else {
            return false;
        }
    },
    onGetData() {
        let preas = {
            rid: gamedata.rid,
            token: gamedata.token,
        };
        UIHelp.network.httpConnect_post_async('game/xiaoxiaole/getPropList', preas, this.getMyPropListCall.bind(this));
    },

    getMyPropListCall(msg) {
        console.log('getMyPropList===>', msg);
        utils.HideLoading();
        if (msg.code == 200) {
            var num = 0;
            if (msg.data.length > 0) {
                for (let a = 0; a < msg.data.length; a++) {
                    if (msg.data[a]['gid'] == 10004) {
                        num = msg.data[a]['coin'];
                    }
                }
            }
            cc.ZL.animMgr.mask.active = true;
            let end = cc.instantiate(this.EndPrefab);
            this.node.parent.addChild(end);
            end.setPosition(0, 0);
            end.getComponent('End').InitView(num);
        } else {
            utils.addTips(msg.message);
        }
    },
    //胜利特效
    scueff() {
        this.IsScuessed = true;
        let logo = cc.instantiate(this.ScuLogo);
        this.node.addChild(logo);
        let anim = logo.getChildByName('ingame_Clear').getComponent(sp.Skeleton);
        anim.clearTracks();
        anim.addAnimation(0, 'normal', false, 0);
        anim.setCompleteListener(
            function () {
                logo.destroy();
                if (logo) {
                    this.liveStep();
                }
            }.bind(this)
        );
    },
    //还剩多少步
    liveStep() {
        let step = cc.ZL.UIMgr.stepnum;
        let n = 0;
        //先获取动物数组中所有动物
        let animArry = new Array();
        for (let i = 0; i < cc.ZL.animMgr.animalArray.length; i++) {
            for (let j = 0; j < cc.ZL.animMgr.animalArray[i].length; j++) {
                if (cc.ZL.animMgr.animalArray[i][j] != 0 && cc.ZL.animMgr.animalArray[i][j] != -1) {
                    if (cc.ZL.animMgr.animalArray[i][j].animType != 0 && cc.ZL.animMgr.animalArray[i][j].animType < 6) {
                        if (cc.ZL.animMgr.animalArray[i][j].clearType == 0) {
                            animArry.push(cc.ZL.animMgr.animalArray[i][j]);
                        }
                    }
                }
            }
        }
        //再从动物中随机抽取N个不同的动物
        if (step > animArry.length) {
            step = animArry.length;
        }
        animArry = this.myRand(animArry, step);
        let k = 0;
        this.schedule(
            function () {
                let num = Math.random() * 2;
                if (num < 1) {
                    animArry[k].clearType = 1;
                } else {
                    animArry[k].clearType = 2;
                }
                cc.ZL.musicMgr.MyplayMusic(20, false);
                cc.ZL.UIMgr.MinusStep();
                let move = cc.instantiate(this.movePrefab);
                this.node.addChild(move);
                move.setPosition(this.MoveStartPos.getPosition());
                move.getComponent('EndMove').Move(animArry[k], num);
                k += 1;
            }.bind(this),
            0.3,
            step - 1
        );
        setTimeout(
            function () {
                let newarry = new Array();
                //把带特效的全部消除
                // console.log('cocos===>', cc.ZL.animMgr.animalArray)
                for (let i = 0; i < cc.ZL.animMgr.animalArray.length; i++) {
                    for (let j = 0; j < cc.ZL.animMgr.animalArray[i].length; j++) {
                        if (cc.ZL.animMgr.animalArray[i][j] != 0 && cc.ZL.animMgr.animalArray[i][j] != -1) {
                            if (
                                cc.ZL.animMgr.animalArray[i][j].animType != 0 &&
                                cc.ZL.animMgr.animalArray[i][j].animType < 6
                            ) {
                                if (cc.ZL.animMgr.animalArray[i][j].clearType != 0) {
                                    newarry.push(cc.ZL.animMgr.animalArray[i][j]);
                                }
                            }
                        }
                    }
                }
                // console.log('cocos===>', cc.ZL.animMgr.animalArray)
                // return;
                //启动消除程序
                let n = 0;
                this.schedule(
                    function () {
                        // console.log('有特效的==>', newarry, n)
                        if (newarry[n]) {
                            newarry[n].clear();
                        }
                        n += 1;
                        // }.bind(this), 0.1, step - 1)
                    }.bind(this),
                    0.1,
                    newarry.length - 1
                );
                //下一步填充
                // return;
                setTimeout(
                    function () {
                        cc.ZL.animMgr.NewFilled(true);
                        // setTimeout(function(){

                        let preas = {
                            rid: gamedata.rid,
                            token: gamedata.token,
                            game_code: gamedata.game_code,
                            coin: Math.floor(cc.ZL.UIMgr._score / 1000),
                            stars: cc.ZL.UIMgr.GetStarNum(),
                            gral: cc.ZL.UIMgr._score,
                            status: 1,
                        };
                        UIHelp.network.httpConnect_post_async(
                            'game/xiaoxiaole/endGame',
                            preas,
                            this.endGameCallBack.bind(this)
                        );
                        // let scu=cc.instantiate(this.scuessPrefab);
                        // this.node.parent.addChild(scu);
                        // scu.setPosition(0,0);
                        // scu.getComponent("Scuess").InitView();
                        // }.bind(this),1000);
                    }.bind(this),
                    200 * newarry.length + 200
                );
            }.bind(this),
            400 * step
        );
    },

    endGameCallBack(msg) {
        console.log('endGame===>', msg);
        if (msg.code == 200) {
            if (msg.data.level_stars) {
                gamedata.level_stars = msg.data.level_stars;
            }
            gamedata.energy = Number(msg.data.energy);
            gamedata.gold = Number(msg.data.coin);
            let scu = cc.instantiate(this.scuessPrefab);
            this.node.parent.addChild(scu);
            scu.setPosition(0, 0);
            scu.getComponent('Scuess').InitView();
        } else {
            utils.addTips(msg.message);
        }
    },
    //数组中随机抽取N条不重复的数据
    myRand(arr, num) {
        let newarr = [];
        for (let i = 0; i < num; i++) {
            let n = Math.floor(Math.random() * arr.length);
            newarr.push(arr[n]);
            arr.splice(n, 1);
        }
        return newarr;
    },

    //开始动画
    BeginAnim() {
        let anim = this.targetAnim.getComponent(sp.Skeleton);
        anim.clearTracks();
        anim.addAnimation(0, 'play', false, 0);
        anim.setCompleteListener(
            function () {
                setTimeout(
                    function () {
                        if (this.targetAnim) {
                            this.layout.removeComponent(cc.Layout);
                            for (let i = 0; i < this.targetList.length; i++) {
                                let xy = utils.convetOtherNodeSpaceAR(this.targetList[i], this.animList[i].parent);
                                this.animList[i].runAction(cc.moveTo(1, xy.x, xy.y));
                            }
                            setTimeout(
                                function () {
                                    if (this.targetAnim) {
                                        this.targetAnim.active = false;
                                        cc.ZL.animMgr.mask.active = false;
                                        this.maskNode.active = false;
                                        cc.ZL.cubeMgr.BeginReminder();
                                    }
                                }.bind(this),
                                1000
                            );
                        }
                    }.bind(this),
                    2000
                );
            }.bind(this)
        );
    },
});
