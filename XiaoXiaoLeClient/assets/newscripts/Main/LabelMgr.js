
cc.Class({
    extends: cc.Component,

    properties: {
        labelPrefab:cc.Prefab,
    },

    onLoad () {
        this.LabelPools=new cc.NodePool();
        for(let i=0;i<5;i++){
            let a=cc.instantiate(this.labelPrefab);
            this.LabelPools.put(a);
        }
        cc.ZL.LabelMgr=this;
    },

    start () {
        
    },

    // update (dt) {},
    creatLabel(pos,num){
        let a;
        if(this.LabelPools.size()>0){
            a=this.LabelPools.get();
        }else{
            a=cc.instantiate(this.labelPrefab);
        }
        this.node.addChild(a);
        a.setPosition(pos.x,pos.y+40);
        a.getComponent("Label").Init(num);
    }
});
