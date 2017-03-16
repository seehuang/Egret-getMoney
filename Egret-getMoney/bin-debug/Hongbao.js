var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Hongbao = (function (_super) {
    __extends(Hongbao, _super);
    function Hongbao() {
        var _this = _super.call(this) || this;
        _this.speed = 0;
        _this.hongbao_body = new egret.Bitmap(RES.getRes("hong_png"));
        _this.hongbao_body.width = 80;
        _this.hongbao_body.height = 80;
        _this.hongbao_body.x = 280;
        _this.hongbao_body.y = 100;
        _this.addChild(_this.hongbao_body);
        return _this;
    }
    Hongbao.prototype.drawDown = function (timeInterval) {
        this.hongbao_body.y += timeInterval;
        if (this.hongbao_body.y > 960) {
            this.parent.removeChild(this);
        }
    };
    Hongbao.prototype.getBlock = function () {
        return new egret.Rectangle(this.x, this.y, 50, 50);
    };
    return Hongbao;
}(egret.Sprite));
__reflect(Hongbao.prototype, "Hongbao");
//# sourceMappingURL=Hongbao.js.map