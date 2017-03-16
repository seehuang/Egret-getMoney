var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// TypeScript file
var Game = (function (_super) {
    __extends(Game, _super);
    //private hand:eui.Image;
    function Game() {
        var _this = _super.call(this) || this;
        _this.lasttime = 0;
        _this.birthInterval = 0;
        // this.addChild(new MainUI());
        _this._hong_layer = new egret.Sprite();
        _this._lei_layer = new egret.Sprite();
        _this.addChild(_this._hong_layer);
        _this.addChild(_this._lei_layer);
        _this.skinName = "src/game.exml";
        _this.restart.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.clickstart, _this);
        _this.addChild(new Hand());
        return _this;
        //this.hand.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCatch,this)
    }
    Game.prototype.clickstart = function () {
        this.removeChild(this.restart);
        egret.startTick(this.onUpdate, this);
    };
    Game.prototype.onUpdate = function (timestamp) {
        var mm = timestamp - this.lasttime;
        this.lasttime = timestamp;
        this.birthInterval += mm;
        if (this.birthInterval >= 3000) {
            this.birthInterval = 0;
            var hongbao = new Hongbao();
            var lei = new Lei();
            this._hong_layer.addChild(hongbao);
            this._lei_layer.addChild(lei);
        }
        for (var i = this._hong_layer.numChildren - 1; i >= 0; i--) {
            var hongbaos = this._hong_layer.getChildAt(i);
            hongbaos.drawDown(mm);
        }
        for (var i = this._lei_layer.numChildren - 1; i >= 0; i--) {
            var leis = this._lei_layer.getChildAt(i);
            leis.drawDown(mm);
        }
        return false;
    };
    return Game;
}(eui.Component));
__reflect(Game.prototype, "Game");
//# sourceMappingURL=Game.js.map