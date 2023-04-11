"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Girafe = void 0;
var Girafe = /** @class */ (function (_super) {
    __extends(Girafe, _super);
    function Girafe(name, weigth, race) {
        var _this = _super.call(this, race) || this;
        _this.height = 0;
        _this.name = name;
        _this.weight = weigth;
        return _this;
    }
    return Girafe;
}(Animals));
exports.Girafe = Girafe;
