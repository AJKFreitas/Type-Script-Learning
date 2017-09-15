var menssage = "Help me , Obi-Wan Kenobi.";
console.log(menssage);
var episode = 4;
//episode = '4' erro
episode = episode + 1;
console.log("Nex episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite Droid is " + favoriteDroid);
var call;
call = function (name) { return console.log("Do you copy," + name + "?"); };
function inc(speed, inc) {
    return speed + inc;
}
function inc2(speed, inc) {
    var i = inc || 1;
    return speed + i;
}
function inc3(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
//parametros REST
// MULTIPLOS VALORES
function countJedis(jedis) {
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
countJedis([2, 3, 4]);
function countJedisComParametrosREST() {
    var jedis = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        jedis[_i] = arguments[_i];
    }
    return jedis.reduce(function (a, b) { return a + b; }, 0);
}
countJedisComParametrosREST(2, 3, 4);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO')); //tamplete string : usar crase e permite usar expreções ${}
