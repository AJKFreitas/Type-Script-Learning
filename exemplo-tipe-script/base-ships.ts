class Spacecraft{

    constructor(public propusor:string){}

    jumpIntoHyperSpace(){
        console.log(`Entring hyperspace whith ${this.propusor}`)
    }
}
interface Containership{

    cargoContainers: number

  }

  export{Spacecraft, Containership}