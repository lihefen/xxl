var com = require('Common');
const { UIHelp } = require('../UIHelp');
cc.Class({
    extends: cc.Component,

    properties: {
        mask: cc.Node,
        lab_num: cc.Node,
    },

    onLoad() {
        this.num = 0;
    },

    start() {},

    // update (dt) {},
    InitView(msg) {
        this.num = Number(msg);
        this.lab_num.getComponent(cc.Label).string = msg;
        this.node.runAction(cc.scaleTo(0.2, 1, 1));
        setTimeout(
            function () {
                if (this.node) {
                    this.mask.opacity = 100;
                }
            }.bind(this),
            300
        );
    },
    //看视频加5步
    AddFive() {
        com.WxShare();
        setTimeout(
            function () {
                if (comeInfo.is_share) {
                    if (this.node) {
                        cc.ZL.animMgr.mask.active = false;
                        cc.ZL.musicMgr.MyplayMusic(0, false);
                        cc.ZL.UIMgr.AddFiveStep();
                        this.mask.opacity = 1;
                        this.node.runAction(cc.scaleTo(0.2, 0, 0));
                        setTimeout(
                            function () {
                                if (this.node) {
                                    this.node.destroy();
                                }
                            }.bind(this),
                            300
                        );
                        comeInfo.is_share = false;
                    }
                }
            }.bind(this),
            3500
        );
    },
    //金币加2步
    AddTwo() {
        if (gamedata.gold > 20) {
            if (this.node) {
                let preas = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    gid: 10004,
                    num: 1,
                };
                console.log('金币加两步');
                // TODO:先注释掉
                this.consumePropCallBack({
                    code: '200',
                });
                // UIHelp.network.httpConnect_post_async(
                //     'game/xiaoxiaole/consumeProp',
                //     preas,
                //     this.consumePropCallBack.bind(this)
                // );

                //     cc.ZL.animMgr.mask.active=false;
                //     gamedata.gold-=20;
                //     gamedata.bc_gold();
                //     cc.ZL.musicMgr.MyplayMusic(0,false);
                //     cc.ZL.UIMgr.AddTwoStep();
                //     this.mask.opacity=1;
                //     this.node.runAction(cc.scaleTo(0.2,0,0));
                //     setTimeout(function(){
                //         if(this.node){
                //             this.node.destroy();
                //         }
                //     }.bind(this),300);
            }
        }
    },

    consumePropCallBack(msg) {
        console.log('金币加两部===>', msg);
        if (msg.code == 200) {
            cc.ZL.animMgr.mask.active = false;
            gamedata.gold -= this.num;
            gamedata.bc_gold();
            cc.ZL.musicMgr.MyplayMusic(0, false);
            cc.ZL.UIMgr.AddTwoStep();
            this.mask.opacity = 1;
            this.node.runAction(cc.scaleTo(0.2, 0, 0));
            setTimeout(
                function () {
                    if (this.node) {
                        this.node.destroy();
                    }
                }.bind(this),
                300
            );
        } else {
            utils.addTips(msg.message);
        }
    },

    //重玩本关
    Replay(event) {
        this.node.getChildByName('again').getComponent(cc.Button).interactable = false;
        if (gamedata.energy >= 5) {
            let preas = {
                rid: gamedata.rid,
                token: gamedata.token,
                level: lvdata.lvl,
            };
            UIHelp.network.httpSend('game/xiaoxiaole/playGame', preas, this.playGameCall.bind(this));
        } else {
            utils.addTips('体力不足');
            cc.director.loadScene('newLevel');
        }

        // cc.ZL.musicMgr.MyplayMusic(0, false);
        // if (gamedata.energy >= 5) {
        //     gamedata.energy -= 5;
        //     gamedata.bc_energy();
        //     cc.director.loadScene("NewMain");
        // } else {
        //     cc.director.loadScene("newLevel");
        //     // utils.addTips('体力不足');
        // }
    },
    playGameCall(msg) {
        console.log('playgame===>', msg);
        if (msg.code == 200) {
            gamedata.game_code = msg.data.game_code;
            //当前金币数量
            gamedata.gold = Number(msg.data.coin);
            //当前精力
            gamedata.energy = Number(msg.data.energy);
            cc.ZL.musicMgr.MyplayMusic(0, false);
            cc.director.loadScene('NewMain');
        } else {
            utils.addTips(msg.message);
            this.node.getChildByName('again').getComponent(cc.Button).interactable = true;
        }
    },
    Close() {
        this.node.getChildByName('again').getComponent(cc.Button).interactable = false;
        cc.ZL.musicMgr.MyplayMusic(0, false);
        cc.director.loadScene('newLevel');
    },
});
