import EventMng from "./EventMng";
import { GetData } from "./getData";


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
    xingzhi_input: cc.EditBox = null;
    @property(cc.EditBox)
    guanka: cc.EditBox = null;
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

    @property({ type: cc.Node, displayName: '清空目标按钮' })
    btn_qingkong: cc.Node = null;
    @property({ type: cc.Node, displayName: '一键清空按钮' })
    btn_yijian: cc.Node = null;
    @property({ type: cc.Node, displayName: '一键空格子按钮' })
    btn_konggezi: cc.Node = null;
    @property({ type: cc.Node, displayName: '目标节点' })
    node_mubiao: cc.Node = null;
    @property({ type: cc.Node, displayName: '生成关卡按钮' })
    btn_shengcheng: cc.Node = null;
    @property({ type: cc.Node, displayName: '读取关卡按钮' })
    btn_duqu: cc.Node = null;

    @property({ type: cc.Prefab, displayName: '提示预制件' })
    alret_prefab: cc.Prefab = null;

    IsDuQuCloseNode(action: boolean) {
        var self = this;
        if (action) {
            this.btn_qingkong.active = true;
            this.btn_yijian.active = true;
            this.btn_konggezi.active = true;
            this.node_mubiao.active = true;
            this.btn_shengcheng.active = true;
            this.bushu_input.node.active = true;
            this.xingzhi_input.node.active = true;
            this.guanka.node.active = true;
            this.onStartItem();
            // this.Layout.active = true;
            this.btn_duqu.active = false;
        } else {
            this.btn_qingkong.active = false;
            this.btn_yijian.active = false;
            this.btn_konggezi.active = false;
            this.node_mubiao.active = false;
            this.btn_shengcheng.active = false;
            this.bushu_input.node.active = false;
            this.xingzhi_input.node.active = false;
            this.guanka.node.active = false;
            // this.Layout.active = false;
            this.btn_duqu.active = true;
        }
    }



    Anim = null;
    ice = null;
    eff = null;
    targetNode = null;
    targetList = [[0, 0], [0, 0], [0, 0], [0, 0]];
    creat = [];

    one_star = null;
    step = null;
    guankanum = null;
    static _instance = null;

    static get Instance(): HallScene {
        return HallScene._instance;
    }

    onLoad() {
        HallScene._instance = this;
        // this.onStartItem()
        this.onInitList()
        this.onStart_IDE_Type();
        EventMng.on('START', this.onClick_start, this);
        EventMng.on('CHOICEANIM', this.onClick_choiceanim, this);
        EventMng.on('CHOICEICE', this.onClick_choiceice, this);
        EventMng.on('CHOICEEFF', this.onClick_choiceeff, this);
        EventMng.on('TERGET', this.onClick_target, this);
        EventMng.on('INSTALL_CHUSHI', this.onClick_chusheng, this);
        EventMng.on('DELETE_CHUSHI', this.onClick_delete_chusheng, this);
    }

    onStart_IDE_Type() {
        var self = this;
        let type = GetData.getInstance().sceneType;
        switch (type) {
            case 1:
                console.log("新建关卡模式");
                this.IsDuQuCloseNode(true);
                break;
            case 2:
                console.log("读取关卡模式");
                this.IsDuQuCloseNode(false);
                break;
            default:
                break;
        }
    }

    onClick_delete_chusheng(event) {
        this.onSeleteCreat(event);
    }

    onClick_chusheng(event) {
        this.creat.push([event.h, event.l]);
    }

    onSeleteCreat(pos) {
        for (let a = 0; a < this.creat.length; a++) {
            if (this.creat[a][0] == pos.h && this.creat[a][1] == pos.l) {
                this.creat.splice(a, 1);
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
            this.targetList[id] = [0, 0];
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

    onClick_targetNode(event, data) {
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
        this.targetList = [[0, 0], [0, 0], [0, 0], [0, 0]];
        for (let a = 0; a < this.targetSprList.length; a++) {
            this.targetSprList[a].spriteFrame = null;
        }
        for (let b = 0; b < this.targetLabList.length; b++) {
            this.targetLabList[b].string = '';
        }
    }

    onSpliceTargetList() {
        let list = this.targetList;
        let list1 = [];
        for (let a = 0; a < list.length; a++) {
            if (list[a][0] != 0 && list[a][1] != 0) {
                list1.push(list[a]);
            }
        }
        return list1;
    }

    onSelectDown() {
        let list = [];
        let sum = -1;
        for (let a = 0; a < this.Anim.length; a++) {
            for (let b = 0; b < this.Anim[a].length; b++) {
                if (this.Anim[a][b] > 0) {
                    if (sum == -1) {
                        sum = a;
                    }
                    if (a == sum) {
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
        this.Layout.getComponent(cc.Layout).updateLayout();
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
        for (let a = 0; a < this.Anim.length; a++) {
            for (let b = 0; b < this.Anim[a].length; b++) {
                if (this.Anim[a][b] != 0) {
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
        if (creat == [] || creat.length == 0) {
            this.onAlertShow('产生地信息错误');
            return console.log(creat);
        }
        if (step == '' || step == null) {
            this.onAlertShow('限制步数信息错误');
            return console.log(step);
        }
        if (one_star == '' || one_star == null) {
            this.onAlertShow('一星值信息错误');
            return console.log(one_star);
        }
        if (target == [] || target.length == 0) {
            this.onAlertShow('目标信息错误');
            return console.log(target);
        }
        if (list == false) {
            this.onAlertShow('怪物配置信息错误');
            return console.log(list);
        }
        if (guanka == '' || guanka == null) {
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

        console.log('关卡信息', data);

        this.saveForBrowser(JSON.stringify(data), this.guanka.string + '.txt');
    }

    saveForBrowser(textToWrite, fileNameToSaveAs) {
        if (cc.sys.isBrowser) {
            let textFileAsBlob = new Blob([textToWrite], { type: 'application/json' });
            let downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null) {
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else {
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

    onGetData() {
        var self = this;
        GetData.getInstance().openLocalFile('', (data: File) => {
            this.guankanum = data.name.split('.')[0];
            GetData.getInstance().readLocalFile(data, GetData.getInstance().type.TEXT, (data) => {
                let obj = JSON.parse(String(data));
                console.log("loadFile", obj)
                this.Anim = obj.Anim;
                this.ice = obj.ice;
                this.eff = obj.eff;
                this.targetList = obj.target;
                this.step = obj.step;
                this.one_star = obj.one_star;
                this.creat = obj.creat;
                this.onRepatData();
            })

        })
    }

    onRepatData() {
        var self = this;
        this.IsDuQuCloseNode(true);
        this.bushu_input.string = this.step;         //限制步数
        this.xingzhi_input.string = this.one_star;   //一星值
        this.guanka.string = this.guankanum;
        for(let a = 0; a < this.Anim.length; a++) {
            for(let b = 0; b < this.Anim[a].length; b++){
                EventMng.emit('REPAT',{ h: a, l: b, anim: this.Anim[a][b], ice: this.ice[a][b], eff: this.eff[a][b]})
            }
        }
        if(this.targetList.length > 0) {
            for(let c = 0; c < this.targetList.length; c++) {
                let spr = this.onSelect_target_spr(this.targetList[c][0]);
                this.targetSprList[c].spriteFrame = spr;
                this.targetLabList[c].string = String(this.targetList[c][1]);
            }
        }
        if(this.creat.length > 0) {
            for(let d = 0; d < this.creat.length; d++) {
                EventMng.emit('CHUSHI', this.creat[d]);
            }
        }
    }

    onClickBack() {
        var self = this;
        let node = cc.instantiate(this.alret_prefab);
        node.parent = this.node;
    }

    start() {

    }
}
