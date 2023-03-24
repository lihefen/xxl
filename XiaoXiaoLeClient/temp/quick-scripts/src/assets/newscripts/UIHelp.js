"use strict";
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