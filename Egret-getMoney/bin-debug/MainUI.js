var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    function MainUI() {
        var _this = _super.call(this) || this;
        _this.skinName = "src/game.exml";
        _this.restart.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.clickstart, _this);
        return _this;
    }
    MainUI.prototype.clickstart = function () {
        // this.parent.addChild(new Index());
        this.removeChild(this.restart);
        //egret.startTick(this.onUpdate,this);
    };
    return MainUI;
}(eui.Component));
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=MainUI.js.map