"use strict";
cc._RF.push(module, '7aafc21QodIrr3o+c0WpXj9', 'tipsitem');
// newscripts/tipsitem.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var tipsitem = /** @class */ (function (_super) {
    __extends(tipsitem, _super);
    function tipsitem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.info = null;
        return _this;
        // update (dt) {}
    }
    tipsitem.prototype.onLoad = function () { };
    tipsitem.prototype.onStartInfo = function (event) {
        var self = this;
        self.info.string = event;
        self.onAnim();
    };
    tipsitem.prototype.onAnim = function () {
        var _this = this;
        var self = this;
        cc.tween(self.node)
            .to(0, { position: cc.v3(0, -50, 0) })
            .call(function () {
            _this.node.active = true;
        })
            .to(0.5, { position: cc.v3(0, 10, 0) })
            .delay(3)
            .to(0.5, { opacity: 0 })
            .call(function () {
            self.node.removeFromParent();
        })
            .start();
    };
    tipsitem.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], tipsitem.prototype, "info", void 0);
    tipsitem = __decorate([
        ccclass
    ], tipsitem);
    return tipsitem;
}(cc.Component));
exports.default = tipsitem;

cc._RF.pop();