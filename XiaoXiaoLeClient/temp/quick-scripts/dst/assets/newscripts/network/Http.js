
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/network/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL25ldHdvcmsvSHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7SUF1RUEsQ0FBQzthQXZFWSxJQUFJO0lBQ0MsUUFBRyxHQUFqQixVQUFrQixHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU87UUFDcEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMvQixHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsd0VBQXdFO1lBQ3hFLHVDQUF1QztZQUN2QyxnQ0FBZ0M7WUFDaEMsSUFBSTtZQUNKLHdDQUF3QztRQUM1QyxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHO1lBQ1YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQTtRQUVELEdBQUcsQ0FBQyxVQUFVLEdBQUc7WUFDYixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFBO1FBRUQsR0FBRyxDQUFDLFNBQVMsR0FBRztZQUNaLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMzQyxDQUFDLENBQUE7UUFFRCxHQUFHLENBQUMsU0FBUyxHQUFHO1lBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzFDLENBQUMsQ0FBQTtRQUdELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0lBQ2EsV0FBTSxHQUFwQixVQUFxQixHQUFRO1FBQ3pCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNWLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDWjtRQUVELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRWEsU0FBSSxHQUFsQixVQUFtQixHQUFHLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPO1FBQzdDLElBQUksR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLHdFQUF3RTtZQUN4RSx1Q0FBdUM7WUFDdkMsZ0NBQWdDO1lBQ2hDLElBQUk7WUFDSix3Q0FBd0M7UUFDNUMsQ0FBQyxDQUFDO1FBQ0YsR0FBRyxDQUFDLE9BQU8sR0FBRztZQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUE7UUFFRCxHQUFHLENBQUMsVUFBVSxHQUFHO1lBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzNDLENBQUMsQ0FBQTtRQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUc7WUFDWixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFBO1FBRUQsR0FBRyxDQUFDLFNBQVMsR0FBRztZQUNaLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUE7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxHQUFHLE1BQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDOztJQXRFUSxJQUFJO1FBRGhCLE9BQU87T0FDSyxJQUFJLENBdUVoQjtJQUFELFdBQUM7Q0F2RUQsQUF1RUMsSUFBQTtBQXZFWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgSHR0cCB7XG4gICAgcHVibGljIHN0YXRpYyBnZXQodXJsLCBjYWxsYmFjaywgdGhpc09iaikge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGNhbGxiYWNrLmNhbGwodGhpc09iaixcIkNPTVBMRVRFXCIseGhyKVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgXCJFUlJPUlwiLCB4aHIpXG4gICAgICAgIH1cblxuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgXCJQUk9HUkVTU1wiLCB4aHIpXG4gICAgICAgIH1cblxuICAgICAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBcIkNPTVBMRVRFXCIsIHhocilcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNPYmosIFwiVElNRU9VVFwiLCB4aHIpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgY2F0b2JqKG9iajogYW55KSB7XG4gICAgICAgIHZhciBhID0gW11cbiAgICAgICAgZm9yICh2YXIgayBpbiBvYmopIHtcbiAgICAgICAgICAgIGxldCB2ID0gb2JqW2tdXG4gICAgICAgICAgICBsZXQgcyA9IFwiXCIgKyBrICsgXCI9XCIgKyB2XG4gICAgICAgICAgICBhLnB1c2gocylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhLmpvaW4oXCImXCIpXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwb3N0KHVybCwgcGFyYW1zLCBjYWxsYmFjaywgdGhpc09iaikge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkpIHtcbiAgICAgICAgICAgIC8vICAgICB2YXIgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGNhbGxiYWNrLmNhbGwodGhpc09iaixcIkNPTVBMRVRFXCIseGhyKVxuICAgICAgICB9O1xuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgXCJFUlJPUlwiLCB4aHIpXG4gICAgICAgIH1cblxuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc09iaiwgXCJQUk9HUkVTU1wiLCB4aHIpXG4gICAgICAgIH1cblxuICAgICAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzT2JqLCBcIkNPTVBMRVRFXCIsIHhocilcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNPYmosIFwiVElNRU9VVFwiLCB4aHIpXG4gICAgICAgIH1cblxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHZhciBzID0gSHR0cC5jYXRvYmoocGFyYW1zKVxuICAgICAgICB4aHIuc2VuZChzKTtcbiAgICB9XG59Il19