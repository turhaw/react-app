function Edit() {

const tranlate = {
  1: "one",
  2: "two",
  3: "tree",
  4: "four"
}

function print(a){
  for (let key in data){
    if(key == a){
      return data[key]
    }
  }
}

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

function viaPrint(a){
  if(print(a)){
    console.log(print(a))
  }else {
    let bj;
    let numberLenght = a.toString().length;
      switch (numberLenght) {
        case 3:
          let first ,second, bjMnac;
          bj = Math. floor(a/100);
          bj = bj * 100;
          bjMnac = a % 100;
          first = print(bj);
          second = print(bjMnac)
          console.log(first + second)
          break;
        case 2 : return (
          console.log("erku nish")
        )
        default:

      }
  }
}

viaPrint(140)

//print(4)
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


// function translate(a) {
//     switch(a){
//       case 1:
//         return (console.log("kuku"))
//         break;
//       default: console.log("xuy3")
//     }
// }
//
// var x = 1234567;
//
// console.log(x.toString().length)

// translate(2)


// function translate(a){
//   if(a)
//
//
// }

//translate(100)
//
// for(let i=0 ; i< 10; i++){
//   console.log("xuy")
// }

// print(2)

// kuku(8);
  let i = "kku";
  return (
      <div>{i}</div>
  )
}

export default Edit;
