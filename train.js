// Vazifa 
function bizningText(latter, text) {
    let number = 0;
    for(let bizningHarf of text){
          console.log(bizningHarf == latter) // ++ buyerda nichi marta togri va notogri topkanimizni korsatadi step by step 
      if(bizningHarf === latter) {
          // console.log(bizningHarf == latter) // ++ buyerda faqat nichi marta true topkanimizni korsatadi 
       number++
      }
    }
    return number
    }
    console.log(bizningText("e","diference"))




// callback Functions

console.log("Jakh Ma maslahat beradi")

const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20 -30
  "uzingizga ishlashingizni boshlang", // 30 - 40
  "siz kuchli bolgan narsala qiling", // 40 - 50
  "yoshlarga investitsiya qiling", // 50 - 60
  "endi dam oling, balki foydasi yoq", // 60
]

function maslahatBering (age, callback) {
if(typeof age !== "number") callback("insert a number","null")
    else if (age <= 20) callback(null, list[0])
    else if (age > 20 && age <= 30) callback(null, list[1])
    else if (age > 30 && age <= 40) callback(null, list[2])
    else if (age > 40 && age <= 50) callback(null, list[3])
    else if (age > 50 && age <= 60)  callback(null, list[4])
    else{
    callback(null, list[5])
}
}

maslahatBering(50, function (err, data) {
    if(err) {
        console.log("Error", err)
    }else{
        console.log("Result:", data)
    }
})


console.log("================================")

// Async functions

async function maslahatBering(a) {
    if(typeof a !== "number") throw new Error("Number yozing",null)
    else if (a <= 20) return list[0]
    else if (a > 20 && a <= 30) return list[1]
    else if (a > 30 && a <= 40) return list[2]
    else if (a > 40 && a <= 50) return list[3]
    else if (a > 50 && a <= 60) return list[4]
    else {
    //  return list[5]
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (list[5])
        },5000)
    })
    }
  }


// maslahatBering(33,(err, data) => {
//   if (err) {
//     console.log("Error", err)
//   }else{
//     console.log("Javob",data)
//   }
// })

// //   then()  ---  catch()

// console.log("Passed here 1")

// maslahatBering(76)
// .then((data) => {
//   console.log("Result", data)
// })
// .catch((err) => {
//   console.log('Error', err)
// })

// console.log("Passed here 2")


console.log("Passed here 1")

async function run () {
  let javob = await maslahatBering(20)
  console.log(javob)
  javob = await maslahatBering(67)
  console.log(javob)
  javob = await maslahatBering(33)
  console.log(javob)
};
run()
console.log("Passed here 2")