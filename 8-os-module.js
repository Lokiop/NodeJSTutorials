const os = require('os')

//info about user
const user = os.userInfo()
// console.log(user)

//method returns the uptime of the system in seconds
console.log(`The System uptime is : ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS);