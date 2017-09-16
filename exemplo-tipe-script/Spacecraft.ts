class Spacecraft{

    constructor(public propusor:string){}

    jumpIntoHyperSpace(){
        console.log(`Entring hyperspace whith ${this.propusor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()