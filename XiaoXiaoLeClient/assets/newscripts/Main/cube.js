cc.Class({
    extends: cc.Component,

    properties: {
        //数字显示框
        //numlabel:cc.Label,
        //列号
        columnNum:-1,
        //行号
        rowNum:-1,
    },
    // onLoad () {},
    start () {
    },
    // update (dt) {},
    initCube(columnnum,rownum){
        this.columnNum=columnnum;
        this.rowNum=rownum;
        this.node.setPosition(utils.rowColumnPosition(columnnum,rownum));
    }
});
