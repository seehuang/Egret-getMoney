var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Lei = (function (_super) {
    __extends(Lei, _super);
    function Lei() {
        var _this = _super.call(this) || this;
        _this.Lei_body = new egret.Bitmap(RES.getRes("lei_png"));
        _this.Lei_body.width = 80;
        _this.Lei_body.height = 80;
        _this.Lei_body.x = 280;
        _this.Lei_body.y = 0;
        _this.addChild(_this.Lei_body);
        return _this;
    }
    Lei.prototype.drawDown = function (timeInterval) {
        this.Lei_body.y += timeInterval;
        var hand = new Hand();
        var handblock = hand.getBlock();
        console.log(handblock.width + "xx");
        console.log(handblock.height + "yy");
        if (this.getBlock().intersects(handblock) == true) {
            console.log("lei hit hit 112");
        }
        if (this.Lei_body.y > 960) {
            this.parent.removeChild(this);
        }
    };
    Lei.prototype.getBlock = function () {
        return new egret.Rectangle(this.Lei_body.x, this.Lei_body.y, 50, 50);
    };
    return Lei;
}(egret.Sprite));
__reflect(Lei.prototype, "Lei");
//# sourceMappingURL=Lei.js.map