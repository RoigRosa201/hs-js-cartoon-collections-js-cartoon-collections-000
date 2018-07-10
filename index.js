function dwarfRollCall(dwarves) {
var result = "";
for (var i = 0; i < dwarves.length; i = i +1){
  result = result + (1+i) + ". " + dwarves[i]+ " "
}
return result;
}

function summonCaptainPlanet(planeteerCalls){
var i = 0;
var copyArray = new Array();
  while (i < planeteerCalls.length){
    copyArray[i] = planeteerCalls[i].toUpperCase() + "!";
    i++
  }
  return copyArray;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4)
  {
      return true;
    }
  }
  return false;
}
function findTheCheese (foods) {
}
