// TypeScript file
class Index extends eui.Component{
    private startbtn:eui.Button;
    public constructor(){
        super();
        // var testui= new eui.Component();
        this.skinName="src/NewFile.exml";
        // var button = new eui.Button();
        // button.skinName = "src/NewFile.exml";
        // this.addChild(this.startbtn);
        this.startbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.clickstart,this)
    }
    private clickstart(){
        this.parent.addChild(new Game());
        this.parent.removeChild(this);
    }
}