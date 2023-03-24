
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/rankLayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL3JhbmtMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFHbkcseUNBQW9DO0FBQ3BDLG1DQUFrQztBQUU1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdKQztRQXJKRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsVUFBSSxHQUFXLENBQUMsQ0FBQzs7UUFnSWpCLGlCQUFpQjtJQUNyQixDQUFDO0lBaElHLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSxJQUFJLE1BQU0sR0FBRztZQUNULEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRztZQUNqQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7WUFDckIsSUFBSSxFQUFFLENBQUM7U0FDVixDQUFBO1FBQ0QsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxFQUFFLE1BQU0s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QyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFDLENBQUM7OENBQzVCO0lBbkJQLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3SjdCO0lBQUQsZ0JBQUM7Q0F4SkQsQUF3SkMsQ0F4SnNDLEVBQUUsQ0FBQyxTQUFTLEdBd0psRDtrQkF4Sm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tIFwid2luanNcIjtcbmltcG9ydCBpdGVtX3JhbmsgZnJvbSBcIi4vaXRlbV9yYW5rXCI7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi9VSUhlbHBcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByYW5rTGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5QcmVmYWIsIGRpc3BsYXlOYW1lOiAn5o6S6KGMaXRlbSd9KVxuICAgIGl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCBkaXNwbGF5TmFtZTogJ+WFs+WNoUxhYmVsJ30pXG4gICAgbGFiX2d1YW5rYTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5Ob2RlLCBkaXNwbGF5TmFtZTogJ+enr+WIhkxhYmVsJ30pXG4gICAgbGFiX2ppZmVuOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTGFiZWwsIGRpc3BsYXlOYW1lOiAn5o6S5ZCNJ30pXG4gICAgcmFuazogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuU3ByaXRlLCBkaXNwbGF5TmFtZTogJ+WktOWDjyd9KVxuICAgIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5MYWJlbCwgZGlzcGxheU5hbWU6ICfmmLXnp7AnfSlcbiAgICBuaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTGFiZWwsIGRpc3BsYXlOYW1lOiAn5YiG5pWwJ30pXG4gICAgZmVuOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLk5vZGUsIGRpc3BsYXlOYW1lOiAn5ruR5Z2XY29udGVudCd9KVxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICB0YWcxOiBudW1iZXIgPSAwO1xuICAgIHRhZzI6IG51bWJlciA9IDA7XG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLm9uR2V0RGF0YSgpO1xuICAgIH1cblxuICAgIG9uR2V0RGF0YSgpIHtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHJpZDogZ2FtZWRhdGEucmlkLFxuICAgICAgICAgICAgdG9rZW46IGdhbWVkYXRhLnRva2VuLFxuICAgICAgICAgICAgdHlwZTogMFxuICAgICAgICB9XG4gICAgICAgIHV0aWxzLlNob3dMb2FkaW5nKCk7XG4gICAgICAgIFVJSGVscC5uZXR3b3JrLmh0dHBTZW5kKCdnYW1lL3hpYW94aWFvbGUvZ2V0R3JhbFJhbmtMaXN0JywgcGFyYW1zLCB0aGlzLkdldENhbGxCYWNrLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgR2V0Q2FsbEJhY2sobXNnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyYW5rPT09PicsIG1zZyk7XG4gICAgICAgIHV0aWxzLkhpZGVMb2FkaW5nKCk7XG4gICAgICAgIGlmKG1zZy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0VXNlcihtc2cpO1xuICAgICAgICAgICAgaWYobXNnLmRhdGEubGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBhID0gMDsgYSA8IG1zZy5kYXRhLmxpc3QubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChpdGVtX3JhbmspLm9uU3RhcnRJbmZvKG1zZy5kYXRhLmxpc3RbYV0pO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdXRpbHMuYWRkVGlwcyhtc2cubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblN0YXJ0VXNlcihtc2cpIHtcbiAgICAgICAgbXNnLmRhdGEucmFua19udW0/IHRoaXMucmFuay5zdHJpbmcgPSBtc2cuZGF0YS5yYW5rX251bSA6IHRoaXMucmFuay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZihtc2cuZGF0YS5oZWFkaW1hZ2UpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKG1zZy5kYXRhLmhlYWRpbWFnZSwgKGVyciwgaW1nKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFkZFRpcHMoXCLlpLTlg4/liqDovb3lpLHotKVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShpbWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHNwcml0ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5pY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5hbWU7XG4gICAgICAgIGlmKG1zZy5kYXRhLm5pY2tuYW1lLmxlbmd0aCA+IDYpIHtcbiAgICAgICAgICAgIG5hbWUgPSBtc2cuZGF0YS5uaWNrbmFtZS5zbGljZSgwLDYpICsgJy4uLic7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbmFtZSA9IG1zZy5kYXRhLm5pY2tuYW1lO1xuICAgICAgICB9XG4gICAgICAgIG1zZy5kYXRhLm5pY2tuYW1lPyAgdGhpcy5uaWNrbmFtZS5zdHJpbmcgPSBuYW1lIDogdGhpcy5uaWNrbmFtZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBtc2cuZGF0YS5wb2ludHM/IHRoaXMuZmVuLnN0cmluZyA9IG1zZy5kYXRhLnBvaW50cyA6IHRoaXMuZmVuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DbGlja1poaUJvKCkge1xuICAgICAgICB0aGlzLnRhZzEgPSAwO1xuICAgICAgICB0aGlzLm9uU2VsZWN0VGFnKCk7XG4gICAgfVxuXG4gICAgb25DbGlja1BpbmdUYWkoKSB7XG4gICAgICAgIHRoaXMudGFnMSA9IDE7XG4gICAgICAgIHRoaXMub25TZWxlY3RUYWcoKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrSmlGZW4oKSB7XG4gICAgICAgIHRoaXMudGFnMiA9IDA7XG4gICAgICAgIHRoaXMubGFiX2ppZmVuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGFiX2d1YW5rYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdFRhZygpO1xuICAgIH1cblxuICAgIG9uQ2xpY2tHdWFuS2EoKSB7XG4gICAgICAgIHRoaXMudGFnMiA9IDE7XG4gICAgICAgIHRoaXMubGFiX2ppZmVuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhYl9ndWFua2EuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vblNlbGVjdFRhZygpO1xuICAgIH1cblxuICAgIG9uU2VsZWN0VGFnKCkge1xuICAgICAgICBpZih0aGlzLnRhZzEgPT0gMCkge1xuICAgICAgICAgICAgaWYodGhpcy50YWcyID09IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICByaWQ6IGdhbWVkYXRhLnJpZCxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGdhbWVkYXRhLnRva2VuLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHV0aWxzLlNob3dMb2FkaW5nKCk7XG4gICAgICAgICAgICAgICAgVUlIZWxwLm5ldHdvcmsuaHR0cFNlbmQoJ2dhbWUveGlhb3hpYW9sZS9nZXRHcmFsUmFua0xpc3QnLCBwYXJhbXMsIHRoaXMuR2V0Q2FsbEJhY2suYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogZ2FtZWRhdGEucmlkLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZ2FtZWRhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXRpbHMuU2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBVSUhlbHAubmV0d29yay5odHRwU2VuZCgnZ2FtZS94aWFveGlhb2xlL2dldExldmVsUmFua0xpc3QnLCBwYXJhbXMsIHRoaXMuR2V0Q2FsbEJhY2suYmluZCh0aGlzKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZih0aGlzLnRhZzIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZDogZ2FtZWRhdGEucmlkLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogZ2FtZWRhdGEudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXRpbHMuU2hvd0xvYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBVSUhlbHAubmV0d29yay5odHRwU2VuZCgnZ2FtZS94aWFveGlhb2xlL2dldEdyYWxSYW5rTGlzdCcsIHBhcmFtcywgdGhpcy5HZXRDYWxsQmFjay5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmlkOiBnYW1lZGF0YS5yaWQsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBnYW1lZGF0YS50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1dGlscy5TaG93TG9hZGluZygpO1xuICAgICAgICAgICAgICAgIFVJSGVscC5uZXR3b3JrLmh0dHBTZW5kKCdnYW1lL3hpYW94aWFvbGUvZ2V0TGV2ZWxSYW5rTGlzdCcsIHBhcmFtcywgdGhpcy5HZXRDYWxsQmFjay5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbG9zZSgpIHtcbiAgICAgICAgaWYoY2MuWkwuTGV2ZWwpe1xuICAgICAgICAgICAgY2MuWkwuTGV2ZWwuY2xvc2VNYXNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==