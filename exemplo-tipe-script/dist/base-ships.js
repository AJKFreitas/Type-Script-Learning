"use strict";
exports.__esModule = true;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propusor) {
        this.propusor = propusor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entring hyperspace whith " + this.propusor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
