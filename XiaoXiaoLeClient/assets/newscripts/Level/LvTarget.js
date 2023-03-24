const { UIHelp } = require('../UIHelp');
cc.Class({
    extends: cc.Component,
    properties: {
        //关卡显示框
        lvLabel: cc.Label,
        //要玩第几关关
        lv: 1,
        //目标
        target: [cc.Sprite],
        //精力图标
        energy: cc.Node,
        energylogo: cc.Node,
        //tip
        tip: cc.Prefab,
        music: {
            type: cc.AudioClip,
            default: [],
        },
    },
    onLoad() {
        cc.ZL.Target = this;
        this.energylogo.opacity = 0;
    },

    start() {},

    // update (dt) {},
    InitView(num) {
        if (gamedata.music) {
            cc.audioEngine.play(this.music[0], false, 1);
        }
        (this.lv = num), (comeInfo.now_lv = num);
        cc.ZL.Level.OpenMask();
        this.lvLabel.string = '第' + this.lv + '关';
        // let T=lvdata["Lv"+comeInfo.now_lv].target;
        let T = lvdata.target;
        for (let i = 0; i < this.target.length; i++) {
            if (i < T.length) {
                if (T[i][0] < 10) {
                    this.target[i].spriteFrame = cc.ZL.sprMgr.spr[T[i][0]];
                } else {
                    this.target[i].spriteFrame = cc.ZL.sprMgr.icespr[T[i][0] - 10];
                }
                this.target[i].node.active = true;
            } else {
                this.target[i].node.active = false;
            }
        }
        let y = cc.find('Canvas').height / 2 - this.node.height / 2;
        this.node.runAction(cc.moveTo(0.2, cc.v2(0, y), 0).easing(cc.easeBackOut()));
    },
    close() {
        if (gamedata.music) {
            cc.audioEngine.play(this.music[0], false, 1);
        }
        cc.ZL.Level.closeMask();
        this.energylogo.opacity = 0;
        this.node.runAction(cc.moveTo(0.2, 0, 2000));
    },
    //开始游戏
    BeginGame() {
        console.log('BeginGame');
        if (gamedata.energy < 5) {
            let a = cc.instantiate(this.tip);
            this.node.parent.addChild(a);
            a.getComponent('tip').InitView(2);
            return;
        }
        if (gamedata.music) {
            cc.audioEngine.play(this.music[1], false, 1);
        }

        let preas = {
            rid: gamedata.rid,
            token: gamedata.token,
            level: this.lv,
        };

        // TODO:先注释
        this.playGameCall({
            code: '200',
            data: {
                coin: '10',
                energy: '10',
            },
        });
        // UIHelp.network.httpSend('game/xiaoxiaole/playGame', preas, this.playGameCall.bind(this));

        // gamedata.energy -=5;
        // gamedata.bc_energy();
        // //获取到精力图标的位置
        // var pos=this.energy.parent.convertToWorldSpaceAR(this.energy.getPosition());
        // //转换到父物体的位置
        // var pos1=this.energylogo.parent.convertToNodeSpaceAR(pos);
        // this.energylogo.setPosition(pos1);
        // this.energylogo.opacity=255;
        // this.energylogo.runAction(cc.moveTo(0.5,27,-358));
        // setTimeout(function(){
        //     if(gamedata.music){
        //         cc.audioEngine.play(this.music[2],false,1);
        //     }
        //     //cc.ZL.lvMgr.MyplayMusic(2,false);
        //     cc.director.loadScene("NewMain");
        // }.bind(this),600);
    },

    playGameCall(msg) {
        console.log('playgame===>', msg);
        if (msg.code == 200) {
            gamedata.game_code = msg.data.game_code;
            // gamedata.energy -= 5;
            // gamedata.bc_energy();
            //当前金币数量
            gamedata.gold = Number(msg.data.coin);
            //当前精力
            gamedata.energy = Number(msg.data.energy);
            //获取到精力图标的位置
            var pos = this.energy.parent.convertToWorldSpaceAR(this.energy.getPosition());
            //转换到父物体的位置
            var pos1 = this.energylogo.parent.convertToNodeSpaceAR(pos);
            this.energylogo.setPosition(pos1);
            this.energylogo.opacity = 255;
            this.energylogo.runAction(cc.moveTo(0.5, 27, -358));
            setTimeout(
                function () {
                    if (gamedata.music) {
                        cc.audioEngine.play(this.music[2], false, 1);
                    }
                    //cc.ZL.lvMgr.MyplayMusic(2,false);
                    cc.director.loadScene('NewMain');
                }.bind(this),
                600
            );
        } else {
            utils.addTips(msg.message);
        }
    },
});
