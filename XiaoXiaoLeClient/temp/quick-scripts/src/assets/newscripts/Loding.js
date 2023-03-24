"use strict";
cc._RF.push(module, '6c4cdQwO8xIQqAFXZPgDkNo', 'Loding');
// newscripts/Loding.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Loding = /** @class */ (function (_super) {
    __extends(Loding, _super);
    function Loding() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // onLoad () {}
        _this.img = null;
        return _this;
    }
    Loding.prototype.start = function () {
    };
    Loding.prototype.update = function (dt) {
        if (this.node.active) {
            this.img.angle -= 5;
        }
    };
    Loding.prototype.onDisable = function () {
        this.img.angle = 0;
    };
    __decorate([
        property(cc.Node)
    ], Loding.prototype, "img", void 0);
    Loding = __decorate([
        ccclass
    ], Loding);
    return Loding;
}(cc.Component));
exports.default = Loding;

cc._RF.pop();