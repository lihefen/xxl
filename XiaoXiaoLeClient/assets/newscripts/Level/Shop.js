var com = require('Common');
const { UIHelp } = require('../UIHelp');
cc.Class({
    extends: cc.Component,

    properties: {
        //金币显示框
        goldLabel: [cc.Label],
        //金币不足提示
        tip: cc.Node,
        music: {
            type: cc.AudioClip,
            default: [],
        },
    },
    onLoad() {
        this.node.y = 1100;
        cc.ZL.shop = this;
        this.goldShow();
        this.tip.active = false;
        this.num = 0;
    },

    onGetData() {
        let preas = {
            rid: gamedata.rid,
            token: gamedata.token,
        };
        // TODO:先注释掉
        this.getMyPropListCall({
            code: '200',
            data: [
                {
                    gid: '10001',
                    coin: '1',
                },
                {
                    gid: '10002',
                    coin: '1',
                },
                {
                    gid: '10003',
                    coin: '1',
                },
            ],
        });
        //UIHelp.network.httpConnect_post_async('game/xiaoxiaole/getPropList', preas, this.getMyPropListCall.bind(this));
    },

    getMyPropListCall(msg) {
        console.log('getMyPropList===>', msg);
        utils.HideLoading();
        if (msg.code == 200) {
            if (msg.data.length > 0) {
                for (let a = 0; a < msg.data.length; a++) {
                    if (msg.data[a]['gid'] == 10001) {
                        comeInfo.prop_price[1] = msg.data[a]['coin'];
                        this.goldLabel[1].string = msg.data[a]['coin'];
                    } else if (msg.data[a]['gid'] == 10002) {
                        comeInfo.prop_price[3] = msg.data[a]['coin'];
                        this.goldLabel[3].string = msg.data[a]['coin'];
                    } else if (msg.data[a]['gid'] == 10003) {
                        comeInfo.prop_price[4] = msg.data[a]['coin'];
                        this.goldLabel[4].string = msg.data[a]['coin'];
                    }
                }
            }
            this.node.runAction(cc.moveTo(0.2, 0, 0).easing(cc.easeBackOut()));
        } else {
            utils.addTips(msg.message);
        }
    },

    start() {
        // for (let i = 1; i < this.goldLabel.length; i++) {
        //     this.goldLabel[i].string = comeInfo.prop_price[i];
        // }
    },
    //显示金币信息
    goldShow() {
        this.goldLabel[0].string = gamedata.gold;
    },
    // update (dt) {},
    Open() {
        if (gamedata.music) {
            cc.audioEngine.play(this.music[1], false, 1);
        }
        utils.ShowLoading();
        this.onGetData();
        // this.node.runAction(cc.moveTo(0.2, 0, 0).easing(cc.easeBackOut()));
    },
    Close() {
        if (gamedata.music) {
            cc.audioEngine.play(this.music[1], false, 1);
        }
        if (cc.ZL.Level) {
            cc.ZL.Level.closeMask();
        }

        this.node.runAction(cc.moveTo(0.1, 0, 2000));
    },
    Buy(event, num) {
        num = parseInt(num);
        this.num = num;
        if (gamedata.music) {
            cc.audioEngine.play(this.music[0], false, 1);
        }
        if (gamedata.gold < comeInfo.prop_price[num]) {
            this.tip.active = true;
            return;
        }
        let gid;
        if (num == 1) {
            gid = 10001;
        } else if (num == 3) {
            gid = 10002;
        } else if (num == 4) {
            gid = 10003;
        }
        let preas = {
            rid: gamedata.rid,
            token: gamedata.token,
            gid: gid,
            buy_num: 1,
        };
        // TODO:本地先注释掉
        // UIHelp.network.httpConnect_post_async('game/xiaoxiaole/buy', preas, this.buyCallBack.bind(this));
        this.buyCallBack({
            code: '200',
            data: {
                coin: 1,
            },
            message: '成功',
        });
        // gamedata.gold-=comeInfo.prop_price[num];
        // gamedata.bc_gold();
        // this.goldShow();
        // gamedata.prop[num] +=1;
        // gamedata.bc_prop(num);
    },

    buyCallBack(msg) {
        console.log('bug===>', msg);
        if (msg.code == 200) {
            // gamedata.gold -= comeInfo.prop_price[this.num];
            // gamedata.bc_gold();
            //当前金币数量
            gamedata.gold = Number(msg.data.coin);
            this.goldShow();
            if (this.num == 4) {
                gamedata.prop[4] += 1;
            } else {
                gamedata.prop[this.num] += 1;
            }
            gamedata.bc_prop(this.num);
        } else {
            utils.addTips(msg.message);
        }
    },
    //分享获取金币
    shareGolde() {
        com.WxShare();
        setTimeout(
            function () {
                if (comeInfo.is_share) {
                    gamedata.gold += 500;
                    gamedata.bc_gold();
                    if (cc.director.getScene().getName() == 'Level') {
                        cc.ZL.lvMgr.showInfo();
                    }
                    this.goldShow();

                    comeInfo.is_share = false;
                }
            }.bind(this),
            3500
        );
    },
    CloseTIP() {
        this.tip.active = false;
    },
});
