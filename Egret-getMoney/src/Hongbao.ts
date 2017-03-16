// TypeScript file
class Hongbao extends egret.Sprite{
    private hongbao_body:egret.Bitmap;
    private downspeed:number;
    private hongbao_y:number;
    public constructor(){
        super();
        this.hongbao_body=new egret.Bitmap(RES.getRes("hong_png"));
        this.hongbao_body.width=80;
        this.hongbao_body.height=80;
        this.hongbao_body.x=280;
        this.hongbao_body.y=100;
        this.addChild(this.hongbao_body);
    }
    private speed:number=0;
    public drawDown(timeInterval:number){
        this.hongbao_body.y += timeInterval;
        if(this.hongbao_body.y>960){
            this.parent.removeChild(this);
        }
    }
    public getBlock():egret.Rectangle{
        return new egret.Rectangle(this.x,this.y,50,50);
    }
}