window.__require=function t(e,o,i){function n(s,c){if(!o[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var p="function"==typeof __require&&__require;if(!c&&p)return p(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var l=o[s]={exports:{}};e[s][0].call(l.exports,function(t){return n(e[s][1][t]||t)},l,l.exports,t,e,o,i)}return o[s].exports}for(var r="function"==typeof __require&&__require,s=0;s<i.length;s++)n(i[s]);return n}({EventMng:[function(t,e,o){"use strict";cc._RF.push(e,"c220aC1OV5GsI8IInbzGsCv","EventMng"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=new cc.EventTarget,cc._RF.pop()},{}],HallScene:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","HallScene");var i=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),n=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./EventMng"),s=cc._decorator,c=s.ccclass,a=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.Layout=null,e.mask=null,e.target_mask=null,e.item=null,e.target_item=null,e.bushu_input=null,e.xingzhi_input=null,e.guanka=null,e.lab_alert=null,e.targetSprList=[],e.targetLabList=[],e.spr_list=[],e.lcespr_list=[],e.animspr_list=[],e.eff_list=[],e.Anim=null,e.ice=null,e.eff=null,e.targetNode=null,e.targetList=[[0,0],[0,0],[0,0],[0,0]],e}var o;return i(e,t),o=e,Object.defineProperty(e,"Instance",{get:function(){return o._instance},enumerable:!0,configurable:!0}),e.prototype.onLoad=function(){o._instance=this,this.onStartItem(),this.onInitList(),r.default.on("START",this.onClick_start,this),r.default.on("CHOICEANIM",this.onClick_choiceanim,this),r.default.on("CHOICEICE",this.onClick_choiceice,this),r.default.on("CHOICEEFF",this.onClick_choiceeff,this),r.default.on("TERGET",this.onClick_target,this)},e.prototype.onClick_target=function(t){var e=t.id,o=t.list;if(this.target_mask.active=!1,0==o[0]&&0==o[1])return this.targetNode.getChildByName("spr").getComponent(cc.Sprite).spriteFrame=null,this.targetNode.getChildByName("lab").getComponent(cc.Label).string="",void(this.targetList[e]=[0,0]);var i=this.onSelect_target_spr(o[0]);this.targetNode.getChildByName("spr").getComponent(cc.Sprite).spriteFrame=i,this.targetNode.getChildByName("lab").getComponent(cc.Label).string=o[1],this.targetList[e]=o},e.prototype.onSelect_target_spr=function(t){switch(t){case 1:return this.spr_list[0];case 2:return this.spr_list[1];case 3:return this.spr_list[2];case 4:return this.spr_list[3];case 5:return this.spr_list[4];case 11:return this.lcespr_list[0];case 12:return this.lcespr_list[1];case 7:return this.spr_list[6]}},e.prototype.onClick_targetNode=function(t,e){this.targetNode=t.target,this.target_mask.active=!0;var o=cc.instantiate(this.target_item);o.getComponent("mubiaoLayer").onStartInfo(e),o.x=t.target.x,o.y=t.target.y-t.target.height/2,o.parent=this.node},e.prototype.onCloseTarget_mask=function(){this.target_mask.active=!1,r.default.emit("CLOSETARGET")},e.prototype.onInitList=function(){this.Anim=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],this.ice=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],this.eff=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]},e.prototype.onClick_clean=function(){this.onInitList(),r.default.emit("CLEAN")},e.prototype.onClick_close=function(){this.Anim=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],this.ice=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],this.eff=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],r.default.emit("CLOSE")},e.prototype.onClick_choiceeff=function(t){var e=t.pos;this.eff[e.h][e.l]=Number(t.type)},e.prototype.onClick_choiceice=function(t){var e=t.pos;this.ice[e.h][e.l]=Number(t.type)},e.prototype.onClick_choiceanim=function(t){var e=t.pos;this.Anim[e.h][e.l]=Number(t.type)},e.prototype.onClick_start=function(){this.mask.active=!0},e.prototype.onCloseMask=function(){this.mask.active=!1,r.default.emit("END")},e.prototype.onLogList=function(){console.log(this.Anim),console.log(this.onSelectDown())},e.prototype.onInitTargetList=function(){this.targetList=[[0,0],[0,0],[0,0],[0,0]];for(var t=0;t<this.targetSprList.length;t++)this.targetSprList[t].spriteFrame=null;for(var e=0;e<this.targetLabList.length;e++)this.targetLabList[e].string=""},e.prototype.onSpliceTargetList=function(){for(var t=this.targetList,e=[],o=0;o<t.length;o++)0!=t[o][0]&&0!=t[o][1]&&e.push(t[o]);return e},e.prototype.onSelectDown=function(){for(var t=[],e=-1,o=0;o<this.Anim.length;o++)for(var i=0;i<this.Anim[o].length;i++)this.Anim[o][i]>0&&(-1==e&&(e=o),o==e&&t.push([o,i]));return t},e.prototype.onStartItem=function(){for(var t=0,e=0,o=0;o<81;o++){9==e&&(t++,e=0);var i=cc.instantiate(this.item);i.getComponent("item_kuai").onStartInfo(o+1,{h:t,l:e}),i.parent=this.Layout,e++}this.Layout.removeComponent(cc.Layout)},e.prototype.editbox_ended=function(t){var e,o=t.string;if(""!=o&&null!=o&&!/^[1-9]+[0-9]*]*$/.test(o)){e=-1!=o.indexOf(".")?o.replace(".",""):o;for(var i=0;i<e.length;i++)0==e[i]&&i<e.length-1&&0!=e[i+1]&&(e=e.slice(i+1,e.length));t.string=e}},e.prototype.onSelectAnim=function(){for(var t=0;t<this.Anim.length;t++)for(var e=0;e<this.Anim[t].length;e++)if(0!=this.Anim[t][e])return this.Anim;return!1},e.prototype.onGenerate_txt=function(){var t=this.onSelectDown(),e=this.bushu_input.string,o=this.xingzhi_input.string,i=this.onSpliceTargetList(),n=this.onSelectAnim(),r=this.guanka.string;if(t==[]||0==t.length)return this.onAlertShow("\u4ea7\u751f\u5730\u4fe1\u606f\u9519\u8bef"),console.log(t);if(""==e||null==e)return this.onAlertShow("\u9650\u5236\u6b65\u6570\u4fe1\u606f\u9519\u8bef"),console.log(e);if(""==o||null==o)return this.onAlertShow("\u4e00\u661f\u503c\u4fe1\u606f\u9519\u8bef"),console.log(o);if(i==[]||0==i.length)return this.onAlertShow("\u76ee\u6807\u4fe1\u606f\u9519\u8bef"),console.log(i);if(0==n)return this.onAlertShow("\u602a\u7269\u914d\u7f6e\u4fe1\u606f\u9519\u8bef"),console.log(n);if(""==r||null==r)return this.onAlertShow("\u5173\u5361\u4fe1\u606f\u914d\u7f6e\u9519\u8bef"),console.log(r);var s={Anim:n,ice:this.ice,eff:this.eff,creat:t,step:Number(e),one_star:Number(o),target:i};this.saveForBrowser(JSON.stringify(s),this.guanka.string+".txt")},e.prototype.saveForBrowser=function(t,e){if(cc.sys.isBrowser){var o=new Blob([t],{type:"application/json"}),i=document.createElement("a");i.download=e,i.innerHTML="Download File",null!=window.webkitURL?i.href=window.webkitURL.createObjectURL(o):(i.href=window.URL.createObjectURL(o),i.onclick=destroyClickedElement,i.style.display="none",document.body.appendChild(i)),i.click()}},e.prototype.onAlertShow=function(t){this.lab_alert.string=t,this.lab_alert.node.active=!0},e.prototype.start=function(){},e._instance=null,n([a(cc.Node)],e.prototype,"Layout",void 0),n([a(cc.Node)],e.prototype,"mask",void 0),n([a(cc.Node)],e.prototype,"target_mask",void 0),n([a(cc.Prefab)],e.prototype,"item",void 0),n([a(cc.Prefab)],e.prototype,"target_item",void 0),n([a(cc.EditBox)],e.prototype,"bushu_input",void 0),n([a(cc.EditBox)],e.prototype,"xingzhi_input",void 0),n([a(cc.EditBox)],e.prototype,"guanka",void 0),n([a(cc.Label)],e.prototype,"lab_alert",void 0),n([a([cc.Sprite])],e.prototype,"targetSprList",void 0),n([a([cc.Label])],e.prototype,"targetLabList",void 0),n([a([cc.SpriteFrame])],e.prototype,"spr_list",void 0),n([a([cc.SpriteFrame])],e.prototype,"lcespr_list",void 0),n([a([cc.SpriteFrame])],e.prototype,"animspr_list",void 0),n([a([cc.SpriteFrame])],e.prototype,"eff_list",void 0),e=o=n([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./EventMng":"EventMng"}],item_kuai:[function(t,e,o){"use strict";cc._RF.push(e,"f5940DgyK5ByJhAc/nlgL0c","item_kuai");var i=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),n=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./EventMng"),s=t("./HallScene"),c=cc._decorator,a=c.ccclass,p=c.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.node_select=null,e.spr=null,e.x_spr=null,e.bing=null,e.bind_double=null,e.spr_heng=null,e.spr_shu=null,e.spr_guang=null,e.spr_mao=null,e.scroll2=null,e.scroll3=null,e.id=0,e.pos=null,e}return i(e,t),e.prototype.onStartInfo=function(t,e){this.id=t,this.pos=e},e.prototype.onLoad=function(){this.node_select.active=!1,r.default.on("START",this.onClick_start,this),r.default.on("END",this.onClick_end,this),r.default.on("CLEAN",this.onCleanData,this),r.default.on("CLOSE",this.onCloseData,this)},e.prototype.onCloseData=function(){this.spr.spriteFrame=this.x_spr,this.onCloseNode()},e.prototype.onCloseNode=function(){this.spr_heng.active=!1,this.spr_shu.active=!1,this.spr_guang.active=!1,this.spr_mao.active=!1,this.bind_double.active=!1,this.bing.active=!1},e.prototype.onCleanData=function(){this.spr.spriteFrame=null,this.onCloseNode()},e.prototype.onClick_start=function(t){if(t==this.id)return this.id>=63&&this.id<=81?this.node_select.y=160:this.node_select.y=-52,void(this.node_select.active=!0);this.node.active=!1},e.prototype.onClick_Anim=function(t,e){r.default.emit("CHOICEANIM",{pos:this.pos,type:e}),this.spr.node.angle=0,this.spr.spriteFrame=s.default._instance.spr_list[Number(e-1)],this.scroll2.active=!0,this.scroll3.active=!0},e.prototype.onClick_ice=function(t,e){r.default.emit("CHOICEICE",{pos:this.pos,type:e}),this.spr.node.angle=0,"1"==e?(this.bing.active=!0,this.bind_double.active=!1):"2"==e?(this.bind_double.active=!0,this.bing.active=!1):"0"==e&&(this.bind_double.active=!1,this.bing.active=!1)},e.prototype.onClick_eff=function(t,e){switch(r.default.emit("CHOICEEFF",{pos:this.pos,type:e}),e){case"0":this.spr_heng.active=!1,this.spr_shu.active=!1,this.spr_guang.active=!1,this.spr_mao.active=!1;break;case"1":this.spr_heng.active=!1,this.spr_shu.active=!0,this.spr_guang.active=!1,this.spr_mao.active=!1;break;case"2":this.spr_heng.active=!0,this.spr_shu.active=!1,this.spr_guang.active=!1,this.spr_mao.active=!1;break;case"3":this.spr_heng.active=!1,this.spr_shu.active=!1,this.spr_guang.active=!0,this.spr_mao.active=!1;break;case"4":this.spr_heng.active=!1,this.spr_shu.active=!1,this.spr_guang.active=!1,this.spr_mao.active=!0}},e.prototype.onClick_konggezi=function(){r.default.emit("CHOICEANIM",{pos:this.pos,type:0}),this.spr.spriteFrame=null,this.onCloseNode()},e.prototype.onClick_deletegezi=function(){r.default.emit("CHOICEANIM",{pos:this.pos,type:-1}),this.spr.spriteFrame=this.x_spr,this.onCloseNode()},e.prototype.onClick_end=function(){this.node_select.active=!1,this.scroll2.active=!1,this.scroll3.active=!1,this.node.active=!0},e.prototype.onClick_item=function(){console.log("====>",this.pos),r.default.emit("START",this.id)},e.prototype.start=function(){},e.prototype.onDestroy=function(){r.default.off("START",this.onClick_start,this),r.default.off("END",this.onClick_end,this),r.default.off("CLEAN",this.onCleanData,this)},n([p(cc.Node)],e.prototype,"node_select",void 0),n([p(cc.Sprite)],e.prototype,"spr",void 0),n([p(cc.SpriteFrame)],e.prototype,"x_spr",void 0),n([p(cc.Node)],e.prototype,"bing",void 0),n([p(cc.Node)],e.prototype,"bind_double",void 0),n([p(cc.Node)],e.prototype,"spr_heng",void 0),n([p(cc.Node)],e.prototype,"spr_shu",void 0),n([p(cc.Node)],e.prototype,"spr_guang",void 0),n([p(cc.Node)],e.prototype,"spr_mao",void 0),n([p(cc.Node)],e.prototype,"scroll2",void 0),n([p(cc.Node)],e.prototype,"scroll3",void 0),e=n([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{"./EventMng":"EventMng","./HallScene":"HallScene"}],mubiaoLayer:[function(t,e,o){"use strict";cc._RF.push(e,"4afcd1KHTNB6Jl41Sn5a/fb","mubiaoLayer");var i=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}(),n=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,i);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(s=(r<3?n(s):r>3?n(e,o,s):n(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./EventMng"),s=cc._decorator,c=s.ccclass,a=s.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.num_node=null,e.list=[0,0],e.id=0,e}return i(e,t),e.prototype.onLoad=function(){r.default.on("CLOSETARGET",this.onDestroyNode,this)},e.prototype.onStartInfo=function(t){this.id=t},e.prototype.onClick_item=function(t,e){this.list[0]=Number(e),this.num_node.active=!0},e.prototype.onClick_num=function(t,e){this.list[1]=Number(e),0==this.list[0]&&(this.list=[0,0]),r.default.emit("TERGET",{id:this.id,list:this.list}),this.node.destroy()},e.prototype.onClick_null=function(){r.default.emit("TERGET",{id:this.id,list:[0,0]}),this.node.destroy()},e.prototype.onDestroyNode=function(){this.node.destroy()},e.prototype.onDestroy=function(){r.default.off("CLOSETARGET",this.onDestroyNode,this)},e.prototype.start=function(){},n([a(cc.Node)],e.prototype,"num_node",void 0),e=n([c],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./EventMng":"EventMng"}]},{},["EventMng","HallScene","item_kuai","mubiaoLayer"]);