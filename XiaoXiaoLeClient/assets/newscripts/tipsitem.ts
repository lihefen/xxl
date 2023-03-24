// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class tipsitem extends cc.Component {

  

    // LIFE-CYCLE CALLBACKS:
    @property(cc.Label)
    info: cc.Label = null;

    onLoad () {}

    onStartInfo(event) {
        var self = this;
        self.info.string = event;
        self.onAnim();
    }

    onAnim() {
        var self = this;
        cc.tween(self.node)
            .to(0,{position: cc.v3(0,-50,0)})
            .call(() => {
                this.node.active = true;
            }) 
            .to(0.5,{position: cc.v3(0,10,0)})
            .delay(3)
            .to(0.5,{opacity: 0})
            .call(() => {
                self.node.removeFromParent();
            })
            .start();
    }

    start () {
        
    }

    // update (dt) {}
}
