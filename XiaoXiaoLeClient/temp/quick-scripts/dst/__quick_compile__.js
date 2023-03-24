
(function () {
var scripts = [{"deps":{"./assets/newscripts/Common":8,"./assets/newscripts/Advert":48,"./assets/newscripts/EventMng":16,"./assets/newscripts/GGfx":2,"./assets/newscripts/GameData":11,"./assets/newscripts/Loding":9,"./assets/newscripts/UIHelp":12,"./assets/newscripts/item_rank":10,"./assets/newscripts/lvdata":15,"./assets/newscripts/rankLayer":14,"./assets/newscripts/tipsitem":45,"./assets/newscripts/ComeInfo":13,"./assets/newscripts/Level/HomeSettign":23,"./assets/newscripts/Level/LvBnt":1,"./assets/newscripts/Level/LvMgr":20,"./assets/newscripts/Level/LvTarget":21,"./assets/newscripts/Level/Shop":18,"./assets/newscripts/Level/Tree":19,"./assets/newscripts/Level/sprManager":22,"./assets/newscripts/Level/tip":24,"./assets/newscripts/Level/Level":17,"./assets/newscripts/Loading/Begin":5,"./assets/newscripts/Main/Animal":40,"./assets/newscripts/Main/CubeManager":25,"./assets/newscripts/Main/End":26,"./assets/newscripts/Main/Label":33,"./assets/newscripts/Main/Scuess":34,"./assets/newscripts/Main/Manager":29,"./assets/newscripts/Main/LabelMgr":27,"./assets/newscripts/Main/UI":32,"./assets/newscripts/Main/cube":28,"./assets/newscripts/Main/effectMgr":30,"./assets/newscripts/Main/goldeff":35,"./assets/newscripts/Main/targetManager":37,"./assets/newscripts/Main/utils":36,"./assets/newscripts/Main/Touch":31,"./assets/newscripts/Main/AnimalManager":4,"./assets/newscripts/Mains/EndMove":38,"./assets/newscripts/Mains/QQ":6,"./assets/newscripts/Mains/ice":41,"./assets/newscripts/Mains/clearmusic":39,"./assets/newscripts/Mains/iceMgr":44,"./assets/newscripts/Mains/propManager":42,"./assets/newscripts/Mains/select":43,"./assets/newscripts/Mains/AudioMgr":46,"./assets/newscripts/network/Network":47,"./assets/newscripts/network/Http":7,"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":3},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Level/LvBnt.js"},{"deps":{"./Advert":48},"path":"preview-scripts/assets/newscripts/GGfx.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/AnimalManager.js"},{"deps":{"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Loading/Begin.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/QQ.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/network/Http.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Common.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Loding.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/item_rank.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/GameData.js"},{"deps":{"./network/Network":47},"path":"preview-scripts/assets/newscripts/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/ComeInfo.js"},{"deps":{"./item_rank":10,"./UIHelp":12},"path":"preview-scripts/assets/newscripts/rankLayer.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/lvdata.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/EventMng.js"},{"deps":{"Common":8},"path":"preview-scripts/assets/newscripts/Level/Level.js"},{"deps":{"Common":8,"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Level/Shop.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Level/Tree.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Level/LvMgr.js"},{"deps":{"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Level/LvTarget.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Level/sprManager.js"},{"deps":{"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Level/HomeSettign.js"},{"deps":{"Common":8},"path":"preview-scripts/assets/newscripts/Level/tip.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/CubeManager.js"},{"deps":{"Common":8,"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Main/End.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/LabelMgr.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/cube.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/Manager.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/effectMgr.js"},{"deps":{"../UIHelp":12,"console":49},"path":"preview-scripts/assets/newscripts/Main/Touch.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/UI.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/Label.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/Scuess.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/goldeff.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/utils.js"},{"deps":{"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Main/targetManager.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/EndMove.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/clearmusic.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Main/Animal.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/ice.js"},{"deps":{"targetManager":37,"../UIHelp":12},"path":"preview-scripts/assets/newscripts/Mains/propManager.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/select.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/iceMgr.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/tipsitem.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Mains/AudioMgr.js"},{"deps":{"./Http":7},"path":"preview-scripts/assets/newscripts/network/Network.js"},{"deps":{},"path":"preview-scripts/assets/newscripts/Advert.js"},{"deps":{"util":50,"assert":51},"path":"preview-scripts/__node_modules/console-browserify/index.js"},{"deps":{"./support/isBuffer":52,"../process/browser.js":53,"inherits":54},"path":"preview-scripts/__node_modules/util/util.js"},{"deps":{"util/":55},"path":"preview-scripts/__node_modules/assert/assert.js"},{"deps":{},"path":"preview-scripts/__node_modules/util/support/isBufferBrowser.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/util/node_modules/inherits/inherits_browser.js"},{"deps":{"../../../process/browser.js":53,"./support/isBuffer":56,"inherits":57},"path":"preview-scripts/__node_modules/assert/node_modules/util/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/assert/node_modules/util/support/isBufferBrowser.js"},{"deps":{},"path":"preview-scripts/__node_modules/assert/node_modules/inherits/inherits_browser.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    