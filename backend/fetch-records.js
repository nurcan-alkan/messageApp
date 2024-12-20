const{ userDatabase, personDatabase } = require('./database')
const printTextHistory = require('./lib/print-text-history')
 
async function main() {
    const mert = await personDatabase.findBy('Mert')
    const nurcan = await userDatabase.findBy(Nurcan)

    nurcan.message = (mert)
    personDatabase.update(nurcan)

    printTextHistory(nurcan)

    console.log(userDatabase.findBy())
}

main()