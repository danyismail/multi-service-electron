// let text = '          Peentar Printing Service'
// let arrText = text.split('')
// let result = []

// arrText.forEach(element => {
//     result.push(element.charCodeAt())
// });

// console.log(result)
// // function ab2str(buf) {
// //     return String.fromCharCode.apply(null, new Uint16Array(buf));
// // }

// // console.log(ab2str(result))


// let arr = Buffer.from('          Peentar Printing Service')
// console.log(arr)

// var input = JSON.stringify({printCodes: [ 32,32,32,32,32,32,32,101,101]});
// console.log(input)
// console.log(typeof(input));
// console.log(`=======================================================================`)
// console.log(JSON.parse(input));
// console.log(typeof(input));

let data = {
    "printCodes":[32,32,32,32,101,13,101,13]
}

console.log(typeof(data))