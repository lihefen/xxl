
cc.Class({
    extends: cc.Component,

    properties: {
     
    },
    // onLoad () {},

    start () {

    },

    // update (dt) {},
    Move(anim, num){
        if(anim&&anim.node){
            let pos=anim.node.getPosition();
            this.node.runAction(cc.moveTo(0.2,pos.x,pos.y+60));
            setTimeout(function(){
                this.node.destroy();
                // let num=Math.random()*2;
                if(num<1){
                    anim.creatRowEff(false);
                }else{
                    anim.creatColnumEff(false);
                }
            }.bind(this),200);
        }
       
    }
});
