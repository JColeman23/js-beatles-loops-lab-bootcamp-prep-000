// add solution here
function theBeatlesPlay(arrayOfMusicians, arrayOfInsturments){
  var array = []
  for (var i=0; i<arrayOfMusicians.length; i++){
    var string = arrayOfMusicians[i] + ' plays ' + arrayOfInsturments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(array2){
  array2 =  [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]
var i=0
while (array2[i]){
  array3 = array2[i].concat('!!!')
  i++
}
return array3
}

