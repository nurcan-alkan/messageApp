const Text = require('./text')
const uuid = require('uuid')

class User {
    constructor(id = uuid.v4(),name,texts = []) {
        this.id = uuid

        this.name = name
        this.texts = texts
    }

    message(person) {
        const message = new Message(person,this)

        this.messages.push(message)
        return message
    }

    static create({id,name,texts}) {
        return new User(id,name,texts)
    }
}

module.exports = User