// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class item_rank extends cc.Component {

    @property({type: cc.Label, displayName: '排名'})
    rank: cc.Label = null;
    @property({type: cc.Sprite, displayName: '头像'})
    icon: cc.Sprite = null;
    @property({type: cc.Label, displayName: '昵称'})
    nickname: cc.Label = null;
    @property({type: cc.Label, displayName: '分数'})
    fen: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    // 243，33，72 红
    // 29，191，25 绿
    // 23，99，166 蓝
    // 170，66，31 棕

    onStartInfo(msg) {
        if(msg.id == 1) {
            this.rank.node.color = cc.color(243,33,72,255);
        }else if(msg.id == 2) {
            this.rank.node.color = cc.color(29,191,25,255);
        }else if(msg.id == 3) {
            this.rank.node.color = cc.color(23,99,166,255);
        }else {
            this.rank.node.color = cc.color(170,66,31,255);
        }
        this.rank.string = msg.rank_num;
        cc.loader.load(msg.headimage, (err,msg) => {
            if(err) {
                utils.addTips('头像加载失败');
                return;
            }
            let sprite = new cc.SpriteFrame(msg);
            this.icon.spriteFrame = sprite;
        })
        let name;
        // let a = '';
        // a.slice
        if(msg.nickname.length > 6) {
            name = msg.nickname.slice(0,6) + '...';
        }else{
            name = msg.nickname;
        }
        this.nickname.string = name;
        this.fen.string = msg.points;

    }

    start () {

    }

    // update (dt) {}
}
