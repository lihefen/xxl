const { UIHelp } = require("../UIHelp");
cc.Class({
    extends: cc.Component,

    properties: {
        //音效按钮
        musicButton:[cc.Sprite],
        //音效按钮纹理
        spr:[cc.SpriteFrame],
        music:{
            type:cc.AudioClip,
            default:[],
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ShowButton();
    },

    start () {

    },

    // update (dt) {},
    //显示正确的按钮
    ShowButton(){
        if(gamedata.bg_music){
            this.musicButton[0].spriteFrame=this.spr[0];
        }else{
            this.musicButton[0].spriteFrame=this.spr[1];
        }
        if(gamedata.music){
            this.musicButton[1].spriteFrame=this.spr[2];
        }else{
            this.musicButton[1].spriteFrame=this.spr[3];
        }
    },
    Open(){
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
            cc.audioEngine.play(this.music[1],false,1);
        }
        if(cc.ZL.Level){
            cc.ZL.Level.OpenMask();
        }
        this.node.y=2000;
        this.node.runAction(cc.moveTo(0.2,0,0).easing(cc.easeBackOut()));
    },
    Close(){
        cc.director.emit('closeHome')
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
            cc.audioEngine.play(this.music[1],false,1);
        }
        if(cc.ZL.Level){
            cc.ZL.Level.closeMask();
        }
        this.node.runAction(cc.moveTo(0.2,0,2000));
    },
    BjmusicDoor(){
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
        }
        gamedata.bg_music=!gamedata.bg_music;
        this.ShowButton();
        if(gamedata.bg_music){
            cc.audioEngine.play(this.music[2],true,0.5);
        }else{
            cc.audioEngine.stopAll();
        }
        gamedata.bc_music();
    },
    musicDoor(){
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
        }
        gamedata.music=!gamedata.music;
        this.ShowButton();
        gamedata.bc_music();
    },
    //重新开启本官
    Again(){
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
        }
        if(gamedata.energy>5){
            // gamedata.energy -=5;
            // gamedata.bc_energy();
            // cc.director.loadScene("NewMain");
            let preas = {
                rid: gamedata.rid,
                token: gamedata.token,
                level: lvdata.lvl
            }
            UIHelp.network.httpSend('game/xiaoxiaole/playGame', preas, this.playGameCall.bind(this));
        }else{
            utils.addTips('体力不足');
        }

    },
    playGameCall(msg) {
        console.log('playgame===>', msg);
        if (msg.code == 200) {
            // gamedata.energy -=5;
            // gamedata.bc_energy();
            //当前金币数量
            gamedata.gold = Number(msg.data.coin);
            //当前精力
            gamedata.energy = Number(msg.data.energy);
            cc.director.loadScene("NewMain");
        } else {
            utils.addTips(msg.message);
        }
    },
    //返回主页面
    GoLevel(){
        window.utils.ShowLoading();
        // utils.ShowLoading();
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
        }
        cc.director.loadScene("newLevel");
    },
    //返回开始页面
    GoBegin(){
        if(gamedata.music){
            cc.audioEngine.play(this.music[0],false,1);
        }
        cc.director.loadScene("Begin");
    }

});
