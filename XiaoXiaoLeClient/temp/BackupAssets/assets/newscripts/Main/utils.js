window.utils={
    //根据列号，行号设置位置
    rowColumnPosition(column,row){
        return cc.v2(-300+column*80,300-80*row);
    },
    //根据列号，行号设置位置
    rowColumnPosition_Anim(column,row){
        return cc.v2(-300+column*80,280-80*row);
    }
}