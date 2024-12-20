const User = require('./models/user')
const Person = require('./models/person')
const userDatabase = require('./database/user-database')
const PersonDatabase = require('./database/person-database')

const printTextHistory = require('./lib/print-text-history')
const personDatabase = require('./database/person-database')

const nurcan = User.create({name:'Nurcan'})
const mert = Person.create({name:'Mert'})

async function main() {
    try {
        await userDatabase.save([nurcan,mert])

        await personDatabase.save([mert])

        const users = userDatabase.load()
        users.forEach(printTextHistory)
    } catch (e) {
        return console.log(e)
    }
}

main()