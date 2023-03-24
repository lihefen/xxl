module.exports = {
    shares:
            [
            "给你几张图，你能猜到我的意思吗？",
            "智商150的人才能玩的懂的游戏，你要来挑战自己吗？",
            "百因必有果，你的报应就是找我",
            "最解压的游戏，还不来放松一下？",
            "好友@你并且送了你神秘礼物，点击查看！",
            ],
    ids:[
            "IJ8K-FU4Q7GAB5PSmSSp7w",
            "VxCAcv-kQKm7XBJAhYV_Pw",
        ],
    urls:[
            "https://mmocgame.qpic.cn/wechatgame/2hicsK0eD9ib3RibqpPs4hoPLnNlCdmlPiaq4bn0IJLwQaKVkYNCNFBDSGVz2zvx5HyT/0",
            "https://mmocgame.qpic.cn/wechatgame/5VJ9SqQdMn4cPK8EV69iaxjCGHeYz9ne2gMgx4pm8BPtfGr3YXozyB4GcjXMSV5HI/0",
        ],
    
    //微信分享
        wechatShare() {
            if (CC_WECHATGAME) {
                let idx = Math.floor(Math.random() * this.shares.length);//向下取整
                let str = this.shares[idx];
                wx.shareAppMessage({
                    title: str,
                    imageUrl: wxDownloader.REMOTE_SERVER_ROOT + cc.url.raw('resources/1.png'),
                    success(res) {
                        console.log("成功");
                    },
                    fail(res) {
                        console.log("失败");
                    }
                });
            }
            console.log("分享成功");
        },
    //微信群分享
        wechatGroupShare() {
            var self = this;
            return new Promise((resolve, reject) => {
                if (CC_WECHATGAME) {
                    let flag = false;
                    let idx = Math.floor(Math.random() * self.shares.length);//向下取整
                    let str = self.shares[idx];  
                    wx.shareAppMessage({
                        title: str,
                        imageUrl:canvas.toTempFilePathSync({
                            destWidth: 500,
                            destHeight: 400}),
                        success(res) {
                            if (res.shareTickets != undefined && res.shareTickets.length > 0) {
                                resolve();
                            }
                            
                            console.log("成功");
                        },
                        fail(e) {
                            reject();
                              
                            console.log("失败");
                        },
                        complete() {
                            flag = true;
                        }
                    });
                     
                    if (self.isHightVersion) {
                        setTimeout(function () {
                            if (!flag) {
                                resolve();
                            }
                        }, 2300);
                    }
                } else {
                    resolve();
                }
            })
        },
        WxShare(){
            comeInfo.is_share=true;
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