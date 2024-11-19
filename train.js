console.log("Jakh Ma maslahat beradi")

const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20 -30
  "uzingizga ishlashingizni boshlang", // 30 - 40
  "siz kuchli bolgan narsala qiling", // 40 - 50
  "yoshlarga investitsiya qiling", // 50 - 60
  "endi dam oling, balki foydasi yoq", // 60
]

function maslahatBering (a, callback) {
if(typeof a !== "number") callback("insert a number","null")
    else if (a <= 20) callback(null, list[0])
    else if (a > 20 && a <= 30) callback(null, list[1])
    else if (a > 30 && a <= 40) callback(null, list[2])
    else if (a > 40 && a <= 50) callback(null, list[3])
    else if (a > 50 && a <= 60)  callback(null, list[4])
    else{
    callback(null, list[5])
}
}

maslahatBering(26, function (err, data) {
    if(err) {
        console.log("Error", err)
    }else{
        console.log("Result:", data)
    }
})