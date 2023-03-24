// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

import { Utilities } from "winjs";
import item_rank from "./item_rank";
import { UIHelp } from "./UIHelp";

const {ccclass, property} = cc._decorator;

@ccclass
export default class rankLayer extends cc.Component {

    @property({type: cc.Prefab, displayName: '排行item'})
    item: cc.Prefab = null;
    @property({type: cc.Node, displayName: '关卡Label'})
    lab_guanka: cc.Node = null;
    @property({type: cc.Node, displayName: '积分Label'})
    lab_jifen: cc.Node = null;

    @property({type: cc.Label, displayName: '排名'})
    rank: cc.Label = null;
    @property({type: cc.Sprite, displayName: '头像'})
    icon: cc.Sprite = null;
    @property({type: cc.Label, displayName: '昵称'})
    nickname: cc.Label = null;
    @property({type: cc.Label, displayName: '分数'})
    fen: cc.Label = null;

    @property({type: cc.Node, displayName: '滑块content'})
    content: cc.Node = null;


    tag1: number = 0;
    tag2: number = 0;
    start () {
        this.onGetData();
    }

    onGetData() {
        let params = {
            rid: gamedata.rid,
            token: gamedata.token,
            type: 0
        }
        utils.ShowLoading();
        UIHelp.network.httpSend('game/xiaoxiaole/getGralRankList', params, this.GetCallBack.bind(this))
    }

    GetCallBack(msg) {
        console.log('rank===>', msg);
        utils.HideLoading();
        if(msg.code == 200) {
            this.onStartUser(msg);
            if(msg.data.list.length > 0) {
                this.content.removeAllChildren();
                for(let a = 0; a < msg.data.list.length; a++) {
                    let node = cc.instantiate(this.item);
                    node.getComponent(item_rank).onStartInfo(msg.data.list[a]);
                    node.parent = this.content;
                }
            }
        }else{
            utils.addTips(msg.message);
        }
    }

    onStartUser(msg) {
        msg.data.rank_num? this.rank.string = msg.data.rank_num : this.rank.node.active = false;
        if(msg.data.headimage) {
            cc.loader.load(msg.data.headimage, (err, img) => {
                if(err) {
                    utils.addTips("头像加载失败")
                }
                let sprite = new cc.SpriteFrame(img);
                this.icon.spriteFrame = sprite;
            })
        }else{
            this.icon.node.active = false;
        }
        let name;
        if(msg.data.nickname.length > 6) {
            name = msg.data.nickname.slice(0,6) + '...';
        }else{
            name = msg.data.nickname;
        }
        msg.data.nickname?  this.nickname.string = name : this.nickname.node.active = false;
        msg.data.points? this.fen.string = msg.data.points : this.fen.node.active = false;
    }

    onClickZhiBo() {
        this.tag1 = 0;
        this.onSelectTag();
    }

    onClickPingTai() {
        this.tag1 = 1;
        this.onSelectTag();
    }

    onClickJiFen() {
        this.tag2 = 0;
        this.lab_jifen.active = true;
        this.lab_guanka.active = false;
        this.onSelectTag();
    }

    onClickGuanKa() {
        this.tag2 = 1;
        this.lab_jifen.active = false;
        this.lab_guanka.active = true;
        this.onSelectTag();
    }

    onSelectTag() {
        if(this.tag1 == 0) {
            if(this.tag2 == 0) {
                let params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 0
                }
                utils.ShowLoading();
                UIHelp.network.httpSend('game/xiaoxiaole/getGralRankList', params, this.GetCallBack.bind(this))
                
            }else{
                let params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 0
                }
                utils.ShowLoading();
                UIHelp.network.httpSend('game/xiaoxiaole/getLevelRankList', params, this.GetCallBack.bind(this))
            }
        }else{
            if(this.tag2 == 0) {
                let params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 1
                }
                utils.ShowLoading();
                UIHelp.network.httpSend('game/xiaoxiaole/getGralRankList', params, this.GetCallBack.bind(this))
            }else{
                let params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 1
                }
                utils.ShowLoading();
                UIHelp.network.httpSend('game/xiaoxiaole/getLevelRankList', params, this.GetCallBack.bind(this))
            }
        }
    }

    onClose() {
        if(cc.ZL.Level){
            cc.ZL.Level.closeMask();
        }
        this.node.removeFromParent(true);
    }

    // update (dt) {}
}
