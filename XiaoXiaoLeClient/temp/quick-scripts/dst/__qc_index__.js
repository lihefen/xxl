
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/newscripts/Advert');
require('./assets/newscripts/ComeInfo');
require('./assets/newscripts/Common');
require('./assets/newscripts/EventMng');
require('./assets/newscripts/GGfx');
require('./assets/newscripts/GameData');
require('./assets/newscripts/Level/HomeSettign');
require('./assets/newscripts/Level/Level');
require('./assets/newscripts/Level/LvBnt');
require('./assets/newscripts/Level/LvMgr');
require('./assets/newscripts/Level/LvTarget');
require('./assets/newscripts/Level/Shop');
require('./assets/newscripts/Level/Tree');
require('./assets/newscripts/Level/sprManager');
require('./assets/newscripts/Level/tip');
require('./assets/newscripts/Loading/Begin');
require('./assets/newscripts/Loding');
require('./assets/newscripts/Main/Animal');
require('./assets/newscripts/Main/AnimalManager');
require('./assets/newscripts/Main/CubeManager');
require('./assets/newscripts/Main/End');
require('./assets/newscripts/Main/Label');
require('./assets/newscripts/Main/LabelMgr');
require('./assets/newscripts/Main/Manager');
require('./assets/newscripts/Main/Scuess');
require('./assets/newscripts/Main/Touch');
require('./assets/newscripts/Main/UI');
require('./assets/newscripts/Main/cube');
require('./assets/newscripts/Main/effectMgr');
require('./assets/newscripts/Main/goldeff');
require('./assets/newscripts/Main/targetManager');
require('./assets/newscripts/Main/utils');
require('./assets/newscripts/Mains/AudioMgr');
require('./assets/newscripts/Mains/EndMove');
require('./assets/newscripts/Mains/QQ');
require('./assets/newscripts/Mains/clearmusic');
require('./assets/newscripts/Mains/ice');
require('./assets/newscripts/Mains/iceMgr');
require('./assets/newscripts/Mains/propManager');
require('./assets/newscripts/Mains/select');
require('./assets/newscripts/UIHelp');
require('./assets/newscripts/item_rank');
require('./assets/newscripts/lvdata');
require('./assets/newscripts/network/Http');
require('./assets/newscripts/network/Network');
require('./assets/newscripts/rankLayer');
require('./assets/newscripts/tipsitem');

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