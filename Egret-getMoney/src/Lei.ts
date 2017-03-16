// TypeScript file
class Lei extends egret.Sprite{
    private Lei_body:egret.Bitmap;
    private downspeed:number;
    private hongbao_y:number;
    public constructor(){
        super();
        this.Lei_body=new egret.Bitmap(RES.getRes("lei_png"));
        this.Lei_body.width=80;
        this.Lei_body.height=80;
        this.Lei_body.x=280;
        this.Lei_body.y=0;
        this.addChild(this.Lei_body);
    }
    public drawDown(timeInterval:number){
        this.Lei_body.y += timeInterval;
        var hand = new Hand();
        var handblock =hand.getBlock();
        console.log(handblock.width+"xx");
        console.log(handblock.height+"yy")
        if(this.getBlock().intersects(handblock)==true){
            console.log("lei hit hit 112");
        }
        if(this.Lei_body.y>960){
            this.parent.removeChild(this);
        }
    }
    public getBlock():egret.Rectangle{
        return new egret.Rectangle(this.Lei_body.x,this.Lei_body.y,50,50);
    }
}