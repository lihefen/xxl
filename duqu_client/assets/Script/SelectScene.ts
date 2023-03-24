// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { GetData } from "./getData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SelectScene extends cc.Component {

    onClickCreate() {
        var self = this;
        GetData.getInstance().sceneType = 1;
        cc.director.loadScene("HallScene");
    }

    onClickDuqu() {
        var self = this;
        GetData.getInstance().sceneType = 2;
        cc.director.loadScene("HallScene");
    }

}
