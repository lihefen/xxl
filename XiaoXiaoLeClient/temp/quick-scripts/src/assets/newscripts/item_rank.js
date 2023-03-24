"use strict";
cc._RF.push(module, '96d3aFNrEBIDKF3S+vAj5Ih', 'item_rank');
// newscripts/item_rank.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var item_rank = /** @class */ (function (_super) {
    __extends(item_rank, _super);
    function item_rank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rank = null;
        _this.icon = null;
        _this.nickname = null;
        _this.fen = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // 243，33，72 红
    // 29，191，25 绿
    // 23，99，166 蓝
    // 170，66，31 棕
    item_rank.prototype.onStartInfo = function (msg) {
        var _this = this;
        if (msg.id == 1) {
            this.rank.node.color = cc.color(243, 33, 72, 255);
        }
        else if (msg.id == 2) {
            this.rank.node.color = cc.color(29, 191, 25, 255);
        }
        else if (msg.id == 3) {
            this.rank.node.color = cc.color(23, 99, 166, 255);
        }
        else {
            this.rank.node.color = cc.color(170, 66, 31, 255);
        }
        this.rank.string = msg.rank_num;
        cc.loader.load(msg.headimage, function (err, msg) {
            if (err) {
                utils.addTips('头像加载失败');
                return;
            }
            var sprite = new cc.SpriteFrame(msg);
            _this.icon.spriteFrame = sprite;
        });
        var name;
        // let a = '';
        // a.slice
        if (msg.nickname.length > 6) {
            name = msg.nickname.slice(0, 6) + '...';
        }
        else {
            name = msg.nickname;
        }
        this.nickname.string = name;
        this.fen.string = msg.points;
    };
    item_rank.prototype.start = function () {
    };
    __decorate([
        property({ type: cc.Label, displayName: '排名' })
    ], item_rank.prototype, "rank", void 0);
    __decorate([
        property({ type: cc.Sprite, displayName: '头像' })
    ], item_rank.prototype, "icon", void 0);
    __decorate([
        property({ type: cc.Label, displayName: '昵称' })
    ], item_rank.prototype, "nickname", void 0);
    __decorate([
        property({ type: cc.Label, displayName: '分数' })
    ], item_rank.prototype, "fen", void 0);
    item_rank = __decorate([
        ccclass
    ], item_rank);
    return item_rank;
}(cc.Component));
exports.default = item_rank;

cc._RF.pop();