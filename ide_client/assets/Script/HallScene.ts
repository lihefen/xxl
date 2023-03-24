import EventMng from "./EventMng";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HallScene extends cc.Component {

    @property(cc.Node)
    Layout: cc.Node = null;
    @property(cc.Node)
    mask: cc.Node = null;
    @property(cc.Node)
    target_mask: cc.Node = null;
    @property(cc.Prefab)
    item: cc.Prefab = null;
    @property(cc.Prefab)
    target_item: cc.Prefab = null;
    @property(cc.EditBox)
    bushu_input: cc.EditBox = null;
    @property(cc.EditBox)
    xingzhi_input: cc.EditBox  = null;
    @property(cc.EditBox)
    guanka: cc.EditBox  = null;
    @property(cc.Label)
    lab_alert: cc.Label = null;

    @property([cc.Sprite])
    targetSprList: Array<cc.Sprite> = []; 
    @property([cc.Label])
    targetLabList: Array<cc.Label> = []; 

    @property([cc.SpriteFrame])
    spr_list: Array<cc.SpriteFrame> = [];
    @property([cc.SpriteFrame])
    lcespr_list: Array<cc.SpriteFrame> = [];
    @property([cc.SpriteFrame])
    animspr_list: Array<cc.SpriteFrame> = [];
    @property([cc.SpriteFrame])
    eff_list: Array<cc.SpriteFrame> = [];

    Anim = null;
    ice = null;
    eff = null;
    targetNode = null;
    targetList = [[0,0],[0,0],[0,0],[0,0]];
    creat = [];

    static _instance = null;

    static get Instance(): HallScene {
        return HallScene._instance;
    }

    onLoad() {
        HallScene._instance = this;
        this.onStartItem()
        this.onInitList()
        EventMng.on('START', this.onClick_start, this);
        EventMng.on('CHOICEANIM', this.onClick_choiceanim, this);
        EventMng.on('CHOICEICE', this.onClick_choiceice, this);
        EventMng.on('CHOICEEFF', this.onClick_choiceeff, this);
        EventMng.on('TERGET', this.onClick_target, this);
        EventMng.on('INSTALL_CHUSHI', this.onClick_chusheng, this);
        EventMng.on('DELETE_CHUSHI', this.onClick_delete_chusheng, this);
    }

    onClick_delete_chusheng(event) {
        this.onSeleteCreat(event);
    }

    onClick_chusheng(event) {
        this.creat.push([event.h,event.l]);
    }

    onSeleteCreat(pos) {
        for(let a = 0; a < this.creat.length; a++) {
            if(this.creat[a][0] == pos.h && this.creat[a][1] == pos.l) {
                this.creat.splice(a,1);
            }
        }
    }

    onClick_target(event) {
        let id = event.id;
        let list = event.list;
        this.target_mask.active = false;
        if (list[0] == 0 && list[1] == 0) {
            this.targetNode.getChildByName('spr').getComponent(cc.Sprite).spriteFrame = null;
            this.targetNode.getChildByName('lab').getComponent(cc.Label).string = '';
            this.targetList[id] = [0,0];
            return;
        }
        let spr = this.onSelect_target_spr(list[0]);
        this.targetNode.getChildByName('spr').getComponent(cc.Sprite).spriteFrame = spr;
        this.targetNode.getChildByName('lab').getComponent(cc.Label).string = list[1];
        this.targetList[id] = list

    }

    onSelect_target_spr(event) {
        switch (event) {
            case 1:
                return this.spr_list[0];
            case 2:
                return this.spr_list[1];
            case 3:
                return this.spr_list[2];
            case 4:
                return this.spr_list[3];
            case 5:
                return this.spr_list[4]
            case 11:
                return this.lcespr_list[0]
            case 12:
                return this.lcespr_list[1]
            case 7:
                return this.spr_list[6]
            default:
                break;
        }
    }

    onClick_targetNode(event,data) {
        this.targetNode = event.target;
        this.target_mask.active = true;
        let node = cc.instantiate(this.target_item);
        node.getComponent('mubiaoLayer').onStartInfo(data);
        node.x = event.target.x;
        node.y = event.target.y - event.target.height / 2;
        node.parent = this.node;
    }

    onCloseTarget_mask() {
        this.target_mask.active = false;
        EventMng.emit('CLOSETARGET')
    }

    onInitList() {
        this.Anim = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.ice = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.eff = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.creat = [];
    }

    onClick_clean() {
        this.onInitList();
        EventMng.emit('CLEAN');
    }

    onClick_close() {
        this.Anim = [
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1, -1, -1, -1]
        ];
        this.ice = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.eff = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        this.creat = [];
        EventMng.emit('CLOSE')
    }

    onClick_choiceeff(event) {
        let pos = event.pos;
        this.eff[pos.h][pos.l] = Number(event.type)
        // this.onCloseMask();
    }

    onClick_choiceice(event) {
        let pos = event.pos;
        this.ice[pos.h][pos.l] = Number(event.type)
        // this.onCloseMask();
    }

    onClick_choiceanim(event) {
        let pos = event.pos;
        this.Anim[pos.h][pos.l] = Number(event.type)
        // this.onCloseMask();
    }

    onClick_start() {
        this.mask.active = true;
    }

    onCloseMask() {
        this.mask.active = false;
        EventMng.emit('END');
    }

    onLogList() {
        // console.log(this.Anim)
        // console.log(this.ice)
        // console.log(this.eff)
        // let list = this.onSpliceTargetList();
        // console.log(this.Anim);
        // console.log(this.onSelectDown())
    }

    onInitTargetList() {
        this.targetList = [[0,0],[0,0],[0,0],[0,0]];
        for(let a = 0; a < this.targetSprList.length; a++) {
            this.targetSprList[a].spriteFrame = null;
        }
        for(let b = 0; b < this.targetLabList.length; b++) {
            this.targetLabList[b].string = '';
        }
    }

    onSpliceTargetList() {
        let list = this.targetList;
        let list1 = [];
        for(let a = 0; a < list.length; a++) {
            if(list[a][0] != 0 && list[a][1] != 0) {
                list1.push(list[a]);
            }
        }
        return list1;
    }

    onSelectDown() {
        let list = [];
        let sum = -1;
        for(let a = 0; a < this.Anim.length; a++) {
            for(let b = 0; b < this.Anim[a].length; b++) {
                if(this.Anim[a][b] > 0) {
                    if(sum == -1) {
                        sum = a;
                    }
                    if(a == sum) {
                        list.push([a, b]);
                    }
                }
            }
        }
        return list;
    }

    onStartItem() {
        let h = 0;
        let l = 0;
        for (let a = 0; a < 81; a++) {
            if (l == 9) {
                h++;
                l = 0;
            }
            let node = cc.instantiate(this.item);
            node.getComponent('item_kuai').onStartInfo(a + 1, { h: h, l: l });
            node.parent = this.Layout;
            l++;
        }

        this.Layout.removeComponent(cc.Layout);
    }

    editbox_ended(event) {
        let str = event.string;
        let strC;
        let strF = /^[1-9]+[0-9]*]*$/;
        if (str == '' || str == null) {
            return;
        }
        if (!strF.test(str)) {
            var i = str.indexOf(".");
            if (i != -1) {
                strC = str.replace(".", "");
            } else {
                strC = str;
            }
            for (let e = 0; e < strC.length; e++) {
                if (strC[e] == 0 && e < strC.length - 1) {
                    if (strC[e + 1] != 0) {
                        strC = strC.slice(e + 1, strC.length)
                    }
                }
            }
            event.string = strC;
        }
    }

    onSelectAnim() {
        for(let a = 0; a < this.Anim.length; a++) {
            for(let b = 0; b < this.Anim[a].length; b++) {
                if(this.Anim[a][b] != 0) {
                    return this.Anim;
                }
            }
        }
        return false;
    }

    //生成关卡
    onGenerate_txt() {
        // let creat = this.onSelectDown();            //产生地
        console.log('creat===>', this.creat)
        let creat = this.creat;
        let step = this.bushu_input.string;         //限制步数
        let one_star = this.xingzhi_input.string;   //一星值
        let target = this.onSpliceTargetList();     //目标
        let list = this.onSelectAnim();
        let guanka = this.guanka.string;
        if(creat == [] || creat.length == 0) {
            this.onAlertShow('产生地信息错误');
            return console.log(creat);
        }
        if(step == '' || step == null) {
            this.onAlertShow('限制步数信息错误');
            return console.log(step);
        }
        if(one_star == '' || one_star == null) {
            this.onAlertShow('一星值信息错误');
            return console.log(one_star);
        }
        if(target == [] || target.length == 0) {
            this.onAlertShow('目标信息错误');
            return console.log(target);
        }
        if(list == false) {
            this.onAlertShow('怪物配置信息错误');
            return console.log(list);
        }
        if(guanka == '' || guanka == null) {
            this.onAlertShow('关卡信息配置错误');
            return console.log(guanka);
        }
        let data = {
            Anim: list,
            ice: this.ice,
            eff: this.eff,
            creat: creat,
            step: Number(step),
            one_star: Number(one_star),
            target: target
        }

        this.saveForBrowser(JSON.stringify(data), this.guanka.string + '.txt');
    }

    saveForBrowser(textToWrite, fileNameToSaveAs) {
        if (cc.sys.isBrowser) {
            let textFileAsBlob = new Blob([textToWrite], {type:'application/json'});
            let downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
            downloadLink.click();
        }
    }

    onAlertShow(str: string) {
        this.lab_alert.string = str;
        this.lab_alert.node.active = true; 
    }

    start() {

    }
}
