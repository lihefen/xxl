
cc.Class({
    extends: cc.Component,

    properties: {
        music: {
            type: cc.AudioClip,
            default: [],
        },

        //设置面板
        setting: null,
        setPrefab: cc.Prefab,

        zanting: cc.Node,
        kaishi: cc.Node
    },

    onLoad() {
        if (cc.ZL == null) {
            cc.ZL = {}
        }
        cc.ZL.musicMgr = this;
        this.ismusic = false;
        cc.director.on('closeHome', this.onCloseNode, this);
    },
    onCloseNode() {
        this.zanting.active = true;
        this.kaishi.active = false;
        cc.ZL.animMgr.onCloseMask();
    },

    start() {
        cc.ZL.cubeMgr.InitCube();
        cc.ZL.animMgr.InitAnimal();
        cc.ZL.iceMgr.InitIce();
        cc.ZL.iceMgr.InitUPAnim();
    },

    // update (dt) {},
    MyplayMusic(num, isBool) {
        if (gamedata.music) {
            cc.audioEngine.play(this.music[num], isBool, 0.5);
        }
    },
    //打开设置面板
    OpenSetting() {
        cc.ZL.animMgr.onOpenMask();
        this.zanting.active = false;
        this.kaishi.active = true;
        if (this.setting == null) {
            this.setting = cc.instantiate(this.setPrefab);
            this.node.addChild(this.setting);
        }
        this.setting.getComponent("HomeSettign").Open();
    },
    //播放碎冰音效（限制只播放一次）
    PlayMusicOnly(num, isBool) {
        if (this.ismusic) {
            return;
        }
        this.ismusic = true;
        if (gamedata.music) {
            cc.audioEngine.play(this.music[num], isBool, 0.5);
        }
        setTimeout(function () {
            this.ismusic = false;
        }.bind(this), 200);
    },
    ReturnLevel() {
        cc.director.loadScene("newLevel");
    },
    onDisable() {
        cc.director.off('closeHome', this.onCloseNode, this);
    }
});
