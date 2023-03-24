
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/tipsitem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL3RpcHNpdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFDQztRQWpDRyx3QkFBd0I7UUFFeEIsVUFBSSxHQUFhLElBQUksQ0FBQzs7UUE4QnRCLGlCQUFpQjtJQUNyQixDQUFDO0lBN0JHLHlCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUFBLGlCQWNDO1FBYkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUNoQyxJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUNqQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ1IsRUFBRSxDQUFDLEdBQUcsRUFBQyxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUNwQixJQUFJLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0c7SUFOTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUM1QjtJQUFELGVBQUM7Q0FyQ0QsQUFxQ0MsQ0FyQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBcUNqRDtrQkFyQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aXBzaXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgaW5mbzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgb25Mb2FkICgpIHt9XG5cbiAgICBvblN0YXJ0SW5mbyhldmVudCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaW5mby5zdHJpbmcgPSBldmVudDtcbiAgICAgICAgc2VsZi5vbkFuaW0oKTtcbiAgICB9XG5cbiAgICBvbkFuaW0oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MudHdlZW4oc2VsZi5ub2RlKVxuICAgICAgICAgICAgLnRvKDAse3Bvc2l0aW9uOiBjYy52MygwLC01MCwwKX0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIC50bygwLjUse3Bvc2l0aW9uOiBjYy52MygwLDEwLDApfSlcbiAgICAgICAgICAgIC5kZWxheSgzKVxuICAgICAgICAgICAgLnRvKDAuNSx7b3BhY2l0eTogMH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=