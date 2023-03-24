cc.Class({
    extends: cc.Component,

    properties: {
        //当前节点最小关卡
        lv:0,
        //关卡节点
        lvBnt:[cc.Node],
        lvlab:[cc.Node],
    },

    // onLoad () {},

    start () {
    },

    // update (dt) {},
    InitView(lv){
        this.lv=lv;
        for(let i=0;i<this.lvBnt.length;i++){
            if(this.lv+i > 500) {
        console.log('123123123',this.lv+i)
                this.lvBnt[i].destroy();
                this.lvlab[i].destroy();
            }else{
            this.lvBnt[i].getComponent("LvBnt").InitView(this.lv+i);
            }
        }
    }
});
