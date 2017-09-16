"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starFighters_1 = require("./starFighters");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "="));
// class Spacecraft{
//     constructor(public propusor:string){}
//     jumpIntoHyperSpace(){
//         console.log(`Entring hyperspace whith ${this.propusor}`)
//     }
// }
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
// class MilleniumFalcom extends Spacecraft implements Containership{
//     cargoContainers: number;
//     constructor() {
//         super('Hyperdrive')
//         this.cargoContainers = 2
//     }
//     jumpIntoHyperSpace(){
//         if(Math.random() >= 0.5){
//             super.jumpIntoHyperSpace()
//         }else{
//             console.log('Failed to jump into hyperspace')
//         }
//     }
// }
var falcon = new starFighters_1.MilleniumFalcom();
falcon.jumpIntoHyperSpace();
// interface Containership{
//     cargoContainers: number
//   }
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'NO'));
