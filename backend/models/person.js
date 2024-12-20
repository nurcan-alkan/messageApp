const uuid = require('uuid')

class Person {
    constructor(id = uuid.v4(),name) {
        this.id = uuid

        this.name = name
    }

    static create({id,name}) {
        return new Person(id,name)
    }
}

module.exports = Person 