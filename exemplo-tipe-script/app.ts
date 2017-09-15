let menssage: string ="Help me , Obi-Wan Kenobi."
console.log(menssage)
let episode: number = 4
//episode = '4' erro

episode = episode +1
console.log("Nex episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite Droid is " + favoriteDroid)

let call:(name:string)=>void
call = name=> console.log("Do you copy,"+name+"?")

function inc (speed:number,inc:number):number{
    return speed + inc
}
function inc2 (speed:number,inc?:number):number{
    let i = inc || 1
    return speed + i
}
function inc3 (speed:number,inc:number=1):number{
    return speed + inc
}

//parametros REST

// MULTIPLOS VALORES

function countJedis (jedis:number[]):number{
    return jedis.reduce((a,b)=> a+b,0)
}
countJedis([2,3,4])


function countJedisComParametrosREST (...jedis:number[]):number{
    return jedis.reduce((a,b)=> a+b,0)
}
countJedisComParametrosREST(2,3,4)

let isEnoughToBeatMF = function(parsecs: number) : boolean{
    return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance)?'YES':'NO'}` )//tamplete string : usar crase e permite usar expreções ${}


