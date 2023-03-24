cc.Class({
    extends: cc.Component,

    properties: {
        //图片纹理
        spr:[cc.SpriteFrame],
        //ICE对应纹理
        icespr:[cc.SpriteFrame],
        //特效纹理
        Animspr:[cc.SpriteFrame],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(cc.ZL==null){
            cc.ZL={};
        }
        cc.ZL.sprMgr=this;
    },

    start () {

    },

    // update (dt) {},
});
