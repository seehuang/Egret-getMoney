// TypeScript file
class MainUI extends eui.Component{
    private restart:eui.Button;
    public constructor(){
        super();
        this.skinName="src/game.exml";
        this.restart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickstart,this)
    }
    private clickstart(){
        // this.parent.addChild(new Index());
        this.removeChild(this.restart);
        //egret.startTick(this.onUpdate,this);
    }

    // private lasttime:number=0;
    // private birthInterval:number=0;
    // private drawdown_layer:egret.Sprite; 
    // private onUpdate(timestamp:number):boolean{
    //     var mm = timestamp - this.lasttime;
    //     this.lasttime = timestamp;
    //     this.birthInterval +=mm;
    //     if(this.birthInterval>=1000){
    //         this.birthInterval=0;
    //         // var hongbao = new egret.Bitmap();
    //         var _myGrid:GridSprite = new GridSprite();  
    //         this.drawdown_layer.addChild(_myGrid);
    //     }

    //     // for(var i=this.numChildren;i>=0;i--){
    //     //     var hongbaos=<Hongbao>this.getChildAt(i);
    //     //     hongbaos.drawDown(mm);
    //     // }
    //     console.log(this.birthInterval);
    //     return false;
    // }
}