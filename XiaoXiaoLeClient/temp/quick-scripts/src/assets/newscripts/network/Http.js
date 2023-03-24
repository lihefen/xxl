"use strict";
cc._RF.push(module, 'f9d93E/k3hDp4GPIrJh+r75', 'Http');
// newscripts/network/Http.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Http = /** @class */ (function () {
    function Http() {
    }
    Http_1 = Http;
    Http.get = function (url, callback, thisObj) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            //     var response = xhr.responseText;
            //     // console.log(response);
            // }
            // callback.call(thisObj,"COMPLETE",xhr)
        };
        xhr.onerror = function () {
            callback.call(thisObj, "ERROR", xhr);
        };
        xhr.onprogress = function () {
            callback.call(thisObj, "PROGRESS", xhr);
        };
        xhr.onloadend = function () {
            callback.call(thisObj, "COMPLETE", xhr);
        };
        xhr.ontimeout = function () {
            callback.call(thisObj, "TIMEOUT", xhr);
        };
        xhr.open("GET", url, true);
        xhr.send();
    };
    Http.catobj = function (obj) {
        var a = [];
        for (var k in obj) {
            var v = obj[k];
            var s = "" + k + "=" + v;
            a.push(s);
        }
        return a.join("&");
    };
    Http.post = function (url, params, callback, thisObj) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            // if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            //     var response = xhr.responseText;
            //     // console.log(response);
            // }
            // callback.call(thisObj,"COMPLETE",xhr)
        };
        xhr.onerror = function () {
            callback.call(thisObj, "ERROR", xhr);
        };
        xhr.onprogress = function () {
            callback.call(thisObj, "PROGRESS", xhr);
        };
        xhr.onloadend = function () {
            callback.call(thisObj, "COMPLETE", xhr);
        };
        xhr.ontimeout = function () {
            callback.call(thisObj, "TIMEOUT", xhr);
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        var s = Http_1.catobj(params);
        xhr.send(s);
    };
    var Http_1;
    Http = Http_1 = __decorate([
        ccclass
    ], Http);
    return Http;
}());
exports.Http = Http;

cc._RF.pop();