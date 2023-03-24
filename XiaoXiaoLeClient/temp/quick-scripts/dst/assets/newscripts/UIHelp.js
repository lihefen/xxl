
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae0eegKJ71ClYWrwQCf0W3v', 'UIHelp');
// newscripts/UIHelp.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingletonFactory = exports.UIHelp = void 0;
var Network_1 = require("./network/Network");
var UIHelp = /** @class */ (function () {
    function UIHelp() {
    }
    UIHelp.init = function () {
        // 新建一个网络单例
        UIHelp.network = SingletonFactory.getInstance(Network_1.Network);
    };
    UIHelp.network = null;
    return UIHelp;
}());
exports.UIHelp = UIHelp;
exports.default = new UIHelp();
var SingletonFactory = /** @class */ (function () {
    function SingletonFactory() {
    }
    SingletonFactory.getInstance = function (c) {
        if (!SingletonFactory.instances.has(c)) {
            var obj = new c();
            SingletonFactory.instances.set(c, obj);
            return obj;
        }
        return SingletonFactory.instances.get(c);
    };
    SingletonFactory.instances = new Map();
    return SingletonFactory;
}());
exports.SingletonFactory = SingletonFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL1VJSGVscC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUU1QztJQUFBO0lBV0EsQ0FBQztJQVBpQixXQUFJLEdBQWxCO1FBQ0ksV0FBVztRQUNYLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBTGEsY0FBTyxHQUFZLElBQUksQ0FBQztJQVMxQyxhQUFDO0NBWEQsQUFXQyxJQUFBO0FBWFksd0JBQU07QUFZbkIsa0JBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQztBQUM1QjtJQUFBO0lBWUEsQ0FBQztJQVJpQiw0QkFBVyxHQUF6QixVQUE2QixDQUFlO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbEIsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELE9BQVUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBVGMsMEJBQVMsR0FBMkIsSUFBSSxHQUFHLEVBQXFCLENBQUM7SUFVcEYsdUJBQUM7Q0FaRCxBQVlDLElBQUE7QUFaWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSBcIi4vbmV0d29yay9OZXR3b3JrXCI7XG5cbmV4cG9ydCBjbGFzcyBVSUhlbHAge1xuXG4gICAgcHVibGljIHN0YXRpYyBuZXR3b3JrOiBOZXR3b3JrID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgLy8g5paw5bu65LiA5Liq572R57uc5Y2V5L6LXG4gICAgICAgIFVJSGVscC5uZXR3b3JrID0gU2luZ2xldG9uRmFjdG9yeS5nZXRJbnN0YW5jZShOZXR3b3JrKTtcbiAgICB9XG5cbiAgICBcblxufVxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJSGVscCgpO1xuZXhwb3J0IGNsYXNzIFNpbmdsZXRvbkZhY3Rvcnkge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2VzOiBNYXA8eyBuZXcoKSB9LCBPYmplY3Q+ID0gbmV3IE1hcDx7IG5ldygpIH0sIE9iamVjdD4oKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2U8VD4oYzogeyBuZXcoKTogVCB9KTogVCB7XG4gICAgICAgIGlmICghU2luZ2xldG9uRmFjdG9yeS5pbnN0YW5jZXMuaGFzKGMpKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gbmV3IGMoKTtcbiAgICAgICAgICAgIFNpbmdsZXRvbkZhY3RvcnkuaW5zdGFuY2VzLnNldChjLCBvYmopO1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPFQ+U2luZ2xldG9uRmFjdG9yeS5pbnN0YW5jZXMuZ2V0KGMpO1xuICAgIH1cbn1cbiJdfQ==