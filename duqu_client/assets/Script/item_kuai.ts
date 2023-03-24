// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EventMng from "./EventMng";
import HallScene from "./HallScene";

const { ccclass, property } = cc._decorator;

@ccclass
export default class item_kuai extends cc.Component {
    @property(cc.Node)
    node_select: cc.Node = null;
    @property(cc.Sprite)
    spr: cc.Sprite = null;
    @property(cc.SpriteFrame)
    x_spr: cc.SpriteFrame = null;

    @property(cc.Node)
    bing: cc.Node = null;
    @property(cc.Node)
    bind_double: cc.Node = null;
    @property(cc.Node)
    spr_heng: cc.Node = null;
    @property(cc.Node)
    spr_shu: cc.Node = null;
    @property(cc.Node)
    spr_guang: cc.Node = null;
    @property(cc.Node)
    spr_mao: cc.Node = null;
    @property(cc.Node)
    spr_maoqiu: cc.Node = null;
    @property(cc.Toggle)
    chushi: cc.Toggle = null;

    @property(cc.Node)
    scroll2: cc.Node = null;
    @property(cc.Node)
    scroll3: cc.Node = null;

    id: number = 0;
    pos: any = null;

    onStartInfo(event, pos) {
        this.id = event;
        this.pos = pos;
    }

    onLoad() {
        this.node_select.active = false;
        EventMng.on('START', this.onClick_start, this);
        EventMng.on('END', this.onClick_end, this);
        EventMng.on('CLEAN', this.onCleanData, this);
        EventMng.on('CLOSE', this.onCloseData, this);
        EventMng.on('REPAT', this.onRepatData, this);
        EventMng.on('CHUSHI', this.onRepatChuShi, this);
    }

    onRepatData(msg) {
        if (msg.h == this.pos.h && msg.l == this.pos.l) {
            if (msg.anim) {
                this.spr.spriteFrame = HallScene._instance.spr_list[Number(msg.anim - 1)];
            }
            if (msg.ice) {
                switch (msg.ice) {
                    case 1:
                        this.bing.active = true;
                        break;
                    case 2:
                        this.bind_double.active = true;
                        break;
                    default:
                        break;
                }
            }
            if (msg.eff) {
                switch (msg.eff) {
                    case 1:
                        this.spr_shu.active = true;
                        break;
                    case 2:
                        this.spr_heng.active = true;
                        break;
                    case 3:
                        this.spr_guang.active = true;
                        break;
                    case 4:
                        this.spr_mao.active = true;
                        break;
                    case 13:
                        this.spr_maoqiu.active = true;
                        break;
                    default:
                        break;
                }
            }
        }
    }

    onRepatChuShi(msg) {
        if(msg[0] == this.pos.h && msg[1] == this.pos.l) {
            this.chushi.check();
        }
    }

    onCloseData() {
        this.spr.spriteFrame = this.x_spr;
        this.chushi.uncheck();
        this.onCloseNode();
    }

    onCloseNode() {
        this.spr_heng.active = false;
        this.spr_shu.active = false;
        this.spr_guang.active = false;
        this.spr_mao.active = false;
        this.bind_double.active = false;
        this.bing.active = false;
        this.spr_maoqiu.active = false;
    }

    onCleanData() {
        this.spr.spriteFrame = null;
        this.chushi.uncheck();
        this.onCloseNode();
    }

    onClick_start(event) {
        if (event != this.id) {
            this.node.active = false;
        } else {
            if (this.id >= 63 && this.id <= 81) {
                this.node_select.y = 160
            } else {
                this.node_select.y = -52
            }
            this.node_select.active = true;
            return;
        }
    }

    onClick_Anim(event, data) {
        EventMng.emit('CHOICEANIM', { pos: this.pos, type: data });
        this.spr.node.angle = 0;
        this.spr.spriteFrame = HallScene._instance.spr_list[Number(data - 1)];
        this.scroll2.active = true;
        this.scroll3.active = true;
    }

    onClick_ice(event, data) {
        EventMng.emit('CHOICEICE', { pos: this.pos, type: data });
        this.spr.node.angle = 0;
        // this.spr.spriteFrame = HallScene._instance.lcespr_list[Number(data - 1)];
        if (data == '1') {
            this.bing.active = true;
            this.bind_double.active = false;
        } else if (data == '2') {
            this.bind_double.active = true;
            this.bing.active = false;
        } else if (data == '0') {
            this.bind_double.active = false;
            this.bing.active = false;
        }
    }

    onClick_eff(event, data) {
        EventMng.emit('CHOICEEFF', { pos: this.pos, type: data });
        switch (data) {
            case '0':
                this.spr_heng.active = false;
                this.spr_shu.active = false;
                this.spr_guang.active = false;
                this.spr_mao.active = false;
                this.spr_maoqiu.active = false;
                break;
            case '1':
                this.spr_heng.active = false;
                this.spr_shu.active = true;
                this.spr_guang.active = false;
                this.spr_mao.active = false;
                this.spr_maoqiu.active = false;
                break;
            case '2':
                this.spr_heng.active = true;
                this.spr_shu.active = false;
                this.spr_guang.active = false;
                this.spr_mao.active = false;
                this.spr_maoqiu.active = false;
                break;
            case '3':
                this.spr_heng.active = false;
                this.spr_shu.active = false;
                this.spr_guang.active = true;
                this.spr_mao.active = false;
                this.spr_maoqiu.active = false;
                break;
            case '4':
                this.spr_heng.active = false;
                this.spr_shu.active = false;
                this.spr_guang.active = false;
                this.spr_mao.active = true;
                this.spr_maoqiu.active = false;
                break;
            case '13':
                this.spr_heng.active = false;
                this.spr_shu.active = false;
                this.spr_guang.active = false;
                this.spr_mao.active = false;
                this.spr_maoqiu.active = true;
                break;
            default:
                break;
        }
    }

    onClick_konggezi() {
        EventMng.emit('CHOICEANIM', { pos: this.pos, type: 0 });
        this.spr.spriteFrame = null;
        this.onCloseNode();
    }

    onClick_deletegezi() {
        EventMng.emit('CHOICEANIM', { pos: this.pos, type: -1 });
        this.spr.spriteFrame = this.x_spr;
        this.onCloseNode();
    }

    onClick_end() {
        this.node_select.active = false;
        this.scroll2.active = false;
        this.scroll3.active = false;
        this.node.active = true;
    }

    onClick_item() {
        EventMng.emit('START', this.id);
    }

    onClick_chushi(event) {
        if (event.isChecked) {
            EventMng.emit('INSTALL_CHUSHI', this.pos)
        } else {
            EventMng.emit('DELETE_CHUSHI', this.pos)
        }
    }

    start() {

    }

    onDestroy() {
        EventMng.off('START', this.onClick_start, this);
        EventMng.off('END', this.onClick_end, this);
        EventMng.off('CLEAN', this.onCleanData, this);
        EventMng.off('CLOSE', this.onCloseData, this);
        EventMng.off('REPAT', this.onRepatData, this);
        EventMng.off('CHUSHI', this.onRepatChuShi, this);
    }


}
