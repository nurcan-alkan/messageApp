const BaseDatabase = require('./base-database')
const User = require('../models/user')

class UserDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new UserDatabase(User)