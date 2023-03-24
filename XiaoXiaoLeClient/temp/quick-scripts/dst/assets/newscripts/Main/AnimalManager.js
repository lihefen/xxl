
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/newscripts/Main/AnimalManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba4f3Z/Pv9AB7np8Vsqm5mB', 'AnimalManager');
// newscripts/Main/AnimalManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
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
    is_Finised: false,
    //消除时变为false
    //连续消除次数
    clearnum: 0,
    //提示无动物可消除
    NoAnimNode: cc.Node
  },
  onLoad: function onLoad() {
    cc.ZL.animMgr = this; //创建动物缓冲池

    this.animalPool = new cc.NodePool(); // this.info=lvdata["Lv"+comeInfo.now_lv];//获取到这一关的信息

    this.info = lvdata; //获取到这一关的信息

    this.NoAnimNode.active = false;
  },
  onOpenMask: function onOpenMask() {
    this.maskNode.active = true;
  },
  onCloseMask: function onCloseMask() {
    this.maskNode.active = false;
  },
  start: function start() {
    this.IsNoMatch();
  },
  //实例化动物
  InitAnimal: function InitAnimal() {
    this.animalArray = new Array();

    for (var row = 0; row < this.info.Anim.length; row++) {
      var rowArray = new Array();

      for (var column = 0; column < this.info.Anim[row].length; column++) {
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
          var a = cc.instantiate(this.animPrefab);
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
  NewFilled: function NewFilled() {
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
    for (var i = this.info.Anim.length - 2; i >= 0; i--) {
      var animRow = this.animalArray[i];

      for (var j = 0, len = animRow.length; j < len; j++) {
        var anim = animRow[j];

        if (anim && anim.can_move) {
          this.searchPos(anim);
        }
      }
    } // for (let i = this.info.Anim.length - 2; i >= 0; i--) {
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
  creatNew: function creatNew() {
    //如果自主产生动物的格子为空就产生动物
    var x, y;
    var isFiled = true;

    for (var i = 0; i < this.info.creat.length; i++) {
      console.log(this.info.creat.length, 'this.info.creat.length');
      x = this.info.creat[i][1];
      y = this.info.creat[i][0];

      if (this.animalArray[y][x] == 0) {
        console.log(this.animalArray[y][x], 'this.animalArray');
        var a = cc.instantiate(this.animPrefab);
        this.animalPanel.addChild(a);
        a.getComponent('Animal').initAnimal(x, y - 1, this);
        a.getComponent('Animal').AnimMove(x, y);
        this.animalArray[y][x] = a.getComponent('Animal');
        this.searchPos(this.animalArray[y][x]);
        isFiled = false;
      }
    }

    setTimeout(function () {
      console.log('测试setTimeout');

      if (isFiled) {
        console.log('填充完成'); //填充完成

        if (cc.ZL.targetMgr.IsScuessed) {
          return;
        }

        this.FillOver();
        return;
      }

      this.creatNew();
    }.bind(this), 50);
  },
  //填充完成后的后续操作
  FillOver: function FillOver() {
    console.log('FillOver');
    var is_Matc = this.AllMatch();
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
        setTimeout(function () {
          //判断是否胜利
          var isEnd = cc.ZL.targetMgr.IsScuess();

          if (isEnd == false) {
            //如果没有结束就看看有没有可消除的动物
            this.IsNoMatch();
          }
        }.bind(this), comeInfo.qqmoveTime * 1500);
      } else {
        //判断是否胜利
        var isEnd = cc.ZL.targetMgr.IsScuess();

        if (isEnd == false) {
          //如果没有结束就看看有没有可消除的动物
          setTimeout(function () {
            this.IsNoMatch();
          }.bind(this), 500);
        }
      }
    } else {
      this.clearOverFiled();
    }
  },
  //填充以后全部匹配一下，看看有么有需要消除的地方
  AllMatch: function AllMatch() {
    var isMatched = false;

    for (var row = 0; row < this.info.Anim.length; row++) {
      for (var column = 0; column < this.info.Anim[row].length; column++) {
        if (this.animalArray[row][column] != -1 && this.animalArray[row][column] != 0) {
          var list = this.MatchOne(this.animalArray[row][column]);

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
  searchPos: function searchPos(anim) {
    var self = this;

    var search = function search(anim) {
      var i = anim.rowNum;
      var j = anim.columnNum;

      if (i > self.animalArray.length - 2) {
        //防止超越下方边界
        return false;
      } //查看下方是否是空物体


      if (self.animalArray[i + 1][j] == 0) {
        //如果是就下移
        self.animalArray[i][j].AddPos(j, i + 1);
        self.animalArray[i][j] = 0;
        return true;
      } else {
        //查看左右下方是否为空
        for (var dir = 1; dir >= -1; dir -= 2) {
          var next_x = j + dir; //防止超出数组边界

          if (next_x < 0 && next_x > self.info.Anim[i].length) {
            continue;
          } //获取动物数组中的位置


          var next_animal = self.animalArray[i + 1][next_x];

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

              if (self.animalArray[i - 1][next_x] == -1 || self.animalArray[i - 1][next_x].can_move == false) {
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
  selectFirstAnimal: function selectFirstAnimal(pos) {
    var animal = this.animalArray[pos.y][pos.x];

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
  isFriend: function isFriend() {
    if (this._firstNode != null && this._sectedNode != null) {
      var friend = false;
      var f_x = this._firstNode.columnNum;
      var f_y = this._firstNode.rowNum;
      var s_x = this._sectedNode.columnNum;
      var s_y = this._sectedNode.rowNum;

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
  changePos: function changePos(ismatch) {
    var f_x = this._firstNode.columnNum;
    var f_y = this._firstNode.rowNum;
    var s_x = this._sectedNode.columnNum;
    var s_y = this._sectedNode.rowNum;
    cc.ZL.musicMgr.MyplayMusic(1, false); //播放点击音效

    this._firstNode.AnimMove(s_x, s_y);

    this._sectedNode.AnimMove(f_x, f_y); //移动玩在进行消除


    if (ismatch) {
      setTimeout(function () {
        this.MatchClear();
      }.bind(this), (comeInfo.animalMoveTime + comeInfo.delay_clear) * 1000);
    }
  },
  //根据类型来特殊消除或者匹配消除
  MatchClear: function MatchClear() {
    /**
     * 1、一个特殊和一个普通或者2个普通
     * 2、2个特殊鸟
     * 3、一个魔力鸟和一个普通的鸟
     * 4、一个魔力鸟和一个特殊鸟
     * 5、2个魔力鸟
     */
    //cc.ZL.musicMgr.MyplayMusic(1,false);
    var clearType_first = this._firstNode.clearType;
    var clearType_second = this._sectedNode.clearType;

    if (clearType_first != 4 && clearType_second == 0 || clearType_first == 0 && clearType_second != 4) {
      //    cc.ZL.UIMgr.MinusStep();
      //普通匹配消除
      this.Math(this._firstNode, this._sectedNode);
    } else if (clearType_first != 4 && clearType_first != 0 && clearType_second != 4 && clearType_second != 0) {
      cc.ZL.UIMgr.MinusStep(); //2个特效节点全部消除

      console.log('111111111111');

      this._firstNode.clear();

      this._sectedNode.clear(); //消除完成后填充


      setTimeout(function () {
        this.NewFilled(false);
      }.bind(this), comeInfo.animalClearTime * 1000 + 100);
    } else if (clearType_first == 4 && clearType_second == 0 || clearType_first == 0 && clearType_second == 4) {
      cc.ZL.UIMgr.MinusStep();
      cc.ZL.musicMgr.MyplayMusic(27, false);

      if (clearType_second == 4) {
        this._sectedNode.animType = this._firstNode.animType;
        var fn1 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
        var fn2 = cc.fadeOut(1);

        this._sectedNode.node.runAction(cc.sequence(fn1, fn2));

        setTimeout(function () {
          console.log('222222222222');

          this._sectedNode.clear();
        }.bind(this), 800);
      } else {
        this._firstNode.animType = this._sectedNode.animType;

        var _fn = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));

        var _fn2 = cc.fadeOut(1);

        this._firstNode.node.runAction(cc.spawn(_fn, _fn2));

        setTimeout(function () {
          console.log('333333333333');

          this._firstNode.clear();
        }.bind(this), 800);
      } //消除完成后填充


      setTimeout(function () {
        this.NewFilled(false);
      }.bind(this), comeInfo.animalClearTime * 1000 + 800);
    } else if (clearType_first == 4 && clearType_second != 0 && clearType_second != 4 || clearType_second == 4 && clearType_first != 0 && clearType_first != 4) {
      cc.ZL.UIMgr.MinusStep(); //要消除的鸟的类型,消除方式

      var atype, clearTypeall;
      cc.ZL.musicMgr.MyplayMusic(27, false);

      if (clearType_first == 4) {
        atype = this._sectedNode.animType;
        clearTypeall = clearType_second;

        var _fn3 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));

        var _fn4 = cc.fadeOut(1);

        this._firstNode.node.runAction(cc.sequence(_fn3, _fn4));
      } else {
        atype = this._firstNode.animType;
        clearTypeall = clearType_first;

        var _fn5 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));

        var _fn6 = cc.fadeOut(1);

        this._sectedNode.node.runAction(cc.sequence(_fn5, _fn6));
      }

      setTimeout(function () {
        for (var i = 0; i < comeInfo.row; i++) {
          for (var j = 0; j < comeInfo.column; j++) {
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

        setTimeout(function () {
          for (var _i = 0; _i < comeInfo.row; _i++) {
            for (var _j = 0; _j < comeInfo.column; _j++) {
              //排除空格子和不启用
              if (this.animalArray[_i][_j] != 0 && this.animalArray[_i][_j] != -1) {
                if (this.animalArray[_i][_j].animType == atype) {
                  console.log('4444444444444');

                  this.animalArray[_i][_j].clear();
                }
              }
            }
          }
        }.bind(this), 200); //消除完成后填充

        setTimeout(function () {
          this.NewFilled(false);
        }.bind(this), comeInfo.animalClearTime * 1000 + 300);
      }.bind(this), 800);
    } else if (clearType_first == 4 && clearType_second == 4) {
      cc.ZL.UIMgr.MinusStep();
      cc.ZL.musicMgr.MyplayMusic(27, false);

      var _fn7 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));

      var _fn8 = cc.fadeOut(1);

      this._firstNode.node.runAction(cc.sequence(_fn7, _fn8));

      var fn3 = cc.scaleTo(1, 3, 3).easing(cc.easeElasticOut(0.9));
      var fn4 = cc.fadeOut(1);

      this._sectedNode.node.runAction(cc.sequence(fn3, fn4));

      setTimeout(function () {
        for (var i = 0; i < comeInfo.row; i++) {
          for (var j = 0; j < comeInfo.column; j++) {
            //排除空格子和不启用
            if (this.animalArray[i][j] != 0 && this.animalArray[i][j] != -1) {
              console.log('555555555');
              this.animalArray[i][j].clear();
            }
          }
        } //消除完成后填充


        setTimeout(function () {
          this.NewFilled(false);
        }.bind(this), comeInfo.animalClearTime * 1000 + 100);
      }.bind(this), 800);
    }
  },
  Math: function Math(node1, node2) {
    var list_one = this.MatchOne(node1);
    var list_two = this.MatchOne(node2);

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
  MatchOne: function MatchOne(node) {
    //横向队列
    var Rlist = new Array(); //纵向队列

    var Clist = new Array(); //符合要求队列

    var MList = new Array();
    var rownum = node.rowNum;
    var columnnum = node.columnNum;
    var animType = node.animType; //不是动物不匹配

    if (animType >= 6 || animType == 0) {
      return MList;
    } //查看横方向是否可以匹配消除


    for (var i = 0; i <= 1; i++) {
      //0向左1向右
      for (var j = 1; j < 8; j++) {
        var next_x = void 0;

        if (i == 0) {
          next_x = columnnum + j;
        } else {
          next_x = columnnum - j;
        } //防止超界


        if (next_x < 0 || next_x > 8) {
          break;
        } //防止不启用或者空格子-1，0


        if (this.animalArray[rownum][next_x] == comeInfo.animalType.noOpen || this.animalArray[rownum][next_x] == comeInfo.animalType.none) {
          break;
        }

        if (this.animalArray[rownum][next_x].animType == animType) {
          Rlist.push(this.animalArray[rownum][next_x]);
        } else {
          break;
        }
      }
    } //查看纵方向是否可以匹配消除


    for (var _i2 = 0; _i2 <= 1; _i2++) {
      //0上1下
      for (var _j2 = 1; _j2 < 8; _j2++) {
        var next_y = void 0;

        if (_i2 == 0) {
          next_y = rownum - _j2;
        } else {
          next_y = rownum + _j2;
        } //防止超界


        if (next_y < 0 || next_y > 8) {
          break;
        } //防止不启用或者空格子-1，0


        if (this.animalArray[next_y][columnnum] == comeInfo.animalType.noOpen || this.animalArray[next_y][columnnum] == comeInfo.animalType.none) {
          break;
        }

        if (this.animalArray[next_y][columnnum].animType == animType) {
          Clist.push(this.animalArray[next_y][columnnum]);
        } else {
          break;
        }
      }
    } //匹配类型    //0：无类型  1：横4个 2：纵4个 3：T类型  4：5个


    var matchtype = 0; //匹配到5个

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
          else if (Clist.length == 2 && Rlist.length < 2 || Clist.length < 2 && Rlist.length == 2) {
              matchtype = 0;
            }

    if (Rlist.length >= 2) {
      //如果有2个就符合要求
      for (var _i3 = 0; _i3 < Rlist.length; _i3++) {
        MList.push(Rlist[_i3]);
      }
    }

    if (Clist.length >= 2) {
      for (var _i4 = 0; _i4 < Clist.length; _i4++) {
        MList.push(Clist[_i4]);
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
  RemoveAnimList: function RemoveAnimList(list) {
    this.is_Finised = false; //获取到匹配类型

    var cType = list[list.length - 1];

    if (cType == 0) {
      for (var i = 0; i < list.length - 1; i++) {
        console.log('6666666666666');
        console.log(i, 'i');
        console.log(list, 'list');
        console.log(list[i], 'list[i]');
        list[i].clear(); //cc.ZL.UIMgr.AddScore(cc.ZL.UIMgr.add_score);
      }
    } else {
      this.specialRemove(list, cType);
    }
  },
  //产生特殊效果的消除
  specialRemove: function specialRemove(list, type) {
    //查看匹配的节点是不是普通的节点
    if (list[list.length - 2].clearType == 0) {
      //如果是普通节点就把自身设置成特殊消除节点
      list[list.length - 2].deleteMuBiao();
      console.log('7777777777777', list); //获取这个节点的位置用来产生特效标识

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
      } //其余的节点消除


      for (var i = 0; i < list.length - 2; i++) {
        list[i].clear();
      }
    } else {
      //否者就随机选择一个普通节点，要是没有就全部消除
      var r_column = null;
      var r_row = null; //寻找无特效节点

      for (var _i5 = 0; _i5 < list.length - 2; _i5++) {
        if (list[_i5].clearType == 0) {
          r_column = list[_i5].columnNum;
          r_row = list[_i5].rowNum;
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
        } //其余的全部消除


        for (var _i6 = 0; _i6 < list.length - 1; _i6++) {
          if (list[_i6].rowNum == r_row && list[_i6].columnNum == r_column) {
            continue;
          } else {
            console.log('8888888888888');

            list[_i6].clear();
          }
        }
      } else {
        //如果都为特效节点，全部消除就好
        for (var _i7 = 0; _i7 < list.length - 1; _i7++) {
          console.log('999999999999');

          list[_i7].clear();
        }
      }
    }
  },
  //消除后填充
  clearOverFiled: function clearOverFiled() {
    //消除完成后填充
    cc.ZL.musicMgr.MyplayMusic(2, false);
    this.clearnum += 1;

    if (this.clearnum > 2) {
      if (this.clearnum >= 6) {
        this.clearnum = 6;
      }

      cc.ZL.musicMgr.MyplayMusic(this.clearnum + 1, false);
    }

    setTimeout(function () {
      this.NewFilled(false);
    }.bind(this), comeInfo.animalClearTime * 1000);
  },
  //特效设置
  SetEff: function SetEff() {
    // let effarry=lvdata["Lv"+comeInfo.now_lv].eff;
    var effarry = lvdata.eff;

    for (var row = 0; row < comeInfo.row; row++) {
      for (var column = 0; column < comeInfo.column; column++) {
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
  RowClear: function RowClear(rownum, columnNum) {
    for (var i = 0; i < comeInfo.column; i++) {
      //排除自身（这个节点自身）
      if (i == columnNum) {
        continue;
      } //排除不是空格子或者不启用


      if (this.animalArray[rownum][i] != comeInfo.animalType.noOpen && this.animalArray[rownum][i] != comeInfo.animalType.none) {
        //也不是障碍物
        if (this.animalArray[rownum][i].animType != 0) {
          console.log('100000000000000');
          this.animalArray[rownum][i].clear();
        }
      }
    }
  },
  //纵向消除动物
  ColumnClear: function ColumnClear(rownum, columnnum) {
    for (var i = 0; i < 9; i++) {
      //排除自身
      if (i == rownum) {
        continue;
      } //排除不是空格子或者不启用


      if (this.animalArray[i][columnnum] != comeInfo.animalType.noOpen && this.animalArray[i][columnnum] != comeInfo.animalType.none) {
        //也不是障碍物
        if (this.animalArray[i][columnnum].animType != 0) {
          console.log('111111111111+++');
          this.animalArray[i][columnnum].clear();
        }
      }
    }
  },
  //范围消除动物
  RangeClear: function RangeClear(rownum, columnnum) {
    //要消除的集合
    var totalList = new Array(); //从上往下开始

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

    for (var i = 0; i < totalList.length; i++) {
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
  TypeClear: function TypeClear(animaltype) {
    for (var i = 0; i < comeInfo.row; i++) {
      for (var j = 0; j < comeInfo.column; j++) {
        //排除不启用和空格子
        if (this.animalArray[i][j] != comeInfo.animalType.noOpen && this.animalArray[i][j] != comeInfo.animalType.none) {
          if (this.animalArray[i][j].animType == animaltype) {
            console.log('144444444444444');
            this.animalArray[i][j].clear();
          }
        }
      }
    }
  },
  //道具交换位置
  proChangePos: function proChangePos(node) {
    if (node.can_move == false) {
      return;
    }

    if (this.prop_one == null) {
      this.prop_one = node;
      this.prop_one.node.scale = 1.2;
      return;
    } //重复点击


    if (this.prop_one == node) {
      return;
    }

    if (this.prop_one != null && this.prop_two == null) {
      this.mask.active = true;
      this.prop_two = node;
      var o_x = this.prop_one.columnNum;
      var o_y = this.prop_one.rowNum;
      var t_x = this.prop_two.columnNum;
      var t_y = this.prop_two.rowNum;
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
  replaceAll: function replaceAll() {
    this.NoAnimNode.active = false;
    var posArr = []; //将动物的位置放入数组

    var AnimArr2 = [];

    for (var i = this.info.Anim.length - 1; i >= 0; i--) {
      for (var j = 0; j < this.info.Anim[i].length; j++) {
        var anim = this.animalArray[i][j]; //得到这个动物

        if (anim == 0 || anim == -1) {
          //空格子或者未启用的格子
          continue;
        }

        if (anim.can_move == false) {
          continue;
        }

        var pos = [i, j];
        AnimArr2.push(anim);
        posArr.push(pos);
      }
    } //打乱数组顺序


    for (var _i8 = 0; _i8 < posArr.length; _i8++) {
      var lastIndex = posArr.length - 1 - _i8; //取出最后一个

      var index = Math.floor(Math.random() * lastIndex);
      var temp = [posArr[index][0], posArr[index][1]];
      posArr[index][0] = posArr[lastIndex][0];
      posArr[index][1] = posArr[lastIndex][1];
      posArr[lastIndex][0] = temp[0];
      posArr[lastIndex][1] = temp[1];
    }

    for (var _i9 = 0; _i9 < AnimArr2.length; _i9++) {
      AnimArr2[_i9].AnimMove(posArr[_i9][1], posArr[_i9][0]);
    }

    setTimeout(function () {
      var is_Matc = this.AllMatch(); //随机调换位置后重新匹配一下
      // console.log('有能消除的东西22222',is_Matc)

      if (is_Matc) {
        //如果有匹配上的
        this.clearOverFiled();
      }

      this.IsNoMatch();
    }.bind(this), comeInfo.animalMoveTime * 1000 + 300);
  },
  //----------判断是不是死图-----------------------------------
  IsNoMatch: function IsNoMatch() {
    // console.log('info===>', this.info.Anim)
    // console.log('animalArray===>', this.animalArray)
    for (var i = 0; i < this.info.Anim.length; i++) {
      for (var j = 1; j < this.info.Anim[i].length - 1; j++) {
        var anim = this.animalArray[i][j]; //得到这个动物

        if (anim == 0 || anim == -1) {
          //空格子或者未启用的格子
          continue;
        }

        if (anim.can_move == false) {
          continue;
        } //查看有没有可以消除的特殊效果


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
  isDie: function isDie(anim) {
    var x = anim.rowNum;
    var y = anim.columnNum;
    var animType = anim.animType; // console.log('isDie', x,y,animType)
    //任何一种匹配成功都可以

    var type1 = this.IsFirstLineCast(x, y, animType);
    var type2 = this.IsSecondLineCast(x, y, animType);
    var type3 = this.IsThirdLineCast(x, y, animType);
    var type4 = this.IsSameRowCol(x, y, animType);

    if (type1 || type2 || type3 || type4) {
      console.log('有可以消除的___', 'type1:' + type1, '  type2:' + type2, '  type3:' + type3, '  type4:' + type4);
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
  IsFirstLineCast: function IsFirstLineCast(x, y, animType) {
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
    } // 左下角与右下角


    if (isLeftBottomSame && isRightBottomSame) {
      //这个动物必须可以下移才可以
      if (this.animalArray[x][y - 1] != 0 && this.animalArray[x][y - 1] != -1 && this.animalArray[x][y - 1].can_move) {
        return true;
      }
    } // 左下角与左上角


    if (isLeftBottomSame && isLeftTopSame) {
      //这个动物必须可以左移才可以
      if (this.animalArray[x - 1][y] != 0 && this.animalArray[x - 1][y] != -1 && this.animalArray[x - 1][y].can_move) {
        return true;
      }
    } // 左上角与右上角


    if (isLeftTopSame && isRightTopSame) {
      //这个动物必须可以上移才可以
      if (this.animalArray[x][y + 1] != 0 && this.animalArray[x][y + 1] != -1 && this.animalArray[x][y + 1].can_move) {
        return true;
      }
    } // 右上角与右下角


    if (isRightTopSame && isRightBottomSame) {
      //这个动物必须可以上移才可以
      if (this.animalArray[x + 1][y] != 0 && this.animalArray[x + 1][y] != -1 && this.animalArray[x + 1][y].can_move) {
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
  IsSecondLineCast: function IsSecondLineCast(x, y, animType) {
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
          if (this.animalArray[x][y - 2] != 0 && this.animalArray[x][y - 2] != -1 && this.animalArray[x][y - 2].can_move) {
            return true;
          }
        } // 左上角


        if (isLeftTopSame) {
          //这个动物必须可以右移才可以
          if (this.animalArray[x][y + 1] != 0 && this.animalArray[x][y + 1] != -1 && this.animalArray[x][y + 1].can_move) {
            return true;
          }
        } // 右下角


        if (isRightBottomSame) {
          //这个动物必须可以左移才可以
          if (this.animalArray[x][y - 2] != 0 && this.animalArray[x][y - 2] != -1 && this.animalArray[x][y - 2].can_move) {
            return true;
          }
        } // 右上角


        if (isRightTopSame) {
          //这个动物必须可以右移才可以
          if (this.animalArray[x][y + 1] != 0 && this.animalArray[x][y + 1] != -1 && this.animalArray[x][y + 1].can_move) {
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
  IsThirdLineCast: function IsThirdLineCast(x, y, animType) {
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
          if (this.animalArray[x - 1][y] != 0 && this.animalArray[x - 1][y] != -1 && this.animalArray[x - 1][y].can_move) {
            return true;
          }
        } // 左上角


        if (isLeftTopSame) {
          //这个动物必须可以下移才可以
          if (this.animalArray[x - 1][y] != 0 && this.animalArray[x - 1][y] != -1 && this.animalArray[x - 1][y].can_move) {
            return true;
          }
        } // 右下角


        if (isRightBottomSame) {
          //这个动物必须可以上移才可以
          if (this.animalArray[x + 2][y] != 0 && this.animalArray[x + 2][y] != -1 && this.animalArray[x + 2][y].can_move) {
            return true;
          }
        } // 右上角


        if (isRightTopSame) {
          //这个动物必须可以下移才可以
          if (this.animalArray[x + 2][y] != 0 && this.animalArray[x + 2][y] != -1 && this.animalArray[x + 2][y].can_move) {
            return true;
          }
        }
      }
    }

    return false;
  },
  // 同一行或者同一列，有可以消除的
  IsSameRowCol: function IsSameRowCol(x, y, animType) {
    // 0x00 和 00x0
    if (x < 6) {
      var add1 = this.animalArray[x + 1][y];
      var add2 = this.animalArray[x + 2][y];
      var add3 = this.animalArray[x + 3][y]; // console.log(x+"---"+y)
      // console.log(animType)

      if (add1 && add1 != 0 && add1 != -1 && add3 && add3 != 0 && add3 != -1 && add2 && add2 != 0 && add2 != -1 && add2.can_move && add1.animType == animType && add3.animType == animType) {
        console.log('func1__', this.animalArray, x, y, animType);
        return true;
      }

      if (add2 && add2 != 0 && add2 != -1 && add3 && add3 != 0 && add3 != -1 && add1 && add1 != 0 && add1 != -1 && add1.can_move && add2.animType == animType && add3.animType == animType) {
        console.log('func2__', this.animalArray, x, y, animType);
        return true;
      }
    }

    if (y < 6) {
      // 纵向
      var addc1 = this.animalArray[x][y + 1];
      var addc2 = this.animalArray[x][y + 2];
      var addc3 = this.animalArray[x][y + 3]; // console.log(addc1)
      // console.log(addc2)
      // console.log(addc3)

      if (addc1 && addc1 != 0 && addc1 != -1 && addc3 && addc3 != 0 && addc3 != -1 && addc2 && addc2 != 0 && addc2 != -1 && addc2.can_move && addc1.animType == animType && addc3.animType == animType) {
        console.log('func3__', this.animalArray, x, y, animType);
        return true;
      }

      if (addc1 && addc1 != 0 && addc1 != -1 && addc2 && addc2 != 0 && addc2 != -1 && addc3 && addc3 != 0 && addc3 != -1 && addc1.can_move && addc2.animType == animType && addc3.animType == animType) {
        console.log('func4__', this.animalArray, x, y, animType);
        return true;
      }
    }

    return false;
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9uZXdzY3JpcHRzL01haW4vQW5pbWFsTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFuaW1QcmVmYWIiLCJQcmVmYWIiLCJhbmltYWxQYW5lbCIsIk5vZGUiLCJhbmltYWxBcnJheSIsInNlbGVjdExvZ28iLCJfZmlyc3ROb2RlIiwiX3NlY3RlZE5vZGUiLCJwcm9wX29uZSIsInByb3BfdHdvIiwibWFzayIsIm1hc2tOb2RlIiwiaXNfRmluaXNlZCIsImNsZWFybnVtIiwiTm9BbmltTm9kZSIsIm9uTG9hZCIsIlpMIiwiYW5pbU1nciIsImFuaW1hbFBvb2wiLCJOb2RlUG9vbCIsImluZm8iLCJsdmRhdGEiLCJhY3RpdmUiLCJvbk9wZW5NYXNrIiwib25DbG9zZU1hc2siLCJzdGFydCIsIklzTm9NYXRjaCIsIkluaXRBbmltYWwiLCJBcnJheSIsInJvdyIsIkFuaW0iLCJsZW5ndGgiLCJyb3dBcnJheSIsImNvbHVtbiIsInB1c2giLCJhIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImluaXRBbmltYWwiLCJTZXRFZmYiLCJOZXdGaWxsZWQiLCJpIiwiYW5pbVJvdyIsImoiLCJsZW4iLCJhbmltIiwiY2FuX21vdmUiLCJzZWFyY2hQb3MiLCJjcmVhdE5ldyIsIngiLCJ5IiwiaXNGaWxlZCIsImNyZWF0IiwiY29uc29sZSIsImxvZyIsIkFuaW1Nb3ZlIiwic2V0VGltZW91dCIsInRhcmdldE1nciIsIklzU2N1ZXNzZWQiLCJGaWxsT3ZlciIsImJpbmQiLCJpc19NYXRjIiwiQWxsTWF0Y2giLCJDTSIsIkluaXRWaWV3IiwiaWNlTWdyIiwicXFtb3ZlTnVtIiwiVVBBbGxNb3ZlIiwiaXNFbmQiLCJJc1NjdWVzcyIsImNvbWVJbmZvIiwicXFtb3ZlVGltZSIsImNsZWFyT3ZlckZpbGVkIiwiaXNNYXRjaGVkIiwibGlzdCIsIk1hdGNoT25lIiwiUmVtb3ZlQW5pbUxpc3QiLCJzZWxmIiwic2VhcmNoIiwicm93TnVtIiwiY29sdW1uTnVtIiwiQWRkUG9zIiwiZGlyIiwibmV4dF94IiwibmV4dF9hbmltYWwiLCJGaWxsZWRNb3ZlIiwic2VsZWN0Rmlyc3RBbmltYWwiLCJwb3MiLCJhbmltYWwiLCJzdG9wQW5pbSIsInBsYXlBbmltIiwic2V0UG9zaXRpb24iLCJub2RlIiwiZ2V0UG9zaXRpb24iLCJpc0ZyaWVuZCIsImNoYW5nZVBvcyIsImZyaWVuZCIsImZfeCIsImZfeSIsInNfeCIsInNfeSIsIk1hdGgiLCJhYnMiLCJpc21hdGNoIiwibXVzaWNNZ3IiLCJNeXBsYXlNdXNpYyIsIk1hdGNoQ2xlYXIiLCJhbmltYWxNb3ZlVGltZSIsImRlbGF5X2NsZWFyIiwiY2xlYXJUeXBlX2ZpcnN0IiwiY2xlYXJUeXBlIiwiY2xlYXJUeXBlX3NlY29uZCIsIlVJTWdyIiwiTWludXNTdGVwIiwiY2xlYXIiLCJhbmltYWxDbGVhclRpbWUiLCJhbmltVHlwZSIsImZuMSIsInNjYWxlVG8iLCJlYXNpbmciLCJlYXNlRWxhc3RpY091dCIsImZuMiIsImZhZGVPdXQiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInNwYXduIiwiYXR5cGUiLCJjbGVhclR5cGVhbGwiLCJjcmVhdFJvd0VmZiIsImNyZWF0Q29sbnVtRWZmIiwiQ3JlYXRURWZmIiwiZm4zIiwiZm40Iiwibm9kZTEiLCJub2RlMiIsImxpc3Rfb25lIiwibGlzdF90d28iLCJSbGlzdCIsIkNsaXN0IiwiTUxpc3QiLCJyb3dudW0iLCJjb2x1bW5udW0iLCJhbmltYWxUeXBlIiwibm9PcGVuIiwibm9uZSIsIm5leHRfeSIsIm1hdGNodHlwZSIsImNUeXBlIiwic3BlY2lhbFJlbW92ZSIsInR5cGUiLCJkZWxldGVNdUJpYW8iLCJDcmVhdEZpdmVFZmYiLCJyX2NvbHVtbiIsInJfcm93IiwiZWZmYXJyeSIsImVmZiIsIlJvd0NsZWFyIiwiQ29sdW1uQ2xlYXIiLCJSYW5nZUNsZWFyIiwidG90YWxMaXN0IiwiVHlwZUNsZWFyIiwiYW5pbWFsdHlwZSIsInByb0NoYW5nZVBvcyIsInNjYWxlIiwib194Iiwib195IiwidF94IiwidF95IiwiUHJvcE1nciIsInByb3BGaW5pc2hlZCIsInJlcGxhY2VBbGwiLCJwb3NBcnIiLCJBbmltQXJyMiIsImxhc3RJbmRleCIsImluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiaXNEaWUiLCJ0eXBlMSIsIklzRmlyc3RMaW5lQ2FzdCIsInR5cGUyIiwiSXNTZWNvbmRMaW5lQ2FzdCIsInR5cGUzIiwiSXNUaGlyZExpbmVDYXN0IiwidHlwZTQiLCJJc1NhbWVSb3dDb2wiLCJseCIsImx5IiwidHgiLCJ0eSIsImlzTGVmdEJvdHRvbVNhbWUiLCJpc0xlZnRUb3BTYW1lIiwiaXNSaWdodEJvdHRvbVNhbWUiLCJpc1JpZ2h0VG9wU2FtZSIsImFkZDEiLCJhZGQyIiwiYWRkMyIsImFkZGMxIiwiYWRkYzIiLCJhZGRjMyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxNQURQO0FBRVI7QUFDQUMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNPLElBSFI7QUFJUjtBQUNBQyxJQUFBQSxXQUFXLEVBQUUsSUFMTDtBQU1SO0FBQ0FDLElBQUFBLFVBQVUsRUFBRVQsRUFBRSxDQUFDTyxJQVBQO0FBUVJHLElBQUFBLFVBQVUsRUFBRSxJQVJKO0FBU1JDLElBQUFBLFdBQVcsRUFBRSxJQVRMO0FBVVI7QUFDQUMsSUFBQUEsUUFBUSxFQUFFLElBWEY7QUFZUkMsSUFBQUEsUUFBUSxFQUFFLElBWkY7QUFhUkMsSUFBQUEsSUFBSSxFQUFFZCxFQUFFLENBQUNPLElBYkQ7QUFjUlEsSUFBQUEsUUFBUSxFQUFFZixFQUFFLENBQUNPLElBZEw7QUFlUjtBQUNBUyxJQUFBQSxVQUFVLEVBQUUsS0FoQko7QUFn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QUssSUFBSSxDQUFDLENBUlYsSUFTQUEsS0FBSyxDQUFDekosUUFUTixJQVVBd0osS0FBSyxDQUFDbEYsUUFBTixJQUFrQkEsUUFWbEIsSUFXQW9GLEtBQUssQ0FBQ3BGLFFBQU4sSUFBa0JBLFFBWnRCLEVBYUU7QUFDRS9ELFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBS25ELFdBQTVCLEVBQXlDOEMsQ0FBekMsRUFBNENDLENBQTVDLEVBQStDa0UsUUFBL0M7QUFDQSxlQUFPLElBQVA7QUFDSDs7QUFFRCxVQUNJa0YsS0FBSyxJQUNMQSxLQUFLLElBQUksQ0FEVCxJQUVBQSxLQUFLLElBQUksQ0FBQyxDQUZWLElBR0FDLEtBSEEsSUFJQUEsS0FBSyxJQUFJLENBSlQsSUFLQUEsS0FBSyxJQUFJLENBQUMsQ0FMVixJQU1BQyxLQU5BLElBT0FBLEtBQUssSUFBSSxDQVBULElBUUFBLEtBQUssSUFBSSxDQUFDLENBUlYsSUFTQUYsS0FBSyxDQUFDeEosUUFUTixJQVVBeUosS0FBSyxDQUFDbkYsUUFBTixJQUFrQkEsUUFWbEIsSUFXQW9GLEtBQUssQ0FBQ3BGLFFBQU4sSUFBa0JBLFFBWnRCLEVBYUU7QUFDRS9ELFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUIsS0FBS25ELFdBQTVCLEVBQXlDOEMsQ0FBekMsRUFBNENDLENBQTVDLEVBQStDa0UsUUFBL0M7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKOztBQUVELFdBQU8sS0FBUDtBQUNIO0FBcCtDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFuaW1QcmVmYWI6IGNjLlByZWZhYixcclxuICAgICAgICAvL+WKqOeJqeWuueWZqFxyXG4gICAgICAgIGFuaW1hbFBhbmVsOiBjYy5Ob2RlLFxyXG4gICAgICAgIC8v5Yqo54mp5pWw57uEXHJcbiAgICAgICAgYW5pbWFsQXJyYXk6IG51bGwsXHJcbiAgICAgICAgLy/pgInkuK1sb2dvXHJcbiAgICAgICAgc2VsZWN0TG9nbzogY2MuTm9kZSxcclxuICAgICAgICBfZmlyc3ROb2RlOiBudWxsLFxyXG4gICAgICAgIF9zZWN0ZWROb2RlOiBudWxsLFxyXG4gICAgICAgIC8v6YGT5YW356ys5LiA5qyh77yM56ys5LqM5qyhXHJcbiAgICAgICAgcHJvcF9vbmU6IG51bGwsXHJcbiAgICAgICAgcHJvcF90d286IG51bGwsXHJcbiAgICAgICAgbWFzazogY2MuTm9kZSxcclxuICAgICAgICBtYXNrTm9kZTogY2MuTm9kZSxcclxuICAgICAgICAvL+mZkOWItuWPquWhq+WFheWujOaIkOS4gOasoVxyXG4gICAgICAgIGlzX0ZpbmlzZWQ6IGZhbHNlLCAvL+a2iOmZpOaXtuWPmOS4umZhbHNlXHJcbiAgICAgICAgLy/ov57nu63mtojpmaTmrKHmlbBcclxuICAgICAgICBjbGVhcm51bTogMCxcclxuXHJcbiAgICAgICAgLy/mj5DnpLrml6Dliqjnianlj6/mtojpmaRcclxuICAgICAgICBOb0FuaW1Ob2RlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuWkwuYW5pbU1nciA9IHRoaXM7XHJcbiAgICAgICAgLy/liJvlu7rliqjniannvJPlhrLmsaBcclxuICAgICAgICB0aGlzLmFuaW1hbFBvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTtcclxuICAgICAgICAvLyB0aGlzLmluZm89bHZkYXRhW1wiTHZcIitjb21lSW5mby5ub3dfbHZdOy8v6I635Y+W5Yiw6L+Z5LiA5YWz55qE5L+h5oGvXHJcbiAgICAgICAgdGhpcy5pbmZvID0gbHZkYXRhOyAvL+iOt+WPluWIsOi/meS4gOWFs+eahOS/oeaBr1xyXG4gICAgICAgIHRoaXMuTm9BbmltTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgb25PcGVuTWFzaygpIHtcclxuICAgICAgICB0aGlzLm1hc2tOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZU1hc2soKSB7XHJcbiAgICAgICAgdGhpcy5tYXNrTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5Jc05vTWF0Y2goKTtcclxuICAgIH0sXHJcbiAgICAvL+WunuS+i+WMluWKqOeJqVxyXG4gICAgSW5pdEFuaW1hbCgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hbEFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5pbmZvLkFuaW0ubGVuZ3RoOyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgcm93QXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5pbmZvLkFuaW1bcm93XS5sZW5ndGg7IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgICAgICAvL+afpeeci+aYr+WQpuacieWKqOeJqVxyXG4gICAgICAgICAgICAgICAgLy8gaWYobHZkYXRhW1wiTHZcIitjb21lSW5mby5ub3dfbHZdLkFuaW1bcm93XVtjb2x1bW5dPT0wKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICByb3dBcnJheS5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgIC8vIH1lbHNlIGlmKGx2ZGF0YVtcIkx2XCIrY29tZUluZm8ubm93X2x2XS5BbmltW3Jvd11bY29sdW1uXT09LTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHJvd0FycmF5LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBpZiAobHZkYXRhLkFuaW1bcm93XVtjb2x1bW5dID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByb3dBcnJheS5wdXNoKC0xKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobHZkYXRhLkFuaW1bcm93XVtjb2x1bW5dID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93QXJyYXkucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFuaW1QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsUGFuZWwuYWRkQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYS5nZXRDb21wb25lbnQoJ0FuaW1hbCcpLmluaXRBbmltYWwoY29sdW1uLCByb3csIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0FycmF5LnB1c2goYS5nZXRDb21wb25lbnQoJ0FuaW1hbCcpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5LnB1c2gocm93QXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlNldEVmZigpO1xyXG4gICAgfSxcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG4gICAgLy8tLS0tLS0tLS0tLeWhq+WFhS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy/loavlhYXmlrnlvI9cclxuICAgIE5ld0ZpbGxlZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluZm8uQW5pbSwgJ3RoaXMuaW5mby5BbmltJyk7XHJcbiAgICAgICAgLy/pgY3ljobmoLzlrZDkuK3mnInnmoTliqjnialcclxuXHJcbiAgICAgICAgLy8g5LyY5YyW5YmN5Luj56CBXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IHRoaXMuaW5mby5BbmltLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pbmZvLkFuaW1baV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBhbmltID0gdGhpcy5hbmltYWxBcnJheVtpXVtqXTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChhbmltID09IDAgfHwgYW5pbSA9PSAtMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGFuaW0uY2FuX21vdmUpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNlYXJjaFBvcyhhbmltKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gY2hhdGdwdOS8mOWMluWQjuS7o+eggVxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmluZm8uQW5pbS5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgYW5pbVJvdyA9IHRoaXMuYW5pbWFsQXJyYXlbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwLCBsZW4gPSBhbmltUm93Lmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IGFuaW1Sb3dbal07XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbSAmJiBhbmltLmNhbl9tb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQb3MoYW5pbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSB0aGlzLmluZm8uQW5pbS5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIC8vICAgICAvL+S7juWAkuaVsOesrOS6jOaOkuafpeaJvlxyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaW5mby5BbmltW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgYW5pbSA9IHRoaXMuYW5pbWFsQXJyYXlbaV1bal07IC8v5b6X5Yiw6L+Z5Liq5Yqo54mpXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoYW5pbSA9PSAwIHx8IGFuaW0gPT0gLTEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygn56m65qC85a2Q5oiW6ICF5pyq5ZCv55So55qE5qC85a2QJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy/nqbrmoLzlrZDmiJbogIXmnKrlkK/nlKjnmoTmoLzlrZBcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIC8v5p+l55yL5LuW5piv5ZCm5Y+v5Lul5LiL56e7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoYW5pbS5jYW5fbW92ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8v5bCx5a+75om+5LuW6IO956e75Yqo5Yiw5ZOq6YeMXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ+WwseWvu+aJvuS7luiDveenu+WKqOWIsOWTqumHjCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2VhcmNoUG9zKGFuaW0pO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuY3JlYXROZXcoKTtcclxuICAgIH0sXHJcbiAgICAvL1RPRE86IOS4i+mdouaYr+mAmui/h2NoYXRncHTkvJjljJblkI7nmoTku6PnoIFcclxuICAgIC8vIGNyZWF0TmV3KCkge1xyXG4gICAgLy8gICAgIGxldCB4LCB5O1xyXG4gICAgLy8gICAgIGxldCBpc0ZpbGxlZCA9IHRydWU7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluZm8uY3JlYXQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgeCA9IHRoaXMuaW5mby5jcmVhdFtpXVsxXTtcclxuICAgIC8vICAgICAgICAgeSA9IHRoaXMuaW5mby5jcmVhdFtpXVswXTtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbeSAqIHRoaXMuaW5mby5jb2xzICsgeF0gPT0gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFuaW1QcmVmYWIpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5hbmltYWxQYW5lbC5hZGRDaGlsZChhKTtcclxuICAgIC8vICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCdBbmltYWwnKS5pbml0QW5pbWFsKHgsIHkgLSAxLCB0aGlzKTtcclxuICAgIC8vICAgICAgICAgICAgIGEuZ2V0Q29tcG9uZW50KCdBbmltYWwnKS5BbmltTW92ZSh4LCB5KTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeSAqIHRoaXMuaW5mby5jb2xzICsgeF0gPSBhLmdldENvbXBvbmVudCgnQW5pbWFsJyk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNlYXJjaFBvcyh0aGlzLmFuaW1hbEFycmF5W3kgKiB0aGlzLmluZm8uY29scyArIHhdKTtcclxuICAgIC8vICAgICAgICAgICAgIGlzRmlsbGVkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGlzRmlsbGVkKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjYy5aTC50YXJnZXRNZ3IuSXNTY3Vlc3NlZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMuRmlsbE92ZXIoKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jcmVhdE5ldygpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG4gICAgLy8gVE9ETzrkuIvpnaLmmK/kvJjljJbliY3nmoTku6PnoIFcclxuICAgIC8vIGNyZWF0TmV3KCkge1xyXG4gICAgLy8gICAgIC8v5aaC5p6c6Ieq5Li75Lqn55Sf5Yqo54mp55qE5qC85a2Q5Li656m65bCx5Lqn55Sf5Yqo54mpXHJcbiAgICAvLyAgICAgbGV0IHgsIHk7XHJcbiAgICAvLyAgICAgbGV0IGlzRmlsZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbmZvLmNyZWF0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5mby5jcmVhdC5sZW5ndGgsICd0aGlzLmluZm8uY3JlYXQubGVuZ3RoJyk7XHJcbiAgICAvLyAgICAgICAgIHggPSB0aGlzLmluZm8uY3JlYXRbaV1bMV07XHJcbiAgICAvLyAgICAgICAgIHkgPSB0aGlzLmluZm8uY3JlYXRbaV1bMF07XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W3ldW3hdID09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmltUHJlZmFiKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuYW5pbWFsUGFuZWwuYWRkQ2hpbGQoYSk7XHJcbiAgICAvLyAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgnQW5pbWFsJykuaW5pdEFuaW1hbCh4LCB5IC0gMSwgdGhpcyk7XHJcbiAgICAvLyAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgnQW5pbWFsJykuQW5pbU1vdmUoeCwgeSk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ldW3hdID0gYS5nZXRDb21wb25lbnQoJ0FuaW1hbCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zZWFyY2hQb3ModGhpcy5hbmltYWxBcnJheVt5XVt4XSk7XHJcbiAgICAvLyAgICAgICAgICAgICBpc0ZpbGVkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgc2V0VGltZW91dChcclxuICAgIC8vICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGlzRmlsZWQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvL+Whq+WFheWujOaIkFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGlmIChjYy5aTC50YXJnZXRNZ3IuSXNTY3Vlc3NlZCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuRmlsbE92ZXIoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNyZWF0TmV3KCk7XHJcbiAgICAvLyAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgIC8vICAgICAgICAgY29tZUluZm8uYW5pbWFsTW92ZVRpbWUgKiAxMDAwXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgY3JlYXROZXcoKSB7XHJcbiAgICAgICAgLy/lpoLmnpzoh6rkuLvkuqfnlJ/liqjniannmoTmoLzlrZDkuLrnqbrlsLHkuqfnlJ/liqjnialcclxuICAgICAgICBsZXQgeCwgeTtcclxuICAgICAgICBsZXQgaXNGaWxlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmluZm8uY3JlYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmZvLmNyZWF0Lmxlbmd0aCwgJ3RoaXMuaW5mby5jcmVhdC5sZW5ndGgnKTtcclxuICAgICAgICAgICAgeCA9IHRoaXMuaW5mby5jcmVhdFtpXVsxXTtcclxuICAgICAgICAgICAgeSA9IHRoaXMuaW5mby5jcmVhdFtpXVswXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbeV1beF0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hbmltYWxBcnJheVt5XVt4XSwgJ3RoaXMuYW5pbWFsQXJyYXknKTtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gY2MuaW5zdGFudGlhdGUodGhpcy5hbmltUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsUGFuZWwuYWRkQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgnQW5pbWFsJykuaW5pdEFuaW1hbCh4LCB5IC0gMSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICBhLmdldENvbXBvbmVudCgnQW5pbWFsJykuQW5pbU1vdmUoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ldW3hdID0gYS5nZXRDb21wb25lbnQoJ0FuaW1hbCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hQb3ModGhpcy5hbmltYWxBcnJheVt5XVt4XSk7XHJcbiAgICAgICAgICAgICAgICBpc0ZpbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+a1i+ivlXNldFRpbWVvdXQnKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+Whq+WFheWujOaIkCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5aGr5YWF5a6M5oiQXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLlpMLnRhcmdldE1nci5Jc1NjdWVzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5GaWxsT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXROZXcoKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICA1MFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8v5aGr5YWF5a6M5oiQ5ZCO55qE5ZCO57ut5pON5L2cXHJcbiAgICBGaWxsT3ZlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmlsbE92ZXInKTtcclxuICAgICAgICBsZXQgaXNfTWF0YyA9IHRoaXMuQWxsTWF0Y2goKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpc19NYXRjLCAnaXNfTWF0YycpO1xyXG4gICAgICAgIGlmICghaXNfTWF0Yykge1xyXG4gICAgICAgICAgICAvL+aXoOmcgOimgea2iOmZpOeahFxyXG4gICAgICAgICAgICB0aGlzLl9maXJzdE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWN0ZWROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RMb2dvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLlpMLkNNLkluaXRWaWV3KHRoaXMuY2xlYXJudW0pOyAvL+iuvue9rumfs+aViFxyXG4gICAgICAgICAgICB0aGlzLmNsZWFybnVtID0gMDtcclxuICAgICAgICAgICAgaWYgKGNjLlpMLmljZU1nci5xcW1vdmVOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL+mcgOimgeeQg+eQg+enu+WKqFxyXG4gICAgICAgICAgICAgICAgY2MuWkwuaWNlTWdyLlVQQWxsTW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yik5pat5piv5ZCm6IOc5YipXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0VuZCA9IGNjLlpMLnRhcmdldE1nci5Jc1NjdWVzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbmQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5rKh5pyJ57uT5p2f5bCx55yL55yL5pyJ5rKh5pyJ5Y+v5raI6Zmk55qE5Yqo54mpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLklzTm9NYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbWVJbmZvLnFxbW92ZVRpbWUgKiAxNTAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/liKTmlq3mmK/lkKbog5zliKlcclxuICAgICAgICAgICAgICAgIGxldCBpc0VuZCA9IGNjLlpMLnRhcmdldE1nci5Jc1NjdWVzcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW5kID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmsqHmnInnu5PmnZ/lsLHnnIvnnIvmnInmsqHmnInlj6/mtojpmaTnmoTliqjnialcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLklzTm9NYXRjaCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDUwMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyT3ZlckZpbGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5aGr5YWF5Lul5ZCO5YWo6YOo5Yy56YWN5LiA5LiL77yM55yL55yL5pyJ5LmI5pyJ6ZyA6KaB5raI6Zmk55qE5Zyw5pa5XHJcbiAgICBBbGxNYXRjaCgpIHtcclxuICAgICAgICBsZXQgaXNNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5pbmZvLkFuaW0ubGVuZ3RoOyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmluZm8uQW5pbVtyb3ddLmxlbmd0aDsgY29sdW1uKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W3Jvd11bY29sdW1uXSAhPSAtMSAmJiB0aGlzLmFuaW1hbEFycmF5W3Jvd11bY29sdW1uXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLk1hdGNoT25lKHRoaXMuYW5pbWFsQXJyYXlbcm93XVtjb2x1bW5dKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmnInog73mtojpmaTnmoTkuJzopb8nLCBsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZW1vdmVBbmltTGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTWF0Y2hlZDtcclxuICAgIH0sXHJcbiAgICAvL+aQnOWvu+acgOe7iOWPr+enu+WKqOWIsOeahOWcsOaWuVxyXG4gICAgc2VhcmNoUG9zKGFuaW0pIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IGZ1bmN0aW9uIChhbmltKSB7XHJcbiAgICAgICAgICAgIGxldCBpID0gYW5pbS5yb3dOdW07XHJcbiAgICAgICAgICAgIGxldCBqID0gYW5pbS5jb2x1bW5OdW07XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA+IHNlbGYuYW5pbWFsQXJyYXkubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICAgICAgLy/pmLLmraLotoXotorkuIvmlrnovrnnlYxcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+afpeeci+S4i+aWueaYr+WQpuaYr+epuueJqeS9k1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5hbmltYWxBcnJheVtpICsgMV1bal0gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/lsLHkuIvnp7tcclxuICAgICAgICAgICAgICAgIHNlbGYuYW5pbWFsQXJyYXlbaV1bal0uQWRkUG9zKGosIGkgKyAxKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuYW5pbWFsQXJyYXlbaV1bal0gPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+afpeeci+W3puWPs+S4i+aWueaYr+WQpuS4uuepulxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGlyID0gMTsgZGlyID49IC0xOyBkaXIgLT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0X3ggPSBqICsgZGlyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6Ziy5q2i6LaF5Ye65pWw57uE6L6555WMXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRfeCA8IDAgJiYgbmV4dF94ID4gc2VsZi5pbmZvLkFuaW1baV0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluWKqOeJqeaVsOe7hOS4reeahOS9jee9rlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0X2FuaW1hbCA9IHNlbGYuYW5pbWFsQXJyYXlbaSArIDFdW25leHRfeF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRfYW5pbWFsID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8v5aaC5p6c5piv56m65qC85a2QXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5LiK5pa55LiN5Li656m6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFuaW1hbEFycmF5W2ldW25leHRfeF0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzkuIrmlrnml6DmoLzlrZDmiJbogIXkuIrmlrnkuI3og73np7vliqjkuZ/lj6/ku6XloavlhYVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFuaW1hbEFycmF5W2ldW25leHRfeF0gPT0gLTEgfHwgc2VsZi5hbmltYWxBcnJheVtpXVtuZXh0X3hdLmNhbl9tb3ZlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYWxBcnJheVtpXVtqXS5BZGRQb3MobmV4dF94LCBpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYWxBcnJheVtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+S4iuaWueesrDLkuKrkuZ/kuLrnqbpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIC0gMSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFuaW1hbEFycmF5W2kgLSAxXVtuZXh0X3hdID09IC0xIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYWxBcnJheVtpIC0gMV1bbmV4dF94XS5jYW5fbW92ZSA9PSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYWxBcnJheVtpXVtqXS5BZGRQb3MobmV4dF94LCBpICsgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbmltYWxBcnJheVtpXVtqXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChzZWFyY2goYW5pbSkpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzog73np7vliqjlsLHnu6fnu63mib7kuIvkuIDkuKpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hQb3MoYW5pbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmib7liLDkuobmnIDlkI7kuIDkuKrngrnlsLHlvIDlp4tcclxuICAgICAgICAgICAgYW5pbS5GaWxsZWRNb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvL+WKqOeJqemAieS4rVxyXG4gICAgc2VsZWN0Rmlyc3RBbmltYWwocG9zKSB7XHJcbiAgICAgICAgbGV0IGFuaW1hbCA9IHRoaXMuYW5pbWFsQXJyYXlbcG9zLnldW3Bvcy54XTtcclxuICAgICAgICBpZiAoYW5pbWFsID09IC0xIHx8IGFuaW1hbCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv56m65qC85a2Q5oiW6ICF5pyq5ZCv55SoXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFhbmltYWwuY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgLy/kuI3og73pgInkuI3og73np7vliqjnmoRcclxuICAgICAgICAgICAgYW5pbWFsLnN0b3BBbmltKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2ZpcnN0Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0Tm9kZSA9IGFuaW1hbDtcclxuICAgICAgICAgICAgdGhpcy5fZmlyc3ROb2RlLnBsYXlBbmltKDApO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdExvZ28uc2V0UG9zaXRpb24oYW5pbWFsLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0TG9nby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9maXJzdE5vZGUgPT0gYW5pbWFsKSB7XHJcbiAgICAgICAgICAgICAgICAvL+mHjeWkjeeCueWHu1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NlY3RlZE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2VjdGVkTm9kZSA9IGFuaW1hbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3RlZE5vZGUuc3RvcEFuaW0oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpcnN0Tm9kZS5zdG9wQW5pbSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGcmllbmQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v55u46YK7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQb3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LiN55u46YK7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlyc3ROb2RlID0gYW5pbWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZpcnN0Tm9kZS5wbGF5QW5pbSgwKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdExvZ28uc2V0UG9zaXRpb24oYW5pbWFsLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2VjdGVkTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/liKTmlq0y5Liq5Yqo54mp5piv5ZCm55u46YK7XHJcbiAgICBpc0ZyaWVuZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZmlyc3ROb2RlICE9IG51bGwgJiYgdGhpcy5fc2VjdGVkTm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBmcmllbmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGZfeCA9IHRoaXMuX2ZpcnN0Tm9kZS5jb2x1bW5OdW07XHJcbiAgICAgICAgICAgIGxldCBmX3kgPSB0aGlzLl9maXJzdE5vZGUucm93TnVtO1xyXG4gICAgICAgICAgICBsZXQgc194ID0gdGhpcy5fc2VjdGVkTm9kZS5jb2x1bW5OdW07XHJcbiAgICAgICAgICAgIGxldCBzX3kgPSB0aGlzLl9zZWN0ZWROb2RlLnJvd051bTtcclxuICAgICAgICAgICAgaWYgKGZfeCA9PSBzX3gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhmX3kgLSBzX3kpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZfeSA9PSBzX3kpIHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhmX3ggLSBzX3gpID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmcmllbmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmcmllbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5Yqo54mp5Lqk5o2iICAo5piv5ZCm5Y675Yy56YWN5raI6ZmkKVxyXG4gICAgY2hhbmdlUG9zKGlzbWF0Y2gpIHtcclxuICAgICAgICBsZXQgZl94ID0gdGhpcy5fZmlyc3ROb2RlLmNvbHVtbk51bTtcclxuICAgICAgICBsZXQgZl95ID0gdGhpcy5fZmlyc3ROb2RlLnJvd051bTtcclxuICAgICAgICBsZXQgc194ID0gdGhpcy5fc2VjdGVkTm9kZS5jb2x1bW5OdW07XHJcbiAgICAgICAgbGV0IHNfeSA9IHRoaXMuX3NlY3RlZE5vZGUucm93TnVtO1xyXG4gICAgICAgIGNjLlpMLm11c2ljTWdyLk15cGxheU11c2ljKDEsIGZhbHNlKTsgLy/mkq3mlL7ngrnlh7vpn7PmlYhcclxuICAgICAgICB0aGlzLl9maXJzdE5vZGUuQW5pbU1vdmUoc194LCBzX3kpO1xyXG4gICAgICAgIHRoaXMuX3NlY3RlZE5vZGUuQW5pbU1vdmUoZl94LCBmX3kpO1xyXG4gICAgICAgIC8v56e75Yqo546p5Zyo6L+b6KGM5raI6ZmkXHJcbiAgICAgICAgaWYgKGlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLk1hdGNoQ2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIChjb21lSW5mby5hbmltYWxNb3ZlVGltZSArIGNvbWVJbmZvLmRlbGF5X2NsZWFyKSAqIDEwMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/moLnmja7nsbvlnovmnaXnibnmrormtojpmaTmiJbogIXljLnphY3mtojpmaRcclxuICAgIE1hdGNoQ2xlYXIoKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogMeOAgeS4gOS4queJueauiuWSjOS4gOS4quaZrumAmuaIluiAhTLkuKrmma7pgJpcclxuICAgICAgICAgKiAy44CBMuS4queJueauium4n1xyXG4gICAgICAgICAqIDPjgIHkuIDkuKrprZTlipvpuJ/lkozkuIDkuKrmma7pgJrnmoTpuJ9cclxuICAgICAgICAgKiA044CB5LiA5Liq6a2U5Yqb6bif5ZKM5LiA5Liq54m55q6K6bifXHJcbiAgICAgICAgICogNeOAgTLkuKrprZTlipvpuJ9cclxuICAgICAgICAgKi9cclxuICAgICAgICAvL2NjLlpMLm11c2ljTWdyLk15cGxheU11c2ljKDEsZmFsc2UpO1xyXG4gICAgICAgIGxldCBjbGVhclR5cGVfZmlyc3QgPSB0aGlzLl9maXJzdE5vZGUuY2xlYXJUeXBlO1xyXG4gICAgICAgIGxldCBjbGVhclR5cGVfc2Vjb25kID0gdGhpcy5fc2VjdGVkTm9kZS5jbGVhclR5cGU7XHJcbiAgICAgICAgaWYgKChjbGVhclR5cGVfZmlyc3QgIT0gNCAmJiBjbGVhclR5cGVfc2Vjb25kID09IDApIHx8IChjbGVhclR5cGVfZmlyc3QgPT0gMCAmJiBjbGVhclR5cGVfc2Vjb25kICE9IDQpKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNjLlpMLlVJTWdyLk1pbnVzU3RlcCgpO1xyXG4gICAgICAgICAgICAvL+aZrumAmuWMuemFjea2iOmZpFxyXG4gICAgICAgICAgICB0aGlzLk1hdGgodGhpcy5fZmlyc3ROb2RlLCB0aGlzLl9zZWN0ZWROb2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsZWFyVHlwZV9maXJzdCAhPSA0ICYmIGNsZWFyVHlwZV9maXJzdCAhPSAwICYmIGNsZWFyVHlwZV9zZWNvbmQgIT0gNCAmJiBjbGVhclR5cGVfc2Vjb25kICE9IDApIHtcclxuICAgICAgICAgICAgY2MuWkwuVUlNZ3IuTWludXNTdGVwKCk7XHJcbiAgICAgICAgICAgIC8vMuS4queJueaViOiKgueCueWFqOmDqOa2iOmZpFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMTExMTExMTExMTExJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0Tm9kZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWN0ZWROb2RlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIC8v5raI6Zmk5a6M5oiQ5ZCO5aGr5YWFXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5OZXdGaWxsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgY29tZUluZm8uYW5pbWFsQ2xlYXJUaW1lICogMTAwMCArIDEwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoKGNsZWFyVHlwZV9maXJzdCA9PSA0ICYmIGNsZWFyVHlwZV9zZWNvbmQgPT0gMCkgfHwgKGNsZWFyVHlwZV9maXJzdCA9PSAwICYmIGNsZWFyVHlwZV9zZWNvbmQgPT0gNCkpIHtcclxuICAgICAgICAgICAgY2MuWkwuVUlNZ3IuTWludXNTdGVwKCk7XHJcbiAgICAgICAgICAgIGNjLlpMLm11c2ljTWdyLk15cGxheU11c2ljKDI3LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmIChjbGVhclR5cGVfc2Vjb25kID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3RlZE5vZGUuYW5pbVR5cGUgPSB0aGlzLl9maXJzdE5vZGUuYW5pbVR5cGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm4xID0gY2Muc2NhbGVUbygxLCAzLCAzKS5lYXNpbmcoY2MuZWFzZUVsYXN0aWNPdXQoMC45KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm4yID0gY2MuZmFkZU91dCgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3RlZE5vZGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZm4xLCBmbjIpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjIyMjIyMjIyMjIyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlY3RlZE5vZGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgODAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlyc3ROb2RlLmFuaW1UeXBlID0gdGhpcy5fc2VjdGVkTm9kZS5hbmltVHlwZTtcclxuICAgICAgICAgICAgICAgIGxldCBmbjEgPSBjYy5zY2FsZVRvKDEsIDMsIDMpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjkpKTtcclxuICAgICAgICAgICAgICAgIGxldCBmbjIgPSBjYy5mYWRlT3V0KDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZmlyc3ROb2RlLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGZuMSwgZm4yKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzMzMzMzMzMzMzMzMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9maXJzdE5vZGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgODAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5raI6Zmk5a6M5oiQ5ZCO5aGr5YWFXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5OZXdGaWxsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgY29tZUluZm8uYW5pbWFsQ2xlYXJUaW1lICogMTAwMCArIDgwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgIChjbGVhclR5cGVfZmlyc3QgPT0gNCAmJiBjbGVhclR5cGVfc2Vjb25kICE9IDAgJiYgY2xlYXJUeXBlX3NlY29uZCAhPSA0KSB8fFxyXG4gICAgICAgICAgICAoY2xlYXJUeXBlX3NlY29uZCA9PSA0ICYmIGNsZWFyVHlwZV9maXJzdCAhPSAwICYmIGNsZWFyVHlwZV9maXJzdCAhPSA0KVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjYy5aTC5VSU1nci5NaW51c1N0ZXAoKTtcclxuICAgICAgICAgICAgLy/opoHmtojpmaTnmoTpuJ/nmoTnsbvlnoss5raI6Zmk5pa55byPXHJcbiAgICAgICAgICAgIGxldCBhdHlwZSwgY2xlYXJUeXBlYWxsO1xyXG4gICAgICAgICAgICBjYy5aTC5tdXNpY01nci5NeXBsYXlNdXNpYygyNywgZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoY2xlYXJUeXBlX2ZpcnN0ID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGF0eXBlID0gdGhpcy5fc2VjdGVkTm9kZS5hbmltVHlwZTtcclxuICAgICAgICAgICAgICAgIGNsZWFyVHlwZWFsbCA9IGNsZWFyVHlwZV9zZWNvbmQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm4xID0gY2Muc2NhbGVUbygxLCAzLCAzKS5lYXNpbmcoY2MuZWFzZUVsYXN0aWNPdXQoMC45KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm4yID0gY2MuZmFkZU91dCgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2ZpcnN0Tm9kZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShmbjEsIGZuMikpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXR5cGUgPSB0aGlzLl9maXJzdE5vZGUuYW5pbVR5cGU7XHJcbiAgICAgICAgICAgICAgICBjbGVhclR5cGVhbGwgPSBjbGVhclR5cGVfZmlyc3Q7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm4xID0gY2Muc2NhbGVUbygxLCAzLCAzKS5lYXNpbmcoY2MuZWFzZUVsYXN0aWNPdXQoMC45KSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm4yID0gY2MuZmFkZU91dCgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlY3RlZE5vZGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZm4xLCBmbjIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tZUluZm8ucm93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21lSW5mby5jb2x1bW47IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mjpLpmaTnqbrmoLzlrZDlkozkuI3lkK/nlKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2ldW2pdICE9IDAgJiYgdGhpcy5hbmltYWxBcnJheVtpXVtqXSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2ldW2pdLmFuaW1UeXBlID09IGF0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYW5pbWFsQXJyYXlbaV1bal0uY2xlYXJUeXBlPWNsZWFyVHlwZWFsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hbmltYWxBcnJheVtpXVtqXS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXJUeXBlYWxsID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbaV1bal0uY3JlYXRSb3dFZmYodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xlYXJUeXBlYWxsID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbaV1bal0uY3JlYXRDb2xudW1FZmYodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xlYXJUeXBlYWxsID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbaV1bal0uQ3JlYXRURWZmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21lSW5mby5yb3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29tZUluZm8uY29sdW1uOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mjpLpmaTnqbrmoLzlrZDlkozkuI3lkK/nlKhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbaV1bal0gIT0gMCAmJiB0aGlzLmFuaW1hbEFycmF5W2ldW2pdICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVtpXVtqXS5hbmltVHlwZSA9PSBhdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc0NDQ0NDQ0NDQ0NDQ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtpXVtqXS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mtojpmaTlrozmiJDlkI7loavlhYVcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk5ld0ZpbGxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tZUluZm8uYW5pbWFsQ2xlYXJUaW1lICogMTAwMCArIDMwMFxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICA4MDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGNsZWFyVHlwZV9maXJzdCA9PSA0ICYmIGNsZWFyVHlwZV9zZWNvbmQgPT0gNCkge1xyXG4gICAgICAgICAgICBjYy5aTC5VSU1nci5NaW51c1N0ZXAoKTtcclxuICAgICAgICAgICAgY2MuWkwubXVzaWNNZ3IuTXlwbGF5TXVzaWMoMjcsIGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IGZuMSA9IGNjLnNjYWxlVG8oMSwgMywgMykuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuOSkpO1xyXG4gICAgICAgICAgICBsZXQgZm4yID0gY2MuZmFkZU91dCgxKTtcclxuICAgICAgICAgICAgdGhpcy5fZmlyc3ROb2RlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGZuMSwgZm4yKSk7XHJcbiAgICAgICAgICAgIGxldCBmbjMgPSBjYy5zY2FsZVRvKDEsIDMsIDMpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjkpKTtcclxuICAgICAgICAgICAgbGV0IGZuNCA9IGNjLmZhZGVPdXQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlY3RlZE5vZGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZm4zLCBmbjQpKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbWVJbmZvLnJvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29tZUluZm8uY29sdW1uOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5o6S6Zmk56m65qC85a2Q5ZKM5LiN5ZCv55SoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVtpXVtqXSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbaV1bal0gIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnNTU1NTU1NTU1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtpXVtqXS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8v5raI6Zmk5a6M5oiQ5ZCO5aGr5YWFXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5OZXdGaWxsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbWVJbmZvLmFuaW1hbENsZWFyVGltZSAqIDEwMDAgKyAxMDBcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgODAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIE1hdGgobm9kZTEsIG5vZGUyKSB7XHJcbiAgICAgICAgbGV0IGxpc3Rfb25lID0gdGhpcy5NYXRjaE9uZShub2RlMSk7XHJcbiAgICAgICAgbGV0IGxpc3RfdHdvID0gdGhpcy5NYXRjaE9uZShub2RlMik7XHJcbiAgICAgICAgaWYgKGxpc3Rfb25lLmxlbmd0aCA9PSAwICYmIGxpc3RfdHdvLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLljLnphY3kuI3miJDlip9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUG9zKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLl9maXJzdE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9zZWN0ZWROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RMb2dvLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLljLnphY3miJDlip9cIik7XHJcbiAgICAgICAgICAgIGNjLlpMLlVJTWdyLk1pbnVzU3RlcCgpO1xyXG4gICAgICAgICAgICBpZiAobGlzdF9vbmUubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIC8v56ys5LiA5Liq5Yy56YWN5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZUFuaW1MaXN0KGxpc3Rfb25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobGlzdF90d28ubGVuZ3RoICE9IDApIHtcclxuICAgICAgICAgICAgICAgIC8v56ys5LqM5Liq5Lmf5Yy56YWN5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlbW92ZUFuaW1MaXN0KGxpc3RfdHdvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsZWFyT3ZlckZpbGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5Yy56YWN5LiA5LiqXHJcbiAgICBNYXRjaE9uZShub2RlKSB7XHJcbiAgICAgICAgLy/mqKrlkJHpmJ/liJdcclxuICAgICAgICBsZXQgUmxpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAvL+e6teWQkemYn+WIl1xyXG4gICAgICAgIGxldCBDbGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIC8v56ym5ZCI6KaB5rGC6Zif5YiXXHJcbiAgICAgICAgbGV0IE1MaXN0ID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgbGV0IHJvd251bSA9IG5vZGUucm93TnVtO1xyXG4gICAgICAgIGxldCBjb2x1bW5udW0gPSBub2RlLmNvbHVtbk51bTtcclxuICAgICAgICBsZXQgYW5pbVR5cGUgPSBub2RlLmFuaW1UeXBlO1xyXG4gICAgICAgIC8v5LiN5piv5Yqo54mp5LiN5Yy56YWNXHJcbiAgICAgICAgaWYgKGFuaW1UeXBlID49IDYgfHwgYW5pbVR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTUxpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5p+l55yL5qiq5pa55ZCR5piv5ZCm5Y+v5Lul5Yy56YWN5raI6ZmkXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vMOWQkeW3pjHlkJHlj7NcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0X3g7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY29sdW1ubnVtICsgajtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dF94ID0gY29sdW1ubnVtIC0gajtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL+mYsuatoui2heeVjFxyXG4gICAgICAgICAgICAgICAgaWYgKG5leHRfeCA8IDAgfHwgbmV4dF94ID4gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/pmLLmraLkuI3lkK/nlKjmiJbogIXnqbrmoLzlrZAtMe+8jDBcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3Jvd251bV1bbmV4dF94XSA9PSBjb21lSW5mby5hbmltYWxUeXBlLm5vT3BlbiB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbcm93bnVtXVtuZXh0X3hdID09IGNvbWVJbmZvLmFuaW1hbFR5cGUubm9uZVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVtyb3dudW1dW25leHRfeF0uYW5pbVR5cGUgPT0gYW5pbVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSbGlzdC5wdXNoKHRoaXMuYW5pbWFsQXJyYXlbcm93bnVtXVtuZXh0X3hdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mn6XnnIvnurXmlrnlkJHmmK/lkKblj6/ku6XljLnphY3mtojpmaRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSAxOyBpKyspIHtcclxuICAgICAgICAgICAgLy8w5LiKMeS4i1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRfeTtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSByb3dudW0gLSBqO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0X3kgPSByb3dudW0gKyBqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/pmLLmraLotoXnlYxcclxuICAgICAgICAgICAgICAgIGlmIChuZXh0X3kgPCAwIHx8IG5leHRfeSA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v6Ziy5q2i5LiN5ZCv55So5oiW6ICF56m65qC85a2QLTHvvIwwXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtuZXh0X3ldW2NvbHVtbm51bV0gPT0gY29tZUluZm8uYW5pbWFsVHlwZS5ub09wZW4gfHxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W25leHRfeV1bY29sdW1ubnVtXSA9PSBjb21lSW5mby5hbmltYWxUeXBlLm5vbmVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbmV4dF95XVtjb2x1bW5udW1dLmFuaW1UeXBlID09IGFuaW1UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpc3QucHVzaCh0aGlzLmFuaW1hbEFycmF5W25leHRfeV1bY29sdW1ubnVtXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WMuemFjeexu+WeiyAgICAvLzDvvJrml6DnsbvlnosgIDHvvJrmqKo05LiqIDLvvJrnurU05LiqIDPvvJpU57G75Z6LICA077yaNeS4qlxyXG4gICAgICAgIGxldCBtYXRjaHR5cGUgPSAwO1xyXG4gICAgICAgIC8v5Yy56YWN5YiwNeS4qlxyXG4gICAgICAgIGlmIChSbGlzdC5sZW5ndGggPj0gNCB8fCBDbGlzdC5sZW5ndGggPj0gNCkge1xyXG4gICAgICAgICAgICBtYXRjaHR5cGUgPSA0O1xyXG4gICAgICAgIH0gLy9U57G75Z6L5Yy56YWNXHJcbiAgICAgICAgZWxzZSBpZiAoKFJsaXN0Lmxlbmd0aCA9PSAyIHx8IFJsaXN0Lmxlbmd0aCA9PSAzKSAmJiAoQ2xpc3QubGVuZ3RoID09IDIgfHwgQ2xpc3QubGVuZ3RoID09IDMpKSB7XHJcbiAgICAgICAgICAgIG1hdGNodHlwZSA9IDM7XHJcbiAgICAgICAgfSAvL+e6tTTkuKpcclxuICAgICAgICBlbHNlIGlmIChDbGlzdC5sZW5ndGggPT0gMyAmJiBSbGlzdC5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgIG1hdGNodHlwZSA9IDI7XHJcbiAgICAgICAgfSAvL+aoqjTkuKpcclxuICAgICAgICBlbHNlIGlmIChDbGlzdC5sZW5ndGggPCAyICYmIFJsaXN0Lmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgICAgICAgIG1hdGNodHlwZSA9IDE7XHJcbiAgICAgICAgfSAvL+e6teaIluiAheaoqjPkuKpcclxuICAgICAgICBlbHNlIGlmICgoQ2xpc3QubGVuZ3RoID09IDIgJiYgUmxpc3QubGVuZ3RoIDwgMikgfHwgKENsaXN0Lmxlbmd0aCA8IDIgJiYgUmxpc3QubGVuZ3RoID09IDIpKSB7XHJcbiAgICAgICAgICAgIG1hdGNodHlwZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChSbGlzdC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAvL+WmguaenOaciTLkuKrlsLHnrKblkIjopoHmsYJcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBSbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgTUxpc3QucHVzaChSbGlzdFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKENsaXN0Lmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ2xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIE1MaXN0LnB1c2goQ2xpc3RbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChNTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8v5pyJ56ym5ZCI6KaB5rGC55qEXHJcbiAgICAgICAgICAgIE1MaXN0LnB1c2gobm9kZSk7IC8v5Yqg5YWl6Ieq6LqrXHJcbiAgICAgICAgICAgIE1MaXN0LnB1c2gobWF0Y2h0eXBlKTsgLy/liqDlhaXljLnphY3nsbvlnotcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1MaXN0O1xyXG4gICAgfSxcclxuICAgIC8v5Yy56YWN5oiQ5Yqf5bCx6L+b6KGM5a+55bqU55qE5raI6ZmkXHJcbiAgICBSZW1vdmVBbmltTGlzdChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5pc19GaW5pc2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy/ojrflj5bliLDljLnphY3nsbvlnotcclxuICAgICAgICBsZXQgY1R5cGUgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgaWYgKGNUeXBlID09IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzY2NjY2NjY2NjY2NjYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksICdpJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsaXN0LCAnbGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGlzdFtpXSwgJ2xpc3RbaV0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLlpMLlVJTWdyLkFkZFNjb3JlKGNjLlpMLlVJTWdyLmFkZF9zY29yZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWNpYWxSZW1vdmUobGlzdCwgY1R5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+S6p+eUn+eJueauiuaViOaenOeahOa2iOmZpFxyXG4gICAgc3BlY2lhbFJlbW92ZShsaXN0LCB0eXBlKSB7XHJcbiAgICAgICAgLy/mn6XnnIvljLnphY3nmoToioLngrnmmK/kuI3mmK/mma7pgJrnmoToioLngrlcclxuICAgICAgICBpZiAobGlzdFtsaXN0Lmxlbmd0aCAtIDJdLmNsZWFyVHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5pmu6YCa6IqC54K55bCx5oqK6Ieq6Lqr6K6+572u5oiQ54m55q6K5raI6Zmk6IqC54K5XHJcbiAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAyXS5kZWxldGVNdUJpYW8oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzc3Nzc3Nzc3Nzc3NzcnLCBsaXN0KTtcclxuICAgICAgICAgICAgLy/ojrflj5bov5nkuKroioLngrnnmoTkvY3nva7nlKjmnaXkuqfnlJ/nibnmlYjmoIfor4ZcclxuICAgICAgICAgICAgaWYgKGxpc3RbbGlzdC5sZW5ndGggLSAyXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8x77ya5qiqNOS4qlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAyXS5jcmVhdENvbG51bUVmZih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8y77ya57q1NOS4qlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAyXS5jcmVhdFJvd0VmZih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8z77yaVOexu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAyXS5DcmVhdFRFZmYoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8077yaNeS4qlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAyXS5DcmVhdEZpdmVFZmYoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WFtuS9meeahOiKgueCuea2iOmZpFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoIC0gMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WQpuiAheWwsemaj+acuumAieaLqeS4gOS4quaZrumAmuiKgueCue+8jOimgeaYr+ayoeacieWwseWFqOmDqOa2iOmZpFxyXG4gICAgICAgICAgICBsZXQgcl9jb2x1bW4gPSBudWxsO1xyXG4gICAgICAgICAgICBsZXQgcl9yb3cgPSBudWxsO1xyXG4gICAgICAgICAgICAvL+Wvu+aJvuaXoOeJueaViOiKgueCuVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoIC0gMjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS5jbGVhclR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJfY29sdW1uID0gbGlzdFtpXS5jb2x1bW5OdW07XHJcbiAgICAgICAgICAgICAgICAgICAgcl9yb3cgPSBsaXN0W2ldLnJvd051bTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocl9jb2x1bW4gIT0gbnVsbCAmJiByX3JvdyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvL+aJvuWIsOS6hlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbcl9yb3ddW3JfY29sdW1uXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzHvvJrmqKo05LiqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbcl9yb3ddW3JfY29sdW1uXS5jcmVhdENvbG51bUVmZih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzLvvJrnurU05LiqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbcl9yb3ddW3JfY29sdW1uXS5jcmVhdFJvd0VmZih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzPvvJpU57G75Z6LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbcl9yb3ddW3JfY29sdW1uXS5DcmVhdFRFZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLzTvvJo15LiqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbcl9yb3ddW3JfY29sdW1uXS5DcmVhdEZpdmVFZmYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy/lhbbkvZnnmoTlhajpg6jmtojpmaRcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS5yb3dOdW0gPT0gcl9yb3cgJiYgbGlzdFtpXS5jb2x1bW5OdW0gPT0gcl9jb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzg4ODg4ODg4ODg4ODgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFtpXS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6YO95Li654m55pWI6IqC54K577yM5YWo6YOo5raI6Zmk5bCx5aW9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzk5OTk5OTk5OTk5OScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RbaV0uY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+a2iOmZpOWQjuWhq+WFhVxyXG4gICAgY2xlYXJPdmVyRmlsZWQoKSB7XHJcbiAgICAgICAgLy/mtojpmaTlrozmiJDlkI7loavlhYVcclxuICAgICAgICBjYy5aTC5tdXNpY01nci5NeXBsYXlNdXNpYygyLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jbGVhcm51bSArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmNsZWFybnVtID4gMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhcm51bSA+PSA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFybnVtID0gNjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYy5aTC5tdXNpY01nci5NeXBsYXlNdXNpYyh0aGlzLmNsZWFybnVtICsgMSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5OZXdGaWxsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGNvbWVJbmZvLmFuaW1hbENsZWFyVGltZSAqIDEwMDBcclxuICAgICAgICApO1xyXG4gICAgfSxcclxuICAgIC8v54m55pWI6K6+572uXHJcbiAgICBTZXRFZmYoKSB7XHJcbiAgICAgICAgLy8gbGV0IGVmZmFycnk9bHZkYXRhW1wiTHZcIitjb21lSW5mby5ub3dfbHZdLmVmZjtcclxuICAgICAgICBsZXQgZWZmYXJyeSA9IGx2ZGF0YS5lZmY7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgY29tZUluZm8ucm93OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb21lSW5mby5jb2x1bW47IGNvbHVtbisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWZmYXJyeVtyb3ddW2NvbHVtbl0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5qiqXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtyb3ddW2NvbHVtbl0uY3JlYXRSb3dFZmYoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWZmYXJyeVtyb3ddW2NvbHVtbl0gPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v57q1XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtyb3ddW2NvbHVtbl0uY3JlYXRDb2xudW1FZmYoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZWZmYXJyeVtyb3ddW2NvbHVtbl0gPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbcm93XVtjb2x1bW5dLkNyZWF0VEVmZigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlZmZhcnJ5W3Jvd11bY29sdW1uXSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/prZTlipvpuJ9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3Jvd11bY29sdW1uXS5DcmVhdEZpdmVFZmYoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLeaoquWQkea2iOmZpOWKqOeJqS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgUm93Q2xlYXIocm93bnVtLCBjb2x1bW5OdW0pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbWVJbmZvLmNvbHVtbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8v5o6S6Zmk6Ieq6Lqr77yI6L+Z5Liq6IqC54K56Ieq6Lqr77yJXHJcbiAgICAgICAgICAgIGlmIChpID09IGNvbHVtbk51bSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/mjpLpmaTkuI3mmK/nqbrmoLzlrZDmiJbogIXkuI3lkK/nlKhcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtyb3dudW1dW2ldICE9IGNvbWVJbmZvLmFuaW1hbFR5cGUubm9PcGVuICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3Jvd251bV1baV0gIT0gY29tZUluZm8uYW5pbWFsVHlwZS5ub25lXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgLy/kuZ/kuI3mmK/pmpznoo3nialcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W3Jvd251bV1baV0uYW5pbVR5cGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMDAwMDAwMDAwMDAwMDAnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3Jvd251bV1baV0uY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+e6teWQkea2iOmZpOWKqOeJqVxyXG4gICAgQ29sdW1uQ2xlYXIocm93bnVtLCBjb2x1bW5udW0pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xyXG4gICAgICAgICAgICAvL+aOkumZpOiHqui6q1xyXG4gICAgICAgICAgICBpZiAoaSA9PSByb3dudW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5o6S6Zmk5LiN5piv56m65qC85a2Q5oiW6ICF5LiN5ZCv55SoXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbaV1bY29sdW1ubnVtXSAhPSBjb21lSW5mby5hbmltYWxUeXBlLm5vT3BlbiAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtpXVtjb2x1bW5udW1dICE9IGNvbWVJbmZvLmFuaW1hbFR5cGUubm9uZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIC8v5Lmf5LiN5piv6Zqc56KN54mpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVtpXVtjb2x1bW5udW1dLmFuaW1UeXBlICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTExMTExMTExMTExKysrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtpXVtjb2x1bW5udW1dLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/ojIPlm7TmtojpmaTliqjnialcclxuICAgIFJhbmdlQ2xlYXIocm93bnVtLCBjb2x1bW5udW0pIHtcclxuICAgICAgICAvL+imgea2iOmZpOeahOmbhuWQiFxyXG4gICAgICAgIGxldCB0b3RhbExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAvL+S7juS4iuW+gOS4i+W8gOWni1xyXG4gICAgICAgIGlmIChyb3dudW0gLSAyID49IDApIHtcclxuICAgICAgICAgICAgdG90YWxMaXN0LnB1c2godGhpcy5hbmltYWxBcnJheVtyb3dudW0gLSAyXVtjb2x1bW5udW1dKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd251bSAtIDEgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1ubnVtIC0gMSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExpc3QucHVzaCh0aGlzLmFuaW1hbEFycmF5W3Jvd251bSAtIDFdW2NvbHVtbm51bSAtIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b3RhbExpc3QucHVzaCh0aGlzLmFuaW1hbEFycmF5W3Jvd251bSAtIDFdW2NvbHVtbm51bV0pO1xyXG4gICAgICAgICAgICBpZiAoY29sdW1ubnVtICsgMSA8PSBjb21lSW5mby5jb2x1bW4gLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0b3RhbExpc3QucHVzaCh0aGlzLmFuaW1hbEFycmF5W3Jvd251bSAtIDFdW2NvbHVtbm51bSArIDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sdW1ubnVtIC0gMiA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRvdGFsTGlzdC5wdXNoKHRoaXMuYW5pbWFsQXJyYXlbcm93bnVtXVtjb2x1bW5udW0gLSAyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2x1bW5udW0gLSAxID49IDApIHtcclxuICAgICAgICAgICAgdG90YWxMaXN0LnB1c2godGhpcy5hbmltYWxBcnJheVtyb3dudW1dW2NvbHVtbm51bSAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvbHVtbm51bSArIDEgPD0gY29tZUluZm8uY29sdW1uIC0gMSkge1xyXG4gICAgICAgICAgICB0b3RhbExpc3QucHVzaCh0aGlzLmFuaW1hbEFycmF5W3Jvd251bV1bY29sdW1ubnVtICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29sdW1ubnVtICsgMiA8PSBjb21lSW5mby5jb2x1bW4gLSAxKSB7XHJcbiAgICAgICAgICAgIHRvdGFsTGlzdC5wdXNoKHRoaXMuYW5pbWFsQXJyYXlbcm93bnVtXVtjb2x1bW5udW0gKyAyXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyb3dudW0gKyAxIDw9IGNvbWVJbmZvLnJvdyAtIDEpIHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbm51bSArIDEgPD0gY29tZUluZm8uY29sdW1uIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxMaXN0LnB1c2godGhpcy5hbmltYWxBcnJheVtyb3dudW0gKyAxXVtjb2x1bW5udW0gKyAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG90YWxMaXN0LnB1c2godGhpcy5hbmltYWxBcnJheVtyb3dudW0gKyAxXVtjb2x1bW5udW1dKTtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbm51bSAtIDEgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxMaXN0LnB1c2godGhpcy5hbmltYWxBcnJheVtyb3dudW0gKyAxXVtjb2x1bW5udW0gLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJvd251bSArIDIgPD0gY29tZUluZm8ucm93IC0gMSkge1xyXG4gICAgICAgICAgICB0b3RhbExpc3QucHVzaCh0aGlzLmFuaW1hbEFycmF5W3Jvd251bSArIDJdW2NvbHVtbm51bV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL+S4jeaYr+epuueJqeS9k1xyXG4gICAgICAgICAgICBpZiAodG90YWxMaXN0W2ldICE9IDAgJiYgdG90YWxMaXN0W2ldICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S5n+S4jeaYr+manOeijeeJqVxyXG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsTGlzdFtpXS5hbmltVHlwZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzEzMzMzMzMzMzMzMzMzMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGlzdFtpXS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5ZCM57G75raI6ZmkXHJcbiAgICBUeXBlQ2xlYXIoYW5pbWFsdHlwZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tZUluZm8ucm93OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21lSW5mby5jb2x1bW47IGorKykge1xyXG4gICAgICAgICAgICAgICAgLy/mjpLpmaTkuI3lkK/nlKjlkoznqbrmoLzlrZBcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W2ldW2pdICE9IGNvbWVJbmZvLmFuaW1hbFR5cGUubm9PcGVuICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVtpXVtqXSAhPSBjb21lSW5mby5hbmltYWxUeXBlLm5vbmVcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2ldW2pdLmFuaW1UeXBlID09IGFuaW1hbHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzE0NDQ0NDQ0NDQ0NDQ0NCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W2ldW2pdLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6YGT5YW35Lqk5o2i5L2N572uXHJcbiAgICBwcm9DaGFuZ2VQb3Mobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlLmNhbl9tb3ZlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcF9vbmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnByb3Bfb25lID0gbm9kZTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wX29uZS5ub2RlLnNjYWxlID0gMS4yO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5aSN54K55Ye7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcF9vbmUgPT0gbm9kZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb3Bfb25lICE9IG51bGwgJiYgdGhpcy5wcm9wX3R3byA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BfdHdvID0gbm9kZTtcclxuICAgICAgICAgICAgbGV0IG9feCA9IHRoaXMucHJvcF9vbmUuY29sdW1uTnVtO1xyXG4gICAgICAgICAgICBsZXQgb195ID0gdGhpcy5wcm9wX29uZS5yb3dOdW07XHJcbiAgICAgICAgICAgIGxldCB0X3ggPSB0aGlzLnByb3BfdHdvLmNvbHVtbk51bTtcclxuICAgICAgICAgICAgbGV0IHRfeSA9IHRoaXMucHJvcF90d28ucm93TnVtO1xyXG4gICAgICAgICAgICB0aGlzLnByb3Bfb25lLkFuaW1Nb3ZlKHRfeCwgdF95KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wX3R3by5BbmltTW92ZShvX3gsIG9feSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcF9vbmUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnByb3Bfb25lID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wcm9wX3R3byA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5BbGxNYXRjaCgpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuWkwuUHJvcE1nci5wcm9wRmluaXNoZWQoMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5YWo6YOo5Yqo54mp6ZqP5py66LCD5o2i5L2N572uXHJcbiAgICByZXBsYWNlQWxsKCkge1xyXG4gICAgICAgIHRoaXMuTm9BbmltTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcG9zQXJyID0gW107IC8v5bCG5Yqo54mp55qE5L2N572u5pS+5YWl5pWw57uEXHJcbiAgICAgICAgbGV0IEFuaW1BcnIyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaW5mby5BbmltLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5pbmZvLkFuaW1baV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmltID0gdGhpcy5hbmltYWxBcnJheVtpXVtqXTsgLy/lvpfliLDov5nkuKrliqjnialcclxuICAgICAgICAgICAgICAgIGlmIChhbmltID09IDAgfHwgYW5pbSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v56m65qC85a2Q5oiW6ICF5pyq5ZCv55So55qE5qC85a2QXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbS5jYW5fbW92ZSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBbaSwgal07XHJcbiAgICAgICAgICAgICAgICBBbmltQXJyMi5wdXNoKGFuaW0pO1xyXG4gICAgICAgICAgICAgICAgcG9zQXJyLnB1c2gocG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJk+S5seaVsOe7hOmhuuW6j1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSBwb3NBcnIubGVuZ3RoIC0gMSAtIGk7IC8v5Y+W5Ye65pyA5ZCO5LiA5LiqXHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxhc3RJbmRleCk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gW3Bvc0FycltpbmRleF1bMF0sIHBvc0FycltpbmRleF1bMV1dO1xyXG4gICAgICAgICAgICBwb3NBcnJbaW5kZXhdWzBdID0gcG9zQXJyW2xhc3RJbmRleF1bMF07XHJcbiAgICAgICAgICAgIHBvc0FycltpbmRleF1bMV0gPSBwb3NBcnJbbGFzdEluZGV4XVsxXTtcclxuICAgICAgICAgICAgcG9zQXJyW2xhc3RJbmRleF1bMF0gPSB0ZW1wWzBdO1xyXG4gICAgICAgICAgICBwb3NBcnJbbGFzdEluZGV4XVsxXSA9IHRlbXBbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQW5pbUFycjIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgQW5pbUFycjJbaV0uQW5pbU1vdmUocG9zQXJyW2ldWzFdLCBwb3NBcnJbaV1bMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNfTWF0YyA9IHRoaXMuQWxsTWF0Y2goKTsgLy/pmo/mnLrosIPmjaLkvY3nva7lkI7ph43mlrDljLnphY3kuIDkuItcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfmnInog73mtojpmaTnmoTkuJzopb8yMjIyMicsaXNfTWF0YylcclxuICAgICAgICAgICAgICAgIGlmIChpc19NYXRjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzmnInljLnphY3kuIrnmoRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyT3ZlckZpbGVkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLklzTm9NYXRjaCgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgIGNvbWVJbmZvLmFuaW1hbE1vdmVUaW1lICogMTAwMCArIDMwMFxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgLy8tLS0tLS0tLS0t5Yik5pat5piv5LiN5piv5q275Zu+LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIElzTm9NYXRjaCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5mbz09PT4nLCB0aGlzLmluZm8uQW5pbSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYW5pbWFsQXJyYXk9PT0+JywgdGhpcy5hbmltYWxBcnJheSlcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW5mby5BbmltLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdGhpcy5pbmZvLkFuaW1baV0ubGVuZ3RoIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbSA9IHRoaXMuYW5pbWFsQXJyYXlbaV1bal07IC8v5b6X5Yiw6L+Z5Liq5Yqo54mpXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbSA9PSAwIHx8IGFuaW0gPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+epuuagvOWtkOaIluiAheacquWQr+eUqOeahOagvOWtkFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFuaW0uY2FuX21vdmUgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5p+l55yL5pyJ5rKh5pyJ5Y+v5Lul5raI6Zmk55qE54m55q6K5pWI5p6cXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5pbS5jbGVhclR5cGUgPT0gNCB8fCBhbmltLmFuaW1UeXBlID09IDYpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WmguaenOaYr+mtlOWKm+m4n1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhbmltLmNsZWFyVHlwZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgLSAxID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbaSAtIDFdW2pdICE9IDAgJiYgdGhpcy5hbmltYWxBcnJheVtpIC0gMV1bal0gIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2kgLSAxXVtqXS5jbGVhclR5cGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2kgKyAxXVtqXSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbaSArIDFdW2pdICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVtpICsgMV1bal0uY2xlYXJUeXBlICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogLSAxID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbaV1baiAtIDFdICE9IDAgJiYgdGhpcy5hbmltYWxBcnJheVtpXVtqIC0gMV0gIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2ldW2ogLSAxXS5jbGVhclR5cGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFzay5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiArIDEgPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2ldW2ogKyAxXSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbaV1baiArIDFdICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVtpXVtqICsgMV0uY2xlYXJUeXBlICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0RpZShhbmltKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pyJ5Y+v5Lul5raI6Zmk55qEXCIsdGhpcy5hbmltYWxBcnJheSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ayoeacieWPr+S7pea2iOmZpOeahCcpO1xyXG4gICAgICAgIHRoaXMuTm9BbmltTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBpc0RpZShhbmltKSB7XHJcbiAgICAgICAgbGV0IHggPSBhbmltLnJvd051bTtcclxuICAgICAgICBsZXQgeSA9IGFuaW0uY29sdW1uTnVtO1xyXG4gICAgICAgIGxldCBhbmltVHlwZSA9IGFuaW0uYW5pbVR5cGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzRGllJywgeCx5LGFuaW1UeXBlKVxyXG4gICAgICAgIC8v5Lu75L2V5LiA56eN5Yy56YWN5oiQ5Yqf6YO95Y+v5LulXHJcbiAgICAgICAgbGV0IHR5cGUxID0gdGhpcy5Jc0ZpcnN0TGluZUNhc3QoeCwgeSwgYW5pbVR5cGUpO1xyXG4gICAgICAgIGxldCB0eXBlMiA9IHRoaXMuSXNTZWNvbmRMaW5lQ2FzdCh4LCB5LCBhbmltVHlwZSk7XHJcbiAgICAgICAgbGV0IHR5cGUzID0gdGhpcy5Jc1RoaXJkTGluZUNhc3QoeCwgeSwgYW5pbVR5cGUpO1xyXG4gICAgICAgIGxldCB0eXBlNCA9IHRoaXMuSXNTYW1lUm93Q29sKHgsIHksIGFuaW1UeXBlKTtcclxuICAgICAgICBpZiAodHlwZTEgfHwgdHlwZTIgfHwgdHlwZTMgfHwgdHlwZTQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgICAgICAn5pyJ5Y+v5Lul5raI6Zmk55qEX19fJyxcclxuICAgICAgICAgICAgICAgICd0eXBlMTonICsgdHlwZTEsXHJcbiAgICAgICAgICAgICAgICAnICB0eXBlMjonICsgdHlwZTIsXHJcbiAgICAgICAgICAgICAgICAnICB0eXBlMzonICsgdHlwZTMsXHJcbiAgICAgICAgICAgICAgICAnICB0eXBlNDonICsgdHlwZTRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKlxyXG4gICAgICogTyBPXHJcbiAgICAgKiAgWFxyXG4gICAgICogTyBPXHJcbiAgICAgKi9cclxuICAgIElzRmlyc3RMaW5lQ2FzdCh4LCB5LCBhbmltVHlwZSkge1xyXG4gICAgICAgIHZhciBseCA9IHggLSAxO1xyXG4gICAgICAgIHZhciBseSA9IHkgLSAxO1xyXG4gICAgICAgIHZhciB0eCA9IHggKyAxO1xyXG4gICAgICAgIHZhciB0eSA9IHkgKyAxO1xyXG4gICAgICAgIHZhciBpc0xlZnRCb3R0b21TYW1lID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGlzTGVmdFRvcFNhbWUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXNSaWdodEJvdHRvbVNhbWUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXNSaWdodFRvcFNhbWUgPSBmYWxzZTtcclxuICAgICAgICBpZiAobHggPj0gMCAmJiBseSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2x4XVtseV0gIT0gMCAmJiB0aGlzLmFuaW1hbEFycmF5W2x4XVtseV0gIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W2x4XVtseV0uYW5pbVR5cGUgPT0gYW5pbVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xlZnRCb3R0b21TYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobHggPj0gMCAmJiB0eSA8IDkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XS5hbmltVHlwZSA9PSBhbmltVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTGVmdFRvcFNhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eCA8IDkgJiYgbHkgPj0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVt0eF1bbHldICE9IDAgJiYgdGhpcy5hbmltYWxBcnJheVt0eF1bbHldICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVt0eF1bbHldLmFuaW1UeXBlID09IGFuaW1UeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSaWdodEJvdHRvbVNhbWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eCA8IDkgJiYgdHkgPCA5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W3R4XVt0eV0gIT0gMCAmJiB0aGlzLmFuaW1hbEFycmF5W3R4XVt0eV0gIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hbEFycmF5W3R4XVt0eV0uYW5pbVR5cGUgPT0gYW5pbVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0VG9wU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5bem5LiL6KeS5LiO5Y+z5LiL6KeSXHJcbiAgICAgICAgaWYgKGlzTGVmdEJvdHRvbVNhbWUgJiYgaXNSaWdodEJvdHRvbVNhbWUpIHtcclxuICAgICAgICAgICAgLy/ov5nkuKrliqjnianlv4Xpobvlj6/ku6XkuIvnp7vmiY3lj6/ku6VcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4XVt5IC0gMV0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4XVt5IC0gMV0gIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeF1beSAtIDFdLmNhbl9tb3ZlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW3puS4i+inkuS4juW3puS4iuinklxyXG4gICAgICAgIGlmIChpc0xlZnRCb3R0b21TYW1lICYmIGlzTGVmdFRvcFNhbWUpIHtcclxuICAgICAgICAgICAgLy/ov5nkuKrliqjnianlv4Xpobvlj6/ku6Xlt6bnp7vmiY3lj6/ku6VcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4IC0gMV1beV0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4IC0gMV1beV0gIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeCAtIDFdW3ldLmNhbl9tb3ZlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW3puS4iuinkuS4juWPs+S4iuinklxyXG4gICAgICAgIGlmIChpc0xlZnRUb3BTYW1lICYmIGlzUmlnaHRUb3BTYW1lKSB7XHJcbiAgICAgICAgICAgIC8v6L+Z5Liq5Yqo54mp5b+F6aG75Y+v5Lul5LiK56e75omN5Y+v5LulXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeF1beSArIDFdICE9IDAgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeF1beSArIDFdICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3hdW3kgKyAxXS5jYW5fbW92ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlj7PkuIrop5LkuI7lj7PkuIvop5JcclxuICAgICAgICBpZiAoaXNSaWdodFRvcFNhbWUgJiYgaXNSaWdodEJvdHRvbVNhbWUpIHtcclxuICAgICAgICAgICAgLy/ov5nkuKrliqjnianlv4Xpobvlj6/ku6XkuIrnp7vmiY3lj6/ku6VcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4ICsgMV1beV0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4ICsgMV1beV0gIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeCArIDFdW3ldLmNhbl9tb3ZlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLypcclxuICAgICAqIE8gIE9cclxuICAgICAqICBYWFxyXG4gICAgICogTyAgT1xyXG4gICAgICovXHJcbiAgICBJc1NlY29uZExpbmVDYXN0KHgsIHksIGFuaW1UeXBlKSB7XHJcbiAgICAgICAgdmFyIGx4ID0geCAtIDE7XHJcbiAgICAgICAgdmFyIGx5ID0geSAtIDI7XHJcbiAgICAgICAgdmFyIHR4ID0geCArIDE7XHJcbiAgICAgICAgdmFyIHR5ID0geSArIDE7XHJcbiAgICAgICAgdmFyIGlzTGVmdEJvdHRvbVNhbWUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXNMZWZ0VG9wU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1JpZ2h0Qm90dG9tU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1JpZ2h0VG9wU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChseCA+PSAwICYmIGx5ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW2x5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbbHhdW2x5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW2x5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W2x4XVtseV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xlZnRCb3R0b21TYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobHggPj0gMCAmJiB0eSA8IDkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W2x4XVt0eV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xlZnRUb3BTYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHggPCA5ICYmIGx5ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW2x5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbdHhdW2x5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW2x5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W3R4XVtseV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0Qm90dG9tU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR4IDwgOSAmJiB0eSA8IDkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW3R5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbdHhdW3R5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW3R5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W3R4XVt0eV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0VG9wU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHkgLSAxID49IDAgJiYgdGhpcy5hbmltYWxBcnJheVt4XVt5IC0gMV0gIT0gMCAmJiB0aGlzLmFuaW1hbEFycmF5W3hdW3kgLSAxXSAhPSAtMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVt4XVt5IC0gMV0uYW5pbVR5cGUgPT0gYW5pbVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOW3puS4i+inklxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGVmdEJvdHRvbVNhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+i/meS4quWKqOeJqeW/hemhu+WPr+S7peWPs+enu+aJjeWPr+S7pVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4XVt5IC0gMl0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3hdW3kgLSAyXSAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3hdW3kgLSAyXS5jYW5fbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlt6bkuIrop5JcclxuICAgICAgICAgICAgICAgIGlmIChpc0xlZnRUb3BTYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov5nkuKrliqjnianlv4Xpobvlj6/ku6Xlj7Pnp7vmiY3lj6/ku6VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeF1beSArIDFdICE9IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4XVt5ICsgMV0gIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4XVt5ICsgMV0uY2FuX21vdmVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5Y+z5LiL6KeSXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSaWdodEJvdHRvbVNhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+i/meS4quWKqOeJqeW/hemhu+WPr+S7peW3puenu+aJjeWPr+S7pVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4XVt5IC0gMl0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3hdW3kgLSAyXSAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3hdW3kgLSAyXS5jYW5fbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlj7PkuIrop5JcclxuICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0VG9wU2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6L+Z5Liq5Yqo54mp5b+F6aG75Y+v5Lul5Y+z56e75omN5Y+v5LulXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3hdW3kgKyAxXSAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeF1beSArIDFdICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeF1beSArIDFdLmNhbl9tb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgLypcclxuICAgICAqIE8gT1xyXG4gICAgICogIFhcclxuICAgICAqICBYXHJcbiAgICAgKiBPIE9cclxuICAgICAqL1xyXG4gICAgSXNUaGlyZExpbmVDYXN0KHgsIHksIGFuaW1UeXBlKSB7XHJcbiAgICAgICAgdmFyIGx4ID0geCAtIDE7XHJcbiAgICAgICAgdmFyIGx5ID0geSAtIDE7XHJcbiAgICAgICAgdmFyIHR4ID0geCArIDI7XHJcbiAgICAgICAgdmFyIHR5ID0geSArIDE7XHJcbiAgICAgICAgdmFyIGlzTGVmdEJvdHRvbVNhbWUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaXNMZWZ0VG9wU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1JpZ2h0Qm90dG9tU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBpc1JpZ2h0VG9wU2FtZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChseCA+PSAwICYmIGx5ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW2x5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbbHhdW2x5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW2x5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W2x4XVtseV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xlZnRCb3R0b21TYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobHggPj0gMCAmJiB0eSA8IDkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbbHhdW3R5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W2x4XVt0eV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xlZnRUb3BTYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHggPCA5ICYmIGx5ID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW2x5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbdHhdW2x5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW2x5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W3R4XVtseV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0Qm90dG9tU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR4IDwgOSAmJiB0eSA8IDkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW3R5XSAhPSAwICYmIHRoaXMuYW5pbWFsQXJyYXlbdHhdW3R5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWFsQXJyYXlbdHhdW3R5XS5hbmltVHlwZSA9PSBhbmltVHlwZSAmJiB0aGlzLmFuaW1hbEFycmF5W3R4XVt0eV0uY2FuX21vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JpZ2h0VG9wU2FtZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh4ICsgMSA8IDkgJiYgdGhpcy5hbmltYWxBcnJheVt4ICsgMV1beV0gIT0gMCAmJiB0aGlzLmFuaW1hbEFycmF5W3ggKyAxXVt5XSAhPSAtMSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hbmltYWxBcnJheVt4ICsgMV1beV0uYW5pbVR5cGUgPT0gYW5pbVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIOW3puS4i+inklxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTGVmdEJvdHRvbVNhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+i/meS4quWKqOeJqeW/hemhu+WPr+S7peS4iuenu+aJjeWPr+S7pVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4IC0gMV1beV0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ggLSAxXVt5XSAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ggLSAxXVt5XS5jYW5fbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlt6bkuIrop5JcclxuICAgICAgICAgICAgICAgIGlmIChpc0xlZnRUb3BTYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/ov5nkuKrliqjnianlv4Xpobvlj6/ku6XkuIvnp7vmiY3lj6/ku6VcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeCAtIDFdW3ldICE9IDAgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4IC0gMV1beV0gIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4IC0gMV1beV0uY2FuX21vdmVcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g5Y+z5LiL6KeSXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNSaWdodEJvdHRvbVNhbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+i/meS4quWKqOeJqeW/hemhu+WPr+S7peS4iuenu+aJjeWPr+S7pVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYWxBcnJheVt4ICsgMl1beV0gIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ggKyAyXVt5XSAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ggKyAyXVt5XS5jYW5fbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlj7PkuIrop5JcclxuICAgICAgICAgICAgICAgIGlmIChpc1JpZ2h0VG9wU2FtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6L+Z5Liq5Yqo54mp5b+F6aG75Y+v5Lul5LiL56e75omN5Y+v5LulXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hbEFycmF5W3ggKyAyXVt5XSAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeCArIDJdW3ldICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWFsQXJyYXlbeCArIDJdW3ldLmNhbl9tb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWQjOS4gOihjOaIluiAheWQjOS4gOWIl++8jOacieWPr+S7pea2iOmZpOeahFxyXG4gICAgSXNTYW1lUm93Q29sKHgsIHksIGFuaW1UeXBlKSB7XHJcbiAgICAgICAgLy8gMHgwMCDlkowgMDB4MFxyXG4gICAgICAgIGlmICh4IDwgNikge1xyXG4gICAgICAgICAgICBsZXQgYWRkMSA9IHRoaXMuYW5pbWFsQXJyYXlbeCArIDFdW3ldO1xyXG4gICAgICAgICAgICBsZXQgYWRkMiA9IHRoaXMuYW5pbWFsQXJyYXlbeCArIDJdW3ldO1xyXG4gICAgICAgICAgICBsZXQgYWRkMyA9IHRoaXMuYW5pbWFsQXJyYXlbeCArIDNdW3ldO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh4K1wiLS0tXCIreSlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYW5pbVR5cGUpXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFkZDEgJiZcclxuICAgICAgICAgICAgICAgIGFkZDEgIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgYWRkMSAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgYWRkMyAmJlxyXG4gICAgICAgICAgICAgICAgYWRkMyAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGQzICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICBhZGQyICYmXHJcbiAgICAgICAgICAgICAgICBhZGQyICE9IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkZDIgIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIGFkZDIuY2FuX21vdmUgJiZcclxuICAgICAgICAgICAgICAgIGFkZDEuYW5pbVR5cGUgPT0gYW5pbVR5cGUgJiZcclxuICAgICAgICAgICAgICAgIGFkZDMuYW5pbVR5cGUgPT0gYW5pbVR5cGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZnVuYzFfXycsIHRoaXMuYW5pbWFsQXJyYXksIHgsIHksIGFuaW1UeXBlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBhZGQyICYmXHJcbiAgICAgICAgICAgICAgICBhZGQyICE9IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkZDIgIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIGFkZDMgJiZcclxuICAgICAgICAgICAgICAgIGFkZDMgIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgYWRkMyAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgYWRkMSAmJlxyXG4gICAgICAgICAgICAgICAgYWRkMSAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGQxICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICBhZGQxLmNhbl9tb3ZlICYmXHJcbiAgICAgICAgICAgICAgICBhZGQyLmFuaW1UeXBlID09IGFuaW1UeXBlICYmXHJcbiAgICAgICAgICAgICAgICBhZGQzLmFuaW1UeXBlID09IGFuaW1UeXBlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Z1bmMyX18nLCB0aGlzLmFuaW1hbEFycmF5LCB4LCB5LCBhbmltVHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHkgPCA2KSB7XHJcbiAgICAgICAgICAgIC8vIOe6teWQkVxyXG4gICAgICAgICAgICBsZXQgYWRkYzEgPSB0aGlzLmFuaW1hbEFycmF5W3hdW3kgKyAxXTtcclxuICAgICAgICAgICAgbGV0IGFkZGMyID0gdGhpcy5hbmltYWxBcnJheVt4XVt5ICsgMl07XHJcbiAgICAgICAgICAgIGxldCBhZGRjMyA9IHRoaXMuYW5pbWFsQXJyYXlbeF1beSArIDNdO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYWRkYzEpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFkZGMyKVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhZGRjMylcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgYWRkYzEgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMxICE9IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMxICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMyAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzMgIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzMgIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMyICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMiAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMiAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzIuY2FuX21vdmUgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMxLmFuaW1UeXBlID09IGFuaW1UeXBlICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMy5hbmltVHlwZSA9PSBhbmltVHlwZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmdW5jM19fJywgdGhpcy5hbmltYWxBcnJheSwgeCwgeSwgYW5pbVR5cGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIGFkZGMxICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMSAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMSAhPSAtMSAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzIgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMyICE9IDAgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMyICE9IC0xICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMyAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzMgIT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzMgIT0gLTEgJiZcclxuICAgICAgICAgICAgICAgIGFkZGMxLmNhbl9tb3ZlICYmXHJcbiAgICAgICAgICAgICAgICBhZGRjMi5hbmltVHlwZSA9PSBhbmltVHlwZSAmJlxyXG4gICAgICAgICAgICAgICAgYWRkYzMuYW5pbVR5cGUgPT0gYW5pbVR5cGVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZnVuYzRfXycsIHRoaXMuYW5pbWFsQXJyYXksIHgsIHksIGFuaW1UeXBlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG59KTtcclxuIl19