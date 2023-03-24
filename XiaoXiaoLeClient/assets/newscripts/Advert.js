window.Advert={
    VideoUrl:"adunit-a357bf07ab218042",
    Video:null,    
    VideoNum:0,  //1加体力  2 加精力
    handlers:{},
    //创建视频广告
    InitVideoAdvert(){
        if(cc.sys.platform!=cc.sys.WECHAT_GAME){
            return;
        }
        var self=this;
        if(self.Video==null){
            self.Video=wx.createRewardedVideoAd({
                adUnitId: self.VideoUrl
            });
            self.Video.onError(err => {
                console.log("video play err："+err)
            });
            self.Video.onClose(function(res){
                if (res && res.isEnded || res === undefined) {
                    //正常播放结束，可以下发游戏奖励
                    if(self.handlers[self.VideoNum]!=null){
                        self.handlers[self.VideoNum]();
                    }
                    
                }
                else {
                    // 播放中途退出，不下发游戏奖励
                    console.log("see no all Video time ");
                }
            });
        }
    },
    //播放广告
    VideoPlay(videonum,fn){
        if(this.Video!=null){
            this.addHandlers(videonum,fn);
            this.VideoNum=videonum;
            this.Video.show();
        }
    },
    addHandlers(event,fn){
        this.handlers[event]=fn;
    },
    //bananer广告地址
    BananerUrl:"adunit-b23f524044082380",
    bannerAd:null,
    //创建bananer广告
    InitBananerAdvert(){
        if(cc.sys.platform!=cc.sys.WECHAT_GAME){
            return;
        }
        var Mwidth;//获取屏幕宽度
        var Mheight;//获取屏幕高度
        let winSize = wx.getSystemInfoSync({
            success(res) {
                Mwidth = res.windowWidth;
                Mheight = res.windowHeight;
            }
        });
        var targetBannerAdWidth = Math.min(Mwidth,300);//最大宽度300
        // 创建 Banner 广告实例，提前初始化
        this.bannerAd = wx.createBannerAd({
            adUnitId: 'adunit-b23f524044082380',
            style: {
                left: 0,
                top:650,
                width:parseInt(targetBannerAdWidth),
            }
        })
        let self=this;
        // 在banner广告首次显示的时候会触发
        this.bannerAd.onResize(size => {
            console.log("onResize", Mwidth - size.width, Mheight - size.height);
            // 如果一开始设置的 banner 宽度超过了系统限制，可以在此处加以调整
            self.bannerAd.style.left = (Mwidth - size.width)/2;
            self.bannerAd.style.top = Mheight - size.height;
            //这行是为了在QQ小游戏中能正确显示位置.如果是微信则不需要这句
            // setTimeout(function () {
            //     slef.bannerAd.style.left = (windowWidth - size.width)/2;
            //     self.bannerAd.style.top = windowHeight - size.height;
            // }, 0.5);
        });
        this.bannerAd.onLoad(() => {
            console.log('banner广告加载成功!!!!');
        })
        this.bannerAd.onError((errMsg, errCode) => {
            console.log('banner广告加载失败!!!!', errMsg, errCode);
        })

        // 在适合的场景显示 Banner 广告
        //this.bannerAd.show()
    },
    //-------分享--------------------------------------------------------------------------
    shares://分享语
    [
    "给你几张图，你能猜到我的意思吗？",
    "智商150的人才能玩的懂的游戏，你要来挑战自己吗？",
    "百因必有果，你的报应就是找我",
    "最解压的游戏，还不来放松一下？",
    "好友@你并且送了你神秘礼物，点击查看！",
    ],
    ids:[//分享图片id
    "IJ8K-FU4Q7GAB5PSmSSp7w",
    "VxCAcv-kQKm7XBJAhYV_Pw",
    ],
    urls:[//分享图片地址
    "https://mmocgame.qpic.cn/wechatgame/2hicsK0eD9ib3RibqpPs4hoPLnNlCdmlPiaq4bn0IJLwQaKVkYNCNFBDSGVz2zvx5HyT/0",
    "https://mmocgame.qpic.cn/wechatgame/5VJ9SqQdMn4cPK8EV69iaxjCGHeYz9ne2gMgx4pm8BPtfGr3YXozyB4GcjXMSV5HI/0",
    ],
    WxShare(){
        //comeInfo.is_share=true;
        if(CC_WECHATGAME){
            let idx1 = Math.floor(Math.random()*5);//向下取整
            let str = this.shares[idx1];
            let idx = Math.floor(Math.random()*2);//向下取整
            var id = this.ids[idx]; // 通过 MP 系统审核的图片编号
            var url = this.urls[idx]; // 通过 MP 系统审核的图片地址
            wx.shareAppMessage({
                title:str,
                imageUrlId:id,
                imageUrl: url,
                success(res) {
                    console.log("成功");
                },
                fail(res) {
                    console.log("失败");
                }
            });
        }
    }
}