import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcom} from './starFighters'



// class Spacecraft{

//     constructor(public propusor:string){}

//     jumpIntoHyperSpace(){
//         console.log(`Entring hyperspace whith ${this.propusor}`)
//     }
// }

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

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
let falcon = new MilleniumFalcom()
falcon.jumpIntoHyperSpace()

// interface Containership{

//     cargoContainers: number

//   }

  let goodForTheJob = ( ship:Containership ) => ship.cargoContainers >2
  console.log(`Is falcon good for the job? ${goodForTheJob (falcon)?'yes':'NO'}`)