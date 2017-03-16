var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Hand = (function (_super) {
    __extends(Hand, _super);
    function Hand() {
        var _this = _super.call(this) || this;
        _this.hand_body = new egret.Bitmap(RES.getRes("hand_png"));
        _this.hand_body.touchEnabled = true;
        _this.hand_body.x = 190;
        _this.hand_body.y = 783;
        _this.hand_body.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onCatch, _this);
        _this.addChild(_this.hand_body);
        return _this;
    }
    Hand.prototype.getBlock = function () {
        return new egret.Rectangle(this.hand_body.x, this.hand_body.y, this.hand_body.width, 200);
    };
    Hand.prototype.onCatch = function (e) {
        var beginRotate = this.hand_body.rotation;
        egret.Tween.get(this.hand_body).to({ "rotation": -120, "height": 200 }, 200).call(function () { }).wait(10).to({ "rotation": -20, "height": 100 }, 200);
    };
    return Hand;
}(eui.Component));
__reflect(Hand.prototype, "Hand");
//# sourceMappingURL=Hand.js.map