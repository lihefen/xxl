"use strict";
cc._RF.push(module, '635efMmY8lCxod/EcgpGiQa', 'rankLayer');
// newscripts/rankLayer.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var item_rank_1 = require("./item_rank");
var UIHelp_1 = require("./UIHelp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rankLayer = /** @class */ (function (_super) {
    __extends(rankLayer, _super);
    function rankLayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.lab_guanka = null;
        _this.lab_jifen = null;
        _this.rank = null;
        _this.icon = null;
        _this.nickname = null;
        _this.fen = null;
        _this.content = null;
        _this.tag1 = 0;
        _this.tag2 = 0;
        return _this;
        // update (dt) {}
    }
    rankLayer.prototype.start = function () {
        this.onGetData();
    };
    rankLayer.prototype.onGetData = function () {
        var params = {
            rid: gamedata.rid,
            token: gamedata.token,
            type: 0
        };
        utils.ShowLoading();
        UIHelp_1.UIHelp.network.httpSend('game/xiaoxiaole/getGralRankList', params, this.GetCallBack.bind(this));
    };
    rankLayer.prototype.GetCallBack = function (msg) {
        console.log('rank===>', msg);
        utils.HideLoading();
        if (msg.code == 200) {
            this.onStartUser(msg);
            if (msg.data.list.length > 0) {
                this.content.removeAllChildren();
                for (var a = 0; a < msg.data.list.length; a++) {
                    var node = cc.instantiate(this.item);
                    node.getComponent(item_rank_1.default).onStartInfo(msg.data.list[a]);
                    node.parent = this.content;
                }
            }
        }
        else {
            utils.addTips(msg.message);
        }
    };
    rankLayer.prototype.onStartUser = function (msg) {
        var _this = this;
        msg.data.rank_num ? this.rank.string = msg.data.rank_num : this.rank.node.active = false;
        if (msg.data.headimage) {
            cc.loader.load(msg.data.headimage, function (err, img) {
                if (err) {
                    utils.addTips("头像加载失败");
                }
                var sprite = new cc.SpriteFrame(img);
                _this.icon.spriteFrame = sprite;
            });
        }
        else {
            this.icon.node.active = false;
        }
        var name;
        if (msg.data.nickname.length > 6) {
            name = msg.data.nickname.slice(0, 6) + '...';
        }
        else {
            name = msg.data.nickname;
        }
        msg.data.nickname ? this.nickname.string = name : this.nickname.node.active = false;
        msg.data.points ? this.fen.string = msg.data.points : this.fen.node.active = false;
    };
    rankLayer.prototype.onClickZhiBo = function () {
        this.tag1 = 0;
        this.onSelectTag();
    };
    rankLayer.prototype.onClickPingTai = function () {
        this.tag1 = 1;
        this.onSelectTag();
    };
    rankLayer.prototype.onClickJiFen = function () {
        this.tag2 = 0;
        this.lab_jifen.active = true;
        this.lab_guanka.active = false;
        this.onSelectTag();
    };
    rankLayer.prototype.onClickGuanKa = function () {
        this.tag2 = 1;
        this.lab_jifen.active = false;
        this.lab_guanka.active = true;
        this.onSelectTag();
    };
    rankLayer.prototype.onSelectTag = function () {
        if (this.tag1 == 0) {
            if (this.tag2 == 0) {
                var params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 0
                };
                utils.ShowLoading();
                UIHelp_1.UIHelp.network.httpSend('game/xiaoxiaole/getGralRankList', params, this.GetCallBack.bind(this));
            }
            else {
                var params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 0
                };
                utils.ShowLoading();
                UIHelp_1.UIHelp.network.httpSend('game/xiaoxiaole/getLevelRankList', params, this.GetCallBack.bind(this));
            }
        }
        else {
            if (this.tag2 == 0) {
                var params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 1
                };
                utils.ShowLoading();
                UIHelp_1.UIHelp.network.httpSend('game/xiaoxiaole/getGralRankList', params, this.GetCallBack.bind(this));
            }
            else {
                var params = {
                    rid: gamedata.rid,
                    token: gamedata.token,
                    type: 1
                };
                utils.ShowLoading();
                UIHelp_1.UIHelp.network.httpSend('game/xiaoxiaole/getLevelRankList', params, this.GetCallBack.bind(this));
            }
        }
    };
    rankLayer.prototype.onClose = function () {
        if (cc.ZL.Level) {
            cc.ZL.Level.closeMask();
        }
        this.node.removeFromParent(true);
    };
    __decorate([
        property({ type: cc.Prefab, displayName: '排行item' })
    ], rankLayer.prototype, "item", void 0);
    __decorate([
        property({ type: cc.Node, displayName: '关卡Label' })
    ], rankLayer.prototype, "lab_guanka", void 0);
    __decorate([
        property({ type: cc.Node, displayName: '积分Label' })
    ], rankLayer.prototype, "lab_jifen", void 0);
    __decorate([
        property({ type: cc.Label, displayName: '排名' })
    ], rankLayer.prototype, "rank", void 0);
    __decorate([
        property({ type: cc.Sprite, displayName: '头像' })
    ], rankLayer.prototype, "icon", void 0);
    __decorate([
        property({ type: cc.Label, displayName: '昵称' })
    ], rankLayer.prototype, "nickname", void 0);
    __decorate([
        property({ type: cc.Label, displayName: '分数' })
    ], rankLayer.prototype, "fen", void 0);
    __decorate([
        property({ type: cc.Node, displayName: '滑块content' })
    ], rankLayer.prototype, "content", void 0);
    rankLayer = __decorate([
        ccclass
    ], rankLayer);
    return rankLayer;
}(cc.Component));
exports.default = rankLayer;

cc._RF.pop();