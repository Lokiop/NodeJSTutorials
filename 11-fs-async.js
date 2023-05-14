const fs = require('fs')

//In async we require callback
fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result
        fs.writeFile(
            './content/result-async.txt',
            `Here is the Result: ${first}, ${second}`,
            { flag: 'a' }, (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log(result)
            })
    })
})