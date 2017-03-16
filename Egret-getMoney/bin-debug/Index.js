var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Index = (function (_super) {
    __extends(Index, _super);
    function Index() {
        var _this = _super.call(this) || this;
        // var testui= new eui.Component();
        _this.skinName = "src/NewFile.exml";
        // var button = new eui.Button();
        // button.skinName = "src/NewFile.exml";
        // this.addChild(this.startbtn);
        _this.startbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.clickstart, _this);
        return _this;
    }
    Index.prototype.clickstart = function () {
        this.parent.addChild(new Game());
        this.parent.removeChild(this);
    };
    return Index;
}(eui.Component));
__reflect(Index.prototype, "Index");
//# sourceMappingURL=Index.js.map