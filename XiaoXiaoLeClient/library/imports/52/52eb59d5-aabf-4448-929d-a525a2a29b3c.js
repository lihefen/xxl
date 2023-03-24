"use strict";
cc._RF.push(module, '52eb5nVqr9ESJKdpSWiops8', 'Network');
// newscripts/network/Network.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.Network = void 0;
var Http_1 = require("./Http");
var Network = /** @class */ (function () {
    function Network() {
        this._httpurl = 'https://www.9xiu.com';
        this.inConnecting = false;
    }
    Network.prototype.Utf8ArrayToStr = function (array) {
        var out, i, len, c;
        var char2, char3;
        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
            c = array[i++];
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12:
                case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = array[i++];
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = array[i++];
                    char3 = array[i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    };
    Network.prototype.ab2str = function (buf) {
        return String.fromCharCode.apply(null, new Uint8Array(buf));
    };
    Network.prototype.str2UTF8 = function (str) {
        var bytes = new Array();
        var len, c;
        len = str.length;
        for (var i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x010000 && c <= 0x10FFFF) {
                bytes.push(((c >> 18) & 0x07) | 0xF0);
                bytes.push(((c >> 12) & 0x3F) | 0x80);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000800 && c <= 0x00FFFF) {
                bytes.push(((c >> 12) & 0x0F) | 0xE0);
                bytes.push(((c >> 6) & 0x3F) | 0x80);
                bytes.push((c & 0x3F) | 0x80);
            }
            else if (c >= 0x000080 && c <= 0x0007FF) {
                bytes.push(((c >> 6) & 0x1F) | 0xC0);
                bytes.push((c & 0x3F) | 0x80);
            }
            else {
                bytes.push(c & 0xFF);
            }
        }
        return bytes;
    };
    Network.prototype.obj_contact = function (obj) {
        var s = "";
        for (var k in obj) {
            var v = obj[k];
            if (s.length == 0) {
                s += "?" + k + "=" + v;
            }
            else {
                s += "&" + k + "=" + v;
            }
        }
        return s;
    };
    //http请求
    Network.prototype.httpSend = function (cmd, params, onBack) {
        var self = this;
        var param = self.obj_contact(params);
        var url = encodeURI(self._httpurl + "/" + cmd + param);
        Http_1.Http.get(url, function (eventName, xhr) {
            if (eventName == 'COMPLETE') {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var response = JSON.parse(xhr.responseText);
                    if (onBack) {
                        onBack(response);
                    }
                }
            }
            else if (eventName == 'TIMEOUT') {
                //TODO:添加提示连接网关超时
                this.et.emit('TIMEOUT', {});
                cc.log("添加提示连接网关超时");
            }
            else if (eventName == 'ERROR') {
                //TODO:添加提示连接网关发生错误
                cc.log("添加提示连接网关发生错误");
            }
        }, this);
    };
    Network.prototype.httpConnect_post_async = function (urls, params, onBack) {
        var self = this;
        var url = encodeURI(self._httpurl + "/" + urls);
        console.log('url', url);
        Http_1.Http.post(url, params, function (eventName, xhr) {
            if (eventName == 'COMPLETE') {
                if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                    var response = JSON.parse(xhr.responseText);
                    console.log('_____httpPost:', response);
                    if (onBack) {
                        onBack(response);
                    }
                }
            }
            else if (eventName == 'TIMEOUT') {
                //TODO:添加提示连接网关超时
                this.et.emit('TIMEOUT', {});
                cc.log("添加提示连接网关超时");
            }
            else if (eventName == 'ERROR') {
                //TODO:添加提示连接网关发生错误
                cc.log("添加提示连接网关发生错误");
            }
        }, this);
    };
    return Network;
}());
exports.Network = Network;

cc._RF.pop();