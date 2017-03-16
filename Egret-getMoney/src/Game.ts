// TypeScript file
class Game extends eui.Component{
    private _hong_layer:egret.Sprite; 
    private _lei_layer:egret.Sprite; 
    private restart:eui.Button;
    //private hand:eui.Image;
    public constructor(){
        super();
        // this.addChild(new MainUI());
        this._hong_layer = new egret.Sprite();
        this._lei_layer = new egret.Sprite();
        this.addChild(this._hong_layer);
        this.addChild(this._lei_layer);
        this.skinName="src/game.exml";
        this.restart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickstart,this)
        this.addChild(new Hand());
        //this.hand.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCatch,this)
    }
    private clickstart(){
        this.removeChild(this.restart);
        egret.startTick(this.onUpdate,this);
    }

    private lasttime:number=0;
    private birthInterval:number=0;
   
    private onUpdate(timestamp:number):boolean{
        var mm = timestamp - this.lasttime;
        this.lasttime = timestamp;
        this.birthInterval +=mm;
        if(this.birthInterval>=3000){
            this.birthInterval=0;
            var hongbao = new Hongbao();
            var lei = new Lei();
            this._hong_layer.addChild(hongbao);
            this._lei_layer.addChild(lei);
        }

        for(var i=this._hong_layer.numChildren-1;i>=0;i--){
            var hongbaos=<Hongbao>this._hong_layer.getChildAt(i);
            hongbaos.drawDown(mm);

        }
        for(var i=this._lei_layer.numChildren-1;i>=0;i--){
            var leis=<Lei>this._lei_layer.getChildAt(i);
            leis.drawDown(mm);

        }
        return false;
    }

    // private onCatch(e:egret.TouchEvent){
    //     var beginRotate = this.hand.rotation;

    //     egret.Tween.get(this.hand).to({"rotation":-120,"height":150},200).call(function(){}).wait(10).to({"rotation":-20},200);
        
    // }

}