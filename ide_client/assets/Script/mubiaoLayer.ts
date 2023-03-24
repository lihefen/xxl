// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventMng from "./EventMng";

const { ccclass, property } = cc._decorator;

@ccclass
export default class mubiaoLayer extends cc.Component {
    @property(cc.Node)
    num_node: cc.Node = null;
    list = [0,0];
    id = 0;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        EventMng.on('CLOSETARGET', this.onDestroyNode, this);
    }

    onStartInfo(event) {
        this.id = event;
    }

    //type: 1.草莓， 2.蓝莓， 3.西瓜， 4.香蕉， 5.芒果  7.雪块  11.单层冰块 12.双层冰块
    onClick_item(event, data) {
        // EventMng.emit('TERGET', data);
        this.list[0] = Number(data);
        this.num_node.active = true;
    }

    onClick_num(event,data) {
        this.list[1] = Number(data);
        if(this.list[0] == 0) {
            this.list = [0,0];
        }
        EventMng.emit('TERGET', {id: this.id,list: this.list});
        this.node.destroy();
    }

    onClick_null() {
        EventMng.emit('TERGET', {id: this.id,list: [0,0]});
        this.node.destroy();
    }

    onDestroyNode() {
        this.node.destroy();
    }

    onDestroy() {
        EventMng.off('CLOSETARGET', this.onDestroyNode, this);
    }

    start() {

    }

    // update (dt) {}
}
