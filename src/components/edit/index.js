function Edit() {

const tranlate = {
  1: "one",
  2: "two",
  3: "tree",
  4: "four"
}

function barer(a){
  for (let key in tranlate){
    if (key == a) {
      console.log(tranlate[key])
    }
  }
}

barer(1)
// function translate (i){
//   switch (i) {
//     case 1: console.log("one")
//       break;
//     case 2: console.log("two")
//       break;
//     case i%100 === 0: console.log("haryur")
//       break;
//   }
// }

const data = {
    1: "один",
    2: "два",
    3:"три",
    4:"четыре",
    5:"пять",
    6:"шесть",
    7:"семь",
    8:"восемь",
    9:"девять",
    10:"десять",
    11:"одиннацать",
    12:"двеннадцать",
    13:"тренадцать",
    14:"четырнадцать",
    15:"пятнадцать",
    16:"шестнадцать",
    17:"семнадцать",
    18:"восемнадцать",
    19:"девятнадцать",
    20:"двадцать",
    30:"тридцать",
    40:"сорок",
    50:"пятьдесят",
    60:"шестьдесят",
    70:"семьдесят",
    80:"восемьдесят",
    90:"девяносто",
    100:"сто",
    200:"двести",
    300:"триста",
    400:"четыреста",
    500:"пятьсот",
    600:"шестьсот",
    700:"семьсот",
    800:"восемьсот",
    900:"девятьсот",
    1000:"тысяча",

}
function translate(a) {


}

// function translate(a){
//   if(a)
//
//
// }

//translate(100)

for(let i=0 ; i< 10; i++){
  console.log("xuy")
}


// kuku(8);
  let i = "kku";
  return (
      <div>{i}</div>
  )
}

export default Edit;
