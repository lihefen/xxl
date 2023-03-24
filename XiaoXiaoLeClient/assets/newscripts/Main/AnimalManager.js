cc.Class({
    extends: cc.Component,

    properties: {
        animPrefab: cc.Prefab,
        //动物容器
        animalPanel: cc.Node,
        //动物数组
        animalArray: null,
        //选中logo
        selectLogo: cc.Node,
        _firstNode: null,
        _sectedNode: null,
        //道具第一次，第二次
        prop_one: null,
        prop_two: null,
        mask: cc.Node,
        maskNode: cc.Node,
        //限制只填充完成一次
        is_Finised: false, //消除时变为false
        //连续消除次数
        clearnum: 0,

        //提示无动物可消除
        NoAnimNode: cc.Node,
    },

    onLoad() {
        cc.ZL.animMgr = this;
        //创建动物缓冲池
        this.animalPool = new cc.NodePool();
        // this.info=lvdata["Lv"+comeInfo.now_lv];//获取到这一关的信息
        this.info = lvdata; //获取到这一关的信息
        this.NoAnimNode.active = false;
    },

    onOpenMask() {
        this.maskNode.active = true;
    },
    onCloseMask() {
        this.maskNode.active = false;
    },

    start() {
        this.IsNoMatch();
    },
    //实例化动物
    InitAnimal() {
        this.animalArray = new Array();
        for (let row = 0; row < this.info.Anim.length; row++) {
            let rowArray = new Array();
            for (let column = 0; column < this.info.Anim[row].length; column++) {
                //查看是否有动物
                // if(lvdata["Lv"+comeInfo.now_lv].Anim[row][column]==0){
                //     rowArray.push(-1);
                // }else if(lvdata["Lv"+comeInfo.now_lv].Anim[row][column]==-1){
                //     rowArray.push(0);
                // }
                if (lvdata.Anim[row][column] == 0) {
                    rowArray.push(-1);
                } else if (lvdata.Anim[row][column] == -1) {
                    rowArray.push(0);
                } else {
                    let a = cc.instantiate(this.animPrefab);
                    this.animalPanel.addChild(a);
                    a.getComponent('Animal').initAnimal(column, row, this);
                    rowArray.push(a.getComponent('Animal'));
                }
            }
            this.animalArray.push(rowArray);
        }
        this.SetEff();
    },
    // update (dt) {},
    //-----------填充------------------------------------
    //填充方式
    NewFilled() {
        // console.log(this.info.Anim, 'this.info.Anim');
        //遍历格子中有的动物

        // 优化前代码
        // for (let i = this.info.Anim.length - 2; i >= 0; i--) {
        //     for (let j = 0; j < this.info.Anim[i].length; j++) {
        //         let anim = this.animalArray[i][j];
        //         if (anim == 0 || anim == -1) {
        //             continue;
        //         }
        //         if (anim.can_move) {
        //             this.searchPos(anim);
        //         }
        //     }
        // }

        // chatgpt优化后代码
        for (let i = this.info.Anim.length - 2; i >= 0; i--) {
            let animRow = this.animalArray[i];
            for (let j = 0, len = animRow.length; j < len; j++) {
                let anim = animRow[j];
                if (anim && anim.can_move) {
                    this.searchPos(anim);
                }
            }
        }

        // for (let i = this.info.Anim.length - 2; i >= 0; i--) {
        //     //从倒数第二排查找
        //     for (let j = 0; j < this.info.Anim[i].length; j++) {
        //         let anim = this.animalArray[i][j]; //得到这个动物
        //         if (anim == 0 || anim == -1) {
        //             console.log('空格子或者未启用的格子');
        //             //空格子或者未启用的格子
        //             continue;
        //         }
        //         //查看他是否可以下移
        //         if (anim.can_move) {
        //             //就寻找他能移动到哪里
        //             console.log('就寻找他能移动到哪里');
        //             this.searchPos(anim);
        //         }
        //     }
        // }
        this.creatNew();
    },
    //TODO: 下面是通过chatgpt优化后的代码
    // creatNew() {
    //     let x, y;
    //     let isFilled = true;
    //     for (let i = 0; i < this.info.creat.length; i++) {
    //         x = this.info.creat[i][1];
    //         y = this.info.creat[i][0];
    //         if (this.animalArray[y * this.info.cols + x] == 0) {
    //             let a = cc.instantiate(this.animPrefab);
    //             this.animalPanel.addChild(a);
    //             a.getComponent('Animal').initAnimal(x, y - 1, this);
    //             a.getComponent('Animal').AnimMove(x, y);
    //             this.animalArray[y * this.info.cols + x] = a.getComponent('Animal');
    //             this.searchPos(this.animalArray[y * this.info.cols + x]);
    //             isFilled = false;
    //         }
    //     }
    //     if (isFilled) {
    //         if (cc.ZL.targetMgr.IsScuessed) {
    //             return;
    //         }
    //         this.FillOver();
    //     } else {
    //         requestAnimationFrame(() => {
    //             this.creatNew();
    //         });
    //     }
    // },
    // TODO:下面是优化前的代码
    // creatNew() {
    //     //如果自主产生动物的格子为空就产生动物
    //     let x, y;
    //     let isFiled = true;
    //     for (let i = 0; i < this.info.creat.length; i++) {
    //         console.log(this.info.creat.length, 'this.info.creat.length');
    //         x = this.info.creat[i][1];
    //         y = this.info.creat[i][0];
    //         if (this.animalArray[y][x] == 0) {
    //             let a = cc.instantiate(this.animPrefab);
    //             this.animalPanel.addChild(a);
    //             a.getComponent('Animal').initAnimal(x, y - 1, this);
    //             a.getComponent('Animal').AnimMove(x, y);
    //             this.animalArray[y][x] = a.getComponent('Animal');
    //             this.searchPos(this.animalArray[y][x]);
    //             isFiled = false;
    //         }
    //     }
    //     setTimeout(
    //         function () {
    //             if (isFiled) {
    //                 //填充完成
    //                 if (cc.ZL.targetMgr.IsScuessed) {
    //                     return;
    //                 }
    //                 this.FillOver();
    //                 return;
    //             }
    //             this.creatNew();
    //         }.bind(this),
    //         comeInfo.animalMoveTime * 1000
    //     );
    // },

    creatNew() {
        //如果自主产生动物的格子为空就产生动物
        let x, y;
        let isFiled = true;
        for (let i = 0; i < this.info.creat.length; i++) {
            console.log(this.info.creat.length, 'this.info.creat.length');
            x = this.info.creat[i][1];
            y = this.info.creat[i][0];
            if (this.animalArray[y][x] == 0) {
                console.log(this.animalArray[y][x], 'this.animalArray');
                let a = cc.instantiate(this.animPrefab);
                this.animalPanel.addChild(a);
                a.getComponent('Animal').initAnimal(x, y - 1, this);
                a.getComponent('Animal').AnimMove(x, y);
                this.animalArray[y][x] = a.getComponent('Animal');
                this.searchPos(this.animalArray[y][x]);
                isFiled = false;
            }
        }
        setTimeout(
            function () {
                console.log('测试setTimeout');
                if (isFiled) {
                    console.log('填充完成');
                    //填充完成
                    if (cc.ZL.targetMgr.IsScuessed) {
                        return;
                    }
                    this.FillOver();
                    return;
                }
                this.creatNew();
            }.bind(this),
            50
        );
    },

    //填充完成后的后续操作
    FillOver() {
        console.log('FillOver');
        let is_Matc = this.AllMatch();
        console.log(is_Matc, 'is_Matc');
        if (!is_Matc) {
            //无需要消除的
            this._firstNode = null;
            this._sectedNode = null;
            this.selectLogo.active = false;
            this.mask.active = false;
            cc.ZL.CM.InitView(this.clearnum); //设置音效
            this.clearnum = 0;
            if (cc.ZL.iceMgr.qqmoveNum > 0) {
                //需要球球移动
                cc.ZL.iceMgr.UPAllMove();
                setTimeout(
                    function () {
                        //判断是否胜利
                        let isEnd = cc.ZL.targetMgr.IsScuess();
                        if (isEnd == false) {
                            //如果没有结束就看看有没有可消除的动物
                            this.IsNoMatch();
                        }
                    }.bind(this),
                    comeInfo.qqmoveTime * 1500
                );
            } else {
                //判断是否胜利
                let isEnd = cc.ZL.targetMgr.IsScuess();
                if (isEnd == false) {
                    //如果没有结束就看看有没有可消除的动物
                    setTimeout(
                        function () {
                            this.IsNoMatch();
                        }.bind(this),
                        500
                    );
                }
            }
        } else {
            this.clearOverFiled();
        }
    },
    //填充以后全部匹配一下，看看有么有需要消除的地方
    AllMatch() {
        let isMatched = false;
        for (let row = 0; row < this.info.Anim.length; row++) {
            for (let column = 0; column < this.info.Anim[row].length; column++) {
                if (this.animalArray[row][column] != -1 && this.animalArray[row][column] != 0) {
                    let list = this.MatchOne(this.animalArray[row][column]);
                    if (list.length > 0) {
                        console.log('有能消除的东西', list);
                        this.RemoveAnimList(list);
                        isMatched = true;
                        return isMatched;
                    }
                }
            }
        }
        return isMatched;
    },
    //搜寻最终可移动到的地方
    searchPos(anim) {
        let self = this;
        let search = function (anim) {
            let i = anim.rowNum;
            let j = anim.columnNum;

            if (i > self.animalArray.length - 2) {
                //防止超越下方边界
                return false;
            }
            //查看下方是否是空物体
            if (self.animalArray[i + 1][j] == 0) {
                //如果是就下移
                self.animalArray[i][j].AddPos(j, i + 1);
                self.animalArray[i][j] = 0;
                return true;
            } else {
                //查看左右下方是否为空
                for (let dir = 1; dir >= -1; dir -= 2) {
                    let next_x = j + dir;
                    //防止超出数组边界
                    if (next_x < 0 && next_x > self.info.Anim[i].length) {
                        continue;
                    }
                    //获取动物数组中的位置
                    let next_animal = self.animalArray[i + 1][next_x];
                    if (next_animal == 0) {
                        ///如果是空格子
                        //上方不为空
                        if (self.animalArray[i][next_x] != 0) {
                            //如果上方无格子或者上方不能移动也可以填充
                            if (self.animalArray[i][next_x] == -1 || self.animalArray[i][next_x].can_move == false) {
                                self.animalArray[i][j].AddPos(next_x, i + 1);
                                self.animalArray[i][j] = 0;
                                return true;
                            }
                        } else {
                            //上方第2个也为空
                            if (i - 1 < 0) {
                                continue;
                            }
                            if (
                                self.animalArray[i - 1][next_x] == -1 ||
                                self.animalArray[i - 1][next_x].can_move == false
                            ) {
                                self.animalArray[i][j].AddPos(next_x, i + 1);
                                self.animalArray[i][j] = 0;
                                return true;
                            }
                        }
                    }
                }
                return false;
            }
        };
        if (search(anim)) {
            //如果能移动就继续找下一个
            this.searchPos(anim);
        } else {
            //如果找到了最后一个点就开始
            anim.FilledMove();
        }
    },
    //---------------------------------------------------------------
    //动物选中
    selectFirstAnimal(pos) {
        let animal = this.animalArray[pos.y][pos.x];
        if (animal == -1 || animal == 0) {
            //如果是空格子或者未启用
            return;
        }
        if (!animal.can_move) {
            //不能选不能移动的
            animal.stopAnim();
            return;
        }
        if (this._firstNode == null) {
            this._firstNode = animal;
            this._firstNode.playAnim(0);
            this.selectLogo.setPosition(animal.node.getPosition());
            this.selectLogo.active = true;
        } else {
            if (this._firstNode == animal) {
                //重复点击
                return;
            } else if (this._sectedNode == null) {
                this._sectedNode = animal;
                this._sectedNode.stopAnim();
                this._firstNode.stopAnim();
                if (this.isFriend()) {
                    //相邻
                    this.mask.active = true;
                    this.changePos(true);
                } else {
                    //不相邻
                    this._firstNode = animal;
                    this._firstNode.playAnim(0);
                    this.selectLogo.setPosition(animal.node.getPosition());
                    this._sectedNode = null;
                }
            }
        }
    },
    //判断2个动物是否相邻
    isFriend() {
        if (this._firstNode != null && this._sectedNode != null) {
            let friend = false;
            let f_x = this._firstNode.columnNum;
            let f_y = this._firstNode.rowNum;
            let s_x = this._sectedNode.columnNum;
            let s_y = this._sectedNode.rowNum;
            if (f_x == s_x) {
                if (Math.abs(f_y - s_y) == 1) {
                    friend = true;
                }
            } else if (f_y == s_y) {
                if (Math.abs(f_x - s_x) == 1) {
                    friend = true;
                }
            }
            return friend;
        }
    },
    //动物交换  (是否去匹配消除)
    changePos(ismatch) {
        let f_x = this._firstNode.columnNum;
        let f_y = this._firstNode.rowNum;
        let s_x = this._sectedNode.columnNum;
        let s_y = this._sectedNode.rowNum;
        cc.ZL.musicMgr.MyplayMusic(1, false); //播放点击音效
        this._firstNode.AnimMove(s_x, s_y);
        this._sectedNode.AnimMove(f_x, f_y);
        //移动玩在进行消除
        if (ismatch) {
            setTimeout(
                function () {
                    this.MatchClear();
                }.bind(this),
                (comeInfo.animalMoveTime + comeInfo.delay_clear) * 1000
            );
        }
    },
    //根据类型来特殊消除或者匹配消除
    MatchClear() {
        /**
         * 1、一个特殊和一个普通或者2个普通
         * 2、2个特殊鸟
         * 3、一个魔力鸟和一个普通的鸟
         * 4、一个魔力鸟和一个特殊鸟
         * 5、2个魔力鸟
         */
        //cc.ZL.musicMgr.MyplayMusic(1,false);
        let clearType_first = this._firstNode.clearType;
        let clearType_second = this._sectedNode.clearType;
        if ((clearType_first != 4 && clearType_second == 0) || (clearType_first == 0 && clearType_second != 4)) {
            //    cc.ZL.UIMgr.MinusStep();
            //普通匹配消除
            this.Math(this._firstNode, this._sectedNode);
        } else if (clearType_first != 4 && clearType_first != 0 && clearType_second != 4 && clearType_second != 0) {
            cc.ZL.UIMgr.MinusStep();
            //2个特效节点全部消除
            console.log('111111111111');
            this._firstNode.clear();
            this._sectedNode.clear();
            //消除完成后填充
            setTimeout(
                function () {
                    this.NewFilled(false);
                }.bind(this),
                comeInfo.animalClearTime * 1000 + 100
            );
        } else if ((clearType_first == 4 && clearType_second == 0) || (clearType_first == 0 && clearType_second == 4)) {
            cc.ZL.UIMgr.MinusStep();
            cc.ZL.musicMgr.MyplayMusic(27, false);
            if (clearType_second == 4) {
                this._sectedNode.animType = this._firstNode.animType;
                let fn1 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
                let fn2 = cc.fadeOut(1);
                this._sectedNode.node.runAction(cc.sequence(fn1, fn2));
                setTimeout(
                    function () {
                        console.log('222222222222');
                        this._sectedNode.clear();
                    }.bind(this),
                    800
                );
            } else {
                this._firstNode.animType = this._sectedNode.animType;
                let fn1 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
                let fn2 = cc.fadeOut(1);
                this._firstNode.node.runAction(cc.spawn(fn1, fn2));
                setTimeout(
                    function () {
                        console.log('333333333333');
                        this._firstNode.clear();
                    }.bind(this),
                    800
                );
            }
            //消除完成后填充
            setTimeout(
                function () {
                    this.NewFilled(false);
                }.bind(this),
                comeInfo.animalClearTime * 1000 + 800
            );
        } else if (
            (clearType_first == 4 && clearType_second != 0 && clearType_second != 4) ||
            (clearType_second == 4 && clearType_first != 0 && clearType_first != 4)
        ) {
            cc.ZL.UIMgr.MinusStep();
            //要消除的鸟的类型,消除方式
            let atype, clearTypeall;
            cc.ZL.musicMgr.MyplayMusic(27, false);
            if (clearType_first == 4) {
                atype = this._sectedNode.animType;
                clearTypeall = clearType_second;
                let fn1 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
                let fn2 = cc.fadeOut(1);
                this._firstNode.node.runAction(cc.sequence(fn1, fn2));
            } else {
                atype = this._firstNode.animType;
                clearTypeall = clearType_first;
                let fn1 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
                let fn2 = cc.fadeOut(1);
                this._sectedNode.node.runAction(cc.sequence(fn1, fn2));
            }
            setTimeout(
                function () {
                    for (let i = 0; i < comeInfo.row; i++) {
                        for (let j = 0; j < comeInfo.column; j++) {
                            //排除空格子和不启用
                            if (this.animalArray[i][j] != 0 && this.animalArray[i][j] != -1) {
                                if (this.animalArray[i][j].animType == atype) {
                                    // this.animalArray[i][j].clearType=clearTypeall;
                                    // this.animalArray[i][j].clear();
                                    if (clearTypeall == 1) {
                                        this.animalArray[i][j].creatRowEff(true);
                                    } else if (clearTypeall == 2) {
                                        this.animalArray[i][j].creatColnumEff(true);
                                    } else if (clearTypeall == 3) {
                                        this.animalArray[i][j].CreatTEff();
                                    }
                                }
                            }
                        }
                    }
                    setTimeout(
                        function () {
                            for (let i = 0; i < comeInfo.row; i++) {
                                for (let j = 0; j < comeInfo.column; j++) {
                                    //排除空格子和不启用
                                    if (this.animalArray[i][j] != 0 && this.animalArray[i][j] != -1) {
                                        if (this.animalArray[i][j].animType == atype) {
                                            console.log('4444444444444');
                                            this.animalArray[i][j].clear();
                                        }
                                    }
                                }
                            }
                        }.bind(this),
                        200
                    );
                    //消除完成后填充
                    setTimeout(
                        function () {
                            this.NewFilled(false);
                        }.bind(this),
                        comeInfo.animalClearTime * 1000 + 300
                    );
                }.bind(this),
                800
            );
        } else if (clearType_first == 4 && clearType_second == 4) {
            cc.ZL.UIMgr.MinusStep();
            cc.ZL.musicMgr.MyplayMusic(27, false);
            let fn1 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
            let fn2 = cc.fadeOut(1);
            this._firstNode.node.runAction(cc.sequence(fn1, fn2));
            let fn3 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
            let fn4 = cc.fadeOut(1);
            this._sectedNode.node.runAction(cc.sequence(fn3, fn4));
            setTimeout(
                function () {
                    for (let i = 0; i < comeInfo.row; i++) {
                        for (let j = 0; j < comeInfo.column; j++) {
                            //排除空格子和不启用
                            if (this.animalArray[i][j] != 0 && this.animalArray[i][j] != -1) {
                                console.log('555555555');
                                this.animalArray[i][j].clear();
                            }
                        }
                    }
                    //消除完成后填充
                    setTimeout(
                        function () {
                            this.NewFilled(false);
                        }.bind(this),
                        comeInfo.animalClearTime * 1000 + 100
                    );
                }.bind(this),
                800
            );
        }
    },
    Math(node1, node2) {
        let list_one = this.MatchOne(node1);
        let list_two = this.MatchOne(node2);
        if (list_one.length == 0 && list_two.length == 0) {
            //console.log("匹配不成功");
            this.changePos(false);
            this.mask.active = false;
            this._firstNode = null;
            this._sectedNode = null;
            this.selectLogo.active = false;
        } else {
            //console.log("匹配成功");
            cc.ZL.UIMgr.MinusStep();
            if (list_one.length != 0) {
                //第一个匹配成功
                this.RemoveAnimList(list_one);
            }
            if (list_two.length != 0) {
                //第二个也匹配成功
                this.RemoveAnimList(list_two);
            }
            this.clearOverFiled();
        }
    },
    //匹配一个
    MatchOne(node) {
        //横向队列
        let Rlist = new Array();
        //纵向队列
        let Clist = new Array();
        //符合要求队列
        let MList = new Array();
        let rownum = node.rowNum;
        let columnnum = node.columnNum;
        let animType = node.animType;
        //不是动物不匹配
        if (animType >= 6 || animType == 0) {
            return MList;
        }
        //查看横方向是否可以匹配消除
        for (let i = 0; i <= 1; i++) {
            //0向左1向右
            for (let j = 1; j < 8; j++) {
                let next_x;
                if (i == 0) {
                    next_x = columnnum + j;
                } else {
                    next_x = columnnum - j;
                }

                //防止超界
                if (next_x < 0 || next_x > 8) {
                    break;
                }
                //防止不启用或者空格子-1，0
                if (
                    this.animalArray[rownum][next_x] == comeInfo.animalType.noOpen ||
                    this.animalArray[rownum][next_x] == comeInfo.animalType.none
                ) {
                    break;
                }
                if (this.animalArray[rownum][next_x].animType == animType) {
                    Rlist.push(this.animalArray[rownum][next_x]);
                } else {
                    break;
                }
            }
        }
        //查看纵方向是否可以匹配消除
        for (let i = 0; i <= 1; i++) {
            //0上1下
            for (let j = 1; j < 8; j++) {
                let next_y;
                if (i == 0) {
                    next_y = rownum - j;
                } else {
                    next_y = rownum + j;
                }
                //防止超界
                if (next_y < 0 || next_y > 8) {
                    break;
                }
                //防止不启用或者空格子-1，0
                if (
                    this.animalArray[next_y][columnnum] == comeInfo.animalType.noOpen ||
                    this.animalArray[next_y][columnnum] == comeInfo.animalType.none
                ) {
                    break;
                }
                if (this.animalArray[next_y][columnnum].animType == animType) {
                    Clist.push(this.animalArray[next_y][columnnum]);
                } else {
                    break;
                }
            }
        }

        //匹配类型    //0：无类型  1：横4个 2：纵4个 3：T类型  4：5个
        let matchtype = 0;
        //匹配到5个
        if (Rlist.length >= 4 || Clist.length >= 4) {
            matchtype = 4;
        } //T类型匹配
        else if ((Rlist.length == 2 || Rlist.length == 3) && (Clist.length == 2 || Clist.length == 3)) {
            matchtype = 3;
        } //纵4个
        else if (Clist.length == 3 && Rlist.length < 2) {
            matchtype = 2;
        } //横4个
        else if (Clist.length < 2 && Rlist.length == 3) {
            matchtype = 1;
        } //纵或者横3个
        else if ((Clist.length == 2 && Rlist.length < 2) || (Clist.length < 2 && Rlist.length == 2)) {
            matchtype = 0;
        }
        if (Rlist.length >= 2) {
            //如果有2个就符合要求
            for (let i = 0; i < Rlist.length; i++) {
                MList.push(Rlist[i]);
            }
        }
        if (Clist.length >= 2) {
            for (let i = 0; i < Clist.length; i++) {
                MList.push(Clist[i]);
            }
        }
        if (MList.length > 0) {
            //有符合要求的
            MList.push(node); //加入自身
            MList.push(matchtype); //加入匹配类型
        }
        return MList;
    },
    //匹配成功就进行对应的消除
    RemoveAnimList(list) {
        this.is_Finised = false;
        //获取到匹配类型
        let cType = list[list.length - 1];
        if (cType == 0) {
            for (let i = 0; i < list.length - 1; i++) {
                console.log('6666666666666');
                console.log(i, 'i');
                console.log(list, 'list');
                console.log(list[i], 'list[i]');

                list[i].clear();
                //cc.ZL.UIMgr.AddScore(cc.ZL.UIMgr.add_score);
            }
        } else {
            this.specialRemove(list, cType);
        }
    },
    //产生特殊效果的消除
    specialRemove(list, type) {
        //查看匹配的节点是不是普通的节点
        if (list[list.length - 2].clearType == 0) {
            //如果是普通节点就把自身设置成特殊消除节点
            list[list.length - 2].deleteMuBiao();
            console.log('7777777777777', list);
            //获取这个节点的位置用来产生特效标识
            if (list[list.length - 2] != 0) {
                if (type == 1) {
                    //1：横4个
                    list[list.length - 2].creatColnumEff(true);
                } else if (type == 2) {
                    //2：纵4个
                    list[list.length - 2].creatRowEff(true);
                } else if (type == 3) {
                    //3：T类型
                    list[list.length - 2].CreatTEff();
                } else if (type == 4) {
                    //4：5个
                    list[list.length - 2].CreatFiveEff();
                }
            }
            //其余的节点消除
            for (let i = 0; i < list.length - 2; i++) {
                list[i].clear();
            }
        } else {
            //否者就随机选择一个普通节点，要是没有就全部消除
            let r_column = null;
            let r_row = null;
            //寻找无特效节点
            for (let i = 0; i < list.length - 2; i++) {
                if (list[i].clearType == 0) {
                    r_column = list[i].columnNum;
                    r_row = list[i].rowNum;
                    break;
                }
            }
            if (r_column != null && r_row != null) {
                //找到了
                if (this.animalArray[r_row][r_column] != 0) {
                    if (type == 1) {
                        //1：横4个
                        this.animalArray[r_row][r_column].creatColnumEff(true);
                    } else if (type == 2) {
                        //2：纵4个
                        this.animalArray[r_row][r_column].creatRowEff(true);
                    } else if (type == 3) {
                        //3：T类型
                        this.animalArray[r_row][r_column].CreatTEff();
                    } else if (type == 4) {
                        //4：5个
                        this.animalArray[r_row][r_column].CreatFiveEff();
                    }
                }

                //其余的全部消除
                for (let i = 0; i < list.length - 1; i++) {
                    if (list[i].rowNum == r_row && list[i].columnNum == r_column) {
                        continue;
                    } else {
                        console.log('8888888888888');
                        list[i].clear();
                    }
                }
            } else {
                //如果都为特效节点，全部消除就好
                for (let i = 0; i < list.length - 1; i++) {
                    console.log('999999999999');
                    list[i].clear();
                }
            }
        }
    },
    //消除后填充
    clearOverFiled() {
        //消除完成后填充
        cc.ZL.musicMgr.MyplayMusic(2, false);
        this.clearnum += 1;
        if (this.clearnum > 2) {
            if (this.clearnum >= 6) {
                this.clearnum = 6;
            }
            cc.ZL.musicMgr.MyplayMusic(this.clearnum + 1, false);
        }

        setTimeout(
            function () {
                this.NewFilled(false);
            }.bind(this),
            comeInfo.animalClearTime * 1000
        );
    },
    //特效设置
    SetEff() {
        // let effarry=lvdata["Lv"+comeInfo.now_lv].eff;
        let effarry = lvdata.eff;
        for (let row = 0; row < comeInfo.row; row++) {
            for (let column = 0; column < comeInfo.column; column++) {
                if (effarry[row][column] == 1) {
                    //横
                    this.animalArray[row][column].creatRowEff();
                } else if (effarry[row][column] == 2) {
                    //纵
                    this.animalArray[row][column].creatColnumEff();
                } else if (effarry[row][column] == 3) {
                    //T
                    this.animalArray[row][column].CreatTEff();
                } else if (effarry[row][column] == 4) {
                    //魔力鸟
                    this.animalArray[row][column].CreatFiveEff();
                }
            }
        }
    },
    //------------------横向消除动物---------------------
    RowClear(rownum, columnNum) {
        for (let i = 0; i < comeInfo.column; i++) {
            //排除自身（这个节点自身）
            if (i == columnNum) {
                continue;
            }
            //排除不是空格子或者不启用
            if (
                this.animalArray[rownum][i] != comeInfo.animalType.noOpen &&
                this.animalArray[rownum][i] != comeInfo.animalType.none
            ) {
                //也不是障碍物
                if (this.animalArray[rownum][i].animType != 0) {
                    console.log('100000000000000');
                    this.animalArray[rownum][i].clear();
                }
            }
        }
    },
    //纵向消除动物
    ColumnClear(rownum, columnnum) {
        for (let i = 0; i < 9; i++) {
            //排除自身
            if (i == rownum) {
                continue;
            }
            //排除不是空格子或者不启用
            if (
                this.animalArray[i][columnnum] != comeInfo.animalType.noOpen &&
                this.animalArray[i][columnnum] != comeInfo.animalType.none
            ) {
                //也不是障碍物
                if (this.animalArray[i][columnnum].animType != 0) {
                    console.log('111111111111+++');
                    this.animalArray[i][columnnum].clear();
                }
            }
        }
    },
    //范围消除动物
    RangeClear(rownum, columnnum) {
        //要消除的集合
        let totalList = new Array();
        //从上往下开始
        if (rownum - 2 >= 0) {
            totalList.push(this.animalArray[rownum - 2][columnnum]);
        }
        if (rownum - 1 >= 0) {
            if (columnnum - 1 >= 0) {
                totalList.push(this.animalArray[rownum - 1][columnnum - 1]);
            }
            totalList.push(this.animalArray[rownum - 1][columnnum]);
            if (columnnum + 1 <= comeInfo.column - 1) {
                totalList.push(this.animalArray[rownum - 1][columnnum + 1]);
            }
        }
        if (columnnum - 2 >= 0) {
            totalList.push(this.animalArray[rownum][columnnum - 2]);
        }
        if (columnnum - 1 >= 0) {
            totalList.push(this.animalArray[rownum][columnnum - 1]);
        }
        if (columnnum + 1 <= comeInfo.column - 1) {
            totalList.push(this.animalArray[rownum][columnnum + 1]);
        }
        if (columnnum + 2 <= comeInfo.column - 1) {
            totalList.push(this.animalArray[rownum][columnnum + 2]);
        }
        if (rownum + 1 <= comeInfo.row - 1) {
            if (columnnum + 1 <= comeInfo.column - 1) {
                totalList.push(this.animalArray[rownum + 1][columnnum + 1]);
            }
            totalList.push(this.animalArray[rownum + 1][columnnum]);
            if (columnnum - 1 >= 0) {
                totalList.push(this.animalArray[rownum + 1][columnnum - 1]);
            }
        }
        if (rownum + 2 <= comeInfo.row - 1) {
            totalList.push(this.animalArray[rownum + 2][columnnum]);
        }
        for (let i = 0; i < totalList.length; i++) {
            //不是空物体
            if (totalList[i] != 0 && totalList[i] != -1) {
                //也不是障碍物
                if (totalList[i].animType != 0) {
                    console.log('133333333333333');
                    totalList[i].clear();
                }
            }
        }
    },
    //同类消除
    TypeClear(animaltype) {
        for (let i = 0; i < comeInfo.row; i++) {
            for (let j = 0; j < comeInfo.column; j++) {
                //排除不启用和空格子
                if (
                    this.animalArray[i][j] != comeInfo.animalType.noOpen &&
                    this.animalArray[i][j] != comeInfo.animalType.none
                ) {
                    if (this.animalArray[i][j].animType == animaltype) {
                        console.log('144444444444444');
                        this.animalArray[i][j].clear();
                    }
                }
            }
        }
    },
    //道具交换位置
    proChangePos(node) {
        if (node.can_move == false) {
            return;
        }
        if (this.prop_one == null) {
            this.prop_one = node;
            this.prop_one.node.scale = 1.2;
            return;
        }
        //重复点击
        if (this.prop_one == node) {
            return;
        }
        if (this.prop_one != null && this.prop_two == null) {
            this.mask.active = true;
            this.prop_two = node;
            let o_x = this.prop_one.columnNum;
            let o_y = this.prop_one.rowNum;
            let t_x = this.prop_two.columnNum;
            let t_y = this.prop_two.rowNum;
            this.prop_one.AnimMove(t_x, t_y);
            this.prop_two.AnimMove(o_x, o_y);
            this.prop_one.scale = 1;
            this.prop_one = null;
            this.prop_two = null;
            if (!this.AllMatch()) {
                this.mask.active = false;
            }
            cc.ZL.PropMgr.propFinished(3);
        }
    },
    //全部动物随机调换位置
    replaceAll() {
        this.NoAnimNode.active = false;
        let posArr = []; //将动物的位置放入数组
        let AnimArr2 = [];
        for (let i = this.info.Anim.length - 1; i >= 0; i--) {
            for (let j = 0; j < this.info.Anim[i].length; j++) {
                let anim = this.animalArray[i][j]; //得到这个动物
                if (anim == 0 || anim == -1) {
                    //空格子或者未启用的格子
                    continue;
                }
                if (anim.can_move == false) {
                    continue;
                }

                let pos = [i, j];
                AnimArr2.push(anim);
                posArr.push(pos);
            }
        }
        //打乱数组顺序
        for (let i = 0; i < posArr.length; i++) {
            let lastIndex = posArr.length - 1 - i; //取出最后一个
            let index = Math.floor(Math.random() * lastIndex);
            let temp = [posArr[index][0], posArr[index][1]];
            posArr[index][0] = posArr[lastIndex][0];
            posArr[index][1] = posArr[lastIndex][1];
            posArr[lastIndex][0] = temp[0];
            posArr[lastIndex][1] = temp[1];
        }
        for (let i = 0; i < AnimArr2.length; i++) {
            AnimArr2[i].AnimMove(posArr[i][1], posArr[i][0]);
        }
        setTimeout(
            function () {
                let is_Matc = this.AllMatch(); //随机调换位置后重新匹配一下
                // console.log('有能消除的东西22222',is_Matc)
                if (is_Matc) {
                    //如果有匹配上的
                    this.clearOverFiled();
                }
                this.IsNoMatch();
            }.bind(this),
            comeInfo.animalMoveTime * 1000 + 300
        );
    },
    //----------判断是不是死图-----------------------------------
    IsNoMatch() {
        // console.log('info===>', this.info.Anim)
        // console.log('animalArray===>', this.animalArray)
        for (let i = 0; i < this.info.Anim.length; i++) {
            for (let j = 1; j < this.info.Anim[i].length - 1; j++) {
                let anim = this.animalArray[i][j]; //得到这个动物
                if (anim == 0 || anim == -1) {
                    //空格子或者未启用的格子
                    continue;
                }
                if (anim.can_move == false) {
                    continue;
                }
                //查看有没有可以消除的特殊效果
                if (anim.clearType == 4 || anim.animType == 6) {
                    //如果是魔力鸟
                    this.mask.active = false;
                    return true;
                }
                if (anim.clearType != 0) {
                    if (i - 1 >= 0) {
                        if (this.animalArray[i - 1][j] != 0 && this.animalArray[i - 1][j] != -1) {
                            if (this.animalArray[i - 1][j].clearType != 0) {
                                this.mask.active = false;
                                return true;
                            }
                        }
                    }
                    if (i + 1 < 9) {
                        if (this.animalArray[i + 1][j] != 0 && this.animalArray[i + 1][j] != -1) {
                            if (this.animalArray[i + 1][j].clearType != 0) {
                                this.mask.active = false;
                                return true;
                            }
                        }
                    }
                    if (j - 1 >= 0) {
                        if (this.animalArray[i][j - 1] != 0 && this.animalArray[i][j - 1] != -1) {
                            if (this.animalArray[i][j - 1].clearType != 0) {
                                this.mask.active = false;
                                return true;
                            }
                        }
                    }
                    if (j + 1 < 9) {
                        if (this.animalArray[i][j + 1] != 0 && this.animalArray[i][j + 1] != -1) {
                            if (this.animalArray[i][j + 1].clearType != 0) {
                                this.mask.active = false;
                                return true;
                            }
                        }
                    }
                }
                if (this.isDie(anim)) {
                    // console.log("有可以消除的",this.animalArray)
                    this.mask.active = false;
                    return true;
                }
            }
        }
        console.log('没有可以消除的');
        this.NoAnimNode.active = true;
        return false;
    },
    isDie(anim) {
        let x = anim.rowNum;
        let y = anim.columnNum;
        let animType = anim.animType;
        // console.log('isDie', x,y,animType)
        //任何一种匹配成功都可以
        let type1 = this.IsFirstLineCast(x, y, animType);
        let type2 = this.IsSecondLineCast(x, y, animType);
        let type3 = this.IsThirdLineCast(x, y, animType);
        let type4 = this.IsSameRowCol(x, y, animType);
        if (type1 || type2 || type3 || type4) {
            console.log(
                '有可以消除的___',
                'type1:' + type1,
                '  type2:' + type2,
                '  type3:' + type3,
                '  type4:' + type4
            );
            return true;
        } else {
            return false;
        }
    },
    /*
     * O O
     *  X
     * O O
     */
    IsFirstLineCast(x, y, animType) {
        var lx = x - 1;
        var ly = y - 1;
        var tx = x + 1;
        var ty = y + 1;
        var isLeftBottomSame = false;
        var isLeftTopSame = false;
        var isRightBottomSame = false;
        var isRightTopSame = false;
        if (lx >= 0 && ly >= 0) {
            if (this.animalArray[lx][ly] != 0 && this.animalArray[lx][ly] != -1) {
                if (this.animalArray[lx][ly].animType == animType) {
                    isLeftBottomSame = true;
                }
            }
        }
        if (lx >= 0 && ty < 9) {
            if (this.animalArray[lx][ty] != 0 && this.animalArray[lx][ty] != -1) {
                if (this.animalArray[lx][ty].animType == animType) {
                    isLeftTopSame = true;
                }
            }
        }
        if (tx < 9 && ly >= 0) {
            if (this.animalArray[tx][ly] != 0 && this.animalArray[tx][ly] != -1) {
                if (this.animalArray[tx][ly].animType == animType) {
                    isRightBottomSame = true;
                }
            }
        }
        if (tx < 9 && ty < 9) {
            if (this.animalArray[tx][ty] != 0 && this.animalArray[tx][ty] != -1) {
                if (this.animalArray[tx][ty].animType == animType) {
                    isRightTopSame = true;
                }
            }
        }
        // 左下角与右下角
        if (isLeftBottomSame && isRightBottomSame) {
            //这个动物必须可以下移才可以
            if (
                this.animalArray[x][y - 1] != 0 &&
                this.animalArray[x][y - 1] != -1 &&
                this.animalArray[x][y - 1].can_move
            ) {
                return true;
            }
        }

        // 左下角与左上角
        if (isLeftBottomSame && isLeftTopSame) {
            //这个动物必须可以左移才可以
            if (
                this.animalArray[x - 1][y] != 0 &&
                this.animalArray[x - 1][y] != -1 &&
                this.animalArray[x - 1][y].can_move
            ) {
                return true;
            }
        }

        // 左上角与右上角
        if (isLeftTopSame && isRightTopSame) {
            //这个动物必须可以上移才可以
            if (
                this.animalArray[x][y + 1] != 0 &&
                this.animalArray[x][y + 1] != -1 &&
                this.animalArray[x][y + 1].can_move
            ) {
                return true;
            }
        }

        // 右上角与右下角
        if (isRightTopSame && isRightBottomSame) {
            //这个动物必须可以上移才可以
            if (
                this.animalArray[x + 1][y] != 0 &&
                this.animalArray[x + 1][y] != -1 &&
                this.animalArray[x + 1][y].can_move
            ) {
                return true;
            }
        }

        return false;
    },

    /*
     * O  O
     *  XX
     * O  O
     */
    IsSecondLineCast(x, y, animType) {
        var lx = x - 1;
        var ly = y - 2;
        var tx = x + 1;
        var ty = y + 1;
        var isLeftBottomSame = false;
        var isLeftTopSame = false;
        var isRightBottomSame = false;
        var isRightTopSame = false;
        if (lx >= 0 && ly >= 0) {
            if (this.animalArray[lx][ly] != 0 && this.animalArray[lx][ly] != -1) {
                if (this.animalArray[lx][ly].animType == animType && this.animalArray[lx][ly].can_move) {
                    isLeftBottomSame = true;
                }
            }
        }
        if (lx >= 0 && ty < 9) {
            if (this.animalArray[lx][ty] != 0 && this.animalArray[lx][ty] != -1) {
                if (this.animalArray[lx][ty].animType == animType && this.animalArray[lx][ty].can_move) {
                    isLeftTopSame = true;
                }
            }
        }
        if (tx < 9 && ly >= 0) {
            if (this.animalArray[tx][ly] != 0 && this.animalArray[tx][ly] != -1) {
                if (this.animalArray[tx][ly].animType == animType && this.animalArray[tx][ly].can_move) {
                    isRightBottomSame = true;
                }
            }
        }
        if (tx < 9 && ty < 9) {
            if (this.animalArray[tx][ty] != 0 && this.animalArray[tx][ty] != -1) {
                if (this.animalArray[tx][ty].animType == animType && this.animalArray[tx][ty].can_move) {
                    isRightTopSame = true;
                }
            }
        }
        if (y - 1 >= 0 && this.animalArray[x][y - 1] != 0 && this.animalArray[x][y - 1] != -1) {
            if (this.animalArray[x][y - 1].animType == animType) {
                // 左下角
                if (isLeftBottomSame) {
                    //这个动物必须可以右移才可以
                    if (
                        this.animalArray[x][y - 2] != 0 &&
                        this.animalArray[x][y - 2] != -1 &&
                        this.animalArray[x][y - 2].can_move
                    ) {
                        return true;
                    }
                }
                // 左上角
                if (isLeftTopSame) {
                    //这个动物必须可以右移才可以
                    if (
                        this.animalArray[x][y + 1] != 0 &&
                        this.animalArray[x][y + 1] != -1 &&
                        this.animalArray[x][y + 1].can_move
                    ) {
                        return true;
                    }
                }
                // 右下角
                if (isRightBottomSame) {
                    //这个动物必须可以左移才可以
                    if (
                        this.animalArray[x][y - 2] != 0 &&
                        this.animalArray[x][y - 2] != -1 &&
                        this.animalArray[x][y - 2].can_move
                    ) {
                        return true;
                    }
                }
                // 右上角
                if (isRightTopSame) {
                    //这个动物必须可以右移才可以
                    if (
                        this.animalArray[x][y + 1] != 0 &&
                        this.animalArray[x][y + 1] != -1 &&
                        this.animalArray[x][y + 1].can_move
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    /*
     * O O
     *  X
     *  X
     * O O
     */
    IsThirdLineCast(x, y, animType) {
        var lx = x - 1;
        var ly = y - 1;
        var tx = x + 2;
        var ty = y + 1;
        var isLeftBottomSame = false;
        var isLeftTopSame = false;
        var isRightBottomSame = false;
        var isRightTopSame = false;
        if (lx >= 0 && ly >= 0) {
            if (this.animalArray[lx][ly] != 0 && this.animalArray[lx][ly] != -1) {
                if (this.animalArray[lx][ly].animType == animType && this.animalArray[lx][ly].can_move) {
                    isLeftBottomSame = true;
                }
            }
        }
        if (lx >= 0 && ty < 9) {
            if (this.animalArray[lx][ty] != 0 && this.animalArray[lx][ty] != -1) {
                if (this.animalArray[lx][ty].animType == animType && this.animalArray[lx][ty].can_move) {
                    isLeftTopSame = true;
                }
            }
        }
        if (tx < 9 && ly >= 0) {
            if (this.animalArray[tx][ly] != 0 && this.animalArray[tx][ly] != -1) {
                if (this.animalArray[tx][ly].animType == animType && this.animalArray[tx][ly].can_move) {
                    isRightBottomSame = true;
                }
            }
        }
        if (tx < 9 && ty < 9) {
            if (this.animalArray[tx][ty] != 0 && this.animalArray[tx][ty] != -1) {
                if (this.animalArray[tx][ty].animType == animType && this.animalArray[tx][ty].can_move) {
                    isRightTopSame = true;
                }
            }
        }

        if (x + 1 < 9 && this.animalArray[x + 1][y] != 0 && this.animalArray[x + 1][y] != -1) {
            if (this.animalArray[x + 1][y].animType == animType) {
                // 左下角
                if (isLeftBottomSame) {
                    //这个动物必须可以上移才可以
                    if (
                        this.animalArray[x - 1][y] != 0 &&
                        this.animalArray[x - 1][y] != -1 &&
                        this.animalArray[x - 1][y].can_move
                    ) {
                        return true;
                    }
                }
                // 左上角
                if (isLeftTopSame) {
                    //这个动物必须可以下移才可以
                    if (
                        this.animalArray[x - 1][y] != 0 &&
                        this.animalArray[x - 1][y] != -1 &&
                        this.animalArray[x - 1][y].can_move
                    ) {
                        return true;
                    }
                }
                // 右下角
                if (isRightBottomSame) {
                    //这个动物必须可以上移才可以
                    if (
                        this.animalArray[x + 2][y] != 0 &&
                        this.animalArray[x + 2][y] != -1 &&
                        this.animalArray[x + 2][y].can_move
                    ) {
                        return true;
                    }
                }
                // 右上角
                if (isRightTopSame) {
                    //这个动物必须可以下移才可以
                    if (
                        this.animalArray[x + 2][y] != 0 &&
                        this.animalArray[x + 2][y] != -1 &&
                        this.animalArray[x + 2][y].can_move
                    ) {
                        return true;
                    }
                }
            }
        }
        return false;
    },

    // 同一行或者同一列，有可以消除的
    IsSameRowCol(x, y, animType) {
        // 0x00 和 00x0
        if (x < 6) {
            let add1 = this.animalArray[x + 1][y];
            let add2 = this.animalArray[x + 2][y];
            let add3 = this.animalArray[x + 3][y];
            // console.log(x+"---"+y)
            // console.log(animType)
            if (
                add1 &&
                add1 != 0 &&
                add1 != -1 &&
                add3 &&
                add3 != 0 &&
                add3 != -1 &&
                add2 &&
                add2 != 0 &&
                add2 != -1 &&
                add2.can_move &&
                add1.animType == animType &&
                add3.animType == animType
            ) {
                console.log('func1__', this.animalArray, x, y, animType);
                return true;
            }

            if (
                add2 &&
                add2 != 0 &&
                add2 != -1 &&
                add3 &&
                add3 != 0 &&
                add3 != -1 &&
                add1 &&
                add1 != 0 &&
                add1 != -1 &&
                add1.can_move &&
                add2.animType == animType &&
                add3.animType == animType
            ) {
                console.log('func2__', this.animalArray, x, y, animType);
                return true;
            }
        }

        if (y < 6) {
            // 纵向
            let addc1 = this.animalArray[x][y + 1];
            let addc2 = this.animalArray[x][y + 2];
            let addc3 = this.animalArray[x][y + 3];

            // console.log(addc1)
            // console.log(addc2)
            // console.log(addc3)
            if (
                addc1 &&
                addc1 != 0 &&
                addc1 != -1 &&
                addc3 &&
                addc3 != 0 &&
                addc3 != -1 &&
                addc2 &&
                addc2 != 0 &&
                addc2 != -1 &&
                addc2.can_move &&
                addc1.animType == animType &&
                addc3.animType == animType
            ) {
                console.log('func3__', this.animalArray, x, y, animType);
                return true;
            }

            if (
                addc1 &&
                addc1 != 0 &&
                addc1 != -1 &&
                addc2 &&
                addc2 != 0 &&
                addc2 != -1 &&
                addc3 &&
                addc3 != 0 &&
                addc3 != -1 &&
                addc1.can_move &&
                addc2.animType == animType &&
                addc3.animType == animType
            ) {
                console.log('func4__', this.animalArray, x, y, animType);
                return true;
            }
        }

        return false;
    },
});
