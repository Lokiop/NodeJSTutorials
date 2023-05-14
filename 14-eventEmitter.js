const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`Data received.. User : ${name}.. Id : ${id}`)
})

customEmitter.on('response', () => {
    console.log(`Some random logic`)
})

customEmitter.emit('response', 'john', 34)