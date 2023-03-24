
cc.Class({
    extends: cc.Component,

    properties: {
        //星星纹理
        starSpr:[cc.SpriteFrame],
        //关卡背景
        lvSpr:[cc.SpriteFrame],
        //第一节树
        tree:cc.Node,
        //关卡预制体
        TreePrefab:cc.Prefab,
        //当前生成了几关
        nowLv:1,


        //云彩（结尾过度用）
        cloud:cc.Prefab,
    },

    onLoad () {
        if(cc.ZL==null){
            cc.ZL={};
        }
        cc.ZL.lvMgr=this;
        //初始化第一课树的数据
        this.tree.getComponent("Tree").InitView(this.nowLv);
        this.nowLv =17;
    },

    start () {
        this.CreatLv();
    },


    // update (dt) {},
    //生成关卡
    CreatLv(){
        while(true){
            if(this.nowLv>comeInfo.totallv){
                break;
            }
            this.creatNewTree();
        }
        let y=cc.instantiate(this.cloud);
        this.node.addChild(y);
        //查看玩了多少关
        let num=Math.floor(gamedata.Lv_star/3);
        this.node.y=-(num*180-300);
    },
    //生成一个新树
    creatNewTree(){
        let t=cc.instantiate(this.TreePrefab);
        this.node.addChild(t);
        t.getComponent("Tree").InitView(this.nowLv);
        this.nowLv =this.nowLv+15;
    },
});
