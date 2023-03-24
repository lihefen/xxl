
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/item_rank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL2l0ZW1fcmFuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRzs7QUFFN0YsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUF5REM7UUF0REcsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsU0FBRyxHQUFhLElBQUksQ0FBQzs7UUErQ3JCLGlCQUFpQjtJQUNyQixDQUFDO0lBOUNHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkLCtCQUFXLEdBQVgsVUFBWSxHQUFHO1FBQWYsaUJBOEJDO1FBN0JHLElBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDthQUFLLElBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7YUFBSyxJQUFHLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO2FBQUs7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxHQUFHLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDaEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBQyxHQUFHO1lBQ2xDLElBQUcsR0FBRyxFQUFFO2dCQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU87YUFDVjtZQUNELElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLElBQUksQ0FBQztRQUNULGNBQWM7UUFDZCxVQUFVO1FBQ1YsSUFBRyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDMUM7YUFBSTtZQUNELElBQUksR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFakMsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDOzJDQUN4QjtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQzsyQ0FDeEI7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFDLENBQUM7K0NBQ3BCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxDQUFDOzBDQUN6QjtJQVRKLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F5RDdCO0lBQUQsZ0JBQUM7Q0F6REQsQUF5REMsQ0F6RHNDLEVBQUUsQ0FBQyxTQUFTLEdBeURsRDtrQkF6RG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGl0ZW1fcmFuayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsLCBkaXNwbGF5TmFtZTogJ+aOkuWQjSd9KVxuICAgIHJhbms6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLlNwcml0ZSwgZGlzcGxheU5hbWU6ICflpLTlg48nfSlcbiAgICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuTGFiZWwsIGRpc3BsYXlOYW1lOiAn5pi156ewJ30pXG4gICAgbmlja25hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe3R5cGU6IGNjLkxhYmVsLCBkaXNwbGF5TmFtZTogJ+WIhuaVsCd9KVxuICAgIGZlbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIC8vIDI0M++8jDMz77yMNzIg57qiXG4gICAgLy8gMjnvvIwxOTHvvIwyNSDnu79cbiAgICAvLyAyM++8jDk577yMMTY2IOiTnVxuICAgIC8vIDE3MO+8jDY277yMMzEg5qOVXG5cbiAgICBvblN0YXJ0SW5mbyhtc2cpIHtcbiAgICAgICAgaWYobXNnLmlkID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMucmFuay5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjQzLDMzLDcyLDI1NSk7XG4gICAgICAgIH1lbHNlIGlmKG1zZy5pZCA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmsubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI5LDE5MSwyNSwyNTUpO1xuICAgICAgICB9ZWxzZSBpZihtc2cuaWQgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5yYW5rLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyMyw5OSwxNjYsMjU1KTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yYW5rLm5vZGUuY29sb3IgPSBjYy5jb2xvcigxNzAsNjYsMzEsMjU1KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhbmsuc3RyaW5nID0gbXNnLnJhbmtfbnVtO1xuICAgICAgICBjYy5sb2FkZXIubG9hZChtc2cuaGVhZGltYWdlLCAoZXJyLG1zZykgPT4ge1xuICAgICAgICAgICAgaWYoZXJyKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuYWRkVGlwcygn5aS05YOP5Yqg6L295aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShtc2cpO1xuICAgICAgICAgICAgdGhpcy5pY29uLnNwcml0ZUZyYW1lID0gc3ByaXRlO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgbmFtZTtcbiAgICAgICAgLy8gbGV0IGEgPSAnJztcbiAgICAgICAgLy8gYS5zbGljZVxuICAgICAgICBpZihtc2cubmlja25hbWUubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgbmFtZSA9IG1zZy5uaWNrbmFtZS5zbGljZSgwLDYpICsgJy4uLic7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbmFtZSA9IG1zZy5uaWNrbmFtZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5pY2tuYW1lLnN0cmluZyA9IG5hbWU7XG4gICAgICAgIHRoaXMuZmVuLnN0cmluZyA9IG1zZy5wb2ludHM7XG5cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19