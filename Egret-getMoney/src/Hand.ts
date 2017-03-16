// TypeScript file
class Hand extends eui.Component{
    private hand_body:egret.Bitmap;

    public constructor(){
        super();
        this.hand_body=new egret.Bitmap(RES.getRes("hand_png"));
        this.hand_body.touchEnabled=true;
        this.hand_body.x=190;
        this.hand_body.y=783;
        this.hand_body.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCatch,this);
        this.addChild(this.hand_body);
    }
     public getBlock():egret.Rectangle{
        return new egret.Rectangle(this.hand_body.x,this.hand_body.y,this.hand_body.width,200);
    }
    private onCatch(e:egret.TouchEvent){
        var beginRotate = this.hand_body.rotation;
        egret.Tween.get(this.hand_body).to({"rotation":-120,"height":200},200).call(function(){}).wait(10).to({"rotation":-20,"height":100},200);
        
    }
}