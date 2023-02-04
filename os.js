
const os = require("os")

let osObj = os.totalmem()
let osSecObj = os.freemem()

const split = (number) => {
    return number / 1000000000
}

console.log(split(osObj))
console.log(split(osSecObj))

const DATA = [
    {
        name: "Luis",
        lastName: "Moguea"
    },
    {
        name: "Maria",
        lastName: "Moguea"
    },
    {
        name: "Pablo",
        lastName: "Moguea"
    }
]

DATA.map(el => {
    if(el.name === "Luis"){
        console.log(os.totalmem / 1000000000)
    } else if (el.name === "Maria"){
        console.log(os.freemem / 1000000000)
    } else {
        console.log("Not authorized")
    }
})