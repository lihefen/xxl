
cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    start () {

    },
    Init(num){
        this.node.stopAllActions();
        this.node.opacity=255;
        this.node.getComponent(cc.Label).string=num;
        this.node.runAction(cc.sequence(cc.moveBy(0.5,0,50),cc.fadeOut(1)));
        setTimeout(function(){    
            if(cc.ZL.LabelMgr.LabelPools){
                cc.ZL.LabelMgr.LabelPools.put(this.node);
            }
        }.bind(this),1000);
    }
});
