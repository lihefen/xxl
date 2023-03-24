var com=require('./Advert');
cc.Class({
    extends: cc.Component,

    properties: {
        fxtip:cc.Node,
    },
    onLoad () {
       
        this.FXListen();
        this.fxtip.active=false;
        this.fxtip.zIndex=99;
    },

    start () {

    },

    update (dt) {
        if(comeInfo.timer<3000){
            this.fxtip.active=true;
            comeInfo.timer=6000;
            comeInfo.is_share=false;
        }
    },
    //分享监听
    FXListen(){
        if(cc.sys.platform==cc.sys.WECHAT_GAME){
            wx.onShow(function(){
                if(comeInfo.is_share){
                  if(this.oldtime){
                     this.newtime=Date.now();
                     comeInfo.timer=this.newtime-this.oldtime;
                    //this.SHow();
                    console.log("展示界面:"+comeInfo.timer);
                 }
                }
            }.bind(this));
            wx.onHide(function(){
                if(comeInfo.is_share){
                     this.oldtime=Date.now();
                }
                console.log("收回界面");
            }.bind(this));
        }
    },
    //关闭面板
    close(){
        this.fxtip.active=false;
    },
    //重新分享
    shareAgain(){
        this.fxtip.active=false;
        com.WxShare();
    }
});
