const { debug } = require('console');
const { UIHelp } = require('../UIHelp');
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.animal = null;
    },

    start() {
        this.node.on(
            cc.Node.EventType.TOUCH_START,
            function (event) {
                console.log('TOUCH_START');
                this.pos = event.getLocation();
                console.log(this.pos, 'this.pos');
                this.pos = this.node.convertToNodeSpace(this.pos);
                this.pos = this.selectPos(this.pos);

                console.log(this.pos, 'this.pos');
                let animal = cc.ZL.animMgr.animalArray[this.pos.y][this.pos.x];
                if (gamedata.is_prop == 0) {
                    //普通操作
                    this.pos1 = event.getLocation();
                    cc.ZL.musicMgr.MyplayMusic(0, false); //播放点击音效
                    cc.ZL.animMgr.selectFirstAnimal(this.pos);
                } else if (gamedata.is_prop == 1) {
                    //1小木槌
                    this.DaoJuChui(animal);
                    // animal.clear();
                    // cc.ZL.PropMgr.propFinished(1);
                    // cc.ZL.animMgr.NewFilled();
                } else if (gamedata.is_prop == 2) {
                    //2爆弹
                    animal.clearType = 3;
                    animal.clear();
                    setTimeout(function () {
                        cc.ZL.animMgr.NewFilled();
                    }, comeInfo.animalClearTime * 1000);
                    cc.ZL.PropMgr.propFinished(2);
                } else if (gamedata.is_prop == 3) {
                    //3交换位置
                    cc.ZL.animMgr.proChangePos(animal);
                } else if (gamedata.is_prop == 4) {
                    //4横向
                    cc.ZL.animMgr.mask.active = true;
                    animal.clearType = 1;
                    animal.clear();
                    setTimeout(function () {
                        cc.ZL.animMgr.NewFilled();
                    }, comeInfo.animalClearTime * 1000);
                    cc.ZL.PropMgr.propFinished(4);
                } else if (gamedata.is_prop == 5) {
                    //5纵向
                    cc.ZL.animMgr.mask.active = true;
                    animal.clearType = 2;
                    animal.clear();
                    setTimeout(function () {
                        cc.ZL.animMgr.NewFilled();
                    }, comeInfo.animalClearTime * 1000);
                    cc.ZL.PropMgr.propFinished(5);
                }
            }.bind(this)
        );
        this.node.on(
            cc.Node.EventType.TOUCH_END,
            function (event) {
                console.log('TOUCH_END');
                console.log(gamedata);
                if (gamedata.is_prop != 0) {
                    //使用道具
                    return;
                }
                this.pos2 = event.getLocation();
                console.log(this.pos1, 'this.po1');
                console.log(this.pos2, 'this.pos2');
                if (this.pos1 == undefined || this.pos1 == null) {
                    console.log('无法获取目标');
                    return;
                }
                console.log(this.pos1.x, '无法获取目标');
                let x_dis = this.pos2.x - this.pos1.x;
                let y_dis = this.pos2.y - this.pos1.y;
                if (Math.abs(x_dis) > Math.abs(y_dis)) {
                    if (x_dis > 5) {
                        //向右移动
                        if (this.columnNum >= 8) {
                            //范围限制
                            return;
                        }
                        let Rnode = cc.v2(this.pos.x + 1, this.pos.y);
                        cc.ZL.animMgr.selectFirstAnimal(Rnode);
                    } else if (x_dis < -5) {
                        //向左移动
                        if (this.columnNum <= 0) {
                            //范围限制
                            return;
                        }
                        var Lnode = cc.v2(this.pos.x - 1, this.pos.y);
                        cc.ZL.animMgr.selectFirstAnimal(Lnode);
                    }
                } else {
                    //纵向移动
                    if (y_dis > 5) {
                        //向上
                        if (this.rowNum <= 0) {
                            return;
                        }
                        var UPnode = cc.v2(this.pos.x, this.pos.y - 1);
                        cc.ZL.animMgr.selectFirstAnimal(UPnode);
                    } else if (y_dis < -5) {
                        if (this.rowNum >= 8) {
                            return;
                        }
                        var Dnode = cc.v2(this.pos.x, this.pos.y + 1);
                        cc.ZL.animMgr.selectFirstAnimal(Dnode);
                    }
                }
                this.pos1 = null;
                this.pos2 = null;
            }.bind(this)
        );
        this.node.on(
            cc.Node.EventType.TOUCH_CANCEL,
            function (event) {
                console.log('TOUCH_CANCEL');
                if (gamedata.is_prop != 0) {
                    //使用道具
                    return;
                }
                this.pos2 = event.getLocation();
                if (this.pos1 == undefined || this.pos1 == null) {
                    console.log('无法获取目标');
                    return;
                }
                let x_dis = this.pos2.x - this.pos1.x;
                let y_dis = this.pos2.y - this.pos1.y;
                if (Math.abs(x_dis) > Math.abs(y_dis)) {
                    if (x_dis > 5) {
                        //向右移动
                        if (this.columnNum >= 8) {
                            //范围限制
                            return;
                        }
                        let Rnode = cc.v2(this.pos.x + 1, this.pos.y);
                        cc.ZL.animMgr.selectFirstAnimal(Rnode);
                    } else if (x_dis < -5) {
                        //向左移动
                        if (this.columnNum <= 0) {
                            //范围限制
                            return;
                        }
                        var Lnode = cc.v2(this.pos.x - 1, this.pos.y);
                        cc.ZL.animMgr.selectFirstAnimal(Lnode);
                    }
                } else {
                    //纵向移动
                    if (y_dis > 5) {
                        //向上
                        if (this.rowNum <= 0) {
                            return;
                        }
                        var UPnode = cc.v2(this.pos.x, this.pos.y - 1);
                        cc.ZL.animMgr.selectFirstAnimal(UPnode);
                    } else if (y_dis < -5) {
                        if (this.rowNum >= 8) {
                            return;
                        }
                        var Dnode = cc.v2(this.pos.x, this.pos.y + 1);
                        cc.ZL.animMgr.selectFirstAnimal(Dnode);
                    }
                }
                this.pos1 = null;
                this.pos2 = null;
            }.bind(this)
        );
    },

    // update (dt) {},
    //将点击的像素点转变为对应的格子
    selectPos(pos) {
        if (pos.x < 0 || pos.x >= 720 || pos.y < 0 || pos.y >= 720) {
            return false;
        }
        var x = Math.floor(pos.x / 80);
        var y = 8 - Math.floor(pos.y / 80);
        return cc.v2(x, y);
    },

    DaoJuChui(data) {
        this.animal = data;
        try {
            this.animal.clear();
            let preas = {
                rid: gamedata.rid,
                token: gamedata.token,
                gid: 10001,
                num: 1,
            };
            // TODO:先注释掉
            // UIHelp.network.httpConnect_post_async('game/xiaoxiaole/consumeProp', preas, this.onMuChuiCallBack.bind(this));
            this.onMuChuiCallBack({
                code: '200',
                message: '成功',
            });
        } catch (error) {
            utils.addTips('不可消除');
        }

        // animal.clear();
        // cc.ZL.PropMgr.propFinished(1);
        // cc.ZL.animMgr.NewFilled();
    },

    // 锤子执行
    onMuChuiCallBack(msg) {
        console.log('onMuChuiCallBack===>', msg);
        if (msg.code == 200) {
            // this.animal.clear();
            cc.ZL.PropMgr.propFinished(1);
            cc.ZL.animMgr.NewFilled();
        } else {
            utils.addTips(msg.message);
        }
    },
});
