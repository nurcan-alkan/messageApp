function printText(text) {
    console.log(`${text.user.person}`)
}

function printTextHistory(user) {
    if(user.text.length == 0)
        return console.log(`${(user.name)} has no text yet.`)
    user.text.forEach(printText)
}

module.exports = printTextHistory
